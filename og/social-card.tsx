import tokens from "@miqal/theme/tokens.srgb.json";
import { AppSketch, type AppSketchPalette } from "@/components/app-sketch";

// The shared package converts its canonical OKLCH colors during generation.
const colors = tokens.colors.light;

const palette: AppSketchPalette = {
  primary: colors.primary,
  border: colors.border,
  accent: colors.accent,
  weather: colors["app-weather"],
  subnify: colors["app-subnify"],
  sleep: colors["app-sleep"],
  obedy: colors["app-obedy"],
};

export function SocialCard({ description, location }: {
  description: string;
  location: string;
}) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", width: "100%", height: "100%",
      padding: "56px 64px", backgroundColor: colors.background,
      color: colors.foreground, fontFamily: "Geist", fontWeight: 400,
    }}>
      <div style={{ display: "flex", fontFamily: "Geist Mono", fontSize: 30, fontWeight: 500, letterSpacing: "-1px" }}>
        <span style={{ color: palette.primary }}>/</span>miqal
      </div>
      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", width: 700, paddingBottom: 12 }}>
          <div style={{ display: "flex", fontSize: 82, fontWeight: 700, letterSpacing: "-3px", lineHeight: 1.1 }}>
            Michal Urban<span style={{ color: palette.primary }}>.</span>
          </div>
          <div style={{ display: "flex", maxWidth: 610, marginTop: 28, fontSize: 32, lineHeight: 1.4, color: colors["muted-foreground"] }}>
            {description}
          </div>
        </div>
        <AppSketch palette={palette} size={320} outlineMonogram />
      </div>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        paddingTop: 24, borderTop: `1px solid ${palette.border}`,
        fontFamily: "Geist Mono", fontWeight: 500, fontSize: 20,
      }}>
        <span style={{ color: colors["muted-foreground"] }}>{location}</span>
        <span style={{ color: palette.primary }}>miqal.xyz</span>
      </div>
    </div>
  );
}
