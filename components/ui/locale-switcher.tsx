"use client";

import * as React from "react";
import { Check, Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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
      <DropdownMenuContent align="end" className="font-mono w-48">
        <div className="mb-2 px-3 py-2">
          <div className="mb-1 flex items-center gap-2 text-muted-foreground">
            <Languages className="h-4 w-4" />
            <DropdownMenuLabel className="p-0 text-sm font-semibold text-foreground">
              {t("label")}
            </DropdownMenuLabel>
          </div>
        </div>

        <DropdownMenuSeparator />

        <div className="flex flex-col gap-1 p-1">
          {routing.locales.map((l) => {
            const isActive = l === locale;
            const { short, flag } = localeLabels[l] ?? { short: l.toUpperCase(), flag: "" };

            return (
              <DropdownMenuItem
                key={l}
                onClick={() => switchLocale(l)}
                className={cn(
                  "group flex cursor-pointer items-center gap-3 rounded-sm p-3 transition-colors",
                  isActive
                    ? "bg-accent/80 text-accent-foreground"
                    : "hover:bg-accent/50 text-muted-foreground",
                )}
              >
                <span className="text-base leading-none">{flag}</span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-sm font-medium transition-colors",
                        isActive ? "text-foreground" : "",
                      )}
                    >
                      {t(l as "en" | "sk")}
                    </span>
                    {isActive && <Check className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{short}</p>
                </div>
              </DropdownMenuItem>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
