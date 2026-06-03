import { Cloud, Network, Moon, Utensils, type LucideIcon } from "lucide-react";

export type Project = {
  name: string;
  href: string;
  github: string;
  description: string;
  icon: LucideIcon;
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
    name: PROJECTS.WEATHER,
    href: "https://ms.miqal.xyz",
    github: "https://github.com/michqo/ms_web",
    description: "IoT monitoring dashboard",
    icon: Cloud,
  },
  {
    name: PROJECTS.SUBNIFY,
    href: "https://subnify.miqal.xyz",
    github: "https://github.com/michqo/subnify",
    description: "IPv4 subnet planner",
    icon: Network,
  },
  {
    name: PROJECTS.SLEEP,
    href: "https://www.sleep.miqal.xyz",
    github: "https://github.com/michqo/sleep-cycle",
    description: "Sleep schedule calculator",
    icon: Moon,
  },
  {
    name: PROJECTS.OBEDY,
    href: "https://obedy.miqal.xyz",
    github: "https://github.com/michqo/obedy",
    description: "Menu obedov v okolí Niv",
    icon: Utensils,
  }
];
