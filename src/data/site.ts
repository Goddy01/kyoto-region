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
    { key: "about" as const, href: "/about" },
    { key: "results" as const, href: "/results" },
    { key: "roster" as const, href: "/roster" },
    { key: "staff" as const, href: "/staff" },
    { key: "recruitment" as const, href: "/recruitment" },
    { key: "community" as const, href: "/community" },
    { key: "events" as const, href: "/events" },
    { key: "news" as const, href: "/news" },
    { key: "partners" as const, href: "/partners" },
    { key: "contact" as const, href: "/contact" },
  ],
  primaryNavKeys: [
    "about",
    "roster",
    "results",
    "events",
    "news",
    "recruitment",
  ] as const,
  footerNav: {
    organization: [
      { key: "about" as const, href: "/about" },
      { key: "roster" as const, href: "/roster" },
      { key: "staff" as const, href: "/staff" },
      { key: "partners" as const, href: "/partners" },
    ],
    compete: [
      { key: "results" as const, href: "/results" },
      { key: "events" as const, href: "/events" },
      { key: "recruitment" as const, href: "/recruitment" },
    ],
    connect: [
      { key: "news" as const, href: "/news" },
      { key: "community" as const, href: "/community" },
      { key: "contact" as const, href: "/contact" },
    ],
  },
} as const;
