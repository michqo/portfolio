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
  title: "Michal Urban — Software Developer",
  description: "Software developer specialising in React, TypeScript, Django and scalable full-stack applications.",
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
          <footer className="border-t bg-background/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 font-mono text-xs text-muted-foreground sm:px-8">
              <span>
                <span className="text-primary">~</span> michal.urban
              </span>
              <span>&copy; {new Date().getFullYear()} — all rights reserved</span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
