import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager
} from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { PropsWithChildren } from 'react'
import theme from '../lib/theme'

interface ChakraProps {
  cookies?: string
}

export default function Chakra({ cookies, children }: PropsWithChildren<ChakraProps>) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}