import { SignJWT, jwtVerify } from "jose";

export const createToken = async (email: string) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const issuer = process.env.JWT_ISSUER || "";
  const expiration = process.env.JWT_EXPIRATION || "";

  return await new SignJWT({ email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer(issuer)
    .setExpirationTime(expiration)
    .sign(secret);
};

export const verifyToken = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const decoded = await jwtVerify(token, secret);
  return decoded["payload"];
};
