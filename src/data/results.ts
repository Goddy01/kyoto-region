import type { Achievement, Milestone, Stat, TournamentResult } from "./types";

export const homeStats: Stat[] = [
  { label: "Titles", value: 4 },
  { label: "Win Rate", value: 72, suffix: "%" },
  { label: "Fans", value: 180, suffix: "K+" },
  { label: "Years", value: 3 },
];

export const achievements: Achievement[] = [
  {
    id: "challengers-26",
    title: "Challengers Champions",
    subtitle: "VALORANT Pacific Challengers",
    year: "2026",
  },
  {
    id: "pacific-cup",
    title: "Pacific Cup Finalists",
    subtitle: "Regional Invitationals",
    year: "2026",
  },
  {
    id: "pcs",
    title: "PCS Semifinalists",
    subtitle: "League of Legends",
    year: "2025",
  },
  {
    id: "community",
    title: "Community Choice Award",
    subtitle: "Esports Asia Awards",
    year: "2025",
  },
];

export const results: TournamentResult[] = [
  {
    id: "1",
    tournament: "VCT Pacific Challengers",
    game: "VALORANT",
    placement: "1st",
    year: "2026",
    prize: "$45,000",
    featured: true,
  },
  {
    id: "2",
    tournament: "Pacific Cup Invitationals",
    game: "VALORANT",
    placement: "2nd",
    year: "2026",
    prize: "$22,000",
    featured: true,
  },
  {
    id: "3",
    tournament: "VCT Pacific Kickoff",
    game: "VALORANT",
    placement: "Top 8",
    year: "2026",
  },
  {
    id: "4",
    tournament: "PCS Summer Playoffs",
    game: "League of Legends",
    placement: "Semifinals",
    year: "2025",
    featured: true,
  },
  {
    id: "5",
    tournament: "Kyoto Open Invitational",
    game: "VALORANT",
    placement: "1st",
    year: "2025",
    prize: "$12,000",
  },
  {
    id: "6",
    tournament: "Sakura Series Finals",
    game: "VALORANT",
    placement: "1st",
    year: "2025",
  },
  {
    id: "7",
    tournament: "APAC Community Cup",
    game: "VALORANT",
    placement: "3rd",
    year: "2024",
  },
  {
    id: "8",
    tournament: "Rising Legends Split",
    game: "League of Legends",
    placement: "Top 6",
    year: "2024",
  },
];

export const resultStats: Stat[] = [
  { label: "Championships", value: 4 },
  { label: "Finals Appearances", value: 7 },
  { label: "Maps Won", value: 128 },
  { label: "Win Rate", value: 72, suffix: "%" },
];

export const milestones: Milestone[] = [
  {
    year: "2024",
    title: "The Bloom Begins",
    description:
      "Kyoto Region is founded in Kyoto with a mandate: compete with discipline, create with taste.",
  },
  {
    year: "2024",
    title: "First Roster Locked",
    description:
      "Initial VALORANT roster assembled. Community Discord opens to 10K members in month one.",
  },
  {
    year: "2025",
    title: "Regional Breakthrough",
    description:
      "Sakura Series and Kyoto Open titles. LoL division joins PCS contention.",
  },
  {
    year: "2026",
    title: "Challengers Crown",
    description:
      "Pacific Challengers champions. Kyoto Region becomes a name opponents respect.",
  },
  {
    year: "2026",
    title: "Global Horizon",
    description:
      "Expanded staff, partner suite, and a pathway toward tier-one international stages.",
  },
];
