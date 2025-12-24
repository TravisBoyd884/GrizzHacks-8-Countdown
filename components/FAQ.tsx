const faqs = [
  { q: "What is a hackathon?", a: "Answer placeholder." },
  { 
    q: "Who can attend?",
    a: (
      <>
        Anyone who is 18 or older and is currently a student (school/major does not matter), or who has graduated within the last year, is free to apply.
        All participants must adhere to the{" "}
        <a href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank" className="text-blue-400 underline">
          MLH Code of Conduct
        </a>.
      </>
    ),
  },
  { q: "How many people can be in a team?", a: "Third answer placeholder." },
  { q: "Fourth question placeholder?", a: "Fourth answer placeholder." },
];

export default function FAQSection() {
  return (
    <section id="faq" className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold">FAQ</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-xl border border-white/10 bg-white/5 p-4"
            >
              <summary className="cursor-pointer list-none font-medium text-white/90">
                <div className="flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="text-white/50 group-open:rotate-45 transition">
                    +
                  </span>
                </div>
              </summary>
              <div className="mt-3 text-sm text-white/70">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
