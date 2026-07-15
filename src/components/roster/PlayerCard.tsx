import Link from "next/link";
import type { Player } from "@/data/types";
import { cn } from "@/lib/cn";

export function PlayerCard({ player }: { player: Player }) {
  return (
    <Link
      href={`/roster/${player.slug}`}
      className={cn(
        "group glass relative block overflow-hidden transition-all duration-500",
        "hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_20px_60px_-30px_rgba(255,79,139,0.45)]",
      )}
    >
      <div
        className="relative flex h-72 items-end p-6 md:h-80"
        style={{
          background: `linear-gradient(165deg, ${player.accent}40 0%, #111111 45%, #050505 100%)`,
        }}
      >
        <span
          aria-hidden
          className="font-display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9rem] leading-none text-white/[0.06] transition-transform duration-700 group-hover:scale-110"
        >
          {player.monogram}
        </span>
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
        />
        <div className="relative z-10 w-full">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs tracking-[0.22em] text-accent uppercase">
              {player.role}
            </p>
            <span className="text-xs text-muted">{player.nationality}</span>
          </div>
          <h3 className="font-display mt-2 text-3xl tracking-tight">
            {player.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{player.game}</p>
        </div>
      </div>
    </Link>
  );
}
