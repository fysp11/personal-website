import {
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ConnectWallet } from "@thirdweb-dev/react";


import ThemeToggleButton from './theme-toggle-button'
import Image from 'next/image';


interface NavbarProps {
    logo: string
}

const Navbar = ({ logo }: NavbarProps) => {
    const { colorMode } = useColorMode()
    const [pageYOffset, setPageYOffset] = useState(0)

    const handleScroll = () => {
        const position = window.scrollY;
        setPageYOffset(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                justifyContent={'space-between'}
                alignItems={'center'}
                flexWrap={'wrap'}
            >
                <Flex align="center" mr={5} flexGrow="revert">
                    <Heading as="h1" size="lg" letterSpacing={'tighter'} opacity={pageYOffset > 47 ? 1 : 0}>
                        <Image src={logo} alt="logo" width={50} height={50} />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <ConnectWallet colorMode={colorMode} />

                </Stack>

                <Box flex={1} flexGrow={0} display="flex" alignContent="right">
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar