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
    "rounded px-2 py-1",
    "text-2xl"
  )

  return (
    <div className="grid grid-cols-2 gap-4">
      {socials.map((socialItem, index) => (
        <Link
          className={cn("flex justify-center", {
            "col-span-2":
              socials.length % 2 !== 0 && index === socials.length - 1
          })}
          key={socialItem.label}
          href={socialItem.url}
          target="_blank"
        >
          <button className={buttonClass}>
            <socialItem.icon className="mr-2 min-w-[10px]" />
            <span className="w-full text-center">{socialItem.label}</span>
          </button>
        </Link>
      ))}
    </div>
  )
}
