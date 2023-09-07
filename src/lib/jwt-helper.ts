import { SignJWT, jwtVerify } from "jose";
import { Env } from "./env";

export const createToken = async (email: string) => {
  const secret = new TextEncoder().encode(Env.JWT_SECRET);
  const issuer = Env.JWT_ISSUER;
  const expiration = Env.JWT_EXPIRATION;

  return await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(issuer)
    .setExpirationTime(expiration)
    .sign(secret);
};

export const verifyToken = async (token: string) => {
  const secret = new TextEncoder().encode(Env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
};
