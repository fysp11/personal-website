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
        <h3>"Stuff I've done"</h3>
      </SectionTitle>
      {experiences.map((experience, index) => (
        <BioSection key={index}>
          <BioYear>{experience.year}</BioYear>
          {experience.comments.map((comment) => (
            <>
              <span className="hover-underline-animation">{comment}.</span>
              {<br />}
            </>
          ))}
        </BioSection>
      ))}
    </div>
  )
}
