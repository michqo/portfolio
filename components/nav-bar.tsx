"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";

export function NavBar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#experience", label: t("experience") },
    { href: "#education", label: t("education") },
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 font-mono text-sm sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-1 font-bold tracking-tight"
        >
          <span className="text-primary transition-colors group-hover:text-primary/70">/</span>
          <span className="transition-colors group-hover:text-primary">miqal</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="border border-transparent px-3 py-1.5 text-xs text-muted-foreground transition-all hover:border-border hover:bg-muted/60 hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher />
          <ThemeToggle />
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="border border-border p-1.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border/50 bg-background/95 px-4 py-2 font-mono sm:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex w-full border-b border-border/30 py-3 text-sm text-muted-foreground transition-colors last:border-0 hover:text-primary"
            >
              <span className="text-primary/50 mr-2">›</span>
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
