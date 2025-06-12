import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/:path*`, // now dynamic https://linkroot-production.up.railway.app/
      },
    ];
  },
};

export default nextConfig;