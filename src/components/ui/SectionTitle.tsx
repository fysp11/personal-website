import type { PropsWithChildren } from "react"

export default function SectionTitle({ children }: PropsWithChildren) {
  return <div className="mb-4 mt-3 text-2xl font-bold">{children}</div>
}
