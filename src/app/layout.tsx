"use client"

import { M_PLUS_Rounded_1c } from "next/font/google"
import Head from "next/head"
import { GoogleAnalytics } from "nextjs-google-analytics"

import NavBar from "@/components/layouts/nav/navbar"

import "@/styles/globals.css"

import type { PropsWithChildren } from "react"
import Script from "next/script"

import Container from "@/components/ui/Container"
import Footer from "@/components/layouts/footer"
import Providers from "@/components/providers"

const fontFamily = M_PLUS_Rounded_1c({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap"
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={fontFamily.className} suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <body>
        <Providers>
          <div className="mx-auto max-w-3xl flex-col">
            <NavBar />
            <Container>{children}</Container>
            <Footer />
          </div>
        </Providers>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
        </Script>
        <GoogleAnalytics debugMode={true} trackPageViews />
      </body>
    </html>
  )
}
