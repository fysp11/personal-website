import {
  Link,
  Container,
  Heading,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { IoLogoTwitter } from 'react-icons/io5'

import { ProfileProps, ProfileSocialProps } from '../constants/profile'
import { useContext } from 'react'
import { ProfileContext } from '../providers/profile'
import { BioHeader } from '../components/layouts/bio-header'
import Experiences from '../components/experiences'
import { EXPERIENCES_DATA } from '../constants/experiences'

const Home = () => {

  const profile = useContext<ProfileProps>(ProfileContext)

  return <Layout>
    <Container>

      <BioHeader personal={profile.personal} />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>{profile.work.text}</Paragraph>
      </Section>

      <Section delay={0.2}>
        <Experiences experiences={EXPERIENCES_DATA}></Experiences>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social
        </Heading>
        <List>
          {Object.entries(profile.social)
            .filter(([_, value]) => !!value)
            .sort(([key1], [key2]) => key1 < key2 ? -1 : 1)
            .map(([key, value]: [string, ProfileSocialProps[keyof ProfileSocialProps]]) => (
              <ListItem key={key}>
                <Link href={value} target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<IoLogoTwitter />}
                  >
                    {key}
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
export { getServerSideProps } from '../components/chakra'


