"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Bg = { src: string; alt: string };

function getBgForHour(hour: number): Bg {
  // 6am-4pm
  if (hour >= 6 && hour < 16)
    return { src: "/hero-bg-sunrise.svg", alt: "Sunrise" };

  // 4pm-8pm
  if (hour >= 16 && hour < 20)
    return { src: "/hero-bg-twilight.svg", alt: "Twilight" };
  
  return { src: "/hero-bg-midnight.svg", alt: "Midnight" }; // 8pm–6am
}

export default function HeroBGImage() {
  const [bg, setBg] = useState<Bg>(() => getBgForHour(new Date().getHours()));

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;

    const update = () => {
      const baseBg = getBgForHour(new Date().getHours());

      setBg({
        ...baseBg,
        src: isMobile
          ? baseBg.src.replace("/hero-", "/mobile-hero-")
          : baseBg.src,
      });
    };

    update();
    // update every minute
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <Image
      src={bg.src}
      alt={bg.alt}
      fill
      priority
      className="absolute object-cover object-bottom -z-10 max-h-screen"
    />
  );
}
