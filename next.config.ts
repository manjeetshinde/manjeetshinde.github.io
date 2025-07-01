import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const repoName = "manjeetshinde.github.io";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? `/${repoName}` : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProduction ? `/${repoName}` : "",
};

export default nextConfig;
