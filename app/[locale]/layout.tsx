import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/nav-bar";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

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
    title: "Miqal — Software Developer",
    description: t("hero.description"),
    keywords: [
      "software developer",
      "full-stack",
      "React",
      "Django",
      "TypeScript",
      "Next.js",
      "portfolio",
    ],
    authors: [{ name: "Michal Urban", url: "https://miqal.dev" }],
    openGraph: {
      title: "Miqal — Software Developer",
      description: t("hero.description"),
      url: "https://miqal.dev",
      siteName: "Miqal",
      locale: locale === "sk" ? "sk_SK" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Miqal — Software Developer",
      description: t("hero.description"),
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

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border/50 bg-background/70 backdrop-blur-md">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 font-mono text-xs text-muted-foreground sm:px-8">
                <span className="group flex items-center gap-1 font-bold tracking-tight">
                  <span className="text-primary transition-colors group-hover:text-primary/70">
                    /
                  </span>
                  <span className="transition-colors group-hover:text-primary">
                    miqal
                  </span>
                </span>
                <FooterRights />
              </div>
            </footer>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

async function FooterRights() {
  const t = await getTranslations("footer");
  return (
    <span>
      &copy; {new Date().getFullYear()} — {t("rights")}
    </span>
  );
}
