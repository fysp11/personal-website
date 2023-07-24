import { Experience } from "@/constants/types"

import { getSorter } from "@/lib/utils"
import SectionTitle from "@/components/ui/SectionTitle"

interface ExperiencesProps {
  experiences: Experience[]
}
export default function Experiences({ experiences }: ExperiencesProps) {
  experiences.sort(getSorter("year"))
  return (
    <div>
      <SectionTitle>Stuff I&apos;ve done</SectionTitle>
      {experiences.map((experience) => (
        <div key={experience.year} className={"my-[2vh] flex flex-row"}>
          <div className="mr-[2vw] font-bold">{experience.year}</div>
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
