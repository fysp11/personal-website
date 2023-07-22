import type { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

export default function BioYear({ children }: PropsWithChildren) {
  const className = cn("font-bold", "mr-4")

  return <div className={className}>{children}</div>
}
