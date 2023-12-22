"use client"

import React from "react"
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "nextjs-google-analytics"

export default function Analytics() {
  return (
    <>
      <SpeedInsights />
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
      <GoogleAnalytics trackPageViews defaultConsent="denied" />
    </>
  )
}
