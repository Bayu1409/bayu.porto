import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";
import { SectionHeading } from "./About";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-blueprint-paper dark:bg-blueprint-900 py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Sheet 06" title="Testimoni" />

        {testimonials.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.blockquote
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border border-blueprint-line/40 p-6"
              >
                <p className="text-sm text-blueprint-900/80 dark:text-blueprint-paper/80 leading-relaxed mb-4">
                  “{t.quote}”
                </p>
                <footer className="font-mono text-xs text-pencil">
                  {t.name} — <span className="text-blueprint-line">{t.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        ) : (
          <div className="sheet-corner border border-dashed border-blueprint-line/40 p-10 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-pencil mb-2">Belum ada entri</p>
            <p className="text-sm text-blueprint-900/70 dark:text-blueprint-paper/70">
              Testimoni dari klien atau rekan kerja akan tampil di sini. Tambahkan lewat{" "}
              <code className="font-mono text-xs">src/data/testimonials.ts</code> setelah kamu punya kutipan nyata.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
