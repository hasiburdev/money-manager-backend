import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (req: NextRequest, res: NextResponse) => {
  cookies().delete("token");
  return NextResponse.json({
    message: "Logout Successful!",
    status: true,
  });
};
