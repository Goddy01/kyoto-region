export const siteConfig = {
  name: "Kyoto Region",
  shortName: "Kyoto",
  tagline: "Precision in bloom. Dominance in silence.",
  description:
    "Kyoto Region is a premium esports organization uniting Japanese discipline with world-class competitive excellence.",
  url: "https://kyotoregion.gg",
  email: "hello@kyotoregion.gg",
  discord: "https://discord.gg/kyotoregion",
  twitter: "https://x.com/kyotoregion",
  nav: [
    { label: "About", href: "/about" },
    { label: "Results", href: "/results" },
    { label: "Roster", href: "/roster" },
    { label: "Staff", href: "/staff" },
    { label: "Recruitment", href: "/recruitment" },
    { label: "Community", href: "/community" },
    { label: "Events", href: "/events" },
    { label: "News", href: "/news" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  footerNav: {
    Organization: [
      { label: "About", href: "/about" },
      { label: "Roster", href: "/roster" },
      { label: "Staff", href: "/staff" },
      { label: "Partners", href: "/partners" },
    ],
    Compete: [
      { label: "Results", href: "/results" },
      { label: "Events", href: "/events" },
      { label: "Recruitment", href: "/recruitment" },
    ],
    Connect: [
      { label: "News", href: "/news" },
      { label: "Community", href: "/community" },
      { label: "Contact", href: "/contact" },
    ],
  },
} as const;
