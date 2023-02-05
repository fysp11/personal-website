import type { AppProps } from "next/app"

import "../styles/globals.css"
import Fonts from "../lib/wrappers/fonts"
import ChakraWrapper from "../lib/wrappers/chakra"


function Website({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Fonts />
            <ChakraWrapper>
                <Component {...pageProps} key={router.route} />
            </ChakraWrapper>
        </>
    )
}

export default Website