import React from 'react';
import '../styles/Footer.css';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Dimas Edwin Saputra.</div>
        <div className="footer-copyright">
          {t('footer', 'text').replace('{year}', year)} {t('footer', 'builtWith')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
