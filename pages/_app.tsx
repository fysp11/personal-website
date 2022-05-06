import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

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
              exitBeforeEnter
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
    </>
  )
}

export default Website