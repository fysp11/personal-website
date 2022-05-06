import NextLink from 'next/link'
import Image from './image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { PropsWithChildren } from 'react'


interface BaseGridItemProps {
    title: string,
    thumbnail: string
}

interface GridItemProps extends BaseGridItemProps {
    href: string
}

export const GridItem = ({ children, href, title, thumbnail }: PropsWithChildren<GridItemProps>) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className="grid-item-thumbnail"
                placeholder="blur"
                width={96}
                height={96}
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

interface WorkGridItemProps extends BaseGridItemProps {
    id: string
}

export const WorkGridItem = ({ children, id, title, thumbnail }: PropsWithChildren<WorkGridItemProps>) => (
    <Box w="100%" textAlign="center">
        <NextLink href={`/works/${id}`} scroll={false}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)

export const GridItemStyle = () => (
    <Global
        styles={`
    .grid-item-thumbnail {
        border-radius: 12px;
    }
    `}
    />
)