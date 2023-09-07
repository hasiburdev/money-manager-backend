import bcrypt from "bcrypt";
import { Env } from "./env";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, Env.BCRYPT_SALT_ROUND);
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};
