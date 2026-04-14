import '../styles/Education.css';

const educationData = [
  {
    id: 1,
    period: '2022 - 2026',
    degree: 'S1 Teknologi Informasi',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Lulus dengan IPK 3.9/4.0. Fokus pada pengembangan perangkat lunak, basis data, dan sistem informasi.',
    type: 'university',
  },
  {
    id: 2,
    period: '2018 - 2021',
    degree: 'SMK Jurusan Rekayasa Perangkat Lunak',
    institution: 'SMKN 1 Sukabumi',
    description: 'Mempelajari dasar-dasar pemrograman, web development, dan rekayasa perangkat lunak.',
    type: 'school',
  },
  {
    id: 3,
    period: '2018 - 2021',
    degree: 'MTs Negeri 1 Temanggung',
    institution: 'MTs Negeri 1 Temanggung',
    description: 'Mempelajari dasar-dasar pemrograman, web development, dan rekayasa perangkat lunak.',
    type: 'school',
  },
  {
    id: 4,
    period: '2018 - 2021',
    degree: 'SD Negeri Mandisari',
    institution: 'SD Negeri Mandisari',
    description: 'Mempelajari dasar-dasar pemrograman, web development, dan rekayasa perangkat lunak.',
    type: 'school',
  },
];

const awardsData = [
  {
    id: 1,
    year: '2026',
    title: 'Lulusan Terbaik Akademik dan Non-Akademik Periode Oktober 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description:
      'Meraih prestasi akademik dengan perolehan IPK 3.9/4.0',
    icon: 'star',
    // image: piagamImg,
  },
  {
    id: 2,
    year: '2026',
    title: 'Lulusan Terbaik Akademik dan Non-Akademik Periode Oktober 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description:
      'Meraih prestasi akademik dengan perolehan IPK 3.9/4.0',
    icon: 'award',
    // image: piagamImg,
  },
  {
    id: 3,
    year: '2026',
    title: 'Lulusan Terbaik Akademik dan Non-Akademik Periode Oktober 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description:
      'Meraih prestasi akademik dengan perolehan IPK 3.9/4.0',
    icon: 'star',
    // image: piagamImg,
  },
  {
    id: 4,
    year: '2026',
    title: 'Lulusan Terbaik Akademik dan Non-Akademik Periode Oktober 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description:
      'Meraih prestasi akademik dengan perolehan IPK 3.9/4.0',
    icon: 'award',
    // image: piagamImg,
  },
];

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const AwardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);

const SchoolIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
  </svg>
);

const UniversityIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const Education = () => {
  return (
    <section className="education-section" id="education">

      {/* Single centered top header — same style as Portfolio Showcase */}
      <div className="edu-section-header">
        <p className="showcase-eyebrow">PENDIDIKAN &amp; PENGHARGAAN</p>
        <h2 className="edu-showcase-title">Pendidikan</h2>
        {/* <p className="edu-showcase-desc">
          Catatan perjalanan akademik dan pencapaian saya, mulai dari riwayat pendidikan formal hingga penghargaan yang pernah diraih.
        </p> */}
      </div>

      {/* Two-column grid */}
      <div className="edu-grid">

        {/* Left: Pendidikan */}
        <div className="edu-column">
          {/* <div className="edu-column-header">
            <span className="edu-header-line"></span>
            <h3>Pendidikan</h3>
          </div> */}

          <div className="edu-timeline">
            {educationData.map((item) => (
              <div key={item.id} className="edu-item">
                <div className="edu-content">
                  <div className="edu-meta">
                    {item.type === 'university' ? <UniversityIcon /> : <SchoolIcon />}
                    <span>{item.period}</span>
                  </div>
                  <h4>{item.degree}</h4>
                  <a href="#" className="edu-institution">
                    {item.institution}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Penghargaan & Apresiasi */}
        <div className="award-column">
          <div className="edu-column-header">
            <span className="edu-header-line"></span>
            <h2>Penghargaan &amp; Apresiasi</h2>
          </div>

          <div className="award-grid">
            {awardsData.map((item) => (
              <div key={item.id} className="award-card">
                <div className="award-card-top">
                  <div className="award-icon-box">
                    {item.icon === 'star' ? <StarIcon /> : <AwardIcon />}
                  </div>
                  <span className="award-year">{item.year}</span>
                </div>
                <h4 className="award-title">{item.title}</h4>
                {item.institution && (
                  <p className="award-institution">{item.institution}</p>
                )}
                <p className="award-desc">{item.description}</p>
                {item.image ? (
                  <div className="award-proof">
                    <img src={item.image} alt={item.title} className="award-proof-img" />
                    <span className="award-proof-label">Lihat bukti penghargaan</span>
                  </div>
                ) : (
                  <button className="award-proof-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    Lihat bukti penghargaan
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
