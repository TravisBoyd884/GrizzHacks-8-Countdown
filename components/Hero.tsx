import Image from "next/image";

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
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-40 lg:py-40">
        <div className="p-8 text-center sm:text-left">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            GrizzHacks 8
          </h1>

          <div className="mt-8 grid place-items-center sm:grid-cols-4 sm:place-items-start">
            {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
              <div key={label} className="p-4">
                <div className="lg:text-5xl md:text-5xl text-3xl font-bold">
                  0
                </div>
                <div className="mt-1 text-xs uppercase text-white/60">
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
