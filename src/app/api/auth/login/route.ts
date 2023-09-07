import { addTokenInCookie } from "@/lib/token-cookie";
import { loginUser } from "@/services/user.service";
import { UserLoginSchema } from "@/validators/login.validator";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  try {
    const userInput = UserLoginSchema.parse(body);

    try {
      const user = await loginUser(userInput.email, userInput.password);
      const cookie = await addTokenInCookie(userInput.email);

      return NextResponse.json(
        {
          message: "Login Successful!",
          data: user,
        },
        {
          status: 200,
          headers: { ...cookie },
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

export const OPTIONS = async (req: NextRequest) => {
  return NextResponse.json({}, { status: 200 });
};
