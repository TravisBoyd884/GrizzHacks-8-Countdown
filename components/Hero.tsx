export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20 min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            GrizzHacks 8 Countdown
          </h1>

          <div className="mt-8 grid gap-4 sm:grid-cols-4">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-black/30 p-4"
              >
                <div className="text-3xl font-semibold">--</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
