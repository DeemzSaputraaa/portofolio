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

// ─── PROJECTS DATA ────────────────────────────────────────────────────────────

const projectsBase = [
  {
    id: 1, slug: 'simptt-yudisium', title: 'SIMPTT Yudisium',
    techStack: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
    image: simptt1,
    gallery: [simptt1, simptt2, simptt3, simptt4],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: {
      shortDescription: 'Sistem Informasi Manajemen Pendaftaran Tugas Akhir dan Yudisium yang dirancang untuk mempermudah...',
      fullDescription: `SIMPTT Yudisium adalah Sistem Informasi Manajemen Pendaftaran Tugas Akhir dan Yudisium berbasis web yang dirancang untuk mendigitalisasi dan mempermudah proses akademik mahasiswa tingkat akhir. Aplikasi ini menangani seluruh alur mulai dari pengajuan judul, bimbingan, hingga pendaftaran yudisium.\n\nSistem ini memfasilitasi komunikasi yang lebih baik antara pihak mahasiswa, dosen pembimbing, dan bagian administrasi akademik. Dilengkapi dengan antarmuka yang ramah pengguna, pelacakan status dokumen yang akurat, serta kemudahan dalam mengelola dan memvalidasi berkas-berkas kelulusan.\n\nDibangun dengan fokus pada efisiensi dan transparansi, SIMPTT Yudisium memastikan proses yang terintegrasi sehingga meminimalisir kesalahan dan mempercepat prosedur kelulusan mahasiswa.`,
      features: ['Pendaftaran tugas akhir secara online', 'Sistem persetujuan berjenjang', 'Pelacakan status pendaftaran dan bimbingan', 'Manajemen pendaftaran dan validasi berkas yudisium', 'Antarmuka responsif dengan akses role-based'],
    },
    EN: {
      shortDescription: 'A web-based Final Project and Graduation Registration Management System designed to streamline...',
      fullDescription: `SIMPTT Yudisium is a web-based Final Project and Graduation Registration Management System designed to digitize and simplify the academic process for final-year students. The application handles the entire flow from title submission and thesis supervision to graduation registration.\n\nThe system facilitates better communication between students, supervisors, and the academic administration. It features a user-friendly interface, accurate document status tracking, and ease in managing and validating graduation files.\n\nBuilt with a focus on efficiency and transparency, SIMPTT Yudisium ensures an integrated process that minimizes errors and accelerates graduation procedures.`,
      features: ['Online final project registration', 'Multi-level approval system', 'Registration and supervision status tracking', 'Graduation file management and validation', 'Responsive interface with role-based access'],
    },
  },
  {
    id: 2, slug: 'healtisin', title: 'Healtisin',
    techStack: ['Laravel', 'JavaScript', 'CSS'],
    image: healtisin1,
    gallery: [healtisin1, healtisin2, healtisin3, healtisin4],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: {
      shortDescription: 'Aplikasi kesehatan komprehensif yang dirancang untuk mempermudah pengguna dalam memantau kesehatan...',
      fullDescription: `Healtisin adalah aplikasi kesehatan komprehensif yang inovatif, dibuat dengan tujuan membantu pengguna memantau dan mengelola kesehatan mereka secara efektif. Aplikasi ini memberikan pengalaman yang nyaman dan dapat diandalkan bagi pengguna untuk mengakses informasi medis mereka.\n\nFitur-fitur yang disediakan dalam aplikasi mencakup pemantauan aktivitas kesehatan harian, pengingat pengobatan, dan pelacakan asupan nutrisi yang membantu menjaga gaya hidup sehat. Antarmuka aplikasi dirancang ramah pengguna dan interaktif.\n\nKeamanan dan privasi data terjamin dalam aplikasi ini, memungkinkan pengguna untuk fokus pada kesehatan mereka tanpa khawatir tentang kerahasiaan informasi pribadi.`,
      features: ['Pemantauan aktivitas kesehatan harian', 'Pengingat pengobatan yang dapat disesuaikan', 'Pelacakan asupan nutrisi', 'Antarmuka yang intuitif dan interaktif', 'Keamanan data yang terjamin'],
    },
    EN: {
      shortDescription: 'A comprehensive health app designed to help users easily monitor and manage their health...',
      fullDescription: `Healtisin is an innovative and comprehensive health application designed to help users monitor and manage their health effectively. It provides a comfortable and reliable experience for users to access their medical information.\n\nFeatures include daily health activity monitoring, medication reminders, and nutrition intake tracking to help maintain a healthy lifestyle. The app interface is designed to be user-friendly and interactive.\n\nData security and privacy are guaranteed in this application, allowing users to focus on their health without worrying about the confidentiality of their personal information.`,
      features: ['Daily health activity monitoring', 'Customizable medication reminders', 'Nutrition intake tracking', 'Intuitive and interactive interface', 'Guaranteed data security'],
    },
  },
  {
    id: 3, slug: 'vitalife', title: 'Vitalife',
    techStack: ['Laravel', 'JavaScript', 'CSS'],
    image: vitalife1,
    gallery: [vitalife1, vitalife2, vitalife3, vitalife4, vitalife5],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: {
      shortDescription: 'Aplikasi manajemen kesehatan dan kebugaran dengan antarmuka modern untuk memantau aktivitas...',
      fullDescription: `Vitalife adalah platform terintegrasi yang berfokus pada kesehatan dan kebugaran penggunanya. Aplikasi ini didesain dengan antarmuka modern yang secara konsisten menggunakan skema warna yang menenangkan, memberikan kenyamanan maksimal saat memantau status kesehatan.\n\nMenyediakan fitur komprehensif yang dirancang khusus untuk memandu pengguna dalam perjalanan kebugaran mereka. Terdapat berbagai fungsionalitas pendukung seperti dashboard statistik, pemantauan jadwal diet, serta laporan aktivitas secara real-time.\n\nDengan berfokus pada kemudahan akses, Vitalife mengamankan privasi data sehingga pengguna bisa berkonsentrasi penuh pada menjaga gaya hidup sehat setiap harinya.`,
      features: ['Dashboard analitik kesehatan real-time', 'Manajemen jadwal aktivitas dan diet', 'Tampilan UI/UX modern yang berfokus pada kenyamanan', 'Laporan statistik komprehensif'],
    },
    EN: {
      shortDescription: 'A health and fitness management app with a modern interface for monitoring daily activities...',
      fullDescription: `Vitalife is an integrated platform focused on the health and fitness of its users. The application is designed with a modern interface that consistently uses calming color schemes, providing maximum comfort while monitoring health status.\n\nIt provides comprehensive features specially designed to guide users on their fitness journey, including a statistics dashboard, diet schedule monitoring, and real-time activity reports.\n\nWith a focus on ease of access, Vitalife secures data privacy so users can concentrate fully on maintaining a healthy lifestyle every day.`,
      features: ['Real-time health analytics dashboard', 'Activity and diet schedule management', 'Modern UI/UX focused on comfort', 'Comprehensive statistical reports'],
    },
  },
  {
    id: 4, slug: 'andaliman', title: 'Andaliman',
    techStack: ['React.js', 'Node.js', 'MongoDB', 'TensorFlow'],
    image: andaliman1,
    gallery: [andaliman1, andaliman2, andaliman3, andaliman4, andaliman5, andaliman6, andaliman7, andaliman8],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: {
      shortDescription: 'Aplikasi cerdas dengan analisis ucapan dan teks menggunakan machine learning TensorFlow.',
      fullDescription: `Andaliman adalah aplikasi inovatif yang mengintegrasikan teknologi Machine Learning untuk memproses dan menganalisis ucapan (speech) serta teks secara real-time. Dibangun untuk memberikan insight mendalam dari data percakapan maupun dokumen tertulis.\n\nSistem ini didukung oleh kecerdasan buatan berbasis TensorFlow yang mampu mengenali pola bahasa spesifik, mendeteksi sentimen, serta menerjemahkan suara ke dalam format teks dengan akurasi tinggi.\n\nArsitektur aplikasi dibangun secara modern dengan frontend yang interaktif dan backend yang kokoh, serta didukung oleh struktur database yang terukur untuk menangani volume data teks dan suara yang besar secara responsif.`,
      features: ['Speech-to-text dan text analysis secara real-time', 'Deteksi sentimen dan pola bahasa menggunakan AI', 'Dashboard interaktif untuk visualisasi hasil analisis', 'Manajemen data percakapan dan dokumen yang skalabel', 'Integrasi model TensorFlow ke dalam backend Node.js'],
    },
    EN: {
      shortDescription: 'An intelligent app with speech and text analysis powered by TensorFlow machine learning.',
      fullDescription: `Andaliman is an innovative application that integrates Machine Learning technology to process and analyze speech and text in real-time. Built to provide deep insights from conversational data and written documents.\n\nThe system is powered by TensorFlow-based artificial intelligence capable of recognizing specific language patterns, detecting sentiment, and transcribing speech to text with high accuracy.\n\nThe application architecture is built with a modern, interactive frontend and a robust backend, supported by a scalable database structure to handle large volumes of text and audio data responsively.`,
      features: ['Real-time speech-to-text and text analysis', 'AI-powered sentiment and language pattern detection', 'Interactive dashboard for analysis visualization', 'Scalable conversation and document data management', 'TensorFlow model integration into Node.js backend'],
    },
  },
  {
    id: 5, slug: 'project-placeholder-1', title: 'Project 5',
    techStack: ['React', 'CSS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1200&auto=format&fit=crop'],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: { shortDescription: 'Sistem informasi modern yang handal...', fullDescription: 'Deskripsi proyek ke-5.', features: ['Fitur utama', 'Keamanan tingkat lanjut', 'Desain responsif'] },
    EN: { shortDescription: 'A reliable and modern information system...', fullDescription: 'Description for project 5.', features: ['Main feature', 'Advanced security', 'Responsive design'] },
  },
  {
    id: 6, slug: 'project-placeholder-2', title: 'Project 6',
    techStack: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?q=80&w=1200&auto=format&fit=crop'],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: { shortDescription: 'Aplikasi inovatif masa depan yang dirancang dengan performa mutakhir...', fullDescription: 'Deskripsi proyek ke-6.', features: ['Performa cepat', 'Kolaborasi multi-pengguna', 'Analisis data real-time'] },
    EN: { shortDescription: 'A future-forward innovative app designed with cutting-edge performance...', fullDescription: 'Description for project 6.', features: ['Fast performance', 'Multi-user collaboration', 'Real-time data analysis'] },
  },
  {
    id: 7, slug: 'project-placeholder-3', title: 'Project 7',
    techStack: ['Next.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop'],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: { shortDescription: 'Aplikasi e-commerce modern dengan fitur rekomendasi berbasis machine learning...', fullDescription: 'E-commerce dengan rekomendasi produk personal.', features: ['Rekomendasi Produk', 'Sistem Pembayaran Terintegrasi', 'Manajemen Inventaris Otomatis'] },
    EN: { shortDescription: 'Modern e-commerce app with machine learning-based product recommendations...', fullDescription: 'E-commerce with personalized product recommendations.', features: ['Product Recommendations', 'Integrated Payment System', 'Automated Inventory Management'] },
  },
  {
    id: 8, slug: 'project-placeholder-4', title: 'Project 8',
    techStack: ['React', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop'],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: { shortDescription: 'Platform edukasi daring dengan sistem manajemen kursus dan integrasi video interaktif...', fullDescription: 'Platform pembelajaran daring yang mulus dengan fitur sertifikasi otomatis.', features: ['Pemutar Video Edukasi Interaktif', 'Pelacakan Progres Belajar', 'Sertifikasi Otomatis'] },
    EN: { shortDescription: 'Online education platform with course management and interactive video integration...', fullDescription: 'A seamless online learning platform featuring automated certification.', features: ['Interactive Educational Video Player', 'Learning Progress Tracking', 'Automated Certification'] },
  },
  {
    id: 9, slug: 'project-placeholder-5', title: 'Project 9',
    techStack: ['Vue.js', 'Firebase', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop',
    gallery: ['https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'],
    demoLink: '#', githubLink: '#', date: '2024',
    ID: { shortDescription: 'Sistem pelacak keuangan pribadi (Personal Tracker) dengan analitik visual...', fullDescription: 'Aplikasi pelacak pengeluaran bulanan dengan visualisasi grafik.', features: ['Grafik Pengeluaran Visual', 'Notifikasi Batas Anggaran', 'Ekspor Data Transaksi'] },
    EN: { shortDescription: 'Personal finance tracker with visual analytics and budget management...', fullDescription: 'A monthly expense tracker app with chart visualization.', features: ['Visual Expense Charts', 'Budget Limit Notifications', 'Transaction Data Export'] },
  },
];

// ─── CERTIFICATES DATA ────────────────────────────────────────────────────────

const certificatesBase = [
  {
    id: 1, title: 'Frontend Developer Certificate',
    image: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=800&auto=format&fit=crop',
    demoLink: '#', detailsLink: '#',
    ID: { shortDescription: 'Sertifikasi resmi pengembangan web frontend dengan React dan teknologi modern lainnya.' },
    EN: { shortDescription: 'Official frontend web development certification using React and other modern technologies.' },
  },
  {
    id: 2, title: 'UI/UX Design Masterclass',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop',
    demoLink: '#', detailsLink: '#',
    ID: { shortDescription: 'Pelatihan komprehensif tentang desain antarmuka pengguna dan pengalaman pengguna menggunakan Figma.' },
    EN: { shortDescription: 'Comprehensive training on user interface and user experience design using Figma.' },
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

export const getProjectsData = (lang = 'ID') =>
  projectsBase.map(({ ID, EN, ...base }) => ({ ...base, ...( lang === 'EN' ? EN : ID ) }));

export const getCertificatesData = (lang = 'ID') =>
  certificatesBase.map(({ ID, EN, ...base }) => ({ ...base, ...( lang === 'EN' ? EN : ID ) }));

// ─── STATIC EXPORTS (kept for backward compatibility) ─────────────────────────

export const projectsData = getProjectsData('ID');
export const certificatesData = getCertificatesData('ID');

export const skillsData = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'HTML5', icon: '🧱' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Git', icon: '📁' },
  { name: 'Figma', icon: '🖋️' },
];

