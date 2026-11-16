import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/tecnologias/cromatic",
        destination: "/tecnologias/medical-san",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
