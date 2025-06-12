import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://linkroot-production.up.railway.app/:path*", // HARDCODED AND STABLE
      },
    ];
  },
};

export default nextConfig;
