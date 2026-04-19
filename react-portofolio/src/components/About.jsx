import sayaImg from '../assets/images/saya2.png';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <p className="about-eyebrow">{t('about', 'eyebrow')}</p>
        <h3>{t('about', 'heading')}</h3>
        <p>{t('about', 'body1')}</p>
        <p>{t('about', 'body2')}</p>
        <div className="about-actions">
          <a href="/cv-dimas.pdf" target="_blank" rel="noopener noreferrer" className="btn-download-cv">
            {t('about', 'btn')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </div>
      </div>
      <div className="about-image-container">
        <img src={sayaImg} alt={t('about', 'title')} className="about-image" />
      </div>
    </section>
  );
};

export default About;

