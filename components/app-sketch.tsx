// The four Lucide icon paths are inlined so this SVG also works in ImageResponse.
// Icon license: docs/licenses/lucide.txt (ISC / MIT).

export type AppSketchPalette = {
  primary: string;
  border: string;
  accent: string;
  weather: string;
  subnify: string;
  sleep: string;
  obedy: string;
};

// A decorative map of the same four utilities listed on the page.
export function AppSketch({ palette, size, outlineMonogram = false }: {
  palette?: AppSketchPalette;
  size?: number;
  outlineMonogram?: boolean;
} = {}) {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 220" fill="none" className="app-sketch w-full" focusable="false" width={size} height={size} style={{ color: palette?.primary }}>
      <g stroke={palette?.border ?? "currentColor"} strokeWidth="1.5" strokeLinecap="round" className="sketch-lines">
        <path d="M52 57C55 79 72 76 91 100" />
        <path d="M174 44C172 73 151 75 137 96" />
        <path d="M174 164C152 164 155 137 139 126" />
        <path d="M48 177C53 151 77 159 95 132" />
      </g>
      <g transform="rotate(-5 112 112)">
        <rect x="83" y="88" width="58" height="48" rx="12" className="sketch-hub" fill={palette?.accent} stroke="currentColor" strokeWidth="1.5" />
        {outlineMonogram ? (
          // SVG text cannot use ImageResponse's registered fonts; keep this mark as paths.
          <path d="M98 122L106 102M113 119V107M113 110C113 106 120 106 120 110V119M120 110C120 106 127 106 127 110V119" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <text x="112" y="119" textAnchor="middle" fill="currentColor" className="sketch-monogram">/m</text>
        )}
      </g>
      <g className="app-weather" style={{ color: palette?.weather }} transform="rotate(-8 47 42)">
        <g transform="translate(27 22) scale(1.666667)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </g>
      </g>
      <g className="app-subnify" style={{ color: palette?.subnify }} transform="rotate(6 175 32)">
        <g transform="translate(156 13) scale(1.583333)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8" />
        </g>
      </g>
      <g className="app-sleep" style={{ color: palette?.sleep }} transform="rotate(8 179 163)">
        <g transform="translate(160 144) scale(1.583333)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
        </g>
      </g>
      <g className="app-obedy" style={{ color: palette?.obedy }} transform="rotate(-7 43 182)">
        <g transform="translate(24 163) scale(1.583333)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
        </g>
      </g>
      <path d="M89 148Q112 155 136 148" stroke={palette?.border ?? "currentColor"} strokeWidth="1.5" strokeLinecap="round" className="sketch-lines" />
    </svg>
  );
}
