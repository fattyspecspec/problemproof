import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    reactRoot: true, // Enables React 18 debugging
  },
};

export default nextConfig;

