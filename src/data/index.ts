import type { EventItem, NewsArticle, Partner, RecruitmentRole } from "./types";

export const events: EventItem[] = [
  {
    id: "e1",
    tournament: "VCT Pacific Stage 2",
    date: "2026-08-02",
    opponent: "TBD",
    status: "Upcoming",
    game: "VALORANT",
  },
  {
    id: "e2",
    tournament: "Sakura Showmatch",
    date: "2026-07-22",
    opponent: "Paper Crane",
    status: "Upcoming",
    game: "VALORANT",
  },
  {
    id: "e3",
    tournament: "PCS Mid-Season Cup",
    date: "2026-07-18",
    opponent: "Nebula Esports",
    status: "Live",
    game: "League of Legends",
  },
  {
    id: "e4",
    tournament: "Pacific Cup Semifinals",
    date: "2026-06-14",
    opponent: "Iron Lotus",
    status: "Completed",
    game: "VALORANT",
  },
];

export const news: NewsArticle[] = [
  {
    slug: "challengers-champions-2026",
    title: "Kyoto Region Crowned Challengers Champions",
    excerpt:
      "A flawless grand finals run seals the Pacific Challengers title—and a new chapter for the org.",
    category: "Match",
    date: "2026-06-18",
    featured: true,
    body: [
      "Under arena lights that felt carved for this moment, Kyoto Region closed the Pacific Challengers grand finals 3–1.",
      "Hinata's entries and Kensho's mid-round calls defined a series that never slipped into chaos—only precision.",
      "The championship is not an ending. It is proof of concept for everything Kyoto Region was built to become.",
    ],
  },
  {
    slug: "yugen-joins-roster",
    title: "Yugen Joins the VALORANT Roster",
    excerpt:
      "Flexible talent from Korea arrives to deepen the agent pool ahead of Stage 2.",
    category: "Roster",
    date: "2026-01-09",
    body: [
      "Yugen steps into Kyoto Region as our flex piece—ready on Controllers, Initiators, and late-round specialists.",
      "The signing strengthens our map veto flexibility and deepens bootcamp competition across the board.",
    ],
  },
  {
    slug: "sakura-community-week",
    title: "Sakura Community Week Returns",
    excerpt:
      "Giveaways, creator collabs, and a fan tournament fill seven days of bloom.",
    category: "Community",
    date: "2026-03-21",
    body: [
      "Sakura Community Week is our annual thank-you to the people who make Kyoto Region loud.",
      "Expect signed merch drop raffles, Discord exclusive VODs, and a bracket open to community teams.",
    ],
  },
  {
    slug: "partner-suite-2026",
    title: "2026 Partner Suite Announced",
    excerpt:
      "New sponsors join the Kyoto family as we scale production and travel.",
    category: "Announcement",
    date: "2026-02-04",
    featured: true,
    body: [
      "We're proud to welcome a refined partner suite for 2026—brands that match our standard for craft and performance.",
      "Together we'll elevate matchday presentation, athlete support, and community programming.",
    ],
  },
  {
    slug: "bootcamp-tokyo",
    title: "Tokyo Bootcamp: Behind the Bloom",
    excerpt:
      "Two weeks of packed review, scrims, and quiet dinners that forge trust.",
    category: "Announcement",
    date: "2026-05-12",
    body: [
      "Our Tokyo bootcamp locked the Stage 2 playbook—defaults, executions, and economy discipline on every map.",
      "Players cited the quiet focus of the facility as a competitive advantage.",
    ],
  },
  {
    slug: "pcs-semifinals-recap",
    title: "PCS Semifinals: Lessons in Fire",
    excerpt:
      "A hard-fought exit—and a clearer path for the LoL division ahead.",
    category: "Match",
    date: "2025-09-02",
    body: [
      "Falling in the PCS Semifinals hurt. It also clarified exactly where Kyoto's LoL division will improve.",
      "Nova's mid presence remained elite; the next step is earlier skirmish coordination across the map.",
    ],
  },
];

export function getArticle(slug: string) {
  return news.find((n) => n.slug === slug);
}

export const partners: Partner[] = [
  { id: "p1", name: "Sakura Soft", tier: "sponsors", url: "#" },
  { id: "p2", name: "Neon Forge", tier: "sponsors", url: "#" },
  { id: "p3", name: "Aether Audio", tier: "sponsors", url: "#" },
  { id: "p4", name: "Pacific Fiber", tier: "partners", url: "#" },
  { id: "p5", name: "Ink & Steel", tier: "partners", url: "#" },
  { id: "p6", name: "Bloom Labs", tier: "partners", url: "#" },
  { id: "p7", name: "Pixel Dojo", tier: "affiliates", url: "#" },
  { id: "p8", name: "Gate Five", tier: "affiliates", url: "#" },
];

export const recruitmentRoles: RecruitmentRole[] = [
  {
    id: "players",
    title: "Competitive Players",
    category: "Competitive",
    description:
      "Join a disciplined VALORANT or LoL environment built for tier-one ambition.",
    requirements: [
      "Proven ranked / competitive track record",
      "Fluent English communication",
      "Available for full-time practice blocks",
      "VOD review mindset",
    ],
  },
  {
    id: "creators",
    title: "Content Creators",
    category: "Content",
    description:
      "Streamers and personalities who embody Kyoto's premium, approachable energy.",
    requirements: [
      "Consistent publishing cadence",
      "Aligned brand presentation",
      "Comfortable on camera and in community spaces",
    ],
  },
  {
    id: "designers",
    title: "Designers",
    category: "Creative",
    description:
      "Brand, motion, and merch designers who can make ink feel electric.",
    requirements: [
      "Strong portfolio (brand or esports preferred)",
      "Motion or 3D a plus",
      "Obsessive attention to detail",
    ],
  },
  {
    id: "editors",
    title: "Video Editors",
    category: "Creative",
    description:
      "Cut highlights and films that feel like trailer drops, not cluttered montage.",
    requirements: [
      "Premiere / After Effects fluency",
      "Strong timing and audio taste",
      "Ability to hit matchday deadlines",
    ],
  },
  {
    id: "community",
    title: "Community Staff",
    category: "Community",
    description:
      "Plan events, giveaways, and engagement that make fans feel seen.",
    requirements: [
      "Event planning experience",
      "Clear written communication",
      "Active Discord / social native",
    ],
  },
  {
    id: "moderators",
    title: "Moderators",
    category: "Community",
    description:
      "Keep spaces safe, sharp, and on-brand—without killing the vibe.",
    requirements: [
      "Prior moderation experience",
      "Conflict resolution skills",
      "Reliable timezone coverage",
    ],
  },
];
