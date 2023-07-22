import { cn } from "@/lib/utils"

export default function Footer() {
  const position = cn("flex items-center justify-center")
  const space = cn("py-3 px-5 text-center min-h-[50px]")
  const fullClass = cn(position, space)

  return <div className={fullClass}>fysp.eth</div>
}
