import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useContext } from 'react'

import ThemeToggleButton from './theme-toggle-button'
import { ProfileProps } from '../constants/profile'
import { ProfileContext } from '../providers/profile'

// type LinkItemProps = any & {
//     href: string,
//     path: string,
//     target?: string,
//     display: string
// }

// const LinkItem = ({ href, path, target, children, ...props }: PropsWithChildren<LinkItemProps>) => {
//     const active = path === href
//     const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
//     return (
//         <NextLink href={href} passHref scroll={false}>
//             <Link
//                 p={2}
//                 bg={active ? 'grassTeal' : undefined}
//                 color={active ? '#202023' : inactiveColor}
//                 target={target}
//                 {...props}
//             >
//                 {children}
//             </Link>
//         </NextLink>
//     )
// }

interface NavbarProps {
    path: string,

}

const Navbar = (props: NavbarProps) => {
    // const { path } = props

    const { personal: { avatar, name } } = useContext<ProfileProps>(ProfileContext)

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
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
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

                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu isLazy id="navbar-menu">
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar