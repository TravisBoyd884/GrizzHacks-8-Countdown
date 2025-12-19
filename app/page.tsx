import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SponsorsSection from "@/components/Sponsors";
import FAQSection from "@/components/FAQ";

export default function Page() {
  return (
    <div className="min-h-screen bg-blue-400 text-white">
      <Navbar />

      {/* Add top padding so anchored sections aren’t hidden behind sticky navbar */}
      <main className="pt-20">
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
