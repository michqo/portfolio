import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 sm:px-8">
      {/* no overlay — gradient lives on <body> */}
      <div className="relative mx-auto w-full max-w-3xl font-mono">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {t("hero.badge")}
          </span>
          <span className="text-xs text-muted-foreground">{t("hero.role")}</span>
        </div>

        <h1 className="mb-1 text-5xl font-bold tracking-tight text-balance sm:text-7xl">
          Michal Urban
        </h1>
        <div className="mb-8 text-sm text-muted-foreground">{t("hero.subtitle")}</div>

        <p className="mb-10 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
          {t("hero.description")}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="bg-primary px-6 py-2.5 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            {t("hero.viewProjects")}
          </a>
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border px-6 py-2.5 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            {t("hero.downloadCV")}
          </a>
          <a
            href="#contact"
            className="border border-border px-6 py-2.5 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            {t("hero.getInTouch")}
          </a>
        </div>

        <div id="experience" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("experience.sectionTitle")}
          </div>
          <div className="relative border border-border bg-card p-6 transition-colors hover:border-primary/50">
            {/* accent bar */}
            <div className="absolute inset-y-0 left-0 w-0.75 bg-primary" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold">{t("experience.jobTitle")}</h3>
                <div className="mt-1 flex items-center gap-2 text-sm text-primary">
                  <span>{t("experience.company")}</span>
                  <span className="text-border">·</span>
                  <span className="text-muted-foreground">{t("experience.workType")}</span>
                </div>
              </div>
              <span className="shrink-0 border border-border px-3 py-1 text-xs text-muted-foreground">
                {t("experience.period")}
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {(["bullet1", "bullet2", "bullet3"] as const).map((key) => (
                <li key={key} className="flex gap-2">
                  <span className="mt-1.25 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  {t(`experience.${key}`)}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {["React", "Django", "PostgreSQL", "REST APIs", "GitLab"].map((tag) => (
                <span
                  key={tag}
                  className="border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-xs text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div id="education" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("education.sectionTitle")}
          </div>

          <div className="flex flex-col gap-3">
            {/* Education */}
            <div className="relative border border-border bg-card p-5 transition-colors hover:border-primary/50">
              <div className="absolute inset-y-0 left-0 w-0.75 bg-primary" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                    {t("education.educationLabel")}
                  </div>
                  <h3 className="text-sm font-semibold">{t("education.schoolName")}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t("education.schoolDescription")}
                  </p>
                </div>
                <span className="shrink-0 border border-border px-3 py-1 text-xs text-muted-foreground h-fit">
                  {t("education.schoolPeriod")}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{t("education.schoolLocation")}</p>
            </div>

            {/* Certificates */}
            <div className="relative border border-border bg-card p-5 transition-colors hover:border-primary/50">
              <div className="absolute inset-y-0 left-0 w-0.75 bg-primary" />
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                {t("education.certificationsLabel")}
              </div>
              <div className="flex flex-col gap-3">
                {(
                  [
                    { titleKey: "cert1Title", issuerKey: "cert1Issuer", year: "2025" },
                    { titleKey: "cert2Title", issuerKey: "cert2Issuer", year: "2024" },
                    { titleKey: "cert3Title", issuerKey: "cert3Issuer", year: "2023" },
                  ] as const
                ).map(({ titleKey, issuerKey, year }) => (
                  <div key={titleKey} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm leading-snug">{t(`education.${titleKey}`)}</p>
                        <span className="ml-1 mt-0.5 shrink-0 border border-border px-2 py-0.5 text-xs text-muted-foreground">
                          {year}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-muted-foreground">{t(`education.${issuerKey}`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("projects.sectionTitle")}
          </div>

          <div className="border border-border bg-card transition-colors hover:border-primary/50">
            {/* Screenshots carousel */}
            <Carousel className="w-full" opts={{ loop: true }}>
              <CarouselContent>
                {[
                  { src: "/homepage.png", alt: "Homepage" },
                  { src: "/dashboard.png", alt: "Dashboard" },
                  { src: "/measurements.png", alt: "Measurements" },
                  { src: "/forecast.png", alt: "Forecast" },
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
                  <h3 className="text-base font-semibold">{t("projects.weatherTitle")}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t("projects.weatherSubtitle")}
                  </p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <a
                    href="https://ms-urban.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t("projects.liveDemo")}
                  </a>
                  <a
                    href="https://github.com/michqo/ms_web"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github className="h-3.5 w-3.5" />
                    {t("projects.viewSource")}
                  </a>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
                {t("projects.weatherDescription")}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {(
                  [
                    "weatherBullet1",
                    "weatherBullet2",
                    "weatherBullet3",
                    "weatherBullet4",
                  ] as const
                ).map((key) => (
                  <li key={key} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {t(`projects.${key}`)}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["SvelteKit", "Django", "ESP32", "TypeScript", "PostgreSQL", "LayerChart"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="border border-primary/30 bg-primary/5 px-2.5 py-0.5 text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div id="skills" className="mt-16 border-t border-border pt-8">
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("skills.sectionTitle")}
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {(
              [
                {
                  labelKey: "frontend" as const,
                  items: [
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Svelte",
                    "SvelteKit",
                    "Vite",
                    "Redux Toolkit",
                    "Redux Saga",
                    "shadcn/ui",
                    "SCSS",
                    "PostCSS",
                  ],
                },
                {
                  labelKey: "backend" as const,
                  items: [
                    "Python",
                    "Django",
                    "Django REST Framework",
                    "FastAPI",
                    "Node.js",
                    "Express",
                    "Go",
                    "Rust",
                    "MongoDB",
                    "Prisma",
                    "Jest",
                    "Mocha",
                  ],
                },
                {
                  labelKey: "devops" as const,
                  items: ["Docker", "Git", "GitHub Actions", "AWS", "Linux"],
                },
                {
                  labelKey: "tools" as const,
                  items: [
                    "GitHub",
                    "GitLab",
                    "VS Code",
                    "Figma",
                    "Vercel",
                    "Postman",
                    "Fly.io",
                    "Neovim",
                    "Hoppscotch",
                    "Trello",
                  ],
                },
              ] as const
            ).map(({ labelKey, items }) => (
              <div key={labelKey}>
                <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                  {t(`skills.${labelKey}`)}
                </div>
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
          <div className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {t("contact.sectionTitle")}
          </div>
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
                <div className="truncate text-sm transition-colors group-hover:text-primary">
                  github.com/michqo
                </div>
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
                <div className="truncate text-sm transition-colors group-hover:text-primary">
                  Michal Urban
                </div>
              </div>
            </a>
            <a
              href="mailto:michal.urban724@gmail.com"
              className="group flex items-center gap-3 border border-border p-4 transition-colors hover:border-primary"
            >
              <Mail className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="min-w-0">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="truncate text-sm transition-colors group-hover:text-primary">
                  michal.urban724@gmail.com
                </div>
              </div>
            </a>
            <div className="flex items-center gap-3 border border-border p-4">
              <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <div className="text-xs text-muted-foreground">{t("contact.locationLabel")}</div>
                <div className="text-sm">{t("contact.location")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
