"use client";
import { useEffect, useRef } from "react";

const RAMP = [' ', '·', '.', ':', ';', '+', '=', '*', '#', '@'];
const RLEN = RAMP.length;
const NR = 60;
const NC = 118;
const HR = (NR - 1) / 2;
const HC = (NC - 1) / 2;
const LX = 0.6, LY = -0.33, LZ = 0.73;
const DT = 0.004;  // X-axis rotation speed
const DS = 0.007;  // Y-axis rotation speed (slightly faster for organic feel)
const GRID_THR = 0.22;
const GRID_BOOST = 0.55;

export default function AsciiGlobe() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let t = 0.0;
    let s = 0.0;
    let rafId: number;

    function draw() {
      if (!preRef.current) return;

      const cosT = Math.cos(t);
      const sinT = Math.sin(t);
      const cosS = Math.cos(s);
      const sinS = Math.sin(s);
      const buf: string[] = [];

      for (let r = 0; r < NR; r++) {
        const y = (r - HR) / HR;
        for (let c = 0; c < NC; c++) {
          const x = (c - HC) / HC;
          const d2 = x * x + y * y;

          if (d2 > 1.0) {
            buf.push(' ');
            continue;
          }

          const z = Math.sqrt(1.0 - d2);

          // X-axis rotation
          const rx1 = x;
          const ry1 = y * cosT - z * sinT;
          const rz1 = y * sinT + z * cosT;

          // Y-axis rotation applied on top
          const rx = rx1 * cosS + rz1 * sinS;
          const ry = ry1;
          const rz = -rx1 * sinS + rz1 * cosS;

          const lon = Math.atan2(rx, rz);
          const lat = Math.asin(Math.max(-1, Math.min(1, -ry)));

          const gl = Math.abs(Math.sin(lon * 6));
          const gla = Math.abs(Math.sin(lat * 6));
          const g = Math.min(gl, gla);

          const diff = Math.max(0, rx * LX + ry * LY + rz * LZ);
          let b = 0.05 + diff * 0.95;

          if (g < GRID_THR) {
            const proximity = (GRID_THR - g) / GRID_THR;
            b = Math.min(1.0, b + proximity * proximity * GRID_BOOST);
          }

          buf.push(RAMP[Math.min(RLEN - 1, Math.floor(b * RLEN))]);
        }
        buf.push('\n');
      }

      preRef.current.textContent = buf.join('');
      t = (t + DT) % (Math.PI * 2);
      s = (s + DS) % (Math.PI * 2);
      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <pre
      ref={preRef}
      aria-hidden="true"
      style={{
        display: 'block',
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: '14px',
        lineHeight: '1',
        color: '#00E8C6',
        textShadow:
          '0 0 2px #00E8C6, 0 0 8px rgba(0, 232, 198, 0.55), 0 0 22px rgba(0, 200, 170, 0.22)',
        whiteSpace: 'pre',
        letterSpacing: '0',
        userSelect: 'none',
        pointerEvents: 'none',
      }}
    />
  );
}
