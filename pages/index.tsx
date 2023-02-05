import { useState } from "react"
import { Container, Heading } from "@chakra-ui/react"
import dynamic from "next/dynamic"

import Paragraph from "../components/ui/paragraph"
import RootLayout from "../components/layouts/root"
import Section from "../components/ui/section"
import Experiences from "../views/experiences"

import { ME_PROFILE } from "../constants/profile"
import { EXPERIENCES_DATA } from "../constants/experiences"


const BioHeader = dynamic(() => import("../components/bio/bio-header"))

const SocialView = dynamic(
  () => import("../views/Socials"),
  { loading: () => <p>Loading ...</p>, ssr: false }
)

const Home = () => {
  const [{ personal, socials }] = useState(ME_PROFILE)

  return <RootLayout logo={personal.avatar}>
    <Container pt={120}>

      <BioHeader personal={personal} />

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        {personal.bio.map((paragraph) => (
          <Paragraph key={paragraph}>{paragraph.trim()}</Paragraph>
        ))}
      </Section>

      <Section delay={0.1}>
        <Experiences experiences={EXPERIENCES_DATA}></Experiences>
      </Section>

      <Section delay={0.3}>
        <SocialView socials={socials} />
      </Section>
    </Container>
  </RootLayout>
}

export default Home;
