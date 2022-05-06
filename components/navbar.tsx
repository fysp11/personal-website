import Logo from './logo'
import {
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    useColorModeValue
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'

import ThemeToggleButton from './theme-toggle-button'
import { ProfileProps } from '../constants/profile'
import { ProfileContext } from '../providers/profile'


interface NavbarProps {
    path: string,
}

const Navbar = (props: NavbarProps) => {
    // const { path } = props
    const { personal: { avatar, name } } = useContext<ProfileProps>(ProfileContext)
    const [pageYOffset, setPageYOffset] = useState(0)

    const handleScroll = () => {
        const position = window.pageYOffset;
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
            {...props}
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
                    <Heading as="h1" size="lg" letterSpacing={'tighter'} display={pageYOffset > 10 ? 'flex' : 'none'}>
                        <Logo logo={avatar} text={name} />
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

                </Stack>

                <Box flex={1} flexGrow={0} display="flex" alignContent="right">
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar