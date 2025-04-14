import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/portfolio" : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/portfolio" : "",
};

export default nextConfig;
