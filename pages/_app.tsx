import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { AppProps } from 'next/app'
import { ProfileContext } from '../providers/profile'
import { ME_PROFILE } from '../constants/profile'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
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
          <ProfileContext.Provider value={ME_PROFILE}>
            <Component {...pageProps} key={router.route} />
          </ProfileContext.Provider>
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}

export default Website