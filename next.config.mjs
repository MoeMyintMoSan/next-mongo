/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
};



export default nextConfig;
