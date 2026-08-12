import { motion } from "framer-motion";
import { FiMapPin, FiMail, FiBookOpen } from "react-icons/fi";
import { profile, timeline } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="bg-blueprint-paper dark:bg-blueprint-900 py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Sheet 02" title="Perjalanan Saya" />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12">
          {/* Data diri */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="sheet-corner border border-blueprint-line/40 p-6 h-fit text-blueprint-line"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-pencil mb-4">Data Diri</p>
            <dl className="space-y-4 text-sm">
              <div className="flex gap-3 text-blueprint-900 dark:text-blueprint-paper">
                <FiMapPin className="mt-1 shrink-0 text-pencil" />
                <div>
                  <dt className="font-mono text-xs opacity-60">Domisili</dt>
                  <dd>{profile.domicile}</dd>
                </div>
              </div>
              <div className="flex gap-3 text-blueprint-900 dark:text-blueprint-paper">
                <FiMail className="mt-1 shrink-0 text-pencil" />
                <div>
                  <dt className="font-mono text-xs opacity-60">Email</dt>
                  <dd>{profile.email}</dd>
                </div>
              </div>
              <div className="flex gap-3 text-blueprint-900 dark:text-blueprint-paper">
                <FiBookOpen className="mt-1 shrink-0 text-pencil" />
                <div>
                  <dt className="font-mono text-xs opacity-60">Latar Belakang</dt>
                  <dd>{profile.education}</dd>
                </div>
              </div>
            </dl>

            <p className="font-mono text-xs uppercase tracking-widest text-pencil mt-6 mb-3">Prinsip Kerja</p>
            <ul className="space-y-2 text-sm text-blueprint-900/80 dark:text-blueprint-paper/80">
              {profile.values.map((v) => (
                <li key={v} className="flex gap-2">
                  <span className="text-pencil">—</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Story + timeline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-blueprint-900/80 dark:text-blueprint-paper/80 leading-relaxed mb-10"
            >
              {profile.aboutStory}
            </motion.p>

            <div className="relative pl-6 border-l border-blueprint-line/40 space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1 w-2.5 h-2.5 rounded-full bg-pencil" />
                  <p className="font-mono text-xs uppercase tracking-widest text-pencil mb-1">{t.year}</p>
                  <h3 className="font-display font-semibold text-lg text-blueprint-900 dark:text-blueprint-paper mb-1">
                    {t.title}
                  </h3>
                  <p className="text-sm text-blueprint-900/70 dark:text-blueprint-paper/70 leading-relaxed">
                    {t.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-pencil mb-2">{eyebrow}</p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl text-blueprint-900 dark:text-blueprint-paper">
        {title}
      </h2>
      <div className="w-16 h-[2px] bg-pencil mt-4" />
    </motion.div>
  );
}
