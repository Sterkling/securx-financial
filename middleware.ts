import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  // Only protect admin routes
  if (
    request.nextUrl.pathname.startsWith("/admin") ||
    request.nextUrl.pathname.startsWith("/api/admin")
  ) {
    // Allow login endpoint
    if (request.nextUrl.pathname === "/api/admin/login") {
      return NextResponse.next();
    }

    // Check for admin session cookie
    const token = request.cookies.get("admin_session")?.value;

    if (!token) {
      // Redirect to login or return unauthorized
      if (request.nextUrl.pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      // Verify JWT
      const secret = new TextEncoder().encode(
        process.env.JWT_SECRET || "change-this-secret"
      );
      await jwtVerify(token, secret);

      return NextResponse.next();
    } catch (error) {
      // Invalid token
      if (request.nextUrl.pathname.startsWith("/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
