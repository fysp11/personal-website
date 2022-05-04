import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from './image'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    img {
        border-radius: 50%;
    }
    p {
        margin-left: 5px;
    }
`

interface LogoProps {
    text: string
    logo: string
}


const Logo = ({ text, logo }: LogoProps) => {
    // const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (
        <Link href="/" scroll={false}>
            <a>
                <LogoBox>

                    <Image src={logo} width={20} height={20} alt="logo" priority />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight="bold"
                        ml={3}
                    >
                        {text}
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo