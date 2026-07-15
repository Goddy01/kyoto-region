import Link from "next/link";
import { Logo } from "./Logo";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-surface">
      <div className="sakura-glow pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <div className="mt-8 flex gap-5 text-xs tracking-[0.18em] uppercase">
              <a
                href={siteConfig.discord}
                className="text-muted transition-colors hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </a>
              <a
                href={siteConfig.twitter}
                className="text-muted transition-colors hover:text-accent"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted transition-colors hover:text-accent"
              >
                Email
              </a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {Object.entries(siteConfig.footerNav).map(([group, links]) => (
              <div key={group}>
                <p className="mb-4 text-xs tracking-[0.22em] text-accent uppercase">
                  {group}
                </p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kyoto Region. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Precision in bloom</p>
        </div>
      </div>
    </footer>
  );
}
