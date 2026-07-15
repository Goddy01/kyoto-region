"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/Section";
import { siteConfig } from "@/data/site";
import { recruitmentRoles } from "@/data/index";
import { useI18n } from "@/i18n/LanguageProvider";

export function ContactForm() {
  const { t } = useI18n();
  const c = t.pages.contact;
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const roleLabel = useMemo(
    () => recruitmentRoles.find((r) => r.id === roleParam)?.title,
    [roleParam],
  );

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: roleLabel ? `Application: ${roleLabel}` : "",
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <GlassCard className="flex min-h-[360px] flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check size={22} />
        </div>
        <h3 className="font-display text-2xl tracking-tight">{c.received}</h3>
        <p className="mt-3 max-w-sm text-muted">{c.receivedBody}</p>
        <button
          type="button"
          className="mt-8 text-sm text-accent underline-offset-4 hover:underline"
          onClick={() => setSubmitted(false)}
        >
          {c.sendAnother}
        </button>
      </GlassCard>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass space-y-5 p-6 md:p-8">
      {roleLabel && (
        <p className="border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-accent">
          {c.applyingFor} {roleLabel}
        </p>
      )}
      <div>
        <label htmlFor="name" className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
          {c.name}
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-white/10 bg-bg px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
          {c.email}
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border border-white/10 bg-bg px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="subject" className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
          {c.subject}
        </label>
        <input
          id="subject"
          required
          value={form.subject}
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
          className="w-full border border-white/10 bg-bg px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-xs tracking-[0.16em] text-muted uppercase">
          {c.message}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-y border border-white/10 bg-bg px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
        />
      </div>
      <Button type="submit" variant="primary" className="w-full sm:w-auto">
        {c.send}
      </Button>
    </form>
  );
}

export function ContactChannels() {
  const { t } = useI18n();

  return (
    <div className="space-y-4">
      <a
        href={siteConfig.discord}
        target="_blank"
        rel="noreferrer"
        className="glass flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
      >
        <MessageCircle className="text-accent" size={22} />
        <div>
          <p className="text-xs tracking-[0.18em] text-muted uppercase">Discord</p>
          <p className="mt-1 text-foreground">{t.common.join}</p>
        </div>
      </a>
      <a
        href={siteConfig.twitter}
        target="_blank"
        rel="noreferrer"
        className="glass flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
      >
        <span className="font-display text-lg text-accent">𝕏</span>
        <div>
          <p className="text-xs tracking-[0.18em] text-muted uppercase">X / Twitter</p>
          <p className="mt-1 text-foreground">@kyotoregion</p>
        </div>
      </a>
      <a
        href={`mailto:${siteConfig.email}`}
        className="glass flex items-center gap-4 p-5 transition-colors hover:border-accent/40"
      >
        <Mail className="text-accent" size={22} />
        <div>
          <p className="text-xs tracking-[0.18em] text-muted uppercase">Email</p>
          <p className="mt-1 text-foreground">{siteConfig.email}</p>
        </div>
      </a>
    </div>
  );
}
