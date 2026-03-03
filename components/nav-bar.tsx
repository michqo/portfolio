import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function NavBar() {
  return (
    <header className="border-border/40 sticky top-0 z-50 flex w-full justify-center border-b bg-background/80 px-4 py-3 backdrop-blur-md sm:px-8">
      <div className="flex w-full max-w-7xl items-center justify-between font-mono text-sm">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight transition-colors hover:text-primary"
        >
          <span className="text-primary">~</span>
          <span>michal.urban</span>
        </Link>

        <nav className="flex items-center gap-6 text-muted-foreground">
          <Link href="#projects" className="transition-colors hover:text-primary">
            projects
          </Link>
          <Link href="#skills" className="hidden transition-colors hover:text-primary sm:block">
            skills
          </Link>
          <Link href="#experience" className="hidden transition-colors hover:text-primary md:block">
            experience
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}