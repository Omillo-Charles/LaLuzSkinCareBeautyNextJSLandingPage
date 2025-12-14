import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: false,
  },
  images: {
    domains: ["via.placeholder.com"],
  },
};

export default nextConfig;
