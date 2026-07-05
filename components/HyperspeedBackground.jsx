"use client";

import dynamic from 'next/dynamic';
import { hyperspeedPresets } from './HyperSpeedPresets';
import { HYPERSPEED_OPACITY } from '@/lib/constants';

const Hyperspeed = dynamic(() => import('./Hyperspeed'), { ssr: false });

export default function HyperspeedBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", width: "100vw", height: "100vh", opacity: HYPERSPEED_OPACITY }}>
      <Hyperspeed effectOptions={hyperspeedPresets.three} />
    </div>
  );
}
