import { NextResponse } from "next/server";
import { troubleshootingData } from "@/data/troubleshooting";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const issue = searchParams.get("issue");

  if (issue) {
    const match = troubleshootingData.find(
      (item) => item.issueKey.toLowerCase() === issue.toLowerCase()
    );
    if (match) {
      return NextResponse.json({ success: true, diagnosis: match });
    }
  }

  return NextResponse.json({
    success: true,
    allTroubleshooting: troubleshootingData,
  });
}
