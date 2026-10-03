import { ArrowDown, ArrowUpRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
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
      <section id="about" aria-labelledby="intro-title" className="grid scroll-mt-16 items-center gap-8 md:grid-cols-[1fr_200px]">
        <div>
          <p className="mb-4 font-mono text-xs text-muted-foreground">{t("home.location")}</p>
          <h1 id="intro-title" className="intro-name text-[2.5rem] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-[4.25rem]">
            Michal Urban<span className="text-primary">.</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{t("home.intro")}</p>
          <a href="#apps" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline hover:underline-offset-4">
            {t("nav.apps")}<ArrowDown aria-hidden="true" className="size-3.5" />
          </a>
        </div>
        <div className="hidden md:block"><AppSketch /></div>
      </section>

      <section id="apps" aria-labelledby="apps-title" className="mt-12 sm:mt-14">
        <div id="projects" className="mb-3">
          <h2 id="apps-title" className="section-label">{t("home.appsTitle")}</h2>
        </div>
        <p className="mb-6 text-sm leading-6 text-muted-foreground">{t("home.appsIntro")}</p>
        <ul className="app-directory border-t border-border">
          {PROJECT_LIST.map(({ id, name, href, github, icon: Icon }) => (
            <li key={id} className={`app-${id} group/app grid grid-cols-[36px_minmax(0,1fr)_64px] items-center gap-x-3 border-b border-border px-3 py-4 sm:grid-cols-[40px_minmax(0,1fr)_64px] sm:gap-x-4 sm:px-4`}>
              <a href={href} className="group/link col-span-3 grid min-h-11 grid-cols-[36px_minmax(0,1fr)_64px] items-start gap-x-3 gap-y-1 rounded-sm sm:grid-cols-[40px_minmax(0,1fr)_64px] sm:gap-x-4">
                <span className="app-icon row-span-2 mt-0.5 flex size-9 items-center justify-center rounded-xl sm:size-10"><Icon aria-hidden="true" className="size-5" /></span>
                <h3 className="min-w-0 text-base font-medium transition-colors group-hover/link:text-primary">{name}</h3>
                <ArrowUpRight aria-hidden="true" className="mt-1 size-4 justify-self-center text-muted-foreground transition-colors group-hover/link:text-primary" />
                <p className="col-span-2 col-start-2 text-sm leading-6 text-muted-foreground">{t(`apps.${id}.description`)}</p>
              </a>
              <span className="col-start-2 row-start-2 min-w-0 break-words font-mono text-xs leading-5 text-muted-foreground">{new URL(href).hostname.replace(/^www\./, "")}</span>
              <a href={github} aria-label={t("home.sourceFor", { name })} className="col-start-3 row-start-2 inline-flex min-h-11 items-center justify-center gap-1.5 rounded-sm text-xs text-muted-foreground hover:text-foreground hover:underline hover:underline-offset-4">
                <Github aria-hidden="true" className="size-4" />{t("home.source")}
              </a>
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
