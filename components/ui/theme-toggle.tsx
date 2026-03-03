"use client";

import * as React from "react";
import { Moon, Palette, Sun, SunMoon, Check } from "lucide-react";
import { useTheme } from "next-themes";
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

function ThemeOption({ 
  id, 
  label, 
  description, 
  isActive 
}: { 
  id: string; 
  label: string; 
  description: string; 
  isActive: boolean;
}) {
  const { setTheme } = useTheme();
  
  return (
    <DropdownMenuItem
      onClick={() => setTheme(id)}
      className={cn(
        "group flex cursor-pointer items-center gap-3 rounded-sm p-3 transition-colors",
        isActive 
          ? "bg-accent/80 text-accent-foreground"
          : "hover:bg-accent/50 text-muted-foreground"
      )}
    >
      <div className={cn("p-1", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")}>
        {id === "dark" ? (
          <Moon className="h-4 w-4 text-inherit" />
        ) : id === "light" ? (
          <Sun className="h-4 w-4 text-inherit" />
        ) : (
          <SunMoon className="h-4 w-4 text-inherit" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between">
          <span className={cn("text-sm font-medium transition-colors", isActive ? "text-foreground" : "")}>
            {label}
          </span>
          {isActive && <Check className="h-4 w-4 text-primary" />}
        </div>
        <p className="mt-0.5 text-xs text-muted-foreground">
          {description}
        </p>
      </div>
    </DropdownMenuItem>
  );
}

export function ThemeToggle() {
  const { theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-4 w-4 scale-100 transition-all duration-500 ease-out dark:scale-0" />
          <Moon className="absolute h-4 w-4 scale-0 transition-all duration-500 ease-out dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="font-mono w-56">
        <div className="mb-2 px-3 py-2">
          <div className="mb-1 flex items-center gap-2 text-muted-foreground">
            <Palette className="h-4 w-4" />
            <DropdownMenuLabel className="p-0 text-sm font-semibold text-foreground">
              Theme
            </DropdownMenuLabel>
          </div>
        </div>

        <DropdownMenuSeparator />
        
        <div className="flex flex-col gap-1 p-1">
          <ThemeOption
            id="light"
            label="Light"
            description="Clear and readable"
            isActive={theme === "light"}
          />
          <ThemeOption
            id="dark"
            label="Dark"
            description="Easy on the eyes"
            isActive={theme === "dark"}
          />
          <ThemeOption
            id="system"
            label="System"
            description="Adapts to your device"
            isActive={theme === "system"}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
