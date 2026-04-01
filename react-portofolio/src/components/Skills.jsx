import React from 'react';
import '../styles/Skills.css';

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

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="skills-eyebrow">My Arsenal</span>
        <h2 className="skills-title">Technologies</h2>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
