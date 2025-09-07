import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only use static export for production builds
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    assetPrefix: '/mini.skirt.begum',
    basePath: '/mini.skirt.begum',
  }),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
