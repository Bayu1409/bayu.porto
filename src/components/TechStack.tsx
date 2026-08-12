import { motion } from "framer-motion";
import { techStack } from "../data/techStack";
import { SectionHeading } from "./About";
import type { TechStackItem } from "../types";

const categories: TechStackItem["category"][] = ["Frontend", "Backend", "Tools", "Design"];

export default function TechStack() {
  const grouped = categories
    .map((cat) => ({ cat, items: techStack.filter((t) => t.category === cat) }))
    .filter((g) => g.items.length > 0);

  return (
    <section id="techstack" className="bg-blueprint-paper dark:bg-blueprint-900 py-24 bg-blueprint-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Sheet 03" title="Keahlian" />

        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
          {grouped.map((g) => (
            <div key={g.cat}>
              <p className="font-mono text-xs uppercase tracking-widest text-pencil mb-4">{g.cat}</p>
              <div className="space-y-4">
                {g.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-sm text-blueprint-900 dark:text-blueprint-paper font-medium">
                        {item.name}
                      </span>
                      <span className="font-mono text-[11px] text-blueprint-line">{item.level}</span>
                    </div>
                    <div className="h-1.5 w-full bg-blueprint-900/10 dark:bg-blueprint-paper/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-pencil rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.levelPct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
