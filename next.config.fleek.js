/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  basePath: process.env.APPLICATION_BASE_PATH,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
