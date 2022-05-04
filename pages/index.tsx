import {
  Link,
  Container,
  Heading,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

import { ProfileProps, ProfileSocialProps } from '../constants/profile'
import { useContext } from 'react'
import { ProfileContext } from '../providers/profile'
import { BioHeader } from '../components/layouts/bio-header'
import Experiences from '../components/experiences'
import { EXPERIENCES_DATA } from '../constants/experiences'

const Home = () => {

  const { personal, social } = useContext<ProfileProps>(ProfileContext)

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

      <Section delay={0.2}>
        <Experiences experiences={EXPERIENCES_DATA}></Experiences>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social
        </Heading>
        <List>
          {Object.entries(social)
            .filter(([_, value]) => !!value)
            .sort(([key1], [key2]) => key1 < key2 ? -1 : 1)
            .map(([key, [value, icon]]: [string, ProfileSocialProps[keyof ProfileSocialProps]]) => (
              <ListItem key={key}>
                <Link href={value} target="_blank">
                  <Button
                    variant="ghost"
                    colorScheme="teal"
                    leftIcon={<Icon as={icon} />}
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


