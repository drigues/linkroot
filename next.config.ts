import type { NextConfig } from "next";

// Default fallback to avoid build-time crash
const safeApiUrl = process.env.NEXT_PUBLIC_API_URL || "https://placeholder.local";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${safeApiUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
