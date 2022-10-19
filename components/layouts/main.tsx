import { PropsWithChildren, useContext, useMemo } from 'react'
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
    const { personal: { name, avatar, subtitle: bio, tags }, socials } = useContext<ProfileProps>(ProfileContext)

    const twitterHandle = useMemo(() => {
        const twitterData = socials.find(({ label }) => label === 'twitter')
        return twitterData!.url.replace('https://twitter.com/', '')
    }, [socials])



    return (
        <Box as="main" pb={8}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
                <meta name="description" content={`${name}' bio page`} />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#88ccca" />

                <meta name="author" content={name} />
                <meta name="description" content={bio} />
                <meta name="keywords" content={tags.join(", ")} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content={`@${twitterHandle}`} />
                <meta name="twitter:title" content={name} />
                <meta name="twitter:image" content={avatar} />

                <meta property="og:type" content="website" />
                <meta name="og:title" content={name} />
                <meta property="og:site_name" content={name} />
                <meta property="og:description" content={bio} />
                <meta property="og:image" content={avatar} />
                <meta property="og:image:width" content="192" />
                <meta property="og:image:height" content="192" />


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