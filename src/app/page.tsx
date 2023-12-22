import { Metadata } from "next"
import { getExperiences, getProfile } from "@/server/data"
import Bio from "@/views/Bio"
import Experiences from "@/views/Experiences"
import SocialView from "@/views/Socials"

export const metadata: Metadata = {
  title: "Fysp.Dev",
  description:
    "Tech savy and creative Software Engineer. \
  Tell me some interesting things :)",
  authors: [{ name: "fysp11", url: "https://github.com/fysp11" }],
  category: "Living CV"
}

export default async function Page() {
  const { socials, personal } = await getProfile()
  const experiences = await getExperiences()

  return (
    <div className="flex flex-col gap-7">
      <Bio personal={personal}></Bio>
      <Experiences experiences={experiences}></Experiences>
      <SocialView socials={socials} />
    </div>
  )
}
