/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
