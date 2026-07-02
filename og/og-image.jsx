<div
  tw="flex w-full h-full bg-[#171717] relative overflow-hidden"
  style={{ fontFamily: "monospace" }}
>
  {/* Left accent bar */}
  <div tw="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0088ae]" />

  {/* Corner glow top-right */}
  <div
    tw="absolute top-0 right-0 w-[500px] h-[300px]"
    style={{
      background:
        "radial-gradient(ellipse at 90% 0%, rgba(0,136,174,0.2) 0%, transparent 65%)",
    }}
  />

  {/* Subtle bottom-left glow */}
  <div
    tw="absolute bottom-0 left-0 w-[400px] h-[250px]"
    style={{
      background:
        "radial-gradient(ellipse at 10% 100%, rgba(0,136,174,0.08) 0%, transparent 60%)",
    }}
  />

  {/* Content */}
  <div tw="flex flex-col justify-center w-full h-full" style={{ padding: "56px 72px" }}>

    {/* Label */}
    <div
      tw="text-[#0088ae] text-base uppercase"
      style={{ letterSpacing: "0.18em", marginBottom: "20px" }}
    >
      Full Stack Developer
    </div>

    {/* Name — split for visual weight control */}
    <div tw="flex flex-col" style={{ marginBottom: "36px" }}>
      <div
        tw="font-bold text-white"
        style={{ fontSize: "58px", lineHeight: 1.05, letterSpacing: "-1.5px" }}
      >
        Michal
      </div>
      <div
        tw="font-bold text-white"
        style={{ fontSize: "58px", lineHeight: 1.05, letterSpacing: "-1.5px" }}
      >
        Urban
      </div>
    </div>

    {/* Divider + URL row */}
    <div tw="flex items-center" style={{ gap: "14px" }}>
      <div tw="w-6 h-[1px] bg-[#0088ae]" />
      <div tw="text-[rgba(250,250,250,0.35)]" style={{ fontSize: "15px", letterSpacing: "0.08em" }}>
        miqal.xyz
      </div>
    </div>

  </div>
</div>
