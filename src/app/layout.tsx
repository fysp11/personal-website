import NavBar from "@/components/layouts/nav/navbar"

import "@/styles/globals.css"

import type { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"
import Container from "@/components/ui/Container"
import Footer from "@/components/layouts/footer"
import Analytics from "@/components/wrappers/analytics"
import Providers from "@/components/wrappers/providers"

export default function RootLayout({ children }: PropsWithChildren) {
  const styles = {
    container: cn("px-[14px]", "w-full sm:max-w-xl md:max-w-2xl")
  }
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <Container className={styles.container}>{children}</Container>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
