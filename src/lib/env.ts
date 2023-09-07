const Env = {
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
};

type EnvKey = keyof typeof Env;

if (!Env.MONGODB_URI) throw new Error(`MONGODB_URI variable not loaded!`);
if (!Env.NODE_ENV) throw new Error(`NODE_ENV variable not loaded!`);
if (!Env.BCRYPT_SALT_ROUND)
  throw new Error(`BCRYPT_SALT_ROUND variable not loaded!`);

export const MONGODB_URI = Env.MONGODB_URI;
export const NODE_ENV = Env.NODE_ENV;
export const BCRYPT_SALT_ROUND = Number(Env.BCRYPT_SALT_ROUND) || 8;

export const ENV = {
  MONGODB_URI,
  NODE_ENV,
  BCRYPT_SALT_ROUND,
};
