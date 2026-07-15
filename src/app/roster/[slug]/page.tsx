import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { players, getPlayer } from "@/data/roster";
import { PlayerProfile } from "@/components/roster/PlayerProfile";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return players.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const player = getPlayer(slug);
  if (!player) return { title: "Player" };
  return {
    title: player.name,
    description: player.bio,
  };
}

export default async function PlayerPage({ params }: Props) {
  const { slug } = await params;
  const player = getPlayer(slug);
  if (!player) notFound();

  return <PlayerProfile player={player} />;
}
