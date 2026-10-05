# Portfolio design

The homepage is a personal introduction and a quiet directory of Michal's apps.
Treat each utility as something useful to open, with a short factual description.
Use the same visual weight for every app. Avoid large promotional screenshots,
feature claims, fake activity, and decorative status indicators.

## Layout and content

- Combined introduction/About, four app rows, Background, and Contact in one
  reading column. Introduce current work and personal projects before the tools;
  keep studies as secondary information in the education disclosure and detailed
  history after the app directory.
- The app registry in `lib/projects.ts` supplies stable IDs, names, URLs, source
  links, and icons. Descriptions use matching keys in both locale message files.
- Sleep Cycle includes a factual description of its sleep calculator and local
  preferences, with an example night in its screenshot disclosure.
- Professional history and the CV remain visible. A native disclosure holds the
  longer tool list and education information.
- `/miqal` identifies the hub. Apps keep their own task-specific interfaces.
- Preserve English and Slovak, including shell labels and metadata.

## Appearance and interaction

- Proportional text for reading and a clear heading scale; monospace for identity
  and domains. The larger name and section headings establish the page's rhythm.
- Warm paper and ink colors, thin dividers, and a restrained teal accent. Four
  theme-aware icon colors connect the compact directory to a small SVG sketch
  of the app ecosystem. The sketch is decorative and static, without extra
  navigation or claims about activity; it is omitted on narrow screens.
- Keep equal visual weight for all apps. Compact rows retain separate app and
  source links. Contact uses the same left alignment and heading scale as the
  other sections, with a prominent email link on the shared canvas. Whitespace
  separates it from the education disclosure; do not add another divider here.
- No entrance animations, moving navigation, or blinking caret. All essential
  content renders on the server without a client animation dependency.
- Main controls have 44px targets. Focus remains visible, sections clear the
  sticky header, and a skip link leads to the main content.
- Theme and language menus expose selected radio states. Language switching
  preserves query parameters and section fragments.

## Relationship to the shared theme

The `miqal-theme` repository publishes the verified 0.2.0 foundation from
this approved design. The [ecosystem handoff](ecosystem.md) points to its rollout
and verification records. Portfolio imports core.css and binds the existing
Geist / Geist Mono loader variables on body, where next/font defines them.
Only its local composition, app tints, and sketch rules remain here.

The shared light primary and ring use `oklch(0.43 0.12 212)` and secondary text
uses `oklch(0.48 0.014 65)` against warm paper. Dark mode retains the approved
warm charcoal and independently calibrated text and icon colors. Computed
layout, typography, and colors match the reference across EN/SK, light/dark,
and desktop/mobile. Portfolio pins the exact published `@miqal/theme@0.2.0`
registry release; its lockfile records the verified package integrity.
