import type { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

export default function SectionTitle({ children }: PropsWithChildren) {
  const className = cn("mb-4 mt-3 text-xl")

  return <div className={className}>{children}</div>
}
