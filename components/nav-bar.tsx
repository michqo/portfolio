"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { cn } from "@/lib/utils";

export function NavBar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navLinks = [
    { href: "#experience", label: t("experience") },
    { href: "#education", label: t("education") },
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const lastId = sectionIds[sectionIds.length - 1];
    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        });
        const active = sectionIds.find((id) => visible.has(id));
        setActiveSection(active ?? "");
      },
      { threshold: 0.15, rootMargin: "-64px 0px -35% 0px" },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 50) {
        setActiveSection(lastId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative border px-3 py-1.5 text-xs transition-all duration-200",
                  isActive
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-transparent text-muted-foreground hover:border-border hover:bg-muted/40 hover:text-foreground",
                )}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 h-3 w-px -translate-y-1/2 bg-primary" />
                )}
                {label}
              </Link>
            );
          })}
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
          {navLinks.map(({ href, label }) => {
            const isActive = activeSection === href.slice(1);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex w-full items-center gap-2 border-b border-border/30 py-3 text-sm transition-colors last:border-0",
                  isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
                )}
              >
                <span
                  className={cn(
                    "transition-colors",
                    isActive ? "text-primary" : "text-primary/40",
                  )}
                >
                  ›
                </span>
                {label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
