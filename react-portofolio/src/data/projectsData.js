import vitalife1 from '../assets/images/vitalife/vitalife1.png';
import vitalife2 from '../assets/images/vitalife/vitalife2.png';
import vitalife3 from '../assets/images/vitalife/vitalife3.png';
import vitalife4 from '../assets/images/vitalife/vitalife4.png';
import vitalife5 from '../assets/images/vitalife/vitalife5.png';
import healtisin1 from '../assets/images/healtisin/healtisin1.png';
import healtisin2 from '../assets/images/healtisin/healtisin2.png';
import healtisin3 from '../assets/images/healtisin/healtisin3.png';
import healtisin4 from '../assets/images/healtisin/healtisin4.png';
import simptt1 from '../assets/images/simptt-yudisium/simptt1.jpeg';
import simptt2 from '../assets/images/simptt-yudisium/simptt2.jpeg';
import simptt3 from '../assets/images/simptt-yudisium/simptt3.png';
import simptt4 from '../assets/images/simptt-yudisium/simptt4.png';
import andaliman1 from '../assets/images/andaliman/andaliman1.png';
import andaliman2 from '../assets/images/andaliman/andaliman2.png';
import andaliman3 from '../assets/images/andaliman/andaliman3.png';
import andaliman4 from '../assets/images/andaliman/andaliman4.png';
import andaliman5 from '../assets/images/andaliman/andaliman5.png';
import andaliman6 from '../assets/images/andaliman/andaliman6.png';
import andaliman7 from '../assets/images/andaliman/andaliman7.png';
import andaliman8 from '../assets/images/andaliman/andaliman8.png';

const projectsData = [
  {
    id: 1,
    slug: "simptt-yudisium",
    title: "SIMPTT Yudisium",
    shortDescription: "Sistem Informasi Manajemen Pendaftaran Tugas Akhir dan Yudisium yang dirancang untuk mempermudah...",
    fullDescription: `SIMPTT Yudisium adalah Sistem Informasi Manajemen Pendaftaran Tugas Akhir dan Yudisium berbasis web yang dirancang untuk mendigitalisasi dan mempermudah proses akademik mahasiswa tingkat akhir. Aplikasi ini menangani seluruh alur mulai dari pengajuan judul, bimbingan, hingga pendaftaran yudisium.

Sistem ini memfasilitasi komunikasi yang lebih baik antara pihak mahasiswa, dosen pembimbing, dan bagian administrasi akademik. Dilengkapi dengan antarmuka yang ramah pengguna, pelacakan status dokumen yang akurat, serta kemudahan dalam mengelola dan memvalidasi berkas-berkas kelulusan.

Dibangun dengan fokus pada efisiensi dan transparansi, SIMPTT Yudisium memastikan proses yang terintegrasi sehingga meminimalisir kesalahan dan mempercepat prosedur kelulusan mahasiswa.`,
    features: [
      "Pendaftaran tugas akhir secara online",
      "Sistem persetujuan berjenjang",
      "Pelacakan status pendaftaran dan bimbingan",
      "Manajemen pendaftaran dan validasi berkas yudisium",
      "Antarmuka responsif dengan akses role-based"
    ],
    techStack: ["Vue.js", "Laravel", "MySQL", "Bootstrap"],
    image: simptt1,
    gallery: [
      simptt1,
      simptt2,
      simptt3,
      simptt4
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  },
  {
    id: 2,
    slug: "healtisin",
    title: "Healtisin",
    shortDescription: "Aplikasi kesehatan komprehensif yang dirancang untuk mempermudah pengguna dalam memantau kesehatan...",
    fullDescription: `Healtisin adalah aplikasi kesehatan komprehensif yang inovatif, dibuat dengan tujuan membantu pengguna memantau dan mengelola kesehatan mereka secara efektif. Aplikasi ini memberikan pengalaman yang nyaman dan dapat diandalkan bagi pengguna untuk mengakses informasi medis mereka.

Fitur-fitur yang disediakan dalam aplikasi mencakup pemantauan aktivitas kesehatan harian, pengingat pengobatan, dan pelacakan asupan nutrisi yang membantu menjaga gaya hidup sehat. Antarmuka aplikasi dirancang ramah pengguna dan interaktif.

Keamanan dan privasi data terjamin dalam aplikasi ini, memungkinkan pengguna untuk fokus pada kesehatan mereka tanpa khawatir tentang kerahasiaan informasi pribadi.`,
    features: [
      "Pemantauan aktivitas kesehatan harian",
      "Pengingat pengobatan yang dapat disesuaikan",
      "Pelacakan asupan nutrisi",
      "Antarmuka yang intuitif dan interaktif",
      "Keamanan data yang terjamin"
    ],
    techStack: ["Laravel", "JavaScript", "CSS"],
    image: healtisin1,
    gallery: [
      healtisin1,
      healtisin2,
      healtisin3,
      healtisin4
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  },
  {
    id: 3,
    slug: "vitalife",
    title: "Vitalife",
    shortDescription: "Aplikasi manajemen kesehatan dan kebugaran dengan antarmuka modern untuk memantau aktivitas...",
    fullDescription: `Vitalife adalah platform terintegrasi yang berfokus pada kesehatan dan kebugaran penggunanya. Aplikasi ini didesain dengan antarmuka modern yang secara konsisten menggunakan skema warna yang menenangkan, memberikan kenyamanan maksimal saat memantau status kesehatan.

Menyediakan fitur komprehensif yang dirancang khusus untuk memandu pengguna dalam perjalanan kebugaran mereka. Terdapat berbagai fungsionalitas pendukung seperti dashboard statistik, pemantauan jadwal diet, serta laporan aktivitas secara real-time.

Dengan berfokus pada kemudahan akses, Vitalife mengamankan privasi data sehingga pengguna bisa berkonsentrasi penuh pada menjaga gaya hidup sehat setiap harinya.`,
    features: [
      "Dashboard analitik kesehatan real-time",
      "Manajemen jadwal aktivitas dan diet",
      "Tampilan UI/UX modern yang berfokus pada kenyamanan",
      "Laporan statistik komprehensif"
    ],
    techStack: ["Laravel", "JavaScript", "CSS"],
    image: vitalife1,
    gallery: [
      vitalife1,
      vitalife2,
      vitalife3,
      vitalife4,
      vitalife5
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  },
  {
    id: 4,
    slug: "andaliman",
    title: "Andaliman",
    shortDescription: "Aplikasi cerdas dengan analisis ucapan dan teks menggunakan machine learning TensorFlow.",
    fullDescription: `Andaliman adalah aplikasi inovatif yang mengintegrasikan teknologi Machine Learning untuk memproses dan menganalisis ucapan (speech) serta teks secara real-time. Dibangun untuk memberikan insight mendalam dari data percakapan maupun dokumen tertulis.

Sistem ini didukung oleh kecerdasan buatan berbasis TensorFlow yang mampu mengenali pola bahasa spesifik, mendeteksi sentimen, serta menerjemahkan suara ke dalam format teks dengan akurasi tinggi. Dirancang untuk dapat digunakan oleh berbagai sektor, mulai dari analisis layanan pelanggan hingga aksesibilitas informasi.

Arsitektur aplikasi dibangun secara modern dengan frontend yang interaktif dan backend yang kokoh, serta didukung oleh struktur database yang terukur untuk menangani volume data teks dan suara yang besar secara responsif.`,
    features: [
      "Speech-to-text dan text analysis secara real-time",
      "Deteksi sentimen dan pola bahasa menggunakan AI",
      "Dashboard interaktif untuk visualisasi hasil analisis",
      "Manajemen data percakapan dan dokumen yang skalabel",
      "Integrasi model TensorFlow ke dalam backend Node.js"
    ],
    techStack: ["React.js", "Node.js", "MongoDB", "TensorFlow"],
    image: andaliman1,
    gallery: [
      andaliman1,
      andaliman2,
      andaliman3,
      andaliman4,
      andaliman5,
      andaliman6,
      andaliman7,
      andaliman8
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  },
  {
    id: 5,
    slug: "project-placeholder-1",
    title: "Proyek 5",
    shortDescription: "Sistem informasi modern yang handal...",
    fullDescription: `Ini adalah ruang sementara untuk Proyek ke-5 Anda. Deskripsi lengkap mengenai proyek ini serta fitur utamanya dapat diubah menyesuaikan aplikasi yang telah Anda buat. Sistem ini memiliki antarmuka yang dinamis dengan fungsionalitas yang responsif.`,
    features: [
      "Fitur utama nomor satu",
      "Keamanan tingkat lanjut",
      "Desain yang sangat responsif"
    ],
    techStack: ["React", "CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1200&auto=format&fit=crop"
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  },
  {
    id: 6,
    slug: "project-placeholder-2",
    title: "Proyek 6",
    shortDescription: "Aplikasi inovatif masa depan yang dirancang dengan performa mutakhir...",
    fullDescription: `Ini adalah ruang sementara untuk Proyek ke-6 Anda. Deskripsi lengkap mengenai inovasi dan pemecahan masalah yang dilakukan oleh aplikasi ini akan ditempatkan di sini. Pastikan setiap detail merefleksikan kerja keras di dalam pengembangannya.`,
    features: [
      "Performa sistem yang cepat",
      "Kolaborasi multi-pengguna",
      "Analisis data waktu nyata"
    ],
    techStack: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1200&auto=format&fit=crop"
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  },
  {
    id: 7,
    slug: "project-placeholder-3",
    title: "Proyek 7",
    shortDescription: "Aplikasi e-commerce modern dengan fitur rekomendasi berbasis machine learning...",
    fullDescription: "Proyek ke-7 adalah aplikasi e-commerce masa depan yang dirancang untuk memberikan pengalaman berbelanja yang personal. Sistem menggunakan algoritma untuk menyarankan produk berdasarkan preferensi pengguna.",
    features: [
      "Rekomendasi Produk Personalisasi",
      "Sistem Pembayaran Terintegrasi",
      "Manajemen Inventaris Otomatis"
    ],
    techStack: ["Next.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop"
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  },
  {
    id: 8,
    slug: "project-placeholder-4",
    title: "Proyek 8",
    shortDescription: "Platform edukasi daring dengan sistem manajemen kursus dan integrasi video interaktif...",
    fullDescription: "Proyek ke-8 dibangun untuk memfasilitasi pembelajaran daring yang mulus. Terdapat berbagai fitur seperti pelacakan progres siswa, modul interaktif, dan sertifikasi otomatis untuk meningkatkan keterlibatan siswa.",
    features: [
      "Pemutar Video Edukasi Interaktif",
      "Pelacakan Progres Belajar",
      "Sertifikasi Otomatis"
    ],
    techStack: ["React", "Express", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  },
  {
    id: 9,
    slug: "project-placeholder-5",
    title: "Proyek 9",
    shortDescription: "Sistem pelacak keuangan pribadi (Personal Tracker) dengan analitik visual...",
    fullDescription: "Proyek ke-9 ditujukan bagi pengguna yang ingin melacak pengeluaran dan pemasukan bulanan mereka. Visuliasasi grafik membantu menganalisa kebiasaan finansial dan memberikan peringatan jika melewati batas anggaran.",
    features: [
      "Grafik Pengeluaran Visual",
      "Notifikasi Batas Anggaran",
      "Ekspor Data Transaksi"
    ],
    techStack: ["Vue.js", "Firebase", "Chart.js"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    demoLink: "#",
    githubLink: "#",
    date: "2024"
  }
];

const certificatesData = [
  {
    id: 1,
    title: "Frontend Developer Certificate",
    shortDescription: "Sertifikasi resmi pengembangan web frontend dengan React dan teknologi modern lainnya.",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    shortDescription: "Pelatihan komprehensif tentang desain antarmuka pengguna dan pengalaman pengguna menggunakan Figma.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    detailsLink: "#"
  }
];

const skillsData = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'HTML5', icon: '🧱' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Git', icon: '📁' },
  { name: 'Figma', icon: '🖋️' }
];

export { projectsData, certificatesData, skillsData };
