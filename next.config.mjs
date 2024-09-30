/** @type {import('next').NextConfig} */
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
    reactStrictMode: false,
    experimental: {
      optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
      taint: true,
    }
}

export default nextConfig;
