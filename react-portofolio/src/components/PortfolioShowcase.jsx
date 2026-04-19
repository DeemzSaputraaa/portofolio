import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getProjectsData, getCertificatesData, skillsData } from '../data/projectsData';
import '../styles/PortfolioShowcase.css';
import { useLanguage } from '../context/LanguageContext';

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const { t, language } = useLanguage();

  const projectsData = getProjectsData(language);
  const certificatesData = getCertificatesData(language);

  const renderProjectsGrid = (data, isProject = false) => (
    <div className="showcase-grid">
      {data.map((item) => (
        <div key={item.id} className="showcase-card">
          <div className="card-image-box">
            <img src={item.image} alt={item.title} className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.shortDescription || item.description}</p>
            <div className="card-footer">
              <a href={item.demoLink} className="card-link" target="_blank" rel="noopener noreferrer">
                {t('port', 'liveDemo')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
              {isProject && item.slug ? (
                <Link to={`/project/${item.slug}`} className="card-link-details">
                  {t('port', 'details')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              ) : (
                <span className="card-link-details" style={{ cursor: 'default', opacity: 0.4 }}>
                  {t('port', 'details')}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="portfolio-showcase-section" id="portfolio">
      <div className="showcase-header">
        <p className="showcase-eyebrow">{t('port', 'eyebrow')}</p>
        <h2 className="showcase-title">{t('port', 'title')}</h2>
        <p className="showcase-desc">{t('port', 'sub')}</p>
      </div>

      <div className="showcase-tabs-container">
        <div className="showcase-tabs">
          <button
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            {t('port', 'tabProjects')}
          </button>
          <button
            className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            {t('port', 'tabCerts')}
          </button>
          <button
            className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            {t('port', 'tabTech')}
          </button>
        </div>
      </div>

      <div className="showcase-content">
        {activeTab === 'projects' && (
          <>
            {renderProjectsGrid(showAllProjects ? projectsData : projectsData.slice(0, 6), true)}
            {!showAllProjects && projectsData.length > 6 && (
              <div className="view-all-container">
                <button className="view-all-btn" onClick={() => setShowAllProjects(true)}>
                  {t('port', 'viewAll')}
                </button>
              </div>
            )}
          </>
        )}

        {activeTab === 'certificates' && renderProjectsGrid(certificatesData, false)}

        {activeTab === 'tech' && (
          <div className="showcase-skills-wrap">
            <p className="showcase-tech-desc">{t('port', 'techDesc')}</p>
            <div className="showcase-skills-grid">
              {skillsData.map((skill, index) => (
                <div key={index} className="showcase-skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioShowcase;

