import { useContext } from 'react'
import type { GetStaticProps } from 'next'
import { Container, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Experiences from '../components/experiences'

import { ProfileContext } from '../providers/profile'

import type { ProfileProps } from '../constants/profile'
import { Experience, EXPERIENCES_DATA } from '../constants/experiences'


const BioHeader = dynamic(() => import('../components/layouts/bio-header'))

const SocialView = dynamic(
  () => import('../views/Socials'),
  { loading: () => <p>Loading ...</p>, ssr: false }
)

interface HomeProps {
  experiences: Experience[]
}
const Home = ({ experiences }: HomeProps) => {
  const { personal, socials } = useContext<ProfileProps>(ProfileContext)

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
        <Experiences experiences={experiences}></Experiences>
      </Section>

      <Section delay={0.3}>
        <SocialView socials={socials} />
      </Section>
    </Container>
  </Layout>
}

export default Home

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      experiences: EXPERIENCES_DATA,
    }
  }
}


