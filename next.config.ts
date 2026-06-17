import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [40, 60, 75, 100],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
  experimental: {
    inlineCss: true,
  },
};

export default nextConfig;
