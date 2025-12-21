const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/10 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="font-semibold tracking-tight">
          GrizzHacks
        </a>

        <div className="flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/70 hover:text-white transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
