import { IconType } from 'react-icons';
import { IoLogoGithub, IoLogoTwitter, IoLogoHtml5 } from 'react-icons/io5'

import { AVATAR_PNG, IRL_AVATAR_JPEG } from "./assets";

export interface PersonalProps {
    name: string;
    subtitle: string;
    avatar: string;
    irlAvatar: string;
    bio: string[];
}

export type ProfileSocialProps = Record<string, [string, IconType]>

export interface ProfileProps {
    personal: PersonalProps,
    social: ProfileSocialProps,
}


export const ME_PROFILE: ProfileProps = {
    personal: {
        name: 'Felipe Mendonça',
        subtitle: 'climate/social focused, tech enthusiast',
        avatar: AVATAR_PNG,
        irlAvatar: IRL_AVATAR_JPEG,
        bio: [
            `I'm currently a software developer with a background in clinical psychology moving towards
            regenerative (climate and public goods). On my free time, I like to play hike, play basketball,
            listen to music, travel and be with friends.`
        ]
    },
    social: {
        twitter: ['https://twitter.com/fysp', IoLogoTwitter],
        github: ['https://github.com/fysp11', IoLogoGithub],
        website: ['https://fysp.eth.link', IoLogoHtml5]
    },
}