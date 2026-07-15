import { cn } from "@/lib/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  fullWidth?: boolean;
};

export function Section({
  children,
  className,
  id,
  eyebrow,
  title,
  description,
  fullWidth,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-24 md:py-32 lg:py-40", className)}
    >
      <div className={cn(!fullWidth && "mx-auto max-w-7xl px-6 lg:px-8")}>
        {(eyebrow || title || description) && (
          <div className="mb-14 max-w-3xl md:mb-20">
            {eyebrow && (
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-display-md text-foreground md:text-display-lg">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass group relative overflow-hidden rounded-none p-6 transition-all duration-500 hover:border-accent/40",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("gradient-text", className)}>{children}</span>;
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-white/5 pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="sakura-glow absolute inset-0" />
      <div className="pattern-asanoha absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
        <h1 className="font-display text-display-lg max-w-4xl text-foreground">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
