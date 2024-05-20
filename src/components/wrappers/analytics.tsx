"use client"

import React from "react"
import { GoogleAnalytics } from "@next/third-parties/google"

export default function Analytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  if (!measurementId) {
    console.error("Google Analytics measurement ID is not defined")
    return null
  }

  return (
    <>
      <GoogleAnalytics gaId={measurementId} />
    </>
  )
}
