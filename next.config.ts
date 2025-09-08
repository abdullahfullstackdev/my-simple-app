import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Skip ESLint during production builds (e.g., on Vercel)
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
