import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://linkroot-production.up.railway.app/:path*", // ✅ Hardcoded to unblock
      },
    ];
  },
};

export default nextConfig;
