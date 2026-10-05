import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { SocialCard } from "@/og/social-card";
import { routing } from "@/i18n/routing";

export const dynamic = "force-static";
export const alt = "Michal Urban — miqal.xyz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Image({ params }: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const [t, regular, bold, mono] = await Promise.all([
    getTranslations({ locale }),
    readFile(join(process.cwd(), "og/fonts/Geist-Regular.ttf")),
    readFile(join(process.cwd(), "og/fonts/Geist-Bold.ttf")),
    readFile(join(process.cwd(), "og/fonts/GeistMono-Medium.ttf")),
  ]);

  return new ImageResponse(
    <SocialCard description={t("og.description")} location={t("home.location")} />,
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
        { name: "Geist Mono", data: mono, weight: 500, style: "normal" },
      ],
    },
  );
}
