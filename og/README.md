# Social preview image

Next.js generates the English and Slovak Open Graph and Twitter images during
the build. There is no playground export or checked-in PNG to update.

- `app/[locale]/opengraph-image.tsx` loads fonts and renders the 1200 × 630 PNG.
- `app/[locale]/twitter-image.tsx` uses the same generator.
- `og/social-card.tsx` holds the composition and reads the light colors directly
  from `@miqal/theme/tokens.srgb.json`. The theme package generates these sRGB
  values from its canonical OKLCH tokens; Portfolio needs no color library.
- `components/app-sketch.tsx` supplies the same ecosystem illustration as the
  homepage. Explicit colors and an outlined monogram let it render without CSS
  or SVG font dependencies.
- `messages/{en,sk}.json` supplies `og.description` and the homepage's location.

The warm paper version is consistent across social platforms; it does not depend
on the visitor's theme setting. Next.js adds the image URLs, dimensions, and alt
text to page metadata automatically.

Run the dev server and open `/en/opengraph-image` or `/sk/opengraph-image` to preview.
The matching Twitter paths are `/en/twitter-image` and `/sk/twitter-image`.

## Fonts

Local static TTFs keep rendering independent of a font download at build time.
ImageResponse does not accept the WOFF2 files used by `next/font` in the browser.
These Latin/Latin Extended fonts include the Slovak characters in the image:

- Geist Regular and Bold: Google Fonts, `https://fonts.google.com/specimen/Geist`
- Geist Mono Medium: Google Fonts, `https://fonts.google.com/specimen/Geist+Mono`

The SIL Open Font License files are included alongside the fonts in `og/fonts/`.
