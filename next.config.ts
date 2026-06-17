import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [60, 75, 100],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 480],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
