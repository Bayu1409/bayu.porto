import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiDownload } from "react-icons/fi";
import { profile } from "../data/profile";
import { SectionHeading } from "./About";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    
    // GANTI URL DI BAWAH DENGAN URL FORMSPREE ANDA
    fetch("https://formspree.io/f/GANTI_DENGAN_ID_ANDA", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setStatus("sent");
          (e.target as HTMLFormElement).reset();
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }

  return (
    <section id="contact" className="bg-blueprint-paper dark:bg-blueprint-900 py-24 bg-blueprint-grid">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Sheet 07" title="Mari Berkolaborasi" />

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blueprint-900/75 dark:text-blueprint-paper/75 leading-relaxed mb-6">
              Punya proyek, ide, atau sekadar ingin berdiskusi soal web development? Kirim pesan lewat form,
              atau hubungi langsung lewat email di bawah.
            </p>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 font-mono text-sm text-blueprint-900 dark:text-blueprint-paper hover:text-pencil transition-colors mb-6"
            >
              <FiMail /> {profile.email}
            </a>

            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-blueprint-900/40 dark:border-blueprint-paper/40 font-mono text-xs text-blueprint-900 dark:text-blueprint-paper hover:border-pencil hover:text-pencil transition-colors mb-8"
            >
              <FiDownload /> Unduh CV
            </a>

            <div className="flex gap-4">
              <a href={profile.socials.github} aria-label="GitHub" className="w-10 h-10 grid place-items-center border border-blueprint-line/40 text-blueprint-900 dark:text-blueprint-paper hover:border-pencil hover:text-pencil transition-colors">
                <FiGithub />
              </a>
              <a href={profile.socials.linkedin} aria-label="LinkedIn" className="w-10 h-10 grid place-items-center border border-blueprint-line/40 text-blueprint-900 dark:text-blueprint-paper hover:border-pencil hover:text-pencil transition-colors">
                <FiLinkedin />
              </a>
              <a href={profile.socials.instagram} aria-label="Instagram" className="w-10 h-10 grid place-items-center border border-blueprint-line/40 text-blueprint-900 dark:text-blueprint-paper hover:border-pencil hover:text-pencil transition-colors">
                <FiInstagram />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="border border-blueprint-line/40 p-6 space-y-4"
          >
            <Field label="Nama" id="name" type="text" required />
            <Field label="Email" id="email" type="email" required />
            <div>
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-pencil block mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full bg-transparent border border-blueprint-line/40 focus:border-pencil outline-none px-3 py-2 text-sm text-blueprint-900 dark:text-blueprint-paper resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-pencil text-blueprint-950 font-mono text-sm font-medium hover:bg-pencil-soft transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            </button>
            {status === "sent" && (
              <p className="font-mono text-xs text-green-500">
                Pesan berhasil terkirim! Terima kasih telah menghubungi saya.
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-xs text-red-500">
                Gagal mengirim pesan. Pastikan Anda sudah mengganti URL Formspree di kode.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type, required }: { label: string; id: string; type: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-widest text-pencil block mb-2">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full bg-transparent border border-blueprint-line/40 focus:border-pencil outline-none px-3 py-2 text-sm text-blueprint-900 dark:text-blueprint-paper"
      />
    </div>
  );
}
