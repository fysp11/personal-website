import { ChakraProvider, localStorageManager } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import theme from '../lib/theme'


export default function Chakra({ children }: PropsWithChildren) {
  return (
    <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
      {children}
    </ChakraProvider>
  )
}
