import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import { profile } from "../data/profile";

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-blueprint-paper dark:bg-blueprint-900 bg-blueprint-grid overflow-hidden pt-16"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.25em] text-pencil mb-4"
          >
            Sheet 01 — Perkenalan
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-blueprint-900 dark:text-blueprint-paper"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 h-8 font-mono text-lg sm:text-xl text-blueprint-line dark:text-blueprint-line"
          >
            <span className="text-blueprint-900 dark:text-blueprint-paper">{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-pencil ml-1 align-middle animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-md text-blueprint-900/75 dark:text-blueprint-paper/75 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-pencil text-blueprint-950 font-mono text-sm font-medium hover:bg-pencil-soft transition-colors"
            >
              Lihat Karya Saya
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-blueprint-900/40 dark:border-blueprint-paper/40 text-blueprint-900 dark:text-blueprint-paper font-mono text-sm hover:border-pencil hover:text-pencil transition-colors"
            >
              Hubungi Saya
            </a>
          </motion.div>
        </div>

        {/* Right: profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden sm:block rounded-xl border-2 border-pencil p-2 shadow-[4px_4px_0px_0px_rgba(255,107,53,1)] bg-blueprint-paper dark:bg-blueprint-900 rotate-2 hover:rotate-0 transition-transform duration-300"
        >
          {/* Silakan simpan foto Anda ke folder src/assets/ dengan nama foto-profil.png */}
          <img
            src={new URL('../assets/hero.png', import.meta.url).href}
            alt={profile.name}
            className="w-full aspect-[4/5] object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
            onError={(e) => {
              // Jika foto-profil.png belum ada, akan menampilkan ini
              e.currentTarget.src = "https://ui-avatars.com/api/?name=Ilham+Sekti&size=512&background=0D1B2A&color=E0E1DD";
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
