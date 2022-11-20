import { useState } from 'react'
import { Container, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Experiences from '../components/experiences'

import { ME_PROFILE } from '../constants/profile'
import { EXPERIENCES_DATA } from '../constants/experiences'


const BioHeader = dynamic(() => import('../components/layouts/bio-header'))

const SocialView = dynamic(
  () => import('../views/Socials'),
  { loading: () => <p>Loading ...</p>, ssr: false }
)

const Home = () => {
  const [{ personal, socials }] = useState(ME_PROFILE)

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

      <Section delay={0.3}>
        <SocialView socials={socials} />
      </Section>
    </Container>
  </Layout>
}

export default Home;
