"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#education",  label: "Education" },
  { href: "#projects",   label: "Projects" },
  { href: "#skills",     label: "Skills" },
  { href: "#contact",    label: "Contact" },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

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
