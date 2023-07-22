import Link from "next/link"
import type { SocialItem } from "@/constants/types"

import { cn } from "@/lib/utils"

interface SocialViewProps {
  socials: SocialItem[]
}
export default function SocialView({ socials }: SocialViewProps) {
  const buttonClass = cn(
    "flex items-center justify-start",
    "hover:underline",
    "text-teal-800 dark:text-teal-200",
    "hover:bg-sky-200 hover:dark:bg-sky-800",
    "rounded px-2 py-1"
  )

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {socials.map((socialItem) => (
          <Link
            className="flex justify-center"
            key={socialItem.label}
            href={socialItem.url}
            target="_blank"
          >
            <button className={buttonClass}>
              <socialItem.icon className="mr-2 min-w-[10px]" />
              <span className="w-full text-center">{socialItem.label}</span>
            </button>
            {/* <button className="flex md:justify-start justify-center font-[600] hover:underline hover:bg-teal-300 text-teal-500 px-2 py-1">
              {<socialItem.icon />}
              {socialItem.label}
            </button> */}
          </Link>
        ))}
      </div>
    </div>
  )
}
