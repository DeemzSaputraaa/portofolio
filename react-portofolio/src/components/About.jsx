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
        <div className="about-stats">
          <div>
            <span className="stat-number">4+</span>
            <span className="stat-label">Tahun Pengalaman</span>
          </div>
          <div>
            <span className="stat-number">25+</span>
            <span className="stat-label">Proyek Selesai</span>
          </div>
        </div>
      </div>
      {/* <div className="about-lanyard">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div> */}
    </section>
  );
};

export default About;
