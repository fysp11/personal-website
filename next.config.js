const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const ContentSecurityPolicy = `
  default-src *;
  style-src 'self' 'unsafe-inline';
  style-src-elem 'self' https://fonts.googleapis.com/ 'unsafe-inline';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  font-src 'self' https://fonts.gstatic.com/ 'unsafe-inline';
  object-src 'none';
`

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin'
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  }
]

/** @type {import('next').NextConfig} */
let nextConfig = {
  reactStrictMode: true,
  dynamicAssetPrefix: true,
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

nextConfig = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
})

module.exports = withBundleAnalyzer({
  ...nextConfig,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        '@chakra-ui': {
          test: /[\\/]node_modules[\\/](@chakra-ui)[\\/]/,
          name: '@chakra-ui',
          priority: 10,
          reuseExistingChunk: false,
        },
      };
    }

    return config;
  }
})
