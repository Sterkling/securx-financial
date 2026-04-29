import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { scrypt, timingSafeEqual } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

async function verifyPassword(
  password: string,
  storedHash: string
): Promise<boolean> {
  try {
    const [salt, hash] = storedHash.split(":");
    const derivedKey = (await scryptAsync(password, salt, 64)) as Buffer;
    const storedKey = Buffer.from(hash, "hex");
    return timingSafeEqual(derivedKey, storedKey);
  } catch (error) {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    const validUsername = process.env.ADMIN_USERNAME || "admin";
    const validPasswordHash = process.env.ADMIN_PASSWORD_HASH;

    if (!validPasswordHash) {
      return NextResponse.json(
        { error: "Admin credentials not configured" },
        { status: 500 }
      );
    }

    // Verify username and password
    if (
      username !== validUsername ||
      !(await verifyPassword(password, validPasswordHash))
    ) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create JWT
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || "change-this-secret"
    );
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(secret);

    // Set httpOnly cookie
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400, // 24 hours
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}
