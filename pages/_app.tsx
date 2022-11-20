import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';

import Layout from '../components/layouts/main'

import '../styles/globals.css'
import Fonts from '../components/fonts'
import Chakra from '../components/chakra'


function Website({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Fonts />
      <Chakra>
        <Layout router={router}>
          <AnimatePresence
            mode='wait'
            initial={true}
            onExitComplete={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </Chakra>
      <Analytics />
    </>
  )
}

export default Website