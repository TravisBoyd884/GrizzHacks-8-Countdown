"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("./Countdown"), { ssr: false });

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/hero-bg-sunrise.svg"
        alt="hero background"
        fill
        priority
        className="absolute object-cover object-bottom -z-10 max-h-screen"
      />

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-30 lg:py-30">
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
