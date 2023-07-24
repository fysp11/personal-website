import { cn } from "@/lib/utils"

export default function Footer() {
  const position = cn("flex items-center justify-center")
  const space = cn("min-h-[80px] px-5 py-3 text-center")
  const fullClass = cn("hover:underline", position, space)

  return <footer className={fullClass}>fysp.eth</footer>
}
