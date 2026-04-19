import React from 'react';
import '../styles/Contact.css';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="contact-section" id="contact">
      {/* Header */}
      <div className="contact-header">
        <p className="about-eyebrow">{t('contact', 'eyebrow')}</p>
        <h2 className="contact-title">
          {t('contact', 'pageTitle')} <span className="contact-title-highlight">{t('contact', 'pageTitleHighlight')}</span>
        </h2>
        <div className="contact-title-underline"></div>
        <p className="contact-desc">
          {t('contact', 'pageDesc')}
        </p>
      </div>

      {/* Content Grid */}
      <div className="contact-grid">
        {/* Left: Contact Info Cards */}
        <div className="contact-info-cards">
          <a href="mailto:dimasedwinsaputra@gmail.com" className="contact-card" id="contact-email-card">
            <div className="contact-card-icon contact-card-icon--email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-10 6L2 7"/>
              </svg>
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">EMAIL</span>
              <span className="contact-card-value">dimasedwinsaputra@gmail.com</span>
            </div>
            <span className="contact-card-arrow">↗</span>
          </a>

          <a href="https://wa.me/621234567890" target="_blank" rel="noopener noreferrer" className="contact-card" id="contact-whatsapp-card">
            <div className="contact-card-icon contact-card-icon--whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">WHATSAPP</span>
              <span className="contact-card-value">+62 123-4567-890</span>
            </div>
            <span className="contact-card-arrow">↗</span>
          </a>

          <div className="contact-card" id="contact-location-card">
            <div className="contact-card-icon contact-card-icon--location">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="contact-card-content">
              <span className="contact-card-label">{t('contact', 'locLabel')}</span>
              <span className="contact-card-value">{t('contact', 'locValue')}</span>
            </div>
          </div>
        </div>

        {/* Right: CTA Card */}
        <div className="contact-cta-card" id="contact-cta-card">
          <h3 className="contact-cta-title">
            {t('contact', 'ctaTitle')} <span className="contact-cta-highlight">{t('contact', 'ctaHighlight')}</span>
          </h3>
          <p className="contact-cta-desc">
            {t('contact', 'ctaDesc')}
          </p>
          <a href="mailto:dimasedwinsaputra@gmail.com" className="contact-cta-btn-primary" id="contact-send-email-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="M22 7l-10 6L2 7"/>
            </svg>
            {t('contact', 'btnEmail')}
            <span className="contact-cta-btn-arrow">↗</span>
          </a>
          <a href="/cv-dimasedwinsaputra.pdf" download className="contact-cta-btn-secondary" id="contact-download-cv-btn">
            {t('contact', 'btnDownloadCv')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

