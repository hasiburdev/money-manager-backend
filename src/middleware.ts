// import { checkCookieAuth } from "@/lib/middlewares";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const res = NextResponse.next();
  const origin = req.headers.get("origin");
  res.headers.append("Access-Control-Allow-Origin", origin || "*");
  res.headers.append("Access-Control-Allow-Credentials", "true");
  res.headers.append(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  res.headers.append(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // if (req.nextUrl.pathname.startsWith("/dashboard")) {
  //   return await checkCookieAuth(req);
  // }

  return res;
};

export const config = {
  matcher: "/api/:path*",
};
