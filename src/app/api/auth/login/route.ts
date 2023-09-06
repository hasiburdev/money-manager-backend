import { addTokenInCookie } from "@/app/lib/token-cookie";
import { loginUser } from "@/services/user.service";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  try {
    const loginSchema = z.object({
      email: z.string().email().trim(),
      password: z.string().trim(),
    });
    const userInput = loginSchema.parse(body);

    try {
      const dbUser = await loginUser(userInput.email, userInput.password);
      const cookie = await addTokenInCookie(userInput.email);

      return NextResponse.json(
        {
          message: "Login Successful!",
          data: dbUser,
        },
        {
          status: 200,
          headers: cookie,
        }
      );
    } catch (error) {
      return NextResponse.json(
        {
          message: "Login faild!",
        },
        {
          status: 403,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Validation Error!",
        error: error,
      },
      { status: 400 }
    );
  }
};

export async function OPTIONS(request: Request) {
  const allowedOrigin = request.headers.get("origin");
  const response = new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": allowedOrigin || "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });

  return response;
}
