import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';

import '../styles/globals.css'
import Fonts from '../lib/wrappers/fonts'
import ChakraWrapper from '../lib/wrappers/chakra'
import ThirdWebWrapper from '../lib/wrappers/tweb';
import { scrollToTop } from '../components/utils/ui/scroll'


function Website({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Fonts />
      <ChakraWrapper>
        <ThirdWebWrapper>
          <AnimatePresence onExitComplete={scrollToTop}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ThirdWebWrapper>
      </ChakraWrapper>
      <Analytics />
    </>
  )
}

export default Website