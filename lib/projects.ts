import { Cloud, Network, Moon, Utensils, type LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import weatherPreview from "@/public/projects/weather/measurements-preview.png";
import subnifyPreview from "@/public/projects/subnify/planner-preview.png";
import sleepPreview from "@/public/projects/sleep/planner-preview.png";
import obedyPreview from "@/public/projects/obedy/menus-preview.jpg";

export type Project = {
  id: "weather" | "subnify" | "sleep" | "obedy";
  name: string;
  href: string;
  github: string;
  icon: LucideIcon;
  screenshot?: StaticImageData;
};

export const PROJECTS = {
  OBEDY: "Obedy",
  WEATHER: "Weather Station",
  SUBNIFY: "Subnify",
  SLEEP: "Sleep Cycle",
} as const;

export type ProjectName = (typeof PROJECTS)[keyof typeof PROJECTS];

export const PROJECT_LIST: Project[] = [
  {
    id: "weather",
    name: PROJECTS.WEATHER,
    href: "https://ms.miqal.xyz",
    github: "https://github.com/michqo/ms_web",
    icon: Cloud,
    screenshot: weatherPreview,
  },
  {
    id: "subnify",
    name: PROJECTS.SUBNIFY,
    href: "https://subnify.miqal.xyz",
    github: "https://github.com/michqo/subnify",
    icon: Network,
    screenshot: subnifyPreview,
  },
  {
    id: "sleep",
    name: PROJECTS.SLEEP,
    href: "https://www.sleep.miqal.xyz",
    github: "https://github.com/michqo/sleep-cycle",
    icon: Moon,
    screenshot: sleepPreview,
  },
  {
    id: "obedy",
    name: PROJECTS.OBEDY,
    href: "https://obedy.miqal.xyz",
    github: "https://github.com/michqo/obedy",
    icon: Utensils,
    screenshot: obedyPreview,
  }
];
