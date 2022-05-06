const withImages = require('next-images')


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}


module.exports = withImages({
  ...nextConfig,
  webpack(config, _options) {
    return config
  }
})
