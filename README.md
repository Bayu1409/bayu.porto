# Portofolio — Ilham Sekti Bayu Artha

Website portofolio personal branding bertema storytelling, dibangun dengan React + TypeScript + Vite + Tailwind CSS + Framer Motion.

**Konsep visual**: "Blueprint Digital" — terinspirasi gambar teknik arsitek, sebagai metafora proses membangun web: terstruktur, presisi, dan bertahap dari sketsa (rev.01) hingga jadi.

## Menjalankan di lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

## Build untuk produksi

```bash
npm run build
npm run preview   # cek hasil build
```

## Yang perlu kamu edit

| File | Isi |
|---|---|
| `src/data/profile.ts` | Nama, tagline, domisili, email, cerita "Tentang", timeline perjalanan |
| `src/data/techStack.ts` | Daftar skill & level penguasaan (otomatis jadi dasar section Layanan) |
| `src/data/projects.ts` | **Masih placeholder** — ganti dengan proyek nyata: judul, deskripsi, link demo & repo, screenshot |
| `src/data/services.ts` | Layanan yang ditawarkan (sudah disusun mengikuti Tech Stack) |
| `src/data/testimonials.ts` | Kosong secara default — isi kalau sudah ada testimoni nyata dari klien/rekan kerja |
| `public/cv.pdf` | **File placeholder** — ganti dengan CV asli kamu (format PDF, nama file tetap `cv.pdf`) |

## Menghubungkan form kontak

Form di `src/components/Contact.tsx` saat ini hanya menampilkan status lokal (belum mengirim email sungguhan). Untuk mengaktifkannya:

- **EmailJS**: `npm install @emailjs/browser`, lalu panggil `emailjs.send(...)` di dalam `handleSubmit`.
- **Formspree**: ubah `<form onSubmit={handleSubmit}>` menjadi POST langsung ke endpoint Formspree kamu (`action="https://formspree.io/f/xxxxx" method="POST"`).

## Fitur yang sudah tersedia

- Hero dengan efek mengetik (typewriter) untuk role
- Sketsa blueprint animasi (signature visual) di Hero
- Dark/Light mode toggle (tersimpan di localStorage)
- Scroll progress bar di atas halaman
- Scroll reveal animation (Framer Motion, menghormati `prefers-reduced-motion`)
- Section About dengan timeline naratif
- Tech Stack dikelompokkan per kategori dengan progress bar level
- Filter kategori proyek
- Section Layanan otomatis konsisten dengan Tech Stack
- Section Testimoni dengan empty state yang jujur (tidak ada kutipan palsu)
- Tombol Unduh CV
- Footer dengan tombol kembali ke atas
- Preloader saat halaman pertama dibuka
- SEO dasar: meta description & Open Graph tags
- Fokus keyboard terlihat (accessibility)

## Fitur dari spec awal yang belum diimplementasikan

Beberapa fitur opsional di spec sengaja belum dibuat agar tetap fokus (bisa ditambahkan menyusul): custom cursor, integrasi Google Analytics/Plausible, dan toggle multi-bahasa ID/EN (situs ini dibuat berbahasa Indonesia saja sesuai permintaan kamu).
