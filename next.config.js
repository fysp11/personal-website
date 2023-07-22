/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "standalone",
  output: "export",
  distDir: "dist",
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**"
      }
    ]
  }
}

module.exports = nextConfig
