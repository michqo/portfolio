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
      className="rounded-md border border-border px-6 py-2.5 text-center text-sm font-medium transition-colors hover:border-primary hover:text-primary sm:w-auto"
    >
      {label}
    </a>
  );
}
