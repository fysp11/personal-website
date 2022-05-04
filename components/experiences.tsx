import { Heading } from "@chakra-ui/react"
import { Experience } from "../constants/experiences"

import { BioSection, BioYear } from '../components/layouts/bio'
import React from "react"

interface ExperiencesProps {
    experiences: Experience[]
}

const Experiences = ({ experiences }: ExperiencesProps) => {
    return <>
        <Heading as="h3" variant="section-title">
            {"Stuff I've done"}
        </Heading>
        {experiences
            .sort((a, b) => b.year - a.year)
            .map((experience, index) => (
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