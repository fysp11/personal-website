const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'https://fysp.on.fleek.co',
  dynamicAssetPrefix: true,
}

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
