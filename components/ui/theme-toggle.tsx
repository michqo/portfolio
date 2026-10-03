"use client";

import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const themes = [{ id: "light", Icon: Sun }, { id: "dark", Icon: Moon }, { id: "system", Icon: SunMoon }] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("theme");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative size-11" aria-label={t("label")}>
          <Sun aria-hidden="true" className="size-4 dark:hidden" />
          <Moon aria-hidden="true" className="hidden size-4 dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-44 p-1">
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map(({ id, Icon }) => (
            <DropdownMenuRadioItem key={id} value={id} className="min-h-11 rounded-md py-3 text-sm">
              <Icon aria-hidden="true" className="size-4" />{t(id)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
