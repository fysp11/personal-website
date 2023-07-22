import { Experience } from "@/constants/types"

import { getSorter } from "@/lib/_helpers"
import BioSection from "@/components/ui/Section"
import SectionTitle from "@/components/ui/SectionTitle"
import BioYear from "@/components/bio/Year"

interface ExperiencesProps {
  experiences: Experience[]
}
export default function Experiences({ experiences }: ExperiencesProps) {
  experiences.sort(getSorter("year"))
  return (
    <div>
      <SectionTitle>Stuff I&apos;ve done</SectionTitle>
      {experiences.map((experience) => (
        <div key={experience.year} className={"my-5 flex flex-row"}>
          <div className="mr-5 font-bold">{experience.year}</div>
          <div className="contrast-75 hover:contrast-100">
            {experience.comments.map((comment) => (
              <span key={comment}>{comment}.</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
