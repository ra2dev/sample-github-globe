import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // we run eslint as standalone step
    ignoreDuringBuilds: true,
  },
  typescript: {
    // we execute ts-checks as standalone step
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
