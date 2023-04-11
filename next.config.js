const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const ContentSecurityPolicy = `
  default-src * data:;
  style-src 'self' 'unsafe-inline';
  style-src-elem 'self' https://fonts.googleapis.com/ 'unsafe-inline';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vitals.vercel-insights.com/;
  font-src 'self' https://fonts.gstatic.com/ 'unsafe-inline';
  object-src 'none';
`

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on"
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload"
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block"
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN"
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()"
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff"
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin"
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\s{2,}/g, " ").trim()
  }
]

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
})
