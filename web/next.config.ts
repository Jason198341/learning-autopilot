import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/learning-autopilot',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
