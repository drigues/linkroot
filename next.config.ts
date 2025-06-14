import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://linkroot-production.up.railway.app/:path*",
      },
    ];
  },
  webpack(config) {
    config.snapshot = { managedPaths: [] }; // ✅ fixes .updateWithBuffer crash
    return config;
  },
};

export default nextConfig;
