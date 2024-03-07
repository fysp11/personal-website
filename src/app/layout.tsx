import NavBar from "@/components/layouts/nav/navbar"

import "@/styles/globals.css"

import type { PropsWithChildren } from "react"

import Container from "@/components/ui/Container"
import Footer from "@/components/layouts/footer"
import Analytics from "@/components/wrappers/analytics"
import Providers from "@/components/wrappers/providers"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NavBar />
          <Container className="w-full px-[14px] sm:max-w-xl md:max-w-2xl">
            {children}
          </Container>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
