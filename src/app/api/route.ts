import { NextResponse } from "next/server";
import { incrementPostViews } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { title } = await request.json();
    await incrementPostViews(title);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to increment views" },
      { status: 500 }
    );
  }
}
