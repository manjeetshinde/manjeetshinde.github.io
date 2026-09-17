import type { NextConfig } from "next";

// GitHub Pages user site: served from the root of manjeetshinde.github.io,
// so no basePath/assetPrefix is set. Static export only — no server features.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
