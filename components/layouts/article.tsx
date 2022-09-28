import { motion } from 'framer-motion'
import Head from 'next/head'
import { PropsWithChildren, useMemo } from 'react'
import { GridItemStyle } from '../grid-item'

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: -0, y: 20 }
}

interface LayoutProps {
    title?: string
}

const Layout = ({ children, title = '' }: PropsWithChildren<LayoutProps>) => {

    const fullTitle = useMemo(() => `${title} - fysp`, [title])
    return (
        <motion.article
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.4, type: 'easeInOut' }}
            style={{ position: 'relative' }}
        >
            <>
                {title && (
                    <Head>
                        <title>{fullTitle}</title>
                        <meta name="twitter:title" content={fullTitle} />
                        <meta property="og:title" content={fullTitle} />
                    </Head>
                )}
                {children}

                <GridItemStyle />
            </>
        </motion.article>
    )
}

export default Layout