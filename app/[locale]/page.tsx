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
import { FadeIn, FadeInView } from "@/components/motion";
import { CVDownloadLink } from "@/components/cv-download-link";
import { TechBadge } from "@/components/tech-badge";
import { SKILL_CATEGORIES, PROJECTS } from "@/lib/skills";
import { HoverCardLabelsProvider } from "@/contexts/hover-card-labels-context";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "sk" }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const cvFile = `/Michal_Urban_Fullstack_Developer_${locale.toUpperCase()}.pdf`;

  const hoverCardLabels = {
    generalTooling: t("hoverCard.generalTooling"),
    thisProject: t("hoverCard.thisProject"),
    otherProjects: t("hoverCard.otherProjects"),
    projects: t("hoverCard.projects"),
    experience: t("hoverCard.experience"),
  };

  return (
    <HoverCardLabelsProvider labels={hoverCardLabels}>
    <div className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-20 sm:px-8">
      <div className="relative mx-auto w-full max-w-3xl font-mono">
        <FadeIn delay={0} className="mb-6 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {t("hero.badge")}
          </span>
          <span className="text-xs text-muted-foreground">{t("hero.role")}</span>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mb-1 text-6xl font-bold tracking-tight text-balance sm:text-8xl">
            Michal Urban<span className="animate-blink ml-1 inline-block h-[0.8em] w-[3px] translate-y-[2px] rounded-sm bg-primary align-middle" />
          </h1>
          <div className="mb-8 text-sm text-muted-foreground">{t("hero.subtitle")}</div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {t("hero.description")}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="rounded-md bg-primary px-6 py-2.5 text-center text-sm font-medium text-primary-foreground shadow-md shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40 sm:w-auto"
          >
            {t("hero.viewProjects")}
          </a>
          <CVDownloadLink href={cvFile} label={t("hero.downloadCV")} locale={locale} />
          <a
            href="#contact"
            className="rounded-md border border-border px-6 py-2.5 text-center text-sm font-medium transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary sm:w-auto"
          >
            {t("hero.getInTouch")}
          </a>
        </div>
        </FadeIn>

        <div id="experience" className="mt-20 pt-8">
          <FadeInView>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-bold text-primary/50">01</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground">{t("experience.sectionTitle")}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="flex flex-col gap-4">

            {/* Resco – current role */}
            <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-6 transition-colors hover:border-primary/40">
              <div className="absolute inset-y-0 left-0 w-1 bg-primary" />

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">{t("experienceResco.jobTitle")}</h3>
                  <div className="mt-1 flex items-center gap-2 text-sm text-primary">
                    <span>{t("experienceResco.company")}</span>
                    <span className="text-border">·</span>
                    <span className="text-muted-foreground">{t("experienceResco.workType")}</span>
                  </div>
                </div>
                <div className="flex shrink-0 flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs text-primary">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                    {t("experienceResco.currentBadge")}
                  </span>
                  <span className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground">
                    {t("experienceResco.period")}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs text-muted-foreground/70 leading-relaxed">
                {t("experienceResco.companyBlurb")}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {(["bullet1", "bullet2", "bullet3"] as const).map((key) => (
                  <li key={key} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/80" />
                    {t(`experienceResco.${key}`)}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["TypeScript", "React", "Power Apps", "Dynamics 365", "Power Platform"].map((tag) => (
                  <TechBadge key={tag} label={tag} variant="project" />
                ))}
              </div>
            </div>

            {/* Backbone */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
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
                <span className="shrink-0 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground">
                  {t("experience.period")}
                </span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {(["bullet1", "bullet2", "bullet3", "bullet4"] as const).map((key) => (
                  <li key={key} className="flex gap-2">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/80" />
                    {t(`experience.${key}`)}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React", "Django", "PostgreSQL", "REST APIs", "GitLab"].map((tag) => (
                  <TechBadge key={tag} label={tag} variant="project" />
                ))}
              </div>
            </div>

          </div>          </FadeInView>        </div>

        <div id="education" className="mt-20 pt-8">
          <FadeInView>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-bold text-primary/50">02</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground">{t("education.sectionTitle")}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="flex flex-col gap-4">
            {/* Education */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
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
                <span className="shrink-0 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground h-fit">
                  {t("education.schoolPeriod")}
                </span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{t("education.schoolLocation")}</p>
            </div>

            {/* Certificates */}
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
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
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/80" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm leading-snug">{t(`education.${titleKey}`)}</p>
                        <span className="ml-1 mt-0.5 shrink-0 rounded border border-border px-2 py-0.5 text-xs text-muted-foreground">
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
          </FadeInView>
        </div>

        <div id="projects" className="mt-20 pt-8">
          <FadeInView>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-bold text-primary/50">03</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground">{t("projects.sectionTitle")}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[
                    { src: "/projects/weather/homepage.png", alt: "Homepage" },
                    { src: "/projects/weather/dashboard.png", alt: "Dashboard" },
                    { src: "/projects/weather/measurements.png", alt: "Measurements" },
                    { src: "/projects/weather/forecast.png", alt: "Forecast" },
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
                      href="https://ms.miqal.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t("projects.liveDemo")}
                    </a>
                    <a
                      href="https://github.com/michqo/ms_web"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
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
                    ] as const
                  ).map((key) => (
                    <li key={key} className="flex gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/80" />
                      {t(`projects.${key}`)}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["SvelteKit", "Django", "ESP32", "TypeScript", "PostgreSQL", "LayerChart"].map(
                    (tag) => (
                      <TechBadge key={tag} label={tag} variant="project" currentProject={PROJECTS.WEATHER} />
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[
                    { src: "/projects/subnify/home.png", alt: "Subnify home" },
                    { src: "/projects/subnify/visualizer.png", alt: "Subnify visualizer" },
                    { src: "/projects/subnify/calc.png", alt: "Subnify calculator" },
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

              <div className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-semibold">{t("projects.subnifyTitle")}</h3>
                      <span className="rounded border border-primary/30 bg-primary/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        {t("projects.subnifyBadge")}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{t("projects.subnifySubtitle")}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <a
                      href="https://subnify.miqal.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t("projects.liveDemo")}
                    </a>
                    <a
                      href="https://github.com/michqo/subnify"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {t("projects.viewSource")}
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {t("projects.subnifyDescription")}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {(
                    [
                      "subnifyBullet1",
                      "subnifyBullet3",
                      "subnifyBullet4",
                    ] as const
                  ).map((key) => (
                    <li key={key} className="flex gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/80" />
                      {t(`projects.${key}`)}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "Networking",
                    "VLSM",
                    "CIDR",
                    "RFC 1918",
                  ].map((tag) => (
                    <TechBadge key={tag} label={tag} variant="project" currentProject={PROJECTS.SUBNIFY} />
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {[
                    { src: "/projects/sleep/homepage.png", alt: "Sleep cycle homepage" },
                    { src: "/projects/sleep/calculator.png", alt: "Sleep cycle calculator" },
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

              <div className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold">{t("projects.sleepTitle")}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{t("projects.sleepSubtitle")}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <a
                      href="https://www.sleep.miqal.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      {t("projects.liveDemo")}
                    </a>
                    <a
                      href="https://github.com/michqo/sleep-cycle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <Github className="h-3.5 w-3.5" />
                      {t("projects.viewSource")}
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {t("projects.sleepDescription")}
                </p>

                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {(
                    [
                      "sleepBullet1",
                      "sleepBullet2",
                    ] as const
                  ).map((key) => (
                    <li key={key} className="flex gap-2">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/80" />
                      {t(`projects.${key}`)}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Calculator", "Sleep Science"].map((tag) => (
                    <TechBadge key={tag} label={tag} variant="project" currentProject={PROJECTS.SLEEP} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </FadeInView>
        </div>

        <div id="skills" className="mt-20 pt-8">
          <FadeInView>
          <div className="mb-8 flex items-center gap-3">
            <span className="text-xs font-bold text-primary/50">04</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground">{t("skills.sectionTitle")}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SKILL_CATEGORIES.map(({ labelKey, items }) => (
              <div key={labelKey} className="relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
                <div className="absolute inset-y-0 left-0 w-0.75 bg-primary" />
                <div className="mb-1 text-sm font-bold uppercase tracking-widest text-primary">
                  {t(`skills.${labelKey}`)}
                </div>
                <div className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full border border-border px-2 py-0.5 tabular-nums">{items.length}</span>
                  <span>{t(`skills.technologies`)}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(({ label }) => (
                    <TechBadge key={label} label={label} variant="skill" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          </FadeInView>
        </div>

        <div id="contact" className="mt-20 pt-8">
          <FadeInView>
          <div className="mb-6 flex items-center gap-3">
            <span className="text-xs font-bold text-primary/50">05</span>
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground">{t("contact.sectionTitle")}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>
          <p className="mb-6 text-sm text-muted-foreground">{t("contact.intro")}</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <a
              href="https://github.com/michqo"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <div className="absolute inset-y-0 left-0 w-0.75 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <Github className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="truncate font-mono text-sm transition-colors group-hover:text-primary">
                  github.com/michqo
                </div>
              </div>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/michal-urban-0a763a324/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <div className="absolute inset-y-0 left-0 w-0.75 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <Linkedin className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="truncate font-mono text-sm transition-colors group-hover:text-primary">
                  Michal Urban
                </div>
              </div>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="mailto:michal.urban724@gmail.com"
              className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary"
            >
              <div className="absolute inset-y-0 left-0 w-0.75 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
              <Mail className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="truncate font-mono text-sm transition-colors group-hover:text-primary">
                  michal.urban724@gmail.com
                </div>
              </div>
              <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-4 overflow-hidden rounded-xl border border-border bg-card p-5">
              <MapPin className="h-5 w-5 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <div className="text-xs text-muted-foreground">{t("contact.locationLabel")}</div>
                <div className="font-mono text-sm">{t("contact.location")}</div>
              </div>
            </div>
          </div>
          </FadeInView>
        </div>
      </div>
    </div>
    </HoverCardLabelsProvider>
  );
}
