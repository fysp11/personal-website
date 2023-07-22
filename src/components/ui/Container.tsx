import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export default function Container({ children }: { children: ReactNode }) {
  const baseClasses = "mx-auto px-4 sm:px-6 lg:px-8"
  const mdClass = "md:max-w-3xl"

  const className = cn(baseClasses, mdClass)
  return <div className={className}>{children}</div>
}
