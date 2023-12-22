import type { PropsWithChildren, ReactNode } from "react"

import { cn } from "@/lib/utils"

interface ContainerProps extends PropsWithChildren {
  className?: string
}
export default function Container({ children, className }: ContainerProps) {
  const baseClasses = "mx-auto px-4"

  const containerClass = cn(baseClasses, className)
  return <main className={containerClass}>{children}</main>
}
