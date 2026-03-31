const Header = () => {
  return (
    <header className="header">
      <div className="brand">
        <span className="brand-icon" aria-hidden="true" />
        <span className="brand-name">Portofolio</span>
      </div>
      <nav className="nav-pill">
        <a href="#about">Tentang</a>
        <a href="#experience">Pengalaman</a>
        <a href="#services">Layanan</a>
      </nav>
      <button className="cta">Hubungi Saya</button>
    </header>
  );
};

export default Header;
