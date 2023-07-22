"use client"

import { PersonalProps } from "@/constants/types"

import BioContent from "@/components/bio/Content"
import BioHeader from "@/components/bio/Header"

interface BioProps {
  personal: PersonalProps
}
export default function Bio({ personal }: BioProps) {
  return (
    <div>
      <BioHeader {...personal} />
      <BioContent contents={personal.bio} />
    </div>
  )
}
