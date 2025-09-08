import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
  // Allow all hosts for Replit proxy compatibility
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  // Configure dev server to accept all hosts
  ...(process.env.NODE_ENV === 'development' && {
    devIndicators: {
      buildActivity: false,
    },
  }),
};

export default nextConfig;
