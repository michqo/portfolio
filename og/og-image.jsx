<div
  tw="flex w-full h-full bg-[#171717] relative overflow-hidden"
  style={{ fontFamily: "monospace" }}
>
  {/* Left accent bar */}
  <div tw="absolute left-0 top-0 bottom-0 w-[3px] bg-[#52cf8f]" />

  {/* Top-right glow */}
  <div
    tw="absolute top-0 right-0 w-[600px] h-[400px]"
    style={{
      background:
        "radial-gradient(ellipse at 80% 10%, rgba(82,207,143,0.18) 0%, transparent 60%)",
    }}
  />

  {/* Content */}
  <div tw="flex flex-col w-full h-full" style={{ padding: "48px 64px" }}>
    {/* Badge row */}
    <div tw="flex items-center" style={{ gap: "12px", marginBottom: "18px" }}>
      <div
        tw="flex items-center border border-[rgba(82,207,143,0.30)] bg-[rgba(82,207,143,0.07)]"
        style={{ gap: "8px", padding: "5px 12px" }}
      >
        <div tw="w-2 h-2 rounded-full bg-[rgba(82,207,143,0.6)]" />
        <span tw="text-[#52cf8f] text-sm">Open to opportunities</span>
      </div>
      <span
        tw="text-[rgba(250,250,250,0.45)] text-sm uppercase"
        style={{ letterSpacing: "0.05em" }}
      >
        Full Stack Developer
      </span>
    </div>

    {/* Name */}
    <div
      tw="font-bold text-white"
      style={{
        fontSize: "64px",
        lineHeight: 1,
        letterSpacing: "-2px",
        marginBottom: "14px",
      }}
    >
      Michal Urban
    </div>

    {/* Location */}
    <div
      tw="flex items-center text-[rgba(250,250,250,0.45)] text-lg"
      style={{ gap: "6px", marginBottom: "18px" }}
    >
      <span>📍</span>
      <span>Bratislava, Slovakia</span>
    </div>

    {/* Description */}
    <div
      tw="flex text-[rgba(250,250,250,0.45)]"
      style={{
        fontSize: "19px",
        lineHeight: 1.55,
        maxWidth: "720px",
        marginBottom: "20px",
        flex: 1,
      }}
    >
      Full Stack Developer with commercial experience delivering React frontends
      and Django REST APIs in production. Passionate about backend architecture
      and building reliable, data-driven applications.
    </div>

    {/* Skills row + Bottom divider + URL */}
    <div tw="flex items-center justify-between top-5 border-t border-gray-600 pt-3">
      <div tw="flex">
        {["React", "TypeScript", "Next.js", "Django", "PostgreSQL"].map(
          (tag) => (
            <div
              key={tag}
              tw="flex border border-emerald-800 bg-emerald-900/20 text-emerald-500 text-sm mx-1 "
              style={{ padding: "4px 14px" }}
            >
              {tag}
            </div>
          ),
        )}
      </div>
      <div tw="flex items-center text-gray-500 text-sm" style={{ gap: "8px" }}>
        <div tw="w-1.5 h-1.5 rounded-full bg-[rgba(82,207,143,0.6)]" />
        miqal.xyz
      </div>
    </div>
  </div>
</div>
