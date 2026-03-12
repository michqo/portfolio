"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { Github } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const FLOAT_IN = 80;
const FLOAT_OUT = 40;
const EASE = { duration: 0.5, ease: [0.4, 0, 0.2, 1] } as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled((prev) => {
        if (!prev && y > FLOAT_IN) return true;
        if (prev && y < FLOAT_OUT) return false;
        return prev;
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full">
      <motion.div
        initial={{ opacity: 0, y: -12, maxWidth: "100%", paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          maxWidth: scrolled ? 672 : 10000,
          paddingLeft: scrolled ? 16 : 0,
          paddingRight: scrolled ? 16 : 0,
          paddingTop: scrolled ? 8 : 0,
        }}
        transition={{
          opacity: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          y: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          maxWidth: EASE,
          paddingLeft: EASE,
          paddingRight: EASE,
          paddingTop: EASE,
        }}
        style={{ width: "100%" }}
        className="mx-auto"
      >
        <motion.header
          animate={{ borderRadius: scrolled ? 12 : 0 }}
          transition={EASE}
          className={cn(
            "border-border/50 bg-background/80 backdrop-blur-md transition-[box-shadow,border] duration-500",
            scrolled
              ? "border shadow-lg shadow-black/8 dark:shadow-black/20"
              : "border-b",
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 font-mono text-sm sm:px-6">
            <Link
              href="/"
              className="group flex items-center gap-1 font-bold tracking-tight"
            >
              <span className="text-primary transition-colors group-hover:text-primary/70">/</span>
              <span className="transition-colors group-hover:text-primary">miqal</span>
            </Link>

            <div className="flex items-stretch gap-2">
              <Button asChild variant="outline" size="icon">
                <a
                  href="https://github.com/michqo/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View portfolio source on GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>

              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>
        </motion.header>
      </motion.div>
    </div>
  );
}
