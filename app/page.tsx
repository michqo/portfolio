import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function Page() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 sm:px-8">
      {/* no overlay — gradient lives on <body> */}
      <div className="relative mx-auto w-full max-w-3xl font-mono">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            available for hire
          </span>
          <span className="text-xs text-muted-foreground">Full Stack Developer</span>
        </div>

        <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-7xl">
          <span className="text-primary">Miqal</span>
        </h1>
        <div className="mb-8 text-sm text-muted-foreground">Michal Urban</div>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Software developer with commercial experience building React frontends and Django REST APIs.
          Focused on backend systems, relational databases, and scalable data-driven applications.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Contact Me
          </a>
        </div>

        <div id="skills" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skills</div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                label: "Frontend",
                items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Svelte", "SvelteKit", "Vite", "Redux Toolkit", "Redux Saga", "shadcn/ui", "SCSS", "PostCSS"],
              },
              {
                label: "Backend",
                items: ["Python", "Django", "Django REST Framework", "FastAPI", "Node.js", "Express", "Go", "Rust", "MongoDB", "Prisma", "Jest", "Mocha"],
              },
              {
                label: "DevOps",
                items: ["Docker", "Git", "GitHub Actions", "AWS", "Linux"],
              },
              {
                label: "Tools",
                items: ["GitHub", "GitLab", "VS Code", "Figma", "Vercel", "Postman", "Fly.io", "Neovim", "Hoppscotch", "Trello"],
              },
            ].map(({ label, items }) => (
              <div key={label}>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">{label}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href="https://github.com/michqo"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-border p-4 transition-colors hover:border-primary"
            >
              <Github className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="truncate text-sm transition-colors group-hover:text-primary">github.com/michqo</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/michal-urban-0a763a324/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 border border-border p-4 transition-colors hover:border-primary"
            >
              <Linkedin className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="truncate text-sm transition-colors group-hover:text-primary">Michal Urban</div>
              </div>
            </a>
            <a
              href="mailto:michal.urban724@gmail.com"
              className="group flex items-center gap-3 border border-border p-4 transition-colors hover:border-primary"
            >
              <Mail className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="truncate text-sm transition-colors group-hover:text-primary">michal.urban724@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3 border border-border p-4">
              <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="text-sm">Bratislava, Slovakia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}