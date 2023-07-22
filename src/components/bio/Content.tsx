import React from "react"

import SectionTitle from "@/components/ui/SectionTitle"

export default function BioContent({ contents }: { contents: string[] }) {
  return (
    <div>
      <SectionTitle>
        <h1>Bio</h1>
      </SectionTitle>
      {contents.map((paragraph) => (
        <div key={paragraph}>{paragraph.trim()}</div>
      ))}
    </div>
  )
}
