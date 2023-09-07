import { connectDB } from "@/lib/connect-db";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {};

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  const amount = body["amount"];
  const uid = body["uid"];
  const currency = body["currency"];

  //   if()

  try {
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          message: "Something went wrong!",
          code: "INTERNAL_SERVER_ERROR",
        },
      },
      { status: 500 }
    );
  }
};
