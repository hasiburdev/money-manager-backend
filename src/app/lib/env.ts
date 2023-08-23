const Env = {
  MONGODB_URI: process.env.MONGODB_URI,
};

type EnvKey = keyof typeof Env;

if (!Env.MONGODB_URI) {
  throw new Error(`MONGODB_URI variable not loaded!`);
}

export const MONGODB_URI = Env.MONGODB_URI;
