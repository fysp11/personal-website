import { getExperiences, getProfile } from "@/server/data"
import Bio from "@/views/Bio"
import Experiences from "@/views/Experiences"
import SocialView from "@/views/Socials"

import { cn } from "@/lib/utils"

export const metadata = {
  title: "Fysp.Dev",
  description: `Tech savy and creative Software Engineer. \
  Tell me some interesting things :)`
}

export default async function Page() {
  const { socials, personal } = await getProfile()
  const experiences = await getExperiences()

  const baseClass = cn("flex flex-col w-full gap-11 sm:px-6 lg:px-8 py-11")

  return (
    <div className={baseClass}>
      <Bio personal={personal}></Bio>
      <Experiences experiences={experiences}></Experiences>
      <SocialView socials={socials} />
    </div>
  )
}
