import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="bg-blueprint-paper dark:bg-blueprint-900 border-t border-blueprint-line/30 py-8">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-blueprint-900/60 dark:text-blueprint-paper/60">
          © {new Date().getFullYear()} {profile.name}. Dibangun dengan React & TypeScript.
        </p>
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono text-xs text-blueprint-900 dark:text-blueprint-paper hover:text-pencil transition-colors"
        >
          Kembali ke atas <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
