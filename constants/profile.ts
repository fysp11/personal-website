import { AVATAR_PNG } from "./assets";

export interface PersonalProps {
    name: string;
    bio: string;
    avatar: string;
}

export interface ProfileSocialProps {
    twitter: string,
    github: string,
    website: string,
    linkedin?: string,
    discord?: string,
}

export interface WorkProps {
    text: string;
}

export interface ProfileProps {
    personal: PersonalProps,
    social: ProfileSocialProps,
    work: WorkProps,
}


export const ME_PROFILE: ProfileProps = {
    personal: {
        name: 'Felipe Mendonça',
        bio: 'climate/social focused, tech enthusiast',
        avatar: AVATAR_PNG,
    },
    social: {
        twitter: 'fysp',
        github: 'fysp11',
        website: 'https://fysp.eth.link'
    },
    work: {
        text: 'I\'m a software developer working in the climate and social sector. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc eu imperdiet consectetur, nisi nunc ultricies nisl, euismod euismod nunc nisl euismod nunc. Mauris euismod, nunc eu imperdiet consectetur, nisi nunc ultricies nisl, euismod euismod nunc nisl euismod nunc. Mauris euismod, nunc eu imperdiet consectetur, nisi nunc ultricies nisl, euismod euismod nunc nisl euismod nunc.',
    }
}