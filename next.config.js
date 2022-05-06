const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeImages: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  exportPathMap: async function (
    _defaultPathMap,
    { _dev, _dir, _outDir, _distDir, _buildId }
  ) {
    return {
      "/": { page: "/" },
      "/works": { page: "/works" },
    };
  }
}

module.exports = module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],
  nextConfig
])
