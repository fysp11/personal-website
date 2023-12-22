import NavBar from "@/components/layouts/nav/navbar"

import "@/styles/globals.css"

import type { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"
import Container from "@/components/ui/Container"
import Footer from "@/components/layouts/footer"
import Providers from "@/components/providers"

export default function RootLayout({ children }: PropsWithChildren) {
  const resp = {
    margins: cn(
      "px-[14px]", // center
      // "px-5", // center
      // "p-5 lg:px-8" // padding
      "w-full md:max-w-3xl" // max width
    )
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NavBar />
          <Container className={cn(resp.margins)}>{children}</Container>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
