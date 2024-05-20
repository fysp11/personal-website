"use client"

import { ThemeProvider } from "next-themes"

import ConsentWrapper from "./ConsentWrapper"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <ConsentWrapper />
      {children}
    </ThemeProvider>
  )
}
