import { Cloud, Network, Moon, Utensils, type LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import sleepPreview from "@/public/projects/sleep/planner-preview.png";

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
  },
  {
    id: "subnify",
    name: PROJECTS.SUBNIFY,
    href: "https://subnify.miqal.xyz",
    github: "https://github.com/michqo/subnify",
    icon: Network,
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
  }
];
