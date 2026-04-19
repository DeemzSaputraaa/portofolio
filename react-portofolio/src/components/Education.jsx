import '../styles/Education.css';
import { useLanguage } from '../context/LanguageContext';

const educationDataID = [
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
    period: '2015 - 2018',
    degree: 'MTs Negeri 1 Temanggung',
    institution: 'MTs Negeri 1 Temanggung',
    description: 'Menyelesaikan pendidikan menengah pertama dengan berbagai kegiatan akademik dan ekstrakurikuler.',
    type: 'school',
  },
  {
    id: 4,
    period: '2009 - 2015',
    degree: 'SD Negeri Mandisari',
    institution: 'SD Negeri Mandisari',
    description: 'Menyelesaikan pendidikan dasar dengan fondasi yang kuat dalam matematika dan sains.',
    type: 'school',
  },
];

const educationDataEN = [
  {
    id: 1,
    period: '2022 - 2026',
    degree: 'Bachelor of Information Technology',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Graduated with a GPA of 3.9/4.0. Focused on software development, databases, and information systems.',
    type: 'university',
  },
  {
    id: 2,
    period: '2018 - 2021',
    degree: 'Vocational High School – Software Engineering',
    institution: 'SMKN 1 Sukabumi',
    description: 'Studied foundations of programming, web development, and software engineering.',
    type: 'school',
  },
  {
    id: 3,
    period: '2015 - 2018',
    degree: 'MTs Negeri 1 Temanggung',
    institution: 'MTs Negeri 1 Temanggung',
    description: 'Completed junior high education with various academic and extracurricular activities.',
    type: 'school',
  },
  {
    id: 4,
    period: '2009 - 2015',
    degree: 'SD Negeri Mandisari',
    institution: 'SD Negeri Mandisari',
    description: 'Completed primary education with a strong foundation in mathematics and science.',
    type: 'school',
  },
];

const awardsDataID = [
  {
    id: 1,
    year: '2026',
    title: 'Lulusan Terbaik Akademik dan Non-Akademik Periode Oktober 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Meraih prestasi akademik dengan perolehan IPK 3.9/4.0',
    icon: 'star',
  },
  {
    id: 2,
    year: '2026',
    title: 'Lulusan Terbaik Akademik dan Non-Akademik Periode Oktober 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Meraih prestasi akademik dengan perolehan IPK 3.9/4.0',
    icon: 'award',
  },
  {
    id: 3,
    year: '2026',
    title: 'Lulusan Terbaik Akademik dan Non-Akademik Periode Oktober 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Meraih prestasi akademik dengan perolehan IPK 3.9/4.0',
    icon: 'star',
  },
  {
    id: 4,
    year: '2026',
    title: 'Lulusan Terbaik Akademik dan Non-Akademik Periode Oktober 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Meraih prestasi akademik dengan perolehan IPK 3.9/4.0',
    icon: 'award',
  },
];

const awardsDataEN = [
  {
    id: 1,
    year: '2026',
    title: 'Best Academic and Non-Academic Graduate – October 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Achieved academic excellence with a GPA of 3.9/4.0',
    icon: 'star',
  },
  {
    id: 2,
    year: '2026',
    title: 'Best Academic and Non-Academic Graduate – October 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Achieved academic excellence with a GPA of 3.9/4.0',
    icon: 'award',
  },
  {
    id: 3,
    year: '2026',
    title: 'Best Academic and Non-Academic Graduate – October 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Achieved academic excellence with a GPA of 3.9/4.0',
    icon: 'star',
  },
  {
    id: 4,
    year: '2026',
    title: 'Best Academic and Non-Academic Graduate – October 2026',
    institution: "Universitas 'Aisyiyah Yogyakarta",
    description: 'Achieved academic excellence with a GPA of 3.9/4.0',
    icon: 'award',
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
  const { t, language } = useLanguage();

  const educationData = language === 'ID' ? educationDataID : educationDataEN;
  const awardsData = language === 'ID' ? awardsDataID : awardsDataEN;

  return (
    <section className="education-section" id="education">

      <div className="edu-section-header">
        <p className="showcase-eyebrow">{t('edu', 'eyebrow')}</p>
        <h2 className="edu-showcase-title">{t('edu', 'title')}</h2>
      </div>

      <div className="edu-grid">

        {/* Left: Education */}
        <div className="edu-column">
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

        {/* Right: Awards */}
        <div className="award-column">
          <div className="edu-column-header">
            <span className="edu-header-line"></span>
            <h2>{t('edu', 'awardSubtitle')}</h2>
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
                    <span className="award-proof-label">{t('edu', 'proofBtn')}</span>
                  </div>
                ) : (
                  <button className="award-proof-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                    {t('edu', 'proofBtn')}
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

