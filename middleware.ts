import { checkCookieAuth } from "@/app/lib/middlewares";
import { NextRequest } from "next/server";

export const middleware = async (req: NextRequest) => {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await checkCookieAuth(req);
  }
};
