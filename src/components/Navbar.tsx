import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiMenu, FiX } from "react-icons/fi";
import { useDarkMode } from "../hooks/useDarkMode";
import { profile } from "../data/profile";

const links = [
  { href: "#about", label: "Tentang" },
  { href: "#techstack", label: "Keahlian" },
  { href: "#projects", label: "Proyek" },
  { href: "#services", label: "Layanan" },
  { href: "#contact", label: "Kontak" },
];

export default function Navbar() {
  const { isDark, toggle } = useDarkMode();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-blueprint-paper/90 dark:bg-blueprint-950/90 backdrop-blur border-b border-blueprint-line/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm tracking-tight text-blueprint-900 dark:text-blueprint-paper">
          <span className="text-pencil">/</span> {profile.shortName}
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-blueprint-900/70 dark:text-blueprint-paper/70 hover:text-pencil dark:hover:text-pencil-soft transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            aria-label="Ganti mode gelap/terang"
            onClick={toggle}
            className="w-9 h-9 grid place-items-center rounded-sm border border-blueprint-line/40 text-blueprint-900 dark:text-blueprint-paper hover:border-pencil hover:text-pencil transition-colors"
          >
            {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            aria-label="Buka menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-9 h-9 grid place-items-center rounded-sm border border-blueprint-line/40 text-blueprint-900 dark:text-blueprint-paper"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-5 pb-5 font-mono text-sm bg-blueprint-paper dark:bg-blueprint-950 border-b border-blueprint-line/30">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-blueprint-900/80 dark:text-blueprint-paper/80"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
