import { NextRequest, NextResponse } from "next/server";

export const POST = (req: NextRequest, res: NextResponse) => {
  return NextResponse.json({
    message: "User created successfully!",
  });
};
