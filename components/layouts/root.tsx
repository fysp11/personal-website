import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { GridItemStyle } from '../ui/grid-item'
import NavBar from '../nav/navbar'

interface LayoutProps {
    title?: string
    logo: string
}

const RootLayout = ({ children, logo, title = '' }: PropsWithChildren<LayoutProps>) => {
    const fullTitle = `${title} - fysp`
    return (
        <>
            {title && (
                <Head>
                    <title>{fullTitle}</title>
                    <meta name="twitter:title" content={fullTitle} />
                    <meta property="og:title" content={fullTitle} />
                </Head>
            )}
            <NavBar logo={logo} />
            {children}

            <GridItemStyle />
        </>
    )
}

export default RootLayout;