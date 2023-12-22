import { Experience } from "@/constants/types"

import { cn, getSorter } from "@/lib/utils"
import SectionTitle from "@/components/ui/SectionTitle"

interface ExperiencesProps {
  experiences: Experience[]
}
export default function Experiences({ experiences }: ExperiencesProps) {
  experiences.sort(getSorter("year"))

  const styles = {
    item: cn("gap-.25 mt-2 flex flex-col md:flex-row md:gap-3.5"),
    year: cn("m-0 font-bold sm:pb-0 md:mb-5"),
    comment: {
      list: cn("flex flex-col gap-1 contrast-75", "hover:contrast-200"),
      item: cn(
        "text-justify leading-tight hover:animate-pulse md:leading-normal"
      )
    }
  }

  return (
    <div>
      <SectionTitle>Stuff I&apos;ve done</SectionTitle>
      {experiences.map((experience) => (
        <div key={experience.year} className={styles.item}>
          {/* <div className={styles.year}>[.-.-.-.-.]</div>
          <div className={styles.comment.list}>C</div> */}
          <div className={styles.year}>{experience.year}</div>
          <div className={styles.comment.list}>
            {experience.comments.map((comment) => (
              <span key={comment} className={styles.comment.item}>
                {comment}.
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
