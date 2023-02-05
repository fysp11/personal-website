import { Image as ChakraImage, ImageProps } from "@chakra-ui/react"


const Image = (props: ImageProps) => {
    return <ChakraImage {...props} loading="lazy" />;
}


export default Image