import { IconType } from 'react-icons';
import { IoLogoGithub, IoLogoTwitter, IoLogoHtml5 } from 'react-icons/io5'
import { FaCalendarPlus, FaEthereum, FaEnvira } from 'react-icons/fa'

import { AVATAR_PNG, IRL_AVATAR_JPEG } from "./assets";

export interface PersonalProps {
    name: string;
    subtitle: string;
    avatar: string;
    irlAvatar: string;
    bio: string[];
    tags: string[];
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
            regenerative ventures (climate and public goods). In my free time, I like to hike, play basketball,
            listen to music, travel and be with friends.`
        ],
        tags: ["web3", "climate", "tech", "future", "love", "brazil"]
    },
    social: {
        twitter: ['https://twitter.com/fysp', IoLogoTwitter],
        github: ['https://github.com/fysp11', IoLogoGithub],
        website: ['https://fysp.eth.limo', IoLogoHtml5],
        poap: ['https://app.poap.xyz/scan/fysp.eth', FaEthereum],
        calendly: ['https://calendly.com/fysp', FaCalendarPlus],
        changeblock: ['https://beta.changeblock.com/sign-up?invite=8LODzWT_oO', FaEnvira]
    },
}
