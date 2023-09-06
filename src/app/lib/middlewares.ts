import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./jwt-helper";

export const checkCookieAuth = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("token");
    if (token) {
      const payload = await verifyToken(token["value"]);
      const requestHeaders = new Headers(req.headers);
      if (payload["email"]) {
        requestHeaders.set("email", payload["email"] as string);
      }
      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } else {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
};
