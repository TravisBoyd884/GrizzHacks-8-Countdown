"use client";
import dynamic from "next/dynamic";
import HeroBoat from "./HeroBoat";

const Countdown = dynamic(() => import("./Countdown"), { ssr: false });
const HeroBGIMage = dynamic(() => import("./HeroBGImage"), { ssr: false });

export default function Hero() {
  return (
    
    <section id="home" className="relative min-h-screen overflow-hidden -mb-2">
      <HeroBGIMage />
      <HeroBoat />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 pointer-events-none md:py-30 lg:py-30">
        <div className="p-8 text-center sm:text-left">
          <h2 className="text-white/80">Coming March 28th</h2>
          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            GrizzHacks 8
          </h1>

          <Countdown targetISO="2026-03-28T12:00:00-04:00" />
        </div>
      </div>
    </section>
  );
}
