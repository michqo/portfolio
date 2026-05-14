"use client";

import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { SKILL_MAP } from "@/lib/skills";
import { cn } from "@/lib/utils";
import { Wrench } from "lucide-react";
import { useHoverCardLabels } from "@/contexts/hover-card-labels-context";

type TechBadgeProps = {
  label: string;
  currentProject?: string;
  variant?: "skill" | "project";
};

export function TechBadge({ label, currentProject, variant = "skill" }: TechBadgeProps) {
  const usage = SKILL_MAP[label];
  const labels = useHoverCardLabels();

  const otherProjects = usage?.projects?.filter((p) => p !== currentProject) ?? [];
  const experience = usage?.experience ?? [];
  const hasContext = (usage?.projects?.length ?? 0) > 0 || experience.length > 0;

  const badgeClass = cn(
    "rounded-md border px-2.5 py-1.5 text-xs transition-all cursor-default",
    variant === "project"
      ? "border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
      : "border-border bg-muted/40 text-muted-foreground hover:scale-105 hover:border-primary hover:text-primary hover:shadow-sm hover:shadow-primary/20"
  );

  return (
    <HoverCard>
      <HoverCardTrigger delay={300} closeDelay={150} render={<span className={badgeClass}>{label}</span>} />
      <HoverCardContent side="top" className="w-52 overflow-hidden p-0 font-mono text-xs">
        {/* Top accent line */}
        <div className="h-0.75 w-full bg-primary/60" />

        <div className="p-3">
          {/* Tech name */}
          <div className="mb-3 text-sm font-semibold text-foreground">{label}</div>

          {!hasContext ? (
            <p className="flex items-center gap-1.5 text-muted-foreground">
              <Wrench className="h-3 w-3 shrink-0" />
              {labels.generalTooling}
            </p>
          ) : (
            <div className="flex flex-col gap-2.5">
              {currentProject && usage?.projects?.includes(currentProject) && (
                <div>
                  <div className="mb-1 flex items-center gap-1.5 font-semibold text-foreground">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
                    {labels.thisProject}
                  </div>
                  <div className="pl-3.5 text-muted-foreground">{currentProject}</div>
                </div>
              )}
              {otherProjects.length > 0 && (
                <div>
                  <div className="mb-1 flex items-center gap-1.5 font-semibold text-foreground">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
                    {currentProject ? labels.otherProjects : labels.projects}
                  </div>
                  <div className="flex flex-col gap-0.5 pl-3.5">
                    {otherProjects.map((p) => (
                      <span key={p} className="text-muted-foreground">{p}</span>
                    ))}
                  </div>
                </div>
              )}
              {experience.length > 0 && (
                <div>
                  <div className="mb-1 flex items-center gap-1.5 font-semibold text-foreground">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
                    {labels.experience}
                  </div>
                  <div className="flex flex-col gap-0.5 pl-3.5">
                    {experience.map((e) => (
                      <span key={e} className="text-muted-foreground">{e}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
