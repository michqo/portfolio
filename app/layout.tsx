import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/nav-bar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Miqal — Software Developer",
  description: "Software developer specialising in React, TypeScript, Django and scalable full-stack applications. Available for hire.",
  keywords: ["software developer", "full-stack", "React", "Django", "TypeScript", "Next.js", "portfolio"],
  authors: [{ name: "Michal Urban", url: "https://miqal.dev" }],
  openGraph: {
    title: "Miqal — Software Developer",
    description: "Software developer specialising in React, TypeScript, Django and scalable full-stack applications.",
    url: "https://miqal.dev",
    siteName: "Miqal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Miqal — Software Developer",
    description: "Software developer specialising in React, TypeScript, Django and scalable full-stack applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <NavBar />
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t border-border/50 bg-background/70 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 font-mono text-xs text-muted-foreground sm:px-8">
              <span className="group flex items-center gap-1 font-bold tracking-tight">
                <span className="text-primary transition-colors group-hover:text-primary/70">/</span>
                <span className="transition-colors group-hover:text-primary">miqal</span>
              </span>
              <span>&copy; {new Date().getFullYear()} — all rights reserved</span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
