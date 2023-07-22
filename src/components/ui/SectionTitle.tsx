import type { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

export default function SectionTitle({ children }: PropsWithChildren) {
  const className = cn("text-xl mt-3 mb-4")

  return <div className={className}>{children}</div>
}
