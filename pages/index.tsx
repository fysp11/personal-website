import { useContext } from 'react'
import { GetStaticProps } from 'next'
import { Link, Container, Heading, Button, List, ListItem, Icon } from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { BioHeader } from '../components/layouts/bio-header'
import Experiences from '../components/experiences'

import { ProfileContext } from '../providers/profile'

import { ProfileProps } from '../constants/profile'
import { Experience, EXPERIENCES_DATA } from '../constants/experiences'


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
        <Heading as="h3" variant="section-title">
          Social
        </Heading>
        <List>
          {socials
            .map((socialItem) => (
              <ListItem key={socialItem.label}>
                <Link href={socialItem.url} target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    outline="none"
                    leftIcon={<Icon as={socialItem.icon} />}
                  >
                    {socialItem.label}
                  </Button>
                </Link>
              </ListItem>
            ))}
        </List>
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


