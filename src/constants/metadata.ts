import { Metadata } from "next"

export const FYSP_DEV_METADATA: Metadata = {
  title: "Fysp.Dev",
  description: "Tech savy and creative Software Engineer.",
  authors: [{ name: "fysp11", url: "https://github.com/fysp11" }],
  category: "Living CV",
  keywords: ["web3", "climate", "tech", "ai", "future", "love", "brazil"],
  metadataBase: new URL("https://fysp.dev"),
  alternates: {
    canonical: "https://fysp.dev"
  },
  robots: "index, follow",
  creator: "Felipe Mendonça",
  publisher: "Felipe Mendonça",
  generator: "Next.js",
  openGraph: {
    images: ["/images/fysp_aigen1.jpg"],
    type: "website",
    locale: "en_US",
    url: "https://fysp.dev",
    siteName: "fysp.dev",
    title: "Fysp.Dev",
    description: "Tech savy and creative Software Engineer.",
    countryName: "Netherlands",
    emails: ["fysp@fysp.dev"]
  },
  icons: [
    { rel: "icon", url: "/icons/favicon.ico" },
    {
      url: "/icons/icon-72x72.png",
      sizes: "72x72",
      type: "image/png"
    },
    {
      url: "/icons/icon-96x96.png",
      sizes: "96x96",
      type: "image/png"
    },
    {
      url: "/icons/icon-128x128.png",
      sizes: "128x128",
      type: "image/png"
    },
    {
      url: "/icons/icon-144x144.png",
      sizes: "144x144",
      type: "image/png"
    },
    {
      url: "/icons/icon-152x152.png",
      sizes: "152x152",
      type: "image/png"
    },
    {
      url: "/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      url: "/icons/icon-256x256.png",
      sizes: "256x256",
      type: "image/png"
    },
    {
      url: "/icons/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      url: "/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ],
  manifest: "/manifest.json",
  twitter: {
    site: "https://twitter.com/fysp",
    creator: "@fysp",
    card: "summary",
    images: [
      {
        url: "https://fysp.eth.limo/images/fysp_aigen1.jpg",
        alt: "fysp.dev"
      }
    ]
  }
}
