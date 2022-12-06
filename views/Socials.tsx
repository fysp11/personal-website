import { Button, Icon, Link, List, ListItem } from "@chakra-ui/react";
import type { SocialItem } from "../constants/profile"


interface SocialViewProps {
    socials: SocialItem[]
}
const SocialView = ({ socials }: SocialViewProps) => {
    return <>
        <List>
            {socials
                .map((socialItem) => (
                    <ListItem key={socialItem.label}>
                        <Link href={socialItem.url} target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                outline="none"
                                leftIcon={<Icon as={socialItem.icon} />}
                            >
                                {socialItem.label}
                            </Button>
                        </Link>
                    </ListItem>
                ))}
        </List>
    </>
}

export default SocialView;
