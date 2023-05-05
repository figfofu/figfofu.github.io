/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "export",
  distDir: "dist",
  assetPrefix: isProd ? "/binh-profile/dist" : undefined,
};

module.exports = nextConfig;
