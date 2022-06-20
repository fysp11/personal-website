import { Heading } from "@chakra-ui/react"
import { CurrentActivity } from "../constants/doing-now"

import { BioSection, BioYear } from './layouts/bio'
import React from "react"

interface ExperiencesProps {
    activities: CurrentActivity[]
}

const DoingNow = ({ activities }: ExperiencesProps) => {
    return <>
        <Heading as="h3" variant="section-title">
            {"Doing around these times.."}
        </Heading>
        {activities
            .map((activity, index) => (
                <BioSection key={index}>
                    <BioYear>{activity.ref}</BioYear>
                    <span className="hover-underline-animation" >
                        {activity.comments.join(' ')}.
                    </span>
                    {<br />}
    
                </BioSection>
            ))}
    </>
}

export default DoingNow