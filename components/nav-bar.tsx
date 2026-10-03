"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";

export function NavBar() {
  const t = useTranslations("nav");
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95">
      <div className="mx-auto flex min-h-16 max-w-4xl items-center justify-between gap-2 px-4 sm:gap-3 sm:px-8">
        <Link href="/" aria-label={t("home")} className="brand-mark inline-flex min-h-11 shrink-0 items-center rounded-sm font-mono text-base font-semibold tracking-[-0.07em] sm:text-lg">
          <span className="text-primary">/</span>miqal
        </Link>
        <div className="flex items-center gap-2 sm:gap-5">
          <nav aria-label={t("label")} className="flex items-center gap-1 sm:gap-3">
            <a href="#about" className="inline-flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap rounded-sm px-1.5 text-xs sm:px-2 sm:text-sm text-muted-foreground hover:text-foreground">{t("about")}</a>
            <a href="#apps" className="inline-flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap rounded-sm px-1.5 text-xs sm:px-2 sm:text-sm text-muted-foreground hover:text-foreground">{t("apps")}</a>
            <a href="#contact" className="hidden min-h-11 min-w-11 items-center justify-center whitespace-nowrap rounded-sm px-1.5 text-xs sm:px-2 sm:text-sm text-muted-foreground hover:text-foreground sm:inline-flex">{t("contact")}</a>
          </nav>
          <div className="flex items-center gap-2"><LocaleSwitcher /><ThemeToggle /></div>
        </div>
      </div>
    </header>
  );
}
