"use client";
import AsciiGlobe from "@/components/temp6/AsciiGlobe";

export default function Page() {
  return (
    <div
      className="relative w-full"
      style={{
        backgroundColor: '#07090F',
        backgroundImage: `
          radial-gradient(ellipse at 0% 100%, rgba(0, 232, 198, 0.07) 0%, transparent 55%),
          radial-gradient(ellipse at 100% 0%, rgba(255, 78, 106, 0.05) 0%, transparent 55%),
          radial-gradient(circle at center, rgba(0, 232, 198, 0.10) 1px, transparent 1px)
        `,
        backgroundSize: 'auto, auto, 28px 28px',
      }}
    >
      {/* Atmospheric limb glow — replaces ::after pseudo-element */}
      <div
        className="fixed bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: '1300px',
          height: '650px',
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(0, 232, 198, 0.18) 0%, rgba(0, 180, 150, 0.07) 45%, transparent 72%)',
          borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
        }}
      />

      {/* Hero content */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 z-20 text-center w-full"
        style={{
          paddingTop: '18vh',
          fontFamily: "var(--font-space-grotesk, 'system-ui', sans-serif)",
        }}
      >
        <p
          className="uppercase font-medium mb-[22px]"
          style={{ fontSize: '11px', letterSpacing: '0.22em', color: '#00E8C6' }}
        >
          Terminal-grade global intelligence
        </p>

        <h1
          className="font-bold mb-5"
          style={{
            fontSize: 'clamp(38px, 4.8vw, 74px)',
            color: '#E4EAF6',
            lineHeight: '1.08',
            letterSpacing: '-0.03em',
          }}
        >
          Navigate the Signal.<br />Master the Grid.
        </h1>

        <p
          className="mb-11 font-normal"
          style={{
            fontSize: 'clamp(15px, 1.4vw, 18px)',
            color: '#8A93A8',
            lineHeight: '1.65',
          }}
        >
          Real-time infrastructure visibility for teams<br />that move at machine speed.
        </p>

        <div className="flex gap-[14px] justify-center items-center">
          <button
            className="font-semibold transition-all duration-200 px-7.5 py-3.25 text-[15px] rounded-md bg-[#00E8C6] text-[#07090F] border-none hover:bg-[#1fffd8] hover:shadow-[0_0_28px_rgba(0,232,198,0.45)]"
            style={{ fontFamily: 'inherit' }}
          >
            Try Free
          </button>

          <button
            className="font-semibold transition-all duration-200 px-7.5 py-3.25 text-[15px] rounded-md bg-white/20 text-white border-none hover:bg-white/30"
            style={{ fontFamily: 'inherit' }}
          >
            Take a Demo
          </button>
        </div>
      </div>

      {/* Globe — center pinned to viewport bottom edge, bottom half hidden */}
      <div
        className="fixed left-1/2 bottom-0 z-10"
        style={{ transform: 'translate(-50%, 64%)' }}
      >
        <AsciiGlobe />
      </div>

      {/* Spacer — holds the fixed hero in view for one full viewport */}
      <div className="h-screen" />

      {/* Fold 2 — in normal flow, slides over the fixed hero on scroll */}
      <div
        className="relative z-30 min-h-screen"
        style={{ backgroundColor: '#07090F' }}
      />
    </div>
  );
}
