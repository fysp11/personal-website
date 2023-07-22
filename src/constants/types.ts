import { IconType } from "react-icons"

export interface Experience {
  year: number
  comments: string[]
}

export interface PersonalProps {
  name: string
  subtitle: string
  bio: string[]
  tags: string[]
}

export interface SocialItem {
  label: string
  url: string
  icon: IconType
}

export type SocialItemList = SocialItem[]

export interface ProfileProps {
  personal: PersonalProps
  socials: SocialItem[]
}
