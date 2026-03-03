import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function NavBar() {
  return (
    <header className="border-border/40 sticky top-0 z-50 flex w-full justify-center border-b px-4 py-3 backdrop-blur-md sm:px-8 bg-primary-foreground/60">
      <div className="flex w-full max-w-7xl items-center justify-between font-mono text-sm">
        <Link 
          href="/" 
          className="text-base font-bold tracking-tight hover:text-primary/80 transition-colors"
        >
          dev~portfolio
        </Link>
        
        <nav className="flex items-center gap-6">
          <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
            ~/projects
          </Link>
          <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors hidden sm:block">
            ~/skills
          </Link>
          <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors hidden md:block">
            ~/experience
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}