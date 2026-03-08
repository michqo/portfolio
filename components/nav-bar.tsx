"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Github, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button, buttonVariants } from "./ui/button";

const NAV_OFFSET = 80; // px below the navbar top where we start attributing scroll to a section

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

    const update = () => {
      const scrollY = window.scrollY;
      const scrollBottom = scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Snap to last section when near the page bottom
      if (docHeight - scrollBottom < 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Walk sections in reverse — pick the last one whose top is above the offset
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + scrollY <= scrollY + NAV_OFFSET) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/70 backdrop-blur-md"
    >
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
                  "relative border px-3 py-1.5 text-xs transition-colors duration-200",
                  isActive
                    ? "border-primary/30 bg-primary/5 text-primary"
                    : "border-transparent text-muted-foreground hover:border-border hover:bg-muted/40 hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute left-0 top-1/2 h-3 w-px -translate-y-1/2 bg-primary"
                    transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  />
                )}
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-stretch gap-2">
          <a
            href="https://github.com/michqo/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "outline", size: "icon" })}
            aria-label="View portfolio source on GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <LocaleSwitcher />
          <ThemeToggle />
          {/* Hamburger — mobile only */}
          
          <Button
            onClick={() => setOpen((o) => !o)}
            variant="outline"
            className="sm:hidden"
            size="icon"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.15 }}
                className="flex"
              >
                {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </motion.span>
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden border-t border-border/50 bg-background/95 px-4 py-2 font-mono sm:hidden"
          >
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
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
