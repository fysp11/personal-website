/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeImages: false,
  images: {
    loader: 'custom'
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

module.exports = nextConfig
