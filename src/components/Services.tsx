import { motion } from "framer-motion";
import { services } from "../data/services";
import { SectionHeading } from "./About";

export default function Services() {
  return (
    <section id="services" className="bg-blueprint-paper dark:bg-blueprint-900 py-24 bg-blueprint-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Sheet 05" title="Layanan" />

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="border border-blueprint-line/40 hover:border-pencil/70 transition-colors p-6"
            >
              <span className="font-mono text-2xl text-pencil">{s.tag}</span>
              <h3 className="font-display font-semibold text-lg text-blueprint-900 dark:text-blueprint-paper mt-3 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-blueprint-900/70 dark:text-blueprint-paper/70 leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
