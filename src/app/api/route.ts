import { NextRequest, NextResponse } from "next/server";

// GET /api - Main endpoint
export async function GET(request: NextRequest) {
  try {
    const message = "Hello, Next.js API!";
    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
