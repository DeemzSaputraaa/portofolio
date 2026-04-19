import { createContext, useState, useContext } from 'react';

const translations = {
  ID: {
    header: { about: "Tentang", edu: "Pendidikan", port: "Portofolio", contact: "Kontak", hire: "Rekrut Saya" },
    hero: { greeting: "Halo,", subtext: "Saya fokus membangun produk digital yang rapi, cepat, dan siap berkembang. Frontend, backend, dan data - semua terintegrasi.", roleIntro: "Creative", namePre: "Saya" },
    about: { eyebrow: "TENTANG SAYA", title: "Tentang Saya", btn: "Unduh CV", heading: "Berfokus pada solusi digital yang rapi dan berdampak.", body1: "Saya adalah pengembang yang senang menggabungkan desain yang kuat dengan performa aplikasi yang cepat. Fokus saya pada frontend, backend, dan data engineering agar produk dapat berkembang stabil dan mudah dirawat.", body2: "Saat ini saya banyak bekerja dengan React, Node.js, dan ekosistem data modern untuk membangun pengalaman digital yang efektif dan elegan." },
    edu: { eyebrow: "PENDIDIKAN & PENGHARGAAN", title: "Pendidikan", titleAwd: "Penghargaan", awardSubtitle: "Penghargaan & Apresiasi", proofBtn: "Lihat bukti penghargaan" },
    port: { eyebrow: "PORTOFOLIO", title: "Pameran Portofolio", sub: "Jelajahi perjalanan saya melalui proyek, sertifikasi, dan keahlian teknis. Setiap bagian mewakili pencapaian dalam jalur pembelajaran saya secara terus-menerus.", viewAll: "Lihat Semua", tabProjects: "Proyek", tabCerts: "Sertifikat", tabTech: "Tech Stack", liveDemo: "Live Demo", details: "Detail", techDesc: "Teknologi dan alat yang saya gunakan sehari-hari dalam membangun produk digital." },
    github: { eyebrow: "STATUS CODING", title: "Aktivitas", titleHighlight: "GitHub", desc: "Hari-hari ketika saya ngoding dan membangun sesuatu." },
    contact: { eyebrow: "HUBUNGI SAYA", title1: "Mari Bekerja", title2: "Sama", desc: "Saya selalu terbuka untuk mendiskusikan pekerjaan desain produk atau peluang kemitraan.", btnEmail: "Kirim Email", btnWa: "Kirim WhatsApp", loc: "Lokasi", pageTitle: "Hubungi", pageTitleHighlight: "Saya", pageDesc: "Tertarik bekerja sama? Jangan ragu untuk menghubungi saya. Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.", locLabel: "LOKASI", locValue: "Daerah Istimewa Yogyakarta, Indonesia", ctaTitle: "Mari bekerja", ctaHighlight: "sama", ctaDesc: "Apakah Anda membutuhkan bantuan dalam administrasi database, proyek AI/ML, atau solusi computer vision, saya siap berkolaborasi dan mewujudkan ide Anda.", btnDownloadCv: "Unduh CV Saya" },
    footer: { text: "© {year} Dimas Edwin Saputra. Semua hak cipta dilindungi.", builtWith: "Dibuat dengan React." }
  },
  EN: {
    header: { about: "About", edu: "Education", port: "Portfolio", contact: "Contact", hire: "Hire Me" },
    hero: { greeting: "Hello,", subtext: "I focus on building clean, fast, and scalable digital products. Frontend, backend, and data - fully integrated.", roleIntro: "Creative", namePre: "I'm" },
    about: { eyebrow: "ABOUT ME", title: "About Me", btn: "Download CV", heading: "Focused on clean and impactful digital solutions.", body1: "I'm a developer who enjoys combining strong design with fast application performance. My focus on frontend, backend, and data engineering ensures products can scale stably and remain maintainable.", body2: "I currently work extensively with React, Node.js, and modern data ecosystems to build digital experiences that are both effective and elegant." },
    edu: { eyebrow: "EDUCATION & AWARDS", title: "Education", titleAwd: "Awards", awardSubtitle: "Awards & Appreciations", proofBtn: "View award proof" },
    port: { eyebrow: "PORTFOLIO", title: "Portfolio Showcase", sub: "Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.", viewAll: "View All", tabProjects: "Projects", tabCerts: "Certificates", tabTech: "Tech Stack", liveDemo: "Live Demo", details: "Details", techDesc: "Technologies and tools I use daily to build digital products." },
    github: { eyebrow: "CODING STATUS", title: "GitHub", titleHighlight: "Activity", desc: "Days I've spent coding and building things." },
    contact: { eyebrow: "CONTACT ME", title1: "Let's Work", title2: "Together", desc: "I'm always open to discussing product design work or partnership opportunities.", btnEmail: "Send Email", btnWa: "Send WhatsApp", loc: "Location", pageTitle: "Contact", pageTitleHighlight: "Me", pageDesc: "Interested in working together? Don't hesitate to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.", locLabel: "LOCATION", locValue: "Special Region of Yogyakarta, Indonesia", ctaTitle: "Let's work", ctaHighlight: "together", ctaDesc: "Whether you need help with database administration, AI/ML projects, or computer vision solutions, I'm ready to collaborate and bring your ideas to life.", btnDownloadCv: "Download My CV" },
    footer: { text: "© {year} Dimas Edwin Saputra. All rights reserved.", builtWith: "Built with React." }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ID');
  
  const toggleLanguage = () => {
    setLanguage(lang => lang === 'ID' ? 'EN' : 'ID');
  };
  
  const t = (section, key) => {
    return translations[language][section]?.[key] || "";
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
