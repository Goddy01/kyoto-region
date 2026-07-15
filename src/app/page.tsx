import { Hero } from "@/components/home/Hero";
import {
  HomeAchievements,
  HomeAnnouncement,
  HomeMarquee,
  HomeRosterTeaser,
  HomeStats,
} from "@/components/home/HomeSections";
import { RitualScroll } from "@/components/home/RitualScroll";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeMarquee />
      <RitualScroll />
      <HomeStats />
      <HomeAchievements />
      <HomeAnnouncement />
      <HomeRosterTeaser />
    </>
  );
}
