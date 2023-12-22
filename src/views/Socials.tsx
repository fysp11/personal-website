import Link from "next/link"
import type { SocialItem } from "@/constants/types"

import { cn } from "@/lib/utils"

interface SocialViewProps {
  socials: SocialItem[]
}
export default function SocialView({ socials }: SocialViewProps) {
  const styles = {
    root: "grid grid-cols-2 gap-4 justify-items-center justify-content-center",
    button: cn(
      "flex items-center justify-start",
      "text-teal-800 dark:text-teal-200",
      "hover:bg-sky-200 hover:dark:bg-sky-800",
      "hover:underline",
      "rounded px-2 py-1 text-2xl"
    ),
    icon: "mr-2 min-w-[10px]",
    label: "w-full text-center"
  }
  const buttonClass = cn(
    "flex items-center justify-start",
    "hover:underline",
    "text-teal-800 dark:text-teal-200",
    "hover:bg-sky-200 hover:dark:bg-sky-800",
    "rounded px-2 py-1",
    "text-2xl"
  )

  return (
    <div className={styles.root}>
      {socials.map((socialItem) => (
        <Link key={socialItem.label} href={socialItem.url} target="_blank">
          <button className={styles.button}>
            <socialItem.icon className={styles.icon} />
            <span className={styles.label}>{socialItem.label}</span>
          </button>
        </Link>
      ))}
    </div>
  )
}
