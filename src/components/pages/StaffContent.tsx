"use client";

import Image from "next/image";
import { PageHero, Section, GlassCard } from "@/components/ui/Section";
import { Stagger, StaggerItem } from "@/components/motion/FadeUp";
import { staff, staffCategories } from "@/data/staff";
import { useI18n } from "@/i18n/LanguageProvider";

export function StaffContent() {
  const { t } = useI18n();
  const p = t.pages.staff;

  const categoryLabel = (id: (typeof staffCategories)[number]["id"]) => {
    const map = {
      owners: p.owners,
      management: p.management,
      coaches: p.coaches,
      designers: p.designers,
      editors: p.editors,
      moderators: p.moderators,
    } as const;
    return map[id];
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

      {staffCategories.map((cat) => {
        const members = staff.filter((s) => s.category === cat.id);
        const label = categoryLabel(cat.id);
        return (
          <Section
            key={cat.id}
            eyebrow={label}
            title={label}
            className="!py-16 md:!py-20"
          >
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((m) => (
                <StaggerItem key={m.id}>
                  <GlassCard className="min-h-[200px] !p-0 overflow-hidden">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={m.image}
                        alt={m.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl tracking-tight">
                        {m.name}
                      </h3>
                      <p className="mt-1 text-xs tracking-[0.16em] text-accent uppercase">
                        {m.title}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-muted">
                        {m.bio}
                      </p>
                    </div>
                  </GlassCard>
                </StaggerItem>
              ))}
            </Stagger>
          </Section>
        );
      })}
    </>
  );
}
