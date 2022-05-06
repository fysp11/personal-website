const withImages = require('next-images')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: 'https://fysp.on.fleek.co',
  dynamicAssetPrefix: true,
  images: {
    disableStaticImages: true
  }
}


module.exports = withImages({
  ...nextConfig,
  webpack(config, _options) {
    return config
  }
})
