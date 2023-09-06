import { createUser } from "@/services/user.service";
import { NextResponse } from "next/server";
import {
  UserRegistrationSchema,
  UserRegistrationSchemaType,
} from "@/validators/user-registration.validator";

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  try {
    const userInput = UserRegistrationSchema.parse(body);
    try {
      const user = await createUser(userInput);
      return NextResponse.json(
        {
          message: "User created succesfully!",
          data: user,
        },
        {
          status: 201,
        }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        {
          error: {
            code: "INTERNAL_SERVER_ERROR",
            message: "Internal Server Error!",
          },
        },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error: {
          code: "BAD_REQUEST",
          message: "Bad Request",
          error: error,
        },
      },
      {
        status: 400,
      }
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
