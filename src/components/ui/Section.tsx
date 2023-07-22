import type { PropsWithChildren } from "react"

import { cn } from "@/lib/utils"

export default function BioSection({ children }: PropsWithChildren) {
  const className = cn("pl-14", "mx-auto", "mt-2", "mb-2")
  const style = { textIndent: "-3.4em" }

  return (
    <div className={className} style={style}>
      {children}
    </div>
  )
}
