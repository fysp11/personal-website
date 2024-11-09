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
const isGitHubActions = process.env.GITHUB_ACTIONS || false

let basePath = ""
if (isGitHubActions) {
  const repo = (process.env.GITHUB_REPOSITORY, "/").split("/")[1]
  basePath = `/${repo}`
}

module.exports = {
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  basePath: basePath !== "/" ? basePath : undefined,
  assetPrefix: basePath, // Ensure static assets use the same prefix
  images: {
    unoptimized: true
  }
}
