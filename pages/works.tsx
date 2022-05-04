import { Container, Heading, SimpleGrid } from '@chakra-ui/react'

import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import { WORKS_DATA } from '../constants/works'


const Works = () => {
    return <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                {WORKS_DATA.map(item => (
                    <Section key={item.id}>
                        <WorkGridItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            thumbnail={item.thumbnail}
                        >
                            {item.description}
                        </WorkGridItem>
                    </Section>
                ))}
            </SimpleGrid>
        </Container>
    </Layout>
}

export default Works
