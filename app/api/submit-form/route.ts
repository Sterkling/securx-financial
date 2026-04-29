import { NextRequest, NextResponse } from "next/server";
import { insertSubmission } from "@/lib/database";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      formType,
      name,
      email,
      phone,
      businessName,
      businessType,
      message,
    } = body;

    // Basic validation
    if (!formType) {
      return NextResponse.json(
        { error: "Form type is required" },
        { status: 400 }
      );
    }

    // Get client info
    const ipAddress =
      request.headers.get("x-forwarded-for") || request.ip || "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    // Save to database
    insertSubmission({
      formType,
      name,
      email,
      phone,
      businessName,
      businessType,
      message,
      ipAddress,
      userAgent,
    });

    // TODO: Send email notifications here
    // - Email to SecurX team
    // - Auto-response email to submitter

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "An error occurred. Please try again." },
      { status: 500 }
    );
  }
}
