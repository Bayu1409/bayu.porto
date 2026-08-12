import type { Project } from "../types";

// Placeholder — ganti dengan proyek nyata kamu (judul, deskripsi, link demo & repo).
export const projects: Project[] = [
  {
    id: "hcm-center",
    title: "HCM Center",
    description: "Sistem Manajemen Karyawan untuk mengelola data, absensi, dan kinerja HR dalam satu platform terpadu.",
    problem: "Klien Oemah Solution Indonesia membutuhkan sistem terpusat untuk keperluan Human Resources (HR).",
    solution: "Dibangun dengan antarmuka yang bersih dan fungsional untuk memudahkan semua kebutuhan HR.",
    result: "Pengelolaan data karyawan dan absensi menjadi lebih efisien dan terpadu.",
    techStack: ["Web App", "Frontend", "Backend"],
    category: "Web App",
    imageUrl: "/assets/images/hcm-center.png",
  },
  {
    id: "jitupasna",
    title: "Jitupasna",
    description: "Sistem untuk keperluan operasional dan layanan di Universitas Sebelas Maret (UNS).",
    problem: "UNS membutuhkan sistem informasi yang handal untuk memudahkan pengguna dalam berinteraksi dengan layanan kampus.",
    solution: "Membangun sistem dengan antarmuka yang user-friendly dan responsif.",
    result: "Proses layanan dan operasional menjadi lebih terstruktur dan mudah diakses.",
    techStack: ["Web App", "UI/UX", "Database"],
    category: "Web App",
    imageUrl: "/assets/images/jitupasna.png",
  },
  {
    id: "sigudang",
    title: "SiGudang",
    description: "Sistem Informasi Manajemen Gudang untuk UMKM JAYA ABADI PRAMUKA (Sambi, Boyolali).",
    problem: "UMKM membutuhkan solusi untuk efisiensi gudang dalam mengelola stok dan memantau mutasi barang.",
    solution: "Dikembangkan sistem inventaris cerdas dan terintegrasi untuk pengelolaan stok yang optimal.",
    result: "Efisiensi pergudangan meningkat dengan pantauan stok dan mutasi barang yang real-time.",
    techStack: ["Web App", "Inventory System"],
    category: "Web App",
    imageUrl: "/assets/images/sigudang.png",
  },
];
