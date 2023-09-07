/** @type {import('next').NextConfig} */

//Check all env variables
const envVariables = {
  MONGODB_URI: process.env.MONGODB_URI,
  NODE_ENV: process.env.NODE_ENV,
  BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_ISSUER: process.env.JWT_ISSUER,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION,
};

for (let key in envVariables) {
  if (!envVariables[key]) {
    throw new Error(`${key} - environment variable not found!`);
  }
}

const nextConfig = {};

module.exports = nextConfig;
