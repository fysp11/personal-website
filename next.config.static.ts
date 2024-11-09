import type { NextConfig } from "next"

export default {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  basePath: process.env.APPLICATION_BASE_PATH,
  images: {
    unoptimized: true
  }
} as NextConfig
