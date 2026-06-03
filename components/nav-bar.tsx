"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { Github, LayoutGrid } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PROJECT_LIST } from "@/lib/projects";

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
          initial={{ opacity: 0, y: -12, width: "100%", paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            width: scrolled ? "672px" : "100%",
            paddingLeft: scrolled ? 16 : 0,
            paddingRight: scrolled ? 16 : 0,
            paddingTop: scrolled ? 8 : 0,
          }}
          transition={{
            opacity: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            y: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            width: EASE,
            paddingLeft: EASE,
            paddingRight: EASE,
            paddingTop: EASE,
          }}
        style={{ maxWidth: "100%" }}
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
              <span className="text-primary transition-colors group-hover:text-primary/70">
                /
              </span>
              <span className="transition-colors group-hover:text-primary">
                miqal
              </span>
            </Link>

            <div className="flex items-stretch gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Apps">
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-60 p-1.5">
                  {PROJECT_LIST.map(({ name, href, description, icon: Icon }) => (
                    <DropdownMenuItem key={href} asChild>
                      <a
                        href={href}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-3 py-3 cursor-pointer"
                      >
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border/50 bg-muted">
                          <Icon className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium leading-tight text-foreground">
                            {name}
                          </div>
                          <div className="mt-0.5 truncate text-xs text-muted-foreground">
                            {description}
                          </div>
                        </div>
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

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
