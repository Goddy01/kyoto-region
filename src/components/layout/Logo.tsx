import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 text-foreground",
        className,
      )}
    >
      <span className="relative flex h-9 w-9 items-center justify-center border border-accent/40 bg-surface">
        <span className="font-display text-sm font-bold tracking-tight text-accent">
          京
        </span>
        <span
          aria-hidden
          className="absolute inset-0 bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </span>
      <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
        Kyoto Region
      </span>
    </Link>
  );
}
