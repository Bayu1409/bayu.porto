import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ loading }: { loading: boolean }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-blueprint-900 grid place-items-center"
        >
          <div className="font-mono text-blueprint-paper text-sm tracking-widest flex flex-col items-center gap-4">
            <motion.svg
              width="48" height="48" viewBox="0 0 48 48" fill="none"
            >
              <motion.rect
                x="4" y="4" width="40" height="40" stroke="#FF6B35" strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.svg>
            <span>MEMUAT BLUEPRINT…</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
