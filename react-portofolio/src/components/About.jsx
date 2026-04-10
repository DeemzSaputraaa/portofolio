import sayaImg from '../assets/images/saya2.png';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text">
        <p className="about-eyebrow">Tentang Saya</p>
        <h3>Berfokus pada solusi digital yang rapi dan berdampak.</h3>
        <p>
          Saya adalah pengembang yang senang menggabungkan desain yang kuat
          dengan performa aplikasi yang cepat. Fokus saya pada frontend,
          backend, dan data engineering agar produk dapat berkembang stabil dan
          mudah dirawat.
        </p>
        <p>
          Saat ini saya banyak bekerja dengan React, Node.js, dan ekosistem data
          modern untuk membangun pengalaman digital yang efektif dan elegan.
        </p>
        <div className="about-actions">
          <a href="/cv-dimas.pdf" target="_blank" rel="noopener noreferrer" className="btn-download-cv">
            Download CV
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          </a>
        </div>
      </div>
      <div className="about-image-container">
        <img src={sayaImg} alt="Tentang Saya" className="about-image" />
      </div>
    </section>
  );
};

export default About;
