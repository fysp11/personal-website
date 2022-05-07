import { PropsWithChildren, useContext } from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import { Router } from 'next/router'

import Footer from '../footer'
import NavBar from '../navbar'

import { ProfileProps } from '../../constants/profile'
import { ProfileContext } from '../../providers/profile'

interface MainProps {
    router: Router
}

const Main = ({ children, router }: PropsWithChildren<MainProps>) => {
    const { personal: { name, avatar, subtitle: bio }, social: { twitter } } = useContext<ProfileProps>(ProfileContext)

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content={`${name}' bio page`} />
                <meta name="keywords" content="web3, climate, tech, future, love, brazil" />

                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                <meta name="author" content={name} />
                <meta name="description" content={bio} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={`@${twitter}`} />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:image" content={avatar} />

                <meta property="og:type" content="website" />
                <meta name="og:title" content={name} />
                <meta property="og:site_name" content={name} />
                <meta property="og:description" content={bio} />
                <meta property="og:image" content={avatar} />
                <meta property="og:image:width" content="192" />
                <meta property="og:image:height" content="192" />

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/static/images/icons/icon-72x72.png"
                    rel="icon"
                    type="image/png"
                    sizes="72x72"
                />
                <link
                    href="/static/images/icons/icon-96x96.png"
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                />
                <link rel="apple-touch-icon" href="/apple-touch.png" />
                <meta name="theme-color" content="#88ccca" />

                <title>{name}&apos;s bio page</title>
            </Head>

            <NavBar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main