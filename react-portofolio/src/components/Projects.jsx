import React from 'react';
import '../styles/Projects.css';

const projectData = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive admin dashboard for e-commerce platforms featuring real-time analytics, user management, and advanced sales reporting.",
    tools: ["React", "Node.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A modern social interaction platform with features like real-time messaging, post sharing, deep linking, and user connection graphs.",
    tools: ["Next.js", "MongoDB", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An intuitive web application that leverages machine learning APIs to generate stunning generative art directly in the browser.",
    tools: ["Vue.js", "Python", "Docker"],
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e4958?q=80&w=800&auto=format&fit=crop",
    demoLink: "#",
    githubLink: "#"
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span className="projects-eyebrow">My Work</span>
        <h2 className="projects-title">Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tech-stack">
                {project.tools.map((tool, index) => (
                  <span key={index} className="project-tech">{tool}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.demoLink} className="btn-link primary" target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
                <a href={project.githubLink} className="btn-link" target="_blank" rel="noopener noreferrer">
                  GitHub Space
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
