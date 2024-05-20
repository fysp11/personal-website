"use client"

import React from "react"
import Script from "next/script"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "nextjs-google-analytics"

export default function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!measurementId) {
    console.error("Google Analytics measurement ID is not defined")
    return null
  }

  return (
    <>
      <SpeedInsights />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${measurementId}');
        `}
      </Script>
      <GoogleAnalytics
        debugMode={process.env.NODE_ENV === "development"}
        strategy="afterInteractive"
        gaMeasurementId={measurementId}
        trackPageViews
        defaultConsent="denied"
      />
    </>
  )
}
