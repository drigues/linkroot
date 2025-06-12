import type { NextConfig } from "next";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const nextConfig: NextConfig = {
  async rewrites() {
    // Vercel builds crash silently if the env var is undefined or empty
    if (!apiUrl || !apiUrl.startsWith("http")) {
      console.warn("⚠️ NEXT_PUBLIC_API_URL is missing or invalid. Skipping rewrites.");
      return []; // Return empty array instead of undefined
    }

    return [
      {
        source: "/api/:path*",
        destination: `${apiUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;