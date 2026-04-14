import { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState('ID');

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('light-mode');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'ID' ? 'EN' : 'ID');
  };

  return (
    <header className="header">
      <div className="brand">
        <span className="brand-name">Dimas Edwin Saputra</span>
      </div>
      <nav className="nav-pill">
        <a href="#about">Tentang</a>
        <a href="#education">Pendidikan</a>
        <a href="#portfolio">Portofolio</a>
        <a href="#contact">Kontak</a>
      </nav>

      <div className="header-actions">
        <div className="utility-toggles">
          {/* Toggle Theme */}
          <button className="icon-btn theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {isDarkMode ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Toggle Language */}
          <button className="icon-btn lang-toggle" onClick={toggleLanguage} aria-label="Toggle Language">
            <span className="lang-text">{language}</span>
          </button>
        </div>

        <button className="cta">Rekrut Saya</button>
      </div>
    </header>
  );
};

export default Header;
