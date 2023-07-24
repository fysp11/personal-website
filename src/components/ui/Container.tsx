import type { PropsWithChildren, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface ContainerProps extends PropsWithChildren {
  className?: string
}
export default function Container({ children, className }: ContainerProps) {
  const baseClasses = "mx-auto px-4 sm:px-6 lg:px-8"
  const mdClass = "md:max-w-3xl"

  const containerClass = cn(baseClasses, mdClass, className)
  return <main className={containerClass}>{children}</main>
}
