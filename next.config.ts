import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://linkroot-api.up.railway.app/:path*", // string literal
      },
    ];
  },
};

export default nextConfig;
