import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' ${isDev ? '' : 'https://vercel.live https://va.vercel-scripts.com'};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https:;
  font-src 'self' data:;
  connect-src 'self' https://vitals.vercel-insights.com https://api.vercel.com ${isDev ? 'ws: wss:' : ''};
  media-src 'self';
  frame-ancestors ${isDev ? "'self' https://vercel.com" : "'none'"};
`;

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  },
  {
    key: 'X-Frame-Options',
    value: isDev ? 'SAMEORIGIN' : 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['steedoo.group', 'steedoogroup.com'],
  },
  
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  
  async redirects() {
    return [
      // Redirect steedoogroup.com to steedoo.group (canonical)
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'steedoogroup.com',
          },
        ],
        destination: 'https://steedoo.group/:path*',
        permanent: true,
      },
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.steedoo.group',
          },
        ],
        destination: 'https://steedoo.group/:path*',
        permanent: true,
      },
    ];
  },
  
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;