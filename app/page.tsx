"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQ";
import dynamic from "next/dynamic";
const SponsorsSection = dynamic(() => import("@/components/Sponsors"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="text-white">
      <Navbar />

      <main>
        <Hero />
        <SponsorsSection />
        <FAQSection />
      </main>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-4 text-sm text-white/60">
          © {new Date().getFullYear()} GrizzHacks
        </div>
      </footer>
    </div>
  );
}
