"use client";

import { useId } from "react";

interface DentilBorderProps {
  className?: string;
  flip?: boolean;
}

// Royal entablature — 7 classical moulding layers with carved depth
const FILLET_T = 2;   // sharp cap fillet (dark line)
const CYMA_H   = 3;   // cyma reversa (ivory highlight — raised lip)
const FASCIA_T = 7;   // upper fascia (gradient: lighter top → dark bottom = heavy overhang)
const DENTILS  = 18;  // dentil zone
const BED_H    = 5;   // bed moulding (deep shadow under tooth overhang)
const FASCIA_B = 5;   // lower fascia (gradient: darker top → lighter base)
const FILLET_B = 2;   // sharp base fillet (dark line)
const TOTAL_H  = FILLET_T + CYMA_H + FASCIA_T + DENTILS + BED_H + FASCIA_B + FILLET_B; // 42

const TOOTH_W = 9;
const GAP_W   = 5;
const UNIT_W  = TOOTH_W + GAP_W; // 14

// Crown moulding y-offsets (top → bottom)
const yC = {
  y0: 0,
  y1: FILLET_T,
  y2: FILLET_T + CYMA_H,
  y3: FILLET_T + CYMA_H + FASCIA_T,
  y4: FILLET_T + CYMA_H + FASCIA_T + DENTILS,
  y5: FILLET_T + CYMA_H + FASCIA_T + DENTILS + BED_H,
  y6: FILLET_T + CYMA_H + FASCIA_T + DENTILS + BED_H + FASCIA_B,
};

// Base moulding y-offsets (flipped order)
const yB = {
  y0: 0,
  y1: FILLET_B,
  y2: FILLET_B + FASCIA_B,
  y3: FILLET_B + FASCIA_B + BED_H,
  y4: FILLET_B + FASCIA_B + BED_H + DENTILS,
  y5: FILLET_B + FASCIA_B + BED_H + DENTILS + FASCIA_T,
  y6: FILLET_B + FASCIA_B + BED_H + DENTILS + FASCIA_T + CYMA_H,
};

export function DentilBorder({ className = "", flip = false }: DentilBorderProps) {
  const uid = useId().replace(/:/g, "d");
  const pid  = `dtl-${uid}`;   // dentil pattern
  const cyg  = `cyg-${uid}`;   // cyma gradient
  const fgT  = `fgT-${uid}`;   // upper fascia gradient
  const tg   = `tg-${uid}`;    // tooth gradient
  const bdg  = `bdg-${uid}`;   // bed moulding gradient
  const fgB  = `fgB-${uid}`;   // lower fascia gradient

  const crown = (
    <>
      {/* Sharp cap fillet — dark anchoring line */}
      <rect x="0" y={yC.y0} width="100%" height={FILLET_T} fill="#8b6a5a" fillOpacity="0.92" />
      {/* Cyma reversa — ivory highlight, light catches the raised lip */}
      <rect x="0" y={yC.y1} width="100%" height={CYMA_H} fill={`url(#${cyg})`} />
      {/* Upper fascia — projecting stone, reads heavy via gradient shadow at base */}
      <rect x="0" y={yC.y2} width="100%" height={FASCIA_T} fill={`url(#${fgT})`} />
      {/* Dentil gap background — recessed channel, dark deep cut between teeth */}
      <rect x="0" y={yC.y3} width="100%" height={DENTILS} fill="#3d2b1f" fillOpacity="0.20" />
      {/* Dentil teeth — gradient carved blocks */}
      <rect x="0" y={yC.y3} width="100%" height={DENTILS} fill={`url(#${pid})`} />
      {/* Bed moulding — deep shadow under tooth overhang */}
      <rect x="0" y={yC.y4} width="100%" height={BED_H} fill={`url(#${bdg})`} />
      {/* Lower fascia — transitions to base, lighter at bottom */}
      <rect x="0" y={yC.y5} width="100%" height={FASCIA_B} fill={`url(#${fgB})`} />
      {/* Sharp base fillet */}
      <rect x="0" y={yC.y6} width="100%" height={FILLET_B} fill="#8b6a5a" fillOpacity="0.92" />
    </>
  );

  const base = (
    <>
      <rect x="0" y={yB.y0} width="100%" height={FILLET_B} fill="#8b6a5a" fillOpacity="0.92" />
      <rect x="0" y={yB.y1} width="100%" height={FASCIA_B} fill={`url(#${fgB})`} />
      <rect x="0" y={yB.y2} width="100%" height={BED_H} fill={`url(#${bdg})`} />
      <rect x="0" y={yB.y3} width="100%" height={DENTILS} fill="#3d2b1f" fillOpacity="0.20" />
      <rect x="0" y={yB.y3} width="100%" height={DENTILS} fill={`url(#${pid})`} />
      <rect x="0" y={yB.y4} width="100%" height={FASCIA_T} fill={`url(#${fgT})`} />
      <rect x="0" y={yB.y5} width="100%" height={CYMA_H} fill={`url(#${cyg})`} />
      <rect x="0" y={yB.y6} width="100%" height={FILLET_T} fill="#8b6a5a" fillOpacity="0.92" />
    </>
  );

  return (
    <div className={className} aria-hidden="true" style={{ lineHeight: 0, overflow: "hidden" }}>
      <svg width="100%" height={TOTAL_H} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* ─── Dentil tooth pattern ────────────────────────────────────────── */}
          {/* Deep gap + gradient tooth with top/left highlight and right/bottom shadow */}
          <pattern id={pid} x="0" y="0" width={UNIT_W} height={DENTILS} patternUnits="userSpaceOnUse">
            {/* Recessed channel between teeth — deep brown cut */}
            <rect x="0"          y="0"          width={UNIT_W}   height={DENTILS}     fill="#3d2b1f" fillOpacity="0.30" />
            {/* Tooth body — gradient gives 3D carved stone depth */}
            <rect x="0"          y="0"          width={TOOTH_W}  height={DENTILS}     fill={`url(#${tg})`} />
            {/* Top face — light catches the top horizontal plane */}
            <rect x="0"          y="0"          width={TOOTH_W}  height="2"           fill="#fdf8f4" fillOpacity="0.55" />
            {/* Left face — angled side light */}
            <rect x="0"          y="2"          width="1"        height={DENTILS - 2}  fill="#fdf8f4" fillOpacity="0.30" />
            {/* Right face — in shadow (turned from light) */}
            <rect x={TOOTH_W-1}  y="0"          width="1"        height={DENTILS}     fill="#3d2b1f" fillOpacity="0.20" />
            {/* Bottom contact shadow */}
            <rect x="0"          y={DENTILS-2}  width={TOOTH_W}  height="2"           fill="#3d2b1f" fillOpacity="0.25" />
          </pattern>

          {/* ─── Gradients ──────────────────────────────────────────────────── */}
          {/* Cyma: ivory at top fading to rose-light — raised highlight lip */}
          <linearGradient id={cyg} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#fdf8f4" stopOpacity="0.72" />
            <stop offset="100%" stopColor="#e8d5cf" stopOpacity="0.38" />
          </linearGradient>

          {/* Upper fascia: lighter edge → rose mid → brown shadow (heavy projecting stone) */}
          <linearGradient id={fgT} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#e8d5cf" stopOpacity="0.40" />
            <stop offset="55%"  stopColor="#c8a4a4" stopOpacity="0.58" />
            <stop offset="100%" stopColor="#8b6a5a" stopOpacity="0.68" />
          </linearGradient>

          {/* Tooth: ivory highlight → rose → deep brown shadow (carved block) */}
          <linearGradient id={tg} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#f5e8e2" stopOpacity="0.72" />
            <stop offset="38%"  stopColor="#c8a4a4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#8b6a5a" stopOpacity="0.82" />
          </linearGradient>

          {/* Bed moulding: very dark at top (deep shadow under overhang) → fades out */}
          <linearGradient id={bdg} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#3d2b1f" stopOpacity="0.42" />
            <stop offset="55%"  stopColor="#8b6a5a" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#c8a4a4" stopOpacity="0.06" />
          </linearGradient>

          {/* Lower fascia: darker at top → lighter at bottom (receding to base) */}
          <linearGradient id={fgB} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#8b6a5a" stopOpacity="0.38" />
            <stop offset="50%"  stopColor="#c8a4a4" stopOpacity="0.44" />
            <stop offset="100%" stopColor="#e8d5cf" stopOpacity="0.26" />
          </linearGradient>
        </defs>

        {flip ? base : crown}
      </svg>
    </div>
  );
}
