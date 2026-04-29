import { NextRequest, NextResponse } from "next/server";
import {
  getAllSubmissions,
  getSubmissionsByType,
  getSubmissionsByBusinessType,
  getSubmissionStats,
} from "@/lib/database";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const formType = searchParams.get("formType");
    const businessType = searchParams.get("businessType");
    const format = searchParams.get("format");

    let submissions;

    if (formType) {
      submissions = getSubmissionsByType(formType);
    } else if (businessType) {
      submissions = getSubmissionsByBusinessType(businessType);
    } else {
      submissions = getAllSubmissions();
    }

    // CSV export
    if (format === "csv") {
      const csv = convertToCSV(submissions);
      return new NextResponse(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": `attachment; filename="submissions-${new Date().toISOString().split("T")[0]}.csv"`,
        },
      });
    }

    // Get stats
    const stats = getSubmissionStats();

    return NextResponse.json({ submissions, stats });
  } catch (error) {
    console.error("Submissions fetch error:", error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}

function convertToCSV(data: any[]): string {
  if (!data || data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const csvHeaders = headers.join(",");

  const csvRows = data.map((row) => {
    return headers
      .map((header) => {
        const value = row[header];
        // Escape quotes and wrap in quotes if contains comma
        const escaped = String(value).replace(/"/g, '""');
        return `"${escaped}"`;
      })
      .join(",");
  });

  return [csvHeaders, ...csvRows].join("\n");
}
