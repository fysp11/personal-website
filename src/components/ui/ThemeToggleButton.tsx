import { useTheme } from "next-themes"
import { BiSolidMoon, BiSolidSun } from "react-icons/bi"

import { cn } from "@/lib/utils"

export default function ThemeToggleButton() {
  const { systemTheme, theme, setTheme } = useTheme()
  const isDark = theme == "dark"

  const toggleTheme = () => {
    if (isDark) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  const bg = cn("bg-gray-800 dark:bg-gray-50")
  const hover = cn("hover:bg-gray-600 dark:hover:bg-gray-300")
  const transition = cn("transition-all duration-100")
  const textClass = cn("text-4xl text-white dark:text-gray-800")
  const padding = cn("p-2")
  const others = cn("rounded-2xl")

  const buttonClass = cn(bg, hover, transition, padding, textClass, others)

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={toggleTheme}
      className={buttonClass}
    >
      {theme == "dark" ? <BiSolidMoon /> : <BiSolidSun />}
    </button>
  )
}
