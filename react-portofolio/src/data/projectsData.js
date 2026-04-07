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
