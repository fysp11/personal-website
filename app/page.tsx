"use client"
import Link from 'next/link'
import { Container, Heading, Button, Icon, SimpleGrid } from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioHeader } from '../components/layouts/bio-header'
import Experiences from '../components/experiences'

import { ME_PROFILE } from '../constants/profile'
import { EXPERIENCES_DATA } from '../constants/experiences'

const { personal, socials } = ME_PROFILE


const Page = async () => {
    return <Layout>
        <Container>

            <BioHeader personal={personal} />

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                {personal.bio.map((paragraph, index) => (
                    <Paragraph key={index}>{paragraph.trim()}</Paragraph>
                ))}
            </Section>

            <Section delay={0.1}>
                <Experiences experiences={EXPERIENCES_DATA}></Experiences>
            </Section>

            <Section delay={0.17}>
                <Heading as="h3" variant="section-title">
                    Social
                </Heading>
                <SimpleGrid columns={2} spacingX={10} minChildWidth='10rem'>
                    {socials.map((socialItem) => (
                        <Link
                            key={socialItem.label}
                            href={socialItem.url}
                            target="_blank"
                            passHref>
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                outline="none"
                                leftIcon={<Icon as={socialItem.icon} />}
                                textAlign="right"
                                w='100%'
                            >
                                {socialItem.label}
                            </Button>
                        </Link>
                    ))}
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
}

export default Page
