import Link from "next/link"
import Image from "./image"
import { Text, Stack } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import { PropsWithChildren } from "react"

interface BaseGridItemProps {
    title: string,
    thumbnail: string
}

interface GridItemProps extends BaseGridItemProps {
    href: string
}

export const GridItem = ({ children, href, title, thumbnail }: PropsWithChildren<GridItemProps>) => {
    const squareSize = 96
    return (
        <Link href={href} passHref>
            <Stack w="100%" textAlign="center" direction='row'>
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    width={squareSize}
                    maxWidth={squareSize}
                    height={squareSize}
                    maxHeight={squareSize}
                    loading="lazy"
                />
                <Text mt={2}>{title}</Text>
                <Text fontSize={14}>{children}</Text>
            </Stack>
        </Link>
    )
}

export const GridItemStyle = () => (
    <Global
        styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}
    />
)