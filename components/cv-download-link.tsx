"use client";

import { usePostHog } from "posthog-js/react";

type CVDownloadLinkProps = {
  href: string;
  label: string;
  locale: string;
};

export function CVDownloadLink({ href, label, locale }: CVDownloadLinkProps) {
  const posthog = usePostHog();

  return (
    <a
      href={href}
      onClick={() => posthog.capture("Download CV", { locale })}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
    >
      {label}
    </a>
  );
}
