import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // Useful when deploying to environments that don't use the default image optimization.
  },
  output: 'export',
  /* config options here */
};

export default nextConfig;
