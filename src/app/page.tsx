import { Hero } from "@/components/home/Hero";
import {
  HomeAchievements,
  HomeAnnouncement,
  HomeRosterTeaser,
  HomeStats,
} from "@/components/home/HomeSections";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeStats />
      <HomeAchievements />
      <HomeAnnouncement />
      <HomeRosterTeaser />
    </>
  );
}
