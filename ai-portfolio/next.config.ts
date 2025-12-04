import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/dentonya_portofolio',
  assetPrefix: '/dentonya_portofolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
