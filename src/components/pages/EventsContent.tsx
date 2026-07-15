"use client";

import { PageHero, Section } from "@/components/ui/Section";
import { FadeUp } from "@/components/motion/FadeUp";
import { events } from "@/data/index";
import { cn } from "@/lib/cn";
import { useI18n } from "@/i18n/LanguageProvider";

export function EventsContent() {
  const { locale, t } = useI18n();
  const p = t.pages.events;

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString(locale === "ja" ? "ja-JP" : "en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const statusLabel = {
    Upcoming: p.upcoming,
    Live: p.live,
    Completed: p.completed,
  } as const;

  const statusStyles = {
    Upcoming: "text-muted border-white/20",
    Live: "text-accent border-accent/40 bg-accent/10",
    Completed: "text-muted border-white/10",
  };

  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={
          <>
            {p.titleLead}
            <br />
            <span className="gradient-text">{p.titleAccent}</span>
          </>
        }
        description={p.description}
      />
      <Section className="!pt-12">
        <div className="relative">
          <div
            aria-hidden
            className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-accent via-white/10 to-transparent md:left-1/2"
          />
          <div className="space-y-6">
            {events.map((event, i) => (
              <FadeUp key={event.id} delay={i * 0.05}>
                <div
                  className={cn(
                    "relative grid gap-4 md:grid-cols-2",
                    i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%] md:text-right",
                  )}
                >
                  <span
                    aria-hidden
                    className="absolute top-6 left-[0.7rem] h-3 w-3 rounded-full border-2 border-accent bg-bg md:left-1/2 md:-translate-x-1/2"
                  />
                  <article className="glass ml-10 p-6 md:ml-0">
                    <div className="flex flex-wrap items-center gap-3 md:justify-between">
                      <span
                        className={cn(
                          "border px-3 py-1 text-[10px] tracking-[0.18em] uppercase",
                          statusStyles[event.status],
                        )}
                      >
                        {statusLabel[event.status]}
                      </span>
                      <span className="text-xs text-muted">
                        {formatDate(event.date)}
                      </span>
                    </div>
                    <h3 className="font-display mt-4 text-2xl tracking-tight">
                      {event.tournament}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{event.game}</p>
                    <p className="mt-4 text-sm">
                      {p.vs}{" "}
                      <span className="text-accent">{event.opponent}</span>
                    </p>
                  </article>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
