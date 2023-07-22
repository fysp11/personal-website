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
      <SectionTitle>
        <h3>Stuff I&apos;ve done</h3>
      </SectionTitle>
      {experiences.map((experience) => (
        <BioSection key={experience.year}>
          <BioYear>{experience.year}</BioYear>
          {experience.comments.map((comment) => (
            <span key={comment}>{comment}.</span>
          ))}
        </BioSection>
      ))}
    </div>
  )
}
