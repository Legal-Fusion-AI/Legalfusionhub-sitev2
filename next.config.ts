import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
