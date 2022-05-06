import { Box, chakra, Heading } from "@chakra-ui/react";
import Image from '../image'

import { PersonalProps } from "../../constants/profile";

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

export function BioHeader({ personal }: { personal: PersonalProps }) {
    return <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
                {personal.name}
            </Heading>
            <p>{personal.subtitle}</p>
        </Box>
        <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
        >
            <Box
                borderColor="whiteAlpha.800"
                borderWidth={2}
                borderStyle="solid"
                w="100px"
                h="100px"
                display="inline-block"
                borderRadius="full"
                overflow="hidden"
            >
                <ProfileImage
                    src={personal.irlAvatar}
                    alt="Profile image"
                    borderRadius="full"
                    width={96}
                    height={96} />
            </Box>
        </Box>
    </Box>
}