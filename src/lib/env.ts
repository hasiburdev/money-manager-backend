export const Env = {
  MONGODB_URI: process.env.MONGODB_URI as string,
  NODE_ENV: process.env.NODE_ENV as string,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as unknown as number,
  JWT_SECRET: process.env.JWT_SECRET as string,
  JWT_ISSUER: process.env.JWT_ISSUER as string,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION as string,
};

export type EnvKey = keyof typeof Env;
