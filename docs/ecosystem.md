# Miqal ecosystem handoff

The portfolio design approved on 2026-10-03 is the visual reference for the next
shared-theme release. See [the portfolio design](design.md) for the local rules.

The package and app migration plan lives in
[miqal-theme](../../miqal-theme/docs/ecosystem-rollout-2026-10-03.md), alongside
an observed token snapshot from this portfolio. Work on the shared foundation
there before replacing local styles in the apps.

Shared traits are the warm light/dark canvas, teal identity, Geist / Geist Mono
roles, restrained icon colors, clear headings, compact spacing, visible focus,
and quiet interactions. Product layouts remain task-specific: subnet planning,
weather measurements, sleep calculations, and lunch menus need different
structures and density.

The portfolio currently uses local CSS. Its first migration to the package must
preserve the approved appearance, including the app-row action alignment and
the contact section's whitespace separation. The app sketch and personal
content stay here; the package owns reusable foundations.
