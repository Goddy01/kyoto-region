"use client";

import { useI18n } from "@/i18n/LanguageProvider";
import { localeLabels, type Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { locale, setLocale, t } = useI18n();

  const options: Locale[] = ["en", "ja"];

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className={cn(
        "inline-flex items-center rounded-none border border-white/15 bg-black/40 p-1 backdrop-blur-md",
        className,
      )}
    >
      {options.map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            aria-pressed={active}
            aria-label={code === "en" ? t.common.switchToEn : t.common.switchToJa}
            className={cn(
              "min-w-[3.25rem] px-3 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300",
              compact && "min-w-[2.75rem] px-2.5 py-1 text-[10px]",
              active
                ? "bg-accent text-white shadow-[0_0_20px_rgba(255,79,139,0.35)]"
                : "text-muted hover:text-foreground",
            )}
          >
            {localeLabels[code]}
          </button>
        );
      })}
    </div>
  );
}
