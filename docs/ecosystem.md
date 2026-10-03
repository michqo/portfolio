# Miqal ecosystem

The portfolio design approved on 2026-10-03 is the shared visual reference.
See [the local design rules](design.md) and the completed
[ecosystem rollout](../../miqal-theme/docs/ecosystem-rollout-2026-10-03.md).

Portfolio, Sleep Cycle, Obedy, Weather Station, and Subnify all consume the
exact published `@miqal/theme@0.2.0` release through `core.css`. The package
owns warm light/dark surfaces, teal controls, Geist / Geist Mono roles,
semantic colors, visible focus, and reduced-motion behavior. Apps load fonts
and keep their own composition and domain behavior.

Portfolio's app-row alignment, Contact whitespace, typography, colors, and
section geometry match the approved reference across EN/SK, light/dark, and
desktop/mobile. Its sketch, app-icon tints, and personal content remain local.

The utilities retain task-specific layouts: dense subnet planning, weather
measurements and charts, a small sleep calculator, and readable lunch menus.
They share quiet identity and controls without promotional project cards.

The [verification record](../../miqal-theme/docs/verification-0.2.0.md) documents
checks and backend configuration limits. App deployment remains separate.
