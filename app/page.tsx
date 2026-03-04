import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 sm:px-8">
      {/* no overlay — gradient lives on <body> */}
      <div className="relative mx-auto w-full max-w-3xl font-mono">
        <div className="mb-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            Open to opportunities
          </span>
          <span className="text-xs text-muted-foreground">Full Stack Developer</span>
        </div>

        <h1 className="mb-1 text-5xl font-bold tracking-tight sm:text-7xl">
          Michal Urban
        </h1>
        <div className="mb-8 text-sm text-muted-foreground">miqal · Bratislava, Slovakia</div>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Full Stack Developer with commercial experience delivering React frontends and Django REST APIs in production.
          Passionate about backend architecture, relational databases, and building reliable, data-driven applications.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View Projects
          </a>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            Get in Touch
          </a>
        </div>

        <div id="experience" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Experience</div>
          <div className="relative border border-border bg-card p-6 transition-colors hover:border-primary/50">
            {/* accent bar */}
            <div className="absolute inset-y-0 left-0 w-0.75 bg-primary" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold">Frontend / Backend Developer</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-primary">
                  <span>Backbone</span>
                  <span className="text-border">·</span>
                  <span className="text-muted-foreground">Hybrid</span>
                </div>
              </div>
              <span className="shrink-0 border border-border px-3 py-1 text-xs text-muted-foreground">
                May 2023 – Oct 2024
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                Delivered production React features in a 2-person team for an advertisement management dashboard — including CRUD operations, advanced filtering, and analytics views
              </li>
              <li className="flex gap-2">
                <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                Designed and implemented 15+ Django REST API endpoints backed by a normalised PostgreSQL schema
              </li>
              <li className="flex gap-2">
                <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                Integrated multiple third-party APIs, improved UI rendering performance, and maintained a GitLab CI/CD-based workflow throughout the full development lifecycle
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Django", "PostgreSQL", "REST APIs", "GitLab"].map((tag) => (
                <span key={tag} className="border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-xs text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div id="education" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Education &amp; Certifications</div>

          <div className="flex flex-col gap-3">
            {/* Education */}
            <div className="relative border border-border bg-card p-5 transition-colors hover:border-primary/50">
              <div className="absolute inset-y-0 left-0 w-0.75 bg-primary" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">Education</div>
                  <h3 className="text-sm font-semibold">Secondary School of Electrical Engineering, Zochova 9</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Intelligent Technologies · Completed with Matura exam</p>
                </div>
                <span className="shrink-0 border border-border px-3 py-1 text-xs text-muted-foreground h-fit">
                  2021 – 2025
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Bratislava, Slovakia</p>
            </div>

            {/* Certificates */}
            <div className="relative border border-border bg-card p-5 transition-colors hover:border-primary/50">
              <div className="absolute inset-y-0 left-0 w-0.75 bg-primary" />
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Certifications</div>
              <div className="flex flex-col gap-3">
                {[
                  { title: "Electrical Technician Certificate (§ 21)", issuer: "Slovak Technical Standard", year: "2025" },
                  { title: "Cisco CCNA 3 — Enterprise Networking, Security and Automation", issuer: "Cisco Networking Academy", year: "2024" },
                  { title: "Cisco CCNA 2 — Switching, Routing and Wireless Essentials", issuer: "Cisco Networking Academy", year: "2023" },
                ].map(({ title, issuer, year }) => (
                  <div key={title} className="flex items-start justify-between gap-4">
                    <div className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <div>
                        <p className="text-sm">{title}</p>
                        <p className="text-xs text-muted-foreground">{issuer}</p>
                      </div>
                    </div>
                    <span className="shrink-0 border border-border px-2.5 py-0.5 text-xs text-muted-foreground">{year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Projects</div>

          <div className="border border-border bg-card transition-colors hover:border-primary/50">
            {/* Screenshots carousel */}
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {[
                  { src: "/homepage.png",     alt: "Homepage" },
                  { src: "/dashboard.png",    alt: "Dashboard" },
                  { src: "/measurements.png", alt: "Measurements" },
                  { src: "/forecast.png",     alt: "Forecast" },
                ].map(({ src, alt }) => (
                  <CarouselItem key={src}>
                    <div className="relative aspect-video w-full overflow-hidden border-b border-border">
                      <Image src={src} alt={alt} fill className="object-cover" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-3" />
              <CarouselNext className="right-3" />
            </Carousel>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">Weather Station System</h3>
                  <p className="mt-1 text-xs text-muted-foreground">IoT · Full Stack · Hardware Integration</p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <a
                    href="https://ms-urban.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/michqo/ms_web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    View Source
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                A complete IoT weather station monitoring system with a Django REST backend, SvelteKit frontend dashboard, and ESP32 hardware clients for real-time environmental data collection across multiple stations.
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {[
                  "Real-time monitoring with instant updates of latest weather conditions",
                  "Interactive charts for historical data visualization using LayerChart",
                  "Multi-day weather forecasts and station management interface",
                  "Full i18n support and custom ESP32 hardware integration",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["SvelteKit", "Django", "ESP32", "TypeScript", "PostgreSQL", "LayerChart"].map((tag) => (
                  <span key={tag} className="border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-xs text-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
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