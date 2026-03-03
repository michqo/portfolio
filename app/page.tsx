
export default function Page() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 sm:px-8">
      {/* Fade grid behind content */}
      <div className="pointer-events-none absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,black)]" />

      <div className="relative mx-auto w-full max-w-3xl font-mono">
        {/* Prompt tag */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            available for hire
          </span>
        </div>

        <div className="mb-3 text-xs tracking-widest text-muted-foreground">&gt; whoami</div>

        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl">
          Michal<br />
          <span className="text-primary">Urban</span>
          <span className="animate-blink ml-1 inline-block h-[0.85em] w-[3px] translate-y-[3px] bg-primary" />
        </h1>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Software developer with commercial experience building React frontends and Django REST APIs.
          Focused on backend systems, relational databases, and scalable data-driven applications.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            contact me
          </a>
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <div className="mb-4 text-xs tracking-widest text-muted-foreground">&gt; tech_stack</div>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Next.js", "Django", "Python", "PostgreSQL", "REST APIs", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}