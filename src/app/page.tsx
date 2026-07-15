import { Hero } from "@/components/home/Hero";
import {
  HomeAchievements,
  HomeAnnouncement,
  HomeRosterTeaser,
} from "@/components/home/HomeSections";
import { RitualScroll } from "@/components/home/RitualScroll";
import { Marquee } from "@/components/motion/Marquee";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee
        items={[
          "Precision in bloom",
          "Competitive excellence",
          "京 · Kyoto Region",
          "Challengers Champions 2026",
          "Craft over noise",
          "Join the region",
        ]}
        speed={35}
      />
      <RitualScroll />
      <HomeAchievements />
      <HomeAnnouncement />
      <HomeRosterTeaser />
    </>
  );
}
