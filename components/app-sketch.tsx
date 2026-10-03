import { Cloud, Moon, Network, Utensils } from "lucide-react";

// A decorative map of the same four utilities listed on the page.
export function AppSketch() {
  return (
    <svg aria-hidden="true" viewBox="0 0 220 220" fill="none" className="app-sketch w-full" focusable="false">
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="sketch-lines">
        <path d="M52 57C55 79 72 76 91 100" />
        <path d="M174 44C172 73 151 75 137 96" />
        <path d="M174 164C152 164 155 137 139 126" />
        <path d="M48 177C53 151 77 159 95 132" />
      </g>
      <g transform="rotate(-5 112 112)">
        <rect x="83" y="88" width="58" height="48" rx="12" className="sketch-hub" stroke="currentColor" strokeWidth="1.5" />
        <text x="112" y="119" textAnchor="middle" fill="currentColor" className="sketch-monogram">/m</text>
      </g>
      <g className="app-weather" transform="rotate(-8 47 42)"><Cloud x="27" y="22" width="40" height="40" strokeWidth="1.5" /></g>
      <g className="app-subnify" transform="rotate(6 175 32)"><Network x="156" y="13" width="38" height="38" strokeWidth="1.5" /></g>
      <g className="app-sleep" transform="rotate(8 179 163)"><Moon x="160" y="144" width="38" height="38" strokeWidth="1.5" /></g>
      <g className="app-obedy" transform="rotate(-7 43 182)"><Utensils x="24" y="163" width="38" height="38" strokeWidth="1.5" /></g>
      <path d="M89 148Q112 155 136 148" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="sketch-lines" />
    </svg>
  );
}
