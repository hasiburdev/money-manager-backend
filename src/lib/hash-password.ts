import bcrypt from "bcrypt";
import { BCRYPT_SALT_ROUND } from "./env";

export const hashPassword = (password: string) => {
  return bcrypt.hash(password, BCRYPT_SALT_ROUND);
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compare(password, hashedPassword);
};
