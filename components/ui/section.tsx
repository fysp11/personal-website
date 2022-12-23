import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const StyledDiv = chakra('div', {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

interface SectionProps {
    delay?: number
}

const Section = ({ children, delay = 0 }: PropsWithChildren<SectionProps>) => (
    <StyledDiv
        transition={{ duration: '0.5', delay: delay.toString() }}
        mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section