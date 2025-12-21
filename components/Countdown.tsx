"use client";
import { roboto_mono } from "@/app/ui/fonts";

import { useEffect, useMemo, useState } from "react";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

type Parts = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getParts(ms: number): Parts {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetISO }: { targetISO: string }) {
  const target = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const diff = target - now;
  const { days, hours, minutes, seconds } = getParts(diff);

  const items = [
    { label: "Days", value: String(days) },
    { label: "Hours", value: pad2(hours) },
    { label: "Minutes", value: pad2(minutes) },
    { label: "Seconds", value: pad2(seconds) },
  ];

  return (
    <div className="mt-8 flex w-full justify-center sm:justify-start gap-3 sm:gap-6">
      {items.map((item, i) => {
        return (
          <div
            key={item.label}
            className={`${roboto_mono.className} antialiased flex flex-col`}
          >
            {/* Number + separator */}
            <div className="flex items-baseline justify-center">
              <div
                className={`w-[2ch] text-center font-timer text-4xl sm:text-5xl font-bold leading-none tabular-nums`}
              >
                {item.value}
              </div>

              {i < items.length - 1 && (
                <div className="w-[1ch] text-center font-timer text-3xl sm:text-5xl font-bold leading-none tabular-nums">
                  :
                </div>
              )}
            </div>

            {/* Label: left-justified under number column */}
            <div
              className={`w-[2ch] mt-1 text-left text-[10px] uppercase tracking-wide text-white/60`}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
