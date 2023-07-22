const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**'
      }
    ]
  },
  experimental: {
    serverActions: true
  }
}

const sentryUserConfig = {
  silent: true,
  org: process.env.NEXT_PUBLIC_ORG,
  project: process.env.NEXT_PUBLIC_PROJECT,
  urlPrefix: '~/_next',
  include: '.next',
  ignore: ['node_modules']
}

const sentryWebpackPluginOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  disableServerWebpackPlugin: true,
  disableClientWebpackPlugin: true
}

const sentryConfig = withSentryConfig(
  nextConfig,
  sentryUserConfig,
  sentryWebpackPluginOptions
)

module.exports = sentryConfig
