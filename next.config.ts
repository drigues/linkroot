import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

if (!apiUrl) {
  console.warn("⚠️ Warning: NEXT_PUBLIC_API_URL is not defined! API rewrites will be skipped.");
}

const nextConfig: NextConfig = {
  async rewrites() {
    if (!apiUrl) {
      return []; // Prevents crash
    }
    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`, // proxy to your FastAPI backend
      },
    ];
  },
};

export default nextConfig;
