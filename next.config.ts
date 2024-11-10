
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'images.pexels.com',
    //     port: '',
    //     pathname: '/my-bucket/**',
    //   },
    // ],
    domains: [
      "images.pexels.com"
    ],
  },
};

export default nextConfig;
