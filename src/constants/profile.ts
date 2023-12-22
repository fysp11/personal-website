import { ProfileProps } from "@/constants/types"
import { BiDonateHeart } from "react-icons/bi"
import {
  FaCalendarPlus,
  FaDollarSign,
  FaEnvelope,
  FaEthereum
} from "react-icons/fa"
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5"

export const ME_PROFILE: ProfileProps = {
  personal: {
    name: "Felipe Mendonça",
    subtitle: "climate/social focused, tech enthusiast, constant questioning",
    bio: [
      "\
Code wizard and former psychologist, passionate about using cool tech & strange ideas to imagine a better world. \
With a broad range of interests from ancestry, AI and the fungi universe, you might find me hiking, \
shooting hoops, exploring new technologies and hanging out with friends."
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
      label: "schedule",
      url: "https://schedule.fysp.dev",
      icon: FaDollarSign
    },
    {
      label: "contact",
      url: "https://app.reclaim.ai/m/fysp",
      icon: FaCalendarPlus
    },
    {
      label: "email",
      url: "mailto:contact@fysp.dev",
      icon: FaEnvelope
    },
    {
      label: "support",
      url: "https://apoia.se/cozinhasolidaria",
      icon: BiDonateHeart
    }
  ]
}
