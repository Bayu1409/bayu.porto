import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";
import { profile } from "../data/profile";
import { SectionHeading } from "./About";

export default function Contact() {
  return (
    <section id="contact" className="bg-blueprint-paper dark:bg-blueprint-900 py-24 bg-blueprint-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Sheet 07" title="Mari Berkolaborasi" />

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start mt-8">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display font-semibold text-2xl text-blueprint-900 dark:text-blueprint-paper mb-4">
              Mulai Sesuatu yang Hebat
            </h3>
            <p className="text-blueprint-900/75 dark:text-blueprint-paper/75 leading-relaxed mb-6 text-lg">
              Punya proyek, ide brilian, atau sekadar ingin berdiskusi soal web development?
              Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk mengeksplorasi peluang
              kolaborasi baru dan membantu mewujudkan ide Anda menjadi produk digital.
            </p>
            <p className="text-blueprint-900/75 dark:text-blueprint-paper/75 leading-relaxed text-lg">
              Kotak masuk saya selalu terbuka. Apakah Anda punya pertanyaan, mencari partner diskusi,
              atau sekadar menyapa, saya akan berusaha sebaik mungkin untuk membalasnya!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="sheet-corner border border-blueprint-line/40 p-8 h-fit relative bg-blueprint-paper/50 dark:bg-blueprint-900/50 backdrop-blur-sm"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-pencil mb-6">Info Kontak</p>

            <div className="space-y-6 mb-10">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-full border border-blueprint-line/40 grid place-items-center text-blueprint-900 dark:text-blueprint-paper group-hover:border-pencil group-hover:text-pencil transition-all">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-xs opacity-60 text-blueprint-900 dark:text-blueprint-paper mb-1">Email</p>
                  <p className="font-medium text-blueprint-900 dark:text-blueprint-paper group-hover:text-pencil transition-colors">{profile.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-blueprint-line/40 grid place-items-center text-blueprint-900 dark:text-blueprint-paper">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-mono text-xs opacity-60 text-blueprint-900 dark:text-blueprint-paper mb-1">Domisili</p>
                  <p className="font-medium text-blueprint-900 dark:text-blueprint-paper">{profile.domicile}</p>
                </div>
              </div>
            </div>

            <p className="font-mono text-xs uppercase tracking-widest text-pencil mb-4">Media Sosial</p>
            <div className="flex gap-4">
              <a href={profile.socials.github} aria-label="GitHub" className="w-12 h-12 text-lg grid place-items-center border border-blueprint-line/40 rounded-full text-blueprint-900 dark:text-blueprint-paper hover:border-pencil hover:text-pencil hover:-translate-y-1 transition-all">
                <FiGithub />
              </a>
              <a href={profile.socials.linkedin} aria-label="LinkedIn" className="w-12 h-12 text-lg grid place-items-center border border-blueprint-line/40 rounded-full text-blueprint-900 dark:text-blueprint-paper hover:border-pencil hover:text-pencil hover:-translate-y-1 transition-all">
                <FiLinkedin />
              </a>
              <a href={profile.socials.instagram} aria-label="Instagram" className="w-12 h-12 text-lg grid place-items-center border border-blueprint-line/40 rounded-full text-blueprint-900 dark:text-blueprint-paper hover:border-pencil hover:text-pencil hover:-translate-y-1 transition-all">
                <FiInstagram />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
