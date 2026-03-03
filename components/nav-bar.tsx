import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "#experience", label: "Experience" },
  { href: "#projects",   label: "Projects" },
  { href: "#skills",     label: "Skills" },
  { href: "#contact",    label: "Contact" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-center border-b border-border/50 bg-background/70 px-4 py-3 backdrop-blur-md sm:px-8">
      <div className="flex w-full max-w-7xl items-center justify-between font-mono text-sm">
        <Link
          href="/"
          className="group flex items-center gap-1 font-bold tracking-tight"
        >
          <span className="text-primary transition-colors group-hover:text-primary/70">/</span>
          <span className="transition-colors group-hover:text-primary">miqal</span>
        </Link>

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

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
