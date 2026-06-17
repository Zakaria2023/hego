import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
  },
  images: {
    qualities: [60, 75, 100],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
