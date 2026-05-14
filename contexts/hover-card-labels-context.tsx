"use client";

import { createContext, useContext } from "react";

export type HoverCardLabels = {
  generalTooling: string;
  thisProject: string;
  otherProjects: string;
  projects: string;
  experience: string;
};

const HoverCardLabelsContext = createContext<HoverCardLabels | null>(null);

export function HoverCardLabelsProvider({
  labels,
  children,
}: {
  labels: HoverCardLabels;
  children: React.ReactNode;
}) {
  return (
    <HoverCardLabelsContext.Provider value={labels}>
      {children}
    </HoverCardLabelsContext.Provider>
  );
}

export function useHoverCardLabels(): HoverCardLabels {
  const ctx = useContext(HoverCardLabelsContext);
  if (!ctx) throw new Error("useHoverCardLabels must be used within HoverCardLabelsProvider");
  return ctx;
}
