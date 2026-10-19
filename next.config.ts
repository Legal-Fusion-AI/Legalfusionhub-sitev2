import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/portal",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
