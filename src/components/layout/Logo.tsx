import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string;
  showWordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 text-foreground",
        className,
      )}
    >
      <span className="relative h-9 w-9 shrink-0 overflow-hidden md:h-10 md:w-10">
        <Image
          src="/images/logo-white.png"
          alt="Kyoto Region"
          width={40}
          height={40}
          className="h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
          priority
        />
        <Image
          src="/images/logo-accent.png"
          alt=""
          width={40}
          height={40}
          aria-hidden
          className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </span>
      {showWordmark && (
        <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
          Kyoto Region
        </span>
      )}
    </Link>
  );
}
