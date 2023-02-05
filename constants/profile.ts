import { IconType } from "react-icons";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5"
import { FaCalendarPlus, FaEthereum } from "react-icons/fa"

import { AVATAR_JPG } from "./assets";


export interface PersonalProps {
    name: string;
    subtitle: string;
    avatar: string;
    bio: string[];
    tags: string[];
}

export interface SocialItem {
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
        name: "Felipe Mendonça",
        subtitle: "climate/social focused, tech enthusiast",
        avatar: AVATAR_JPG,
        bio: [
            `I'm currently a software developer with a background in clinical psychology moving towards
            regenerative ventures (climate and public goods). In my free time, I like to hike, play basketball,
            listen to music, travel and be with friends.`
        ],
        tags: ["web3", "climate", "tech", "future", "love", "brazil"]
    },
    socials: [
        {
            label: "github",
            url: "https://github.com/fysp11",
            icon: IoLogoGithub
        },
        {
            label: "poap",
            url: "https://app.poap.xyz/scan/fysp.eth",
            icon: FaEthereum
        },
        {
            label: "twitter",
            url: "https://twitter.com/fysp",
            icon: IoLogoTwitter
        },
        {
            label: "contact",
            url: "https://app.reclaim.ai/m/fysp",
            icon: FaCalendarPlus
        },
    ],
}
