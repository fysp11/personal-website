import { Button, SimpleGrid, Icon, Link } from "@chakra-ui/react";
import type { SocialItem } from "../constants/profile"


interface SocialViewProps {
    socials: SocialItem[]
}
const SocialView = ({ socials }: SocialViewProps) => {
    return <>
        <SimpleGrid columns={2}>
            {socials
                .map((socialItem) => (
                    <Link
                        key={socialItem.label}
                        href={socialItem.url}
                        style={{ display: "flex", justifyContent: "center" }}
                        target="_blank">
                        <Button
                            variant="ghost"
                            colorScheme="teal"
                            outline="none"
                            leftIcon={<Icon as={socialItem.icon} />}
                            display="flex"
                            justifyItems={{ base: "center", md: "flex-start" }}
                        >
                            {socialItem.label}
                        </Button>
                    </Link>
                ))}
        </SimpleGrid>
    </>
}

export default SocialView;
