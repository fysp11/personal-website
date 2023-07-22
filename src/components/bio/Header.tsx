import Image from "next/image"
import logo from "@/assets/img/fysp_aigen1.jpg"

import { cn } from "@/lib/utils"

interface BioHeaderProps {
  name: string
  subtitle: string
}
export default function BioHeader({ name, subtitle }: BioHeaderProps) {
  const squareSize = 96

  const boxClasses = cn("md:flex")
  const flexGrowClasses = cn("grow")
  const headingClasses = cn("text-2xl") // Adjust to match your 'page-title' variant
  const imgContainerClasses = cn(
    "shrink-0",
    "mt-4",
    "md:mt-0",
    "md:ml-6",
    "text-center"
  )
  const imgBorderClasses = cn(
    "border",
    "border-white",
    "w-24",
    "h-24",
    "inline-block",
    "rounded-full",
    "overflow-hidden"
  )
  // const imageClass = cn(
  //   "rounded-full"
  //   // `w-${squareSize} max-w-${squareSize}`,
  //   // `h-${squareSize} max-h-${squareSize}`
  // )

  return (
    <div className={boxClasses}>
      <div className={flexGrowClasses}>
        <h2 className={headingClasses}>{name}</h2>
        <p>{subtitle}</p>
      </div>
      <div className={imgContainerClasses}>
        <div className={imgBorderClasses}>
          <Image
            src={logo}
            alt="Profile image"
            // className={imageClass}
            width={squareSize}
            height={squareSize}
          />
        </div>
      </div>
    </div>
  )
}
