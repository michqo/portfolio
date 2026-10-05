import { ArrowDown, ArrowUpRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { CVDownloadLink } from "@/components/cv-download-link";
import { AppSketch } from "@/components/app-sketch";
import { PROJECT_LIST } from "@/lib/projects";
import { SKILL_CATEGORIES } from "@/lib/skills";

export default async function Page({ params }: { params: Promise<{ locale: "en" | "sk" }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const cvFile = `/Michal_Urban_Fullstack_Developer_${locale.toUpperCase()}.pdf`;

  return (
    <div className="mx-auto w-full max-w-4xl px-5 pb-14 pt-12 sm:px-8 sm:pb-16 sm:pt-16">
      <section id="about" aria-labelledby="intro-title" className="relative grid scroll-mt-16 items-center gap-8 md:grid-cols-[1fr_200px]">
        <div>
          <p className="mb-4 font-mono text-xs text-muted-foreground">{t("home.location")}</p>
          <h1 id="intro-title" className="intro-name text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[4.25rem]">
            Michal Urban<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{t("home.intro")}</p>
          <div className="mt-3 flex min-h-28 items-center pr-32 md:mt-5 md:min-h-0 md:pr-0">
            <a href="#apps" className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline hover:underline-offset-4">
              {t("nav.apps")}<ArrowDown aria-hidden="true" className="size-3.5 shrink-0" />
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 w-28 md:static md:w-auto"><AppSketch /></div>
      </section>

      <section id="apps" aria-labelledby="apps-title" className="mt-12 sm:mt-14">
        <div id="projects" className="mb-3">
          <h2 id="apps-title" className="section-label">{t("home.appsTitle")}</h2>
        </div>
        <p className="mb-6 text-sm leading-6 text-muted-foreground">{t("home.appsIntro")}</p>
        <ul className="app-directory border-t border-border">
          {PROJECT_LIST.map(({ id, name, href, github, icon: Icon, screenshot }) => (
            <li key={id} className={`app-${id} group/app grid grid-cols-[36px_minmax(0,1fr)] items-start gap-x-3 border-b border-border px-3 py-4 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-x-4 sm:px-4`}>
              <span className="app-icon mt-0.5 flex size-9 items-center justify-center rounded-xl sm:size-10"><Icon aria-hidden="true" className="size-5" /></span>
              <div className="min-w-0">
                <h3 className="text-base font-medium">{name}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{t(`apps.${id}.description`)}</p>
                {screenshot && <p className="mt-2 text-sm leading-6">{t(`apps.${id}.story`)}</p>}
                <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <span className="w-full min-w-0 break-words font-mono text-xs leading-5 text-muted-foreground sm:w-auto">{new URL(href).hostname.replace(/^www\./, "")}</span>
                  <div data-app-actions className="flex items-center gap-2">
                    <a href={href} aria-label={t("home.openFor", { name })} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-border px-3 text-xs font-medium text-primary transition-colors hover:bg-accent">
                      {t("home.open")}<ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
                    </a>
                    <a href={github} aria-label={t("home.sourceFor", { name })} className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-md border border-border px-3 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                      <Github aria-hidden="true" className="size-3.5 shrink-0" />{t("home.source")}
                    </a>
                  </div>
                </div>
                {screenshot && (
                  <details className="group/preview mt-1 min-w-0">
                    <summary aria-label={t("home.previewFor", { name })} className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-sm text-xs text-muted-foreground hover:text-foreground [&::-webkit-details-marker]:hidden">
                      {t("home.preview")}<ChevronDown aria-hidden="true" className="size-3.5 transition-transform group-open/preview:rotate-180" />
                    </summary>
                    <figure className="mt-1">
                      <Image src={screenshot} alt={t(`apps.${id}.screenshotAlt`)} sizes="(min-width: 896px) 744px, (min-width: 640px) calc(100vw - 152px), calc(100vw - 112px)" className="h-auto w-full rounded-lg border border-border" />
                      <figcaption className="mt-2 grid gap-1 text-xs leading-5 text-muted-foreground sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-4">
                        <span className="self-center">{t(`apps.${id}.screenshotCaption`)}</span>
                        <a href={screenshot.src} target="_blank" rel="noreferrer" aria-label={t("home.fullSizeFor", { name })} className="inline-flex min-h-11 items-center gap-1 justify-self-start rounded-sm hover:text-foreground hover:underline hover:underline-offset-4 sm:justify-self-end">
                          {t("home.fullSize")}<ArrowUpRight aria-hidden="true" className="size-3.5 shrink-0" />
                        </a>
                      </figcaption>
                    </figure>
                  </details>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="background" aria-labelledby="background-title" className="mt-12 sm:mt-14">
        <h2 id="background-title" className="section-label">{t("home.backgroundTitle")}</h2>
        <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground">{t("home.workDetail")}</p>
        <div id="experience" className="mt-7">
          <h3 className="sr-only">{t("experience.sectionTitle")}</h3>
          <dl className="space-y-5 border-l-2 border-primary/30 pl-4">
            {(["experienceResco", "experience"] as const).map((key) => (
              <div key={key} className="grid gap-1 sm:grid-cols-[1fr_auto] sm:gap-x-6">
                <dt className="text-sm font-medium">{t(`${key}.company`)} <span className="font-normal text-muted-foreground">/ {t(`${key}.jobTitle`)}</span></dt>
                <dd className="font-mono text-xs leading-6 text-muted-foreground">{t(`${key}.period`)}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-6"><CVDownloadLink href={cvFile} label={t("hero.downloadCV")} locale={locale} /></div>
        <details className="group/background mt-7 border-y border-border">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-3 text-sm font-medium hover:text-primary [&::-webkit-details-marker]:hidden">
            {t("home.background")}<ChevronDown aria-hidden="true" className="size-4 shrink-0 text-muted-foreground transition-transform group-open/background:rotate-180" />
          </summary>
          <div className="space-y-7 pb-6 pt-2">
            <div id="skills">
              <h3 className="mb-4 text-sm font-medium">{t("skills.sectionTitle")}</h3>
              <dl className="space-y-3">
                {SKILL_CATEGORIES.map(({ labelKey, items }) => (
                  <div key={labelKey} className="grid gap-1 sm:grid-cols-[90px_1fr] sm:gap-4">
                    <dt className="text-xs font-medium leading-6">{t(`skills.${labelKey}`)}</dt>
                    <dd className="text-sm leading-6 text-muted-foreground">{items.map(({ label }) => label).join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div id="education">
              <h3 className="mb-3 text-sm font-medium">{t("education.sectionTitle")}</h3>
              <p className="text-sm leading-6">{t("education.universityName")}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{t("education.universityDescription")}</p>
              <p className="mb-5 mt-1 font-mono text-xs leading-6 text-muted-foreground">{t("education.universityPeriod")}</p>
              <p className="text-sm leading-6">{t("education.schoolName")}</p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{t("education.schoolDescription")}</p>
              <p className="mt-1 font-mono text-xs leading-6 text-muted-foreground">{t("education.schoolPeriod")}</p>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                {["cert1Title", "cert2Title", "cert3Title"].map((key) => <li key={key}>{t(`education.${key}`)}</li>)}
              </ul>
            </div>
          </div>
        </details>
      </section>

      <section id="contact" aria-labelledby="contact-title" className="mt-12 sm:mt-14">
        <h2 id="contact-title" className="section-label">{t("contact.sectionTitle")}</h2>
        <div className="mt-4 min-w-0">
          <p className="text-base leading-7 text-muted-foreground">{t("home.contact")}</p>
          <a href="mailto:michal.urban724@gmail.com" className="mt-2 inline-flex min-h-11 max-w-full items-center gap-2 rounded-sm text-base font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary sm:text-lg">
            <Mail aria-hidden="true" className="size-4 shrink-0" /><span className="break-all">michal.urban724@gmail.com</span>
          </a>
          <div className="mt-1 flex flex-wrap gap-x-6">
            <a href="https://github.com/michqo" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground hover:text-foreground"><Github aria-hidden="true" className="size-4" />GitHub</a>
            <a href="https://www.linkedin.com/in/michal-urban-0a763a324/" className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm text-muted-foreground hover:text-foreground"><Linkedin aria-hidden="true" className="size-4" />LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
