import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react';

import Chakra from '../components/chakra'
import Fonts from '../components/fonts'
import Layout from '../components/layouts/main'
import { ProfileContext } from '../providers/profile'

import { ME_PROFILE } from '../constants/profile'

import '../styles/globals.css'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Fonts />
      <Chakra>
        <ProfileContext.Provider value={ME_PROFILE}>
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
        </ProfileContext.Provider>
      </Chakra>
      <Analytics />
    </>
  )
}

export default Website