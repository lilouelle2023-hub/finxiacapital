import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'customer-assets.emergentagent.com',
      },
    ],
  },
  trailingSlash: true,
  // Force rebuild trigger - 2026-06-20
  // Note: Next.js i18n routing is not compatible with output: 'export'
  // We use manual locale detection via URL pathname in LanguageContext
};

export default nextConfig;
