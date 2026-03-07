"use client";

import * as React from "react";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const localeLabels: Record<string, { short: string; flag: string }> = {
  en: { short: "EN", flag: "🇬🇧" },
  sk: { short: "SK", flag: "🇸🇰" },
};

export function LocaleSwitcher() {
  const t = useTranslations("localeSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: string) {
    router.replace(pathname, { locale: next });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={t("label")}>
          <Languages className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-36 font-mono p-1">
        {routing.locales.map((l) => {
          const isActive = l === locale;
          const { flag } = localeLabels[l] ?? { short: l.toUpperCase(), flag: "" };

          return (
            <DropdownMenuItem
              key={l}
              onClick={() => switchLocale(l)}
              className={cn(
                "relative cursor-pointer px-3 py-3 text-xs transition-colors",
                isActive
                  ? "bg-primary/5 text-primary"
                  : "text-muted-foreground hover:bg-muted/40 hover:text-foreground",
              )}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 h-3 w-px -translate-y-1/2 bg-primary" />
              )}
              <span className="text-sm leading-none">{flag}</span>
              {t(l as "en" | "sk")}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
