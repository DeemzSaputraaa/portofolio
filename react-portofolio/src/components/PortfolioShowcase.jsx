import React, { useState } from 'react';
import '../styles/PortfolioShowcase.css';

const projectsData = [
  {
    id: 1,
    title: "Aritmatika Solver",
    description: "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomati...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    id: 2,
    title: "AutoChat-Discord",
    description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal. Pengguna dapat...",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    id: 3,
    title: "Buku Catatan",
    description: "Buku Catatan adalah website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola...",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e4958?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    detailsLink: "#"
  }
];

const certificatesData = [
  {
    id: 1,
    title: "Frontend Developer Certificate",
    description: "Sertifikasi resmi pengembangan web frontend dengan React dan teknologi modern lainnya.",
    image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    detailsLink: "#"
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    description: "Pelatihan komprehensif tentang desain antarmuka pengguna dan pengalaman pengguna menggunakan Figma.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    detailsLink: "#"
  }
];

const skillsData = [
  { name: 'React', icon: '⚛️' },
  { name: 'JavaScript', icon: '💛' },
  { name: 'HTML5', icon: '🧱' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Tailwind', icon: '💨' },
  { name: 'Git', icon: '📁' },
  { name: 'Figma', icon: '🖋️' }
];

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const renderProjectsGrid = (data) => (
    <div className="showcase-grid">
      {data.map((item) => (
        <div key={item.id} className="showcase-card">
          <div className="card-image-box">
            <img src={item.image} alt={item.title} className="card-image" />
          </div>
          <div className="card-content">
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.description}</p>
            <div className="card-footer">
              <a href={item.demoLink} className="card-link" target="_blank" rel="noopener noreferrer">
                Live Demo 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
              <a href={item.detailsLink} className="card-link-details" target="_blank" rel="noopener noreferrer">
                Details 
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="portfolio-showcase-section" id="portfolio">
      <div className="showcase-header">
        <h2 className="showcase-title">Portfolio Showcase</h2>
        <p className="showcase-desc">
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <div className="showcase-tabs-container">
        <div className="showcase-tabs">
          <button 
            className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            Projects
          </button>
          <button 
            className={`tab-btn ${activeTab === 'certificates' ? 'active' : ''}`}
            onClick={() => setActiveTab('certificates')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            Certificates
          </button>
          <button 
            className={`tab-btn ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            Tech Stack
          </button>
        </div>
      </div>

      <div className="showcase-content">
        {activeTab === 'projects' && renderProjectsGrid(projectsData)}
        
        {activeTab === 'certificates' && renderProjectsGrid(certificatesData)}
        
        {activeTab === 'tech' && (
          <div className="showcase-skills-grid">
            {skillsData.map((skill, index) => (
              <div key={index} className="showcase-skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
