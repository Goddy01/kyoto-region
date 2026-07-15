export type SocialLink = {
  platform: "twitter" | "twitch" | "youtube" | "instagram" | "discord";
  url: string;
};

export type Player = {
  slug: string;
  name: string;
  realName: string;
  role: string;
  game: string;
  nationality: string;
  bio: string;
  achievements: string[];
  socials: SocialLink[];
  monogram: string;
  accent: string;
  image: string;
};

export type StaffMember = {
  id: string;
  name: string;
  title: string;
  category:
    | "owners"
    | "management"
    | "coaches"
    | "designers"
    | "editors"
    | "moderators";
  bio: string;
  monogram: string;
  image: string;
};

export type TournamentResult = {
  id: string;
  tournament: string;
  game: string;
  placement: string;
  year: string;
  prize?: string;
  featured?: boolean;
};

export type EventItem = {
  id: string;
  tournament: string;
  date: string;
  opponent: string;
  status: "Upcoming" | "Live" | "Completed";
  game: string;
};

export type NewsCategory = "Announcement" | "Match" | "Community" | "Roster";

export type NewsArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: NewsCategory;
  date: string;
  featured?: boolean;
  body: string[];
};

export type Partner = {
  id: string;
  name: string;
  tier: "sponsors" | "partners" | "affiliates";
  url: string;
};

export type RecruitmentRole = {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements: string[];
};

export type Milestone = {
  year: string;
  title: string;
  description: string;
};

export type Stat = {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
};

export type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
};
