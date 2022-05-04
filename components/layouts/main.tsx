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
    const { personal: { name, bio }, social: { twitter } } = useContext<ProfileProps>(ProfileContext)

    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="author" content={name} />
                <meta name="description" content={bio} />
                <meta name="twitter:card" content="summary_large_image" />
                {/* <meta name="twitter:site" content={`@${twitter}`} /> */}
                <meta name="twitter:creator" content={`@${twitter}`} />
                <meta name="twitter:title" content={name} />
                {/* <meta name="twitter:image" content="" /> */}
                <meta property="og:site_name" content={name} />
                <meta property="og:description" content={bio} />
                <meta name="og:title" content={name} />
                <meta property="og:type" content="website" />
                {/* <meta property="og:image" content="" /> */}
                <title>{name} - Homepage</title>
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