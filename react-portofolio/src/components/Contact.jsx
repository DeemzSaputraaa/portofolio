import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <span className="contact-eyebrow">What's Next?</span>
        <h2 className="contact-title">Let's Work Together</h2>
        <p className="contact-desc">
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="contact-actions">
          <a href="mailto:hello@example.com" className="btn-contact">
            Say Hello ✉️
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-social">
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn-social">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
