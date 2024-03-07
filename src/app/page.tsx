import { FYSP_DEV_METADATA } from "@/constants/metadata"
import { getExperiences, getProfile } from "@/server/data"
import BioView from "@/views/BioView"
import ExperiencesView from "@/views/ExperiencesView"
import SocialView from "@/views/SocialView"

export const metadata = FYSP_DEV_METADATA

export default async function Page() {
  const { socials, personal } = await getProfile()
  const experiences = await getExperiences()

  return (
    <article className="flex flex-col gap-7">
      <BioView personal={personal}></BioView>
      <ExperiencesView experiences={experiences}></ExperiencesView>
      <SocialView socials={socials} />
    </article>
  )
}
