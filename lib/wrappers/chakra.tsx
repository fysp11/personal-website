import { ChakraProvider, localStorageManager } from "@chakra-ui/react"
import { PropsWithChildren } from "react"
import theme from "../theme"


export default function ChakraWrapper({ children }: PropsWithChildren) {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      {children}
    </ChakraProvider>
  )
}
