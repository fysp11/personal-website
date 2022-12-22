import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

interface SectionProps {
    delay?: number
}

const Section = ({ children, delay = 0 }: PropsWithChildren<SectionProps>) => (
    <StyledDiv
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: '0.5', delay: delay.toString() }}
        mb={6}
    >
        {children}
    </StyledDiv>
)

export default Section