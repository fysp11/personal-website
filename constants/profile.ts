import { IconType } from 'react-icons';
import { IoLogoGithub, IoLogoTwitter, IoLogoHtml5 } from 'react-icons/io5'
import { FaCalendarPlus, FaEthereum } from 'react-icons/fa'

import { AVATAR_PNG, IRL_AVATAR_JPEG } from "./assets";

export interface PersonalProps {
    name: string;
    subtitle: string;
    avatar: string;
    irlAvatar: string;
    bio: string[];
    tags: string[];
}

interface SocialItem {
    label: string
    url: string
    icon: IconType
}

export type SocialItemList = SocialItem[]

export interface ProfileProps {
    personal: PersonalProps,
    socials: SocialItem[],
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
    socials: [
        {
            label: 'twitter',
            url: 'https://twitter.com/fysp',
            icon: IoLogoTwitter
        },
        {
            label: 'github',
            url: 'https://github.com/fysp11',
            icon: IoLogoGithub
        },
        {
            label: 'website',
            url: 'https://fysp.eth.limo',
            icon: IoLogoHtml5
        },
        {
            label: 'poap',
            url: 'https://app.poap.xyz/scan/fysp.eth',
            icon: FaEthereum
        },
        {
            label: 'calendly',
            url: 'https://calendly.com/fysp',
            icon: FaCalendarPlus
        },
    ],
}
