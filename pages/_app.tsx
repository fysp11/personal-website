import type { AppProps } from "next/app"

import "../styles/globals.css"
import Fonts from "../lib/wrappers/fonts"
import ChakraWrapper from "../lib/wrappers/chakra"
import ThirdWebWrapper from "../lib/wrappers/tweb";


function Website({ Component, pageProps, router }: AppProps) {
    return (
        <>
            <Fonts />
            <ChakraWrapper>
                <ThirdWebWrapper>
                    <Component {...pageProps} key={router.route} />
                </ThirdWebWrapper>
            </ChakraWrapper>
        </>
    )
}

export default Website