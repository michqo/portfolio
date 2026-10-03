import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/nav-bar";
import { PostHogProvider } from "@/components/posthog-provider";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export const dynamic = "force-static";
export const dynamicParams = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    metadataBase: new URL("https://miqal.xyz"),
    title: "Michal Urban — miqal",
    description: t("home.metaDescription"),
    keywords: [
      "software developer",
      "full-stack",
      "React",
      "Django",
      "TypeScript",
      "Next.js",
      "portfolio",
      "Michal Urban",
      "Bratislava",
    ],
    authors: [{ name: "Michal Urban", url: "https://miqal.xyz" }],
    creator: "Michal Urban",
    alternates: {
      canonical: locale === routing.defaultLocale ? "https://miqal.xyz" : `https://miqal.xyz/${locale}`,
      languages: {
        "en": "https://miqal.xyz",
        "sk": "https://miqal.xyz/sk",
      },
    },
    robots: {
      index: locale === routing.defaultLocale,
      follow: true,
      googleBot: {
        index: locale === routing.defaultLocale,
        follow: true,
      },
    },
    openGraph: {
      title: "Michal Urban — miqal",
      description: t("home.metaDescription"),
      url: locale === routing.defaultLocale ? "https://miqal.xyz" : `https://miqal.xyz/${locale}`,
      siteName: "Miqal",
      locale: locale === "sk" ? "sk_SK" : "en_US",
      type: "website",
        images: [
          {
            url: "/og-preview.png",
            width: 1200,
            height: 630,
            alt: "Miqal — Software Developer Portfolio",
          },
        ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Michal Urban — miqal",
      description: t("home.metaDescription"),
      images: ["/og-preview.png"],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });
  const t = await getTranslations({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <PostHogProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <a href="#main-content" className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-md border border-border bg-background px-4 py-3 text-sm focus:translate-y-0">
                {t("nav.skip")}
              </a>
              <NavBar />
              <main id="main-content" tabIndex={-1} className="flex-1 outline-none">{children}</main>
              <footer className="border-t border-border">
                <div className="mx-auto flex min-h-20 max-w-4xl flex-wrap items-center justify-between gap-x-4 gap-y-1 px-5 py-3 text-xs text-muted-foreground sm:px-8">
                  <FooterRights locale={locale} />
                  <a href="https://github.com/michqo/portfolio" className="inline-flex min-h-11 items-center rounded-sm hover:text-foreground hover:underline hover:underline-offset-4">{t("footer.source")}</a>
                </div>
              </footer>
            </ThemeProvider>
          </NextIntlClientProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}

async function FooterRights({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "footer" });
  return (
    <span>
      &copy; {new Date().getFullYear()} — {t("rights")}
    </span>
  );
}
