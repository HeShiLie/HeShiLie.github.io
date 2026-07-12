import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/HeShiLie",
        linkTitle: `Zhe Gao on GitHub`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:gzben01@gmail.com",
        linkTitle: `Send email to Zhe Gao`,
        isActive: true,
    },
    {
        name: "Google Scholar",
        href: "",
        linkTitle: `Zhe Gao on Google Scholar`,
        isActive: false,
    },
    {
        name: "ORCID",
        href: "",
        linkTitle: `Zhe Gao on ORCID`,
        isActive: false,
    },
    {
        name: "LinkedIn",
        href: "",
        linkTitle: `Zhe Gao on LinkedIn`,
        isActive: false,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
