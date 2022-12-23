import { Heading } from "@chakra-ui/react"
import { Experience } from "../constants/experiences"

import { BioSection, BioYear } from '../components/bio/bio-section'
import React from "react"
import { getSorter } from "../lib/_helpers"

interface ExperiencesProps {
    experiences: Experience[]
}

const Experiences = ({ experiences }: ExperiencesProps) => {
    experiences.sort(getSorter('year'))
    return <>
        <Heading as="h3" variant="section-title">
            {"Stuff I've done"}
        </Heading>
        {experiences.map((experience, index) => (
            <BioSection key={index}>
                <BioYear>{experience.year}</BioYear>
                {React.Children.toArray(experience.comments.map(comment => (
                    <>
                        <span className="hover-underline-animation" >{comment}.</span>
                        {<br />}
                    </>
                )))}
            </BioSection>
        ))}
    </>
}

export default Experiences