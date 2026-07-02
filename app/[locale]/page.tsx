import { Github, Linkedin, Mail, MapPin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeIn, FadeInView } from "@/components/motion";
import { CVDownloadLink } from "@/components/cv-download-link";
import { TechBadge } from "@/components/tech-badge";
import { SKILL_CATEGORIES } from "@/lib/skills";
import { PROJECTS } from "@/lib/projects";
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

          {/* ── Hero ── */}
          <FadeIn delay={0} className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded border border-primary/30 bg-primary/5 px-2.5 py-1 text-xs text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
              {t("hero.badge")}
            </span>
            <span className="text-xs text-muted-foreground">{t("hero.role")}</span>
          </FadeIn>

          <FadeIn delay={0.07}>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance sm:text-7xl">
              Michal Urban
              <span className="animate-blink ml-1 inline-block h-[0.8em] w-0.75 translate-y-0.5 rounded-sm bg-primary align-middle" />
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {t("hero.description")}
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded border border-primary bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
            >
              {t("hero.viewProjects")}
            </a>
            <CVDownloadLink href={cvFile} label={t("hero.downloadCV")} locale={locale} />
            <a
              href="#contact"
              className="rounded border border-border px-5 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              {t("hero.getInTouch")}
            </a>
          </FadeIn>

          {/* ── Experience ── */}
          <div id="experience" className="mt-24">
            <FadeInView>
              <SectionHeader label={t("experience.sectionTitle")} />
              <div className="flex flex-col gap-3">

                {/* Resco */}
                <div className="rounded border border-border bg-card p-5 transition-colors hover:border-primary/50">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold">{t("experienceResco.jobTitle")}</h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-primary">{t("experienceResco.company")}</span>
                        <span>·</span>
                        <span>{t("experienceResco.workType")}</span>
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded border border-primary/30 bg-primary/5 px-2 py-0.5 text-xs text-primary">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                        {t("experienceResco.currentBadge")}
                      </span>
                      <span className="rounded border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                        {t("experienceResco.period")}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["TypeScript", "React", "Power Apps", "Dynamics 365", "Power Platform"].map((tag) => (
                      <TechBadge key={tag} label={tag} variant="project" />
                    ))}
                  </div>
                </div>

                {/* Backbone */}
                <div className="rounded border border-border bg-card p-5 transition-colors hover:border-primary/50">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-sm font-semibold">{t("experience.jobTitle")}</h3>
                      <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="text-primary">{t("experience.company")}</span>
                        <span>·</span>
                        <span>{t("experience.workType")}</span>
                      </div>
                    </div>
                    <span className="shrink-0 rounded border border-border px-2.5 py-0.5 text-xs text-muted-foreground h-fit">
                      {t("experience.period")}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["React", "Django", "PostgreSQL", "REST APIs", "GitLab"].map((tag) => (
                      <TechBadge key={tag} label={tag} variant="project" />
                    ))}
                  </div>
                </div>

              </div>
            </FadeInView>
          </div>

          {/* ── Projects ── */}
          <div id="projects" className="mt-24">
            <FadeInView>
              <SectionHeader label={t("projects.sectionTitle")} />
              <div className="flex flex-col gap-3">

                {/* Weather Station */}
                <div className="overflow-hidden rounded border border-border bg-card transition-colors hover:border-primary/50">
                  <div className="relative aspect-video w-full overflow-hidden border-b border-border">
                    <Image
                      src="/projects/weather/dashboard.png"
                      alt="Weather station dashboard"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-sm font-semibold">{t("projects.weatherTitle")}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{t("projects.weatherSubtitle")}</p>
                      </div>
                      <div className="flex shrink-0 flex-wrap gap-2">
                        <a
                          href="https://ms.miqal.xyz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t("projects.liveDemo")}
                        </a>
                        <a
                          href="https://github.com/michqo/ms_web"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <Github className="h-3 w-3" />
                          {t("projects.viewSource")}
                        </a>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {t("projects.weatherDescription")}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["SvelteKit", "Django", "ESP32", "TypeScript", "PostgreSQL", "LayerChart"].map((tag) => (
                        <TechBadge key={tag} label={tag} variant="project" currentProject={PROJECTS.WEATHER} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subnify */}
                <div className="overflow-hidden rounded border border-border bg-card transition-colors hover:border-primary/50">
                  <div className="relative aspect-video w-full overflow-hidden border-b border-border">
                    <Image
                      src="/projects/subnify/visualizer.png"
                      alt="Subnify subnet visualizer"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-sm font-semibold">{t("projects.subnifyTitle")}</h3>
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
                          className="inline-flex items-center gap-1.5 rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {t("projects.liveDemo")}
                        </a>
                        <a
                          href="https://github.com/michqo/subnify"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                        >
                          <Github className="h-3 w-3" />
                          {t("projects.viewSource")}
                        </a>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      {t("projects.subnifyDescription")}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {["Next.js", "TypeScript", "Networking", "VLSM", "CIDR", "RFC 1918"].map((tag) => (
                        <TechBadge key={tag} label={tag} variant="project" currentProject={PROJECTS.SUBNIFY} />
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </FadeInView>
          </div>

          {/* ── Skills ── */}
          <div id="skills" className="mt-24">
            <FadeInView>
              <SectionHeader label={t("skills.sectionTitle")} />
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {SKILL_CATEGORIES.map(({ labelKey, items }) => (
                  <div key={labelKey} className="rounded border border-border bg-card p-5 transition-colors hover:border-primary/50">
                    <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                      {t(`skills.${labelKey}`)}
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

          {/* ── Education ── */}
          <div id="education" className="mt-24">
            <FadeInView>
              <SectionHeader label={t("education.sectionTitle")} />
              <div className="flex flex-col gap-3">

                {/* School */}
                <div className="flex flex-col gap-1 rounded border border-border bg-card p-5 transition-colors hover:border-primary/50 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold">{t("education.schoolName")}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{t("education.schoolDescription")}</p>
                  </div>
                  <span className="shrink-0 rounded border border-border px-2.5 py-0.5 text-xs text-muted-foreground w-fit">
                    {t("education.schoolPeriod")}
                  </span>
                </div>

                {/* Certifications */}
                <div className="rounded border border-border bg-card p-5 transition-colors hover:border-primary/50">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
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
                      <div key={titleKey} className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-sm leading-snug">{t(`education.${titleKey}`)}</p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{t(`education.${issuerKey}`)}</p>
                        </div>
                        <span className="shrink-0 rounded border border-border px-2 py-0.5 text-xs text-muted-foreground">
                          {year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </FadeInView>
          </div>

          {/* ── Contact ── */}
          <div id="contact" className="mt-24">
            <FadeInView>
              <SectionHeader label={t("contact.sectionTitle")} />
              <p className="mb-5 text-sm text-muted-foreground">{t("contact.intro")}</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="https://github.com/michqo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <Github className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground">GitHub</div>
                    <div className="truncate text-sm transition-colors group-hover:text-primary">github.com/michqo</div>
                  </div>
                  <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/michal-urban-0a763a324/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <Linkedin className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground">LinkedIn</div>
                    <div className="truncate text-sm transition-colors group-hover:text-primary">Michal Urban</div>
                  </div>
                  <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="mailto:michal.urban724@gmail.com"
                  className="group flex items-center gap-4 rounded border border-border bg-card p-4 transition-colors hover:border-primary"
                >
                  <Mail className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground">Email</div>
                    <div className="truncate text-sm transition-colors group-hover:text-primary">michal.urban724@gmail.com</div>
                  </div>
                  <ExternalLink className="h-3 w-3 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <div className="flex items-center gap-4 rounded border border-border bg-card p-4">
                  <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-muted-foreground">{t("contact.locationLabel")}</div>
                    <div className="text-sm">{t("contact.location")}</div>
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

function SectionHeader({ label }: { label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="text-xs font-semibold uppercase tracking-widest text-foreground">{label}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}
