import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import '../styles/ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const project = projectsData.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!project) {
    return (
      <div className="detail-not-found">
        <div className="not-found-content">
          <span className="not-found-code">404</span>
          <h2>Project Not Found</h2>
          <p>Maaf, project yang kamu cari tidak ditemukan.</p>
          <Link to="/" className="back-home-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-detail-page ${isLoaded ? 'loaded' : ''}`}>
      {/* Header / Navigation */}
      <nav className="detail-nav">
        <Link to="/" className="detail-back-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          <span>Kembali</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="detail-hero">
        <div className="detail-hero-inner">
          <div className="detail-meta">
            <span className="detail-year">{project.date}</span>
            <span className="detail-separator">•</span>
            <span className="detail-category">Project</span>
          </div>
          <h1 className="detail-title">{project.title}</h1>
          <div className="detail-tech-tags">
            {project.techStack.map((tech, i) => (
              <span key={i} className="detail-tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </header>

      {/* Main Gallery */}
      <section className="detail-gallery-section">
        <div className="detail-gallery-main">
          <div className="detail-main-image-wrapper">
            <img
              src={project.gallery[activeImage]}
              alt={`${project.title} screenshot ${activeImage + 1}`}
              className="detail-main-image"
              key={activeImage}
            />
            <div className="image-counter">
              {activeImage + 1} / {project.gallery.length}
            </div>
          </div>
        </div>

        <div className="detail-gallery-thumbs">
          {project.gallery.map((img, i) => (
            <button
              key={i}
              className={`detail-thumb ${activeImage === i ? 'active' : ''}`}
              onClick={() => setActiveImage(i)}
            >
              <img src={img} alt={`Thumbnail ${i + 1}`} />
            </button>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="detail-content-section">
        <div className="detail-content-grid">
          {/* Left: Description */}
          <div className="detail-description-col">
            <div className="detail-section-block">
              <h2 className="detail-section-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                Deskripsi Project
              </h2>
              {project.fullDescription.split('\n\n').map((paragraph, i) => (
                <p key={i} className="detail-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right: Sidebar Info */}
          <aside className="detail-sidebar-col">
            {/* Features */}
            <div className="detail-section-block detail-features-block">
              <h3 className="detail-sidebar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                Fitur Utama
              </h3>
              <ul className="detail-features-list">
                {project.features.map((feature, i) => (
                  <li key={i} className="detail-feature-item">
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="detail-section-block detail-stack-block">
              <h3 className="detail-sidebar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                Tech Stack
              </h3>
              <div className="detail-stack-list">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="detail-stack-chip">{tech}</span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="detail-section-block detail-links-block">
              <h3 className="detail-sidebar-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/></svg>
                Links
              </h3>
              <div className="detail-action-links">
                <a href={project.demoLink} className="detail-action-btn primary" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
                  Live Demo
                </a>
                <a href={project.githubLink} className="detail-action-btn" target="_blank" rel="noopener noreferrer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Other Projects */}
      <section className="detail-other-section">
        <h2 className="detail-other-title">Project Lainnya</h2>
        <div className="detail-other-grid">
          {projectsData
            .filter(p => p.id !== project.id)
            .map(otherProject => (
              <Link
                key={otherProject.id}
                to={`/project/${otherProject.slug}`}
                className="detail-other-card"
                onClick={() => {
                  setActiveImage(0);
                  setIsLoaded(false);
                  setTimeout(() => setIsLoaded(true), 100);
                }}
              >
                <div className="other-card-image-box">
                  <img src={otherProject.image} alt={otherProject.title} />
                </div>
                <div className="other-card-body">
                  <h3>{otherProject.title}</h3>
                  <p>{otherProject.shortDescription}</p>
                  <span className="other-card-link-text">
                    Lihat Detail
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
