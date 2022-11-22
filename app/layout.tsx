import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Layout from '../components/layouts/main'

import '../styles/globals.css'


function RootLayout({ Component, pageProps, router }: AppProps) {
    return (
        <Layout router={router}>
            <AnimatePresence
                initial={true}
                onExitComplete={() => {
                    if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0 })
                    }
                }}
                mode='wait'
            >
                <Component {...pageProps} key={router.route} />
            </AnimatePresence>
        </Layout>
    )
}

export default RootLayout