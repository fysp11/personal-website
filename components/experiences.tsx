import { Heading } from "@chakra-ui/react"
import { Experience } from "../constants/experiences"

import { BioSection, BioYear } from '../components/layouts/bio'

interface ExperiencesProps {
    experiences: Experience[]
}

const Experiences = ({ experiences }: ExperiencesProps) => {

    return <>
        <Heading as="h3" variant="section-title">
            Timeline
        </Heading>
        {experiences.map((experience, index) => (
            <BioSection key={index}>
                <BioYear>{experience.year}</BioYear>
                {experience.position}
            </BioSection>
        ))}
    </>
}

export default Experiences