"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/cn";
import { easeExpoOut } from "@/lib/motion";
import { Button } from "@/components/ui/Button";
import { useI18n } from "@/i18n/LanguageProvider";

export function Navbar() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const primaryNav = siteConfig.nav.filter((item) =>
    (siteConfig.primaryNavKeys as readonly string[]).includes(item.key),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
          scrolled || open
            ? "border-b border-white/5 bg-bg/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:h-20 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-7 xl:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative text-xs font-medium tracking-[0.16em] uppercase transition-colors duration-300",
                  pathname === item.href
                    ? "text-accent"
                    : "text-muted hover:text-foreground",
                )}
              >
                {t.nav[item.key]}
                <span
                  aria-hidden
                  className={cn(
                    "absolute -bottom-1 left-0 h-px w-full origin-left bg-accent transition-transform duration-400",
                    pathname === item.href
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                />
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher />
            <Button
              href="/contact"
              variant="primary"
              className="!px-5 !py-2.5 text-xs tracking-[0.14em] uppercase"
            >
              {t.common.contact}
            </Button>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher compact />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center text-foreground"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: easeExpoOut }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex h-full flex-col justify-center gap-2 px-8 pt-16">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.05 + i * 0.04,
                    duration: 0.5,
                    ease: easeExpoOut,
                  }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "font-display block py-2 text-3xl tracking-tight",
                      pathname === item.href ? "text-accent" : "text-foreground",
                    )}
                  >
                    {t.nav[item.key]}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: easeExpoOut }}
                className="mt-8"
              >
                <Button href="/recruitment" variant="primary">
                  {t.common.join}
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
