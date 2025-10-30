import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ department: string }> }
) {
  try {
    const { department } = await params;

    // Simulate the department-specific responses from original Fastify API
    const departmentMessages = {
      department1: "department1!",
      department2: "department2!",
      department3: "department3!",
      department4: "department4!",
      department5: "department5!",
      department6: "department6!",
      department7: "department7!",
      department8: "department8!",
    };

    const message =
      departmentMessages[department as keyof typeof departmentMessages] ||
      "Department not found!";

    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
