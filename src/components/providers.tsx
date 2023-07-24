"use client"

import Script from "next/script"
import { ThemeProvider } from "next-themes"
import { GoogleAnalytics } from "nextjs-google-analytics"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </QueryClientProvider>
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
