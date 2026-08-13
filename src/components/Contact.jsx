import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, ChevronUp } from 'lucide-react';

const LinkedInIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSubmit = () => {
    const { name, email, message } = formData;
    if (!name || !message) {
      alert("Please provide at least your name and a message.");
      return;
    }
    const subject = `Inquiry from ${name}`;
    const body = `Hello Chandana,\n\nI am ${name}${email ? ` (${email})` : ''}.\n\n${message}`;
    window.location.href = `mailto:chandanag0508@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleWhatsappSubmit = () => {
    const { name, email, message } = formData;
    if (!name || !message) {
      alert("Please provide at least your name and a message.");
      return;
    }
    const text = `Hello Chandana,\n\nI am ${name}${email ? ` (${email})` : ''}.\n\n${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919380864434?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <style>{`
        .contact-section {
          background: var(--bg-2);
          padding: 120px 24px 40px;
          position: relative;
          overflow: hidden;
        }

        .container-contact {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Ambient Glow behind form */
        .ambient-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%);
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
          border-radius: 50%;
          z-index: 1;
          pointer-events: none;
        }

        /* Premium Header */
        .contact-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .contact-title {
          font-family: var(--font-heading, serif);
          font-size: 36px;
          font-weight: 900;
          color: var(--text-primary);
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .gradient-text-accent {
          background: linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .contact-subtitle {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Layout */
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 70px;
          align-items: center;
        }

        /* Left Column - Contact Info */
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 36px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 20px;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 12px;
          border-radius: 20px;
          background: transparent;
          cursor: default;
        }

        .contact-item:hover {
          transform: translateX(8px);
          background: #ffffff;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
        }

        .contact-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 10px 20px -5px rgba(0,0,0,0.15);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .contact-item:hover .contact-icon-box {
          transform: scale(1.1) rotate(-5deg);
        }

        .contact-text-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-label {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .contact-value {
          font-family: var(--font-heading, serif);
          font-size: 17px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .contact-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(0,0,0,0.1), transparent);
          margin: 16px 0;
        }

        .social-title {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          margin-left: 12px;
        }

        .social-row {
          display: flex;
          gap: 16px;
          margin-left: 12px;
        }

        .social-btn {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid rgba(0,0,0,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }

        .social-btn:hover {
          color: #ffffff;
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 24px rgba(59, 130, 246, 0.3);
        }

        .social-btn.linkedin:hover {
          background: linear-gradient(135deg, #0077b5, #005e93);
          border-color: #0077b5;
        }

        .social-btn.github:hover {
          background: linear-gradient(135deg, #333, #111);
          border-color: #333;
        }

        /* Premium Form UI */
        .contact-form-card {
          background: #ffffff;
          border-radius: 28px;
          padding: 48px;
          border: 1px solid rgba(255,255,255,0.8);
          box-shadow: 
            0 25px 50px -12px rgba(59, 130, 246, 0.15),
            0 0 40px rgba(59, 130, 246, 0.05),
            inset 0 1px 0 rgba(255,255,255,1);
          position: relative;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .form-group label {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 800;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-left: 8px;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 18px 24px;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.06);
          background: #f8fafc;
          font-family: inherit;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.01);
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: #3b82f6;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15), inset 0 0 0 1px #3b82f6;
          transform: translateY(-2px);
        }

        .form-textarea {
          resize: vertical;
          min-height: 150px;
        }

        .form-actions {
          display: flex;
          gap: 20px;
          margin-top: 10px;
        }

        .btn-email {
          flex: 1;
          background: linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%);
          color: #ffffff;
          border: none;
          border-radius: 14px;
          padding: 18px 24px;
          font-size: 16px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25);
        }

        .btn-email:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(37, 99, 235, 0.35);
        }

        .btn-whatsapp {
          flex: 1;
          background: #ffffff;
          color: #10b981;
          border: 2px solid #10b981;
          border-radius: 14px;
          padding: 18px 24px;
          font-size: 16px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .btn-whatsapp:hover {
          background: linear-gradient(135deg, #10b981, #059669);
          border-color: transparent;
          color: #ffffff;
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(16, 185, 129, 0.3);
        }

        .portfolio-footer {
          margin-top: 100px;
          background: #ffffff; 
          padding: 32px 0;
          color: var(--text-secondary);
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-logo-box {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: #ffffff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 18px;
        }

        .footer-name {
          font-family: var(--font-heading, serif);
          font-weight: 800;
          font-size: 18px;
          color: var(--text-primary);
        }

        .footer-copyright {
          font-size: 14px;
        }

        .footer-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .footer-links {
          display: flex;
          gap: 24px;
          font-size: 14px;
          font-weight: 600;
        }

        .footer-link {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        .back-to-top-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #ffffff;
          color: #3b82f6;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(0,0,0,0.08);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .back-to-top-btn:hover {
          background: #3b82f6;
          color: #ffffff;
          border-color: #3b82f6;
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }

        @media (max-width: 992px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .footer-content {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }
          .footer-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 600px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          .contact-form-card {
            padding: 32px 24px;
          }
          .form-actions {
            flex-direction: column;
          }
        }
      `}</style>

      <section id="contact" className="contact-section bg-pattern-waves">
        <div className="ambient-glow"></div>
        <div className="container-contact fade-up">
          
          <div className="contact-header">
            <h2 className="contact-title">
              Start a <span className="gradient-text-accent">Conversation</span>
            </h2>
            <p className="contact-subtitle">
              Ready to elevate your digital presence? I am currently open to exciting freelance projects and opportunities. Let's discuss how we can build something exceptional together.
            </p>
          </div>

          <div className="contact-layout">
            
            <div className="contact-info-list">
              
              <div className="contact-item">
                <div className="contact-icon-box" style={{ background: 'linear-gradient(135deg, #0ea5e9, #3b82f6)' }}>
                  <Mail size={22} strokeWidth={2} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">chandanag0508@gmail.com</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                  <Phone size={22} strokeWidth={2} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Phone / WhatsApp</span>
                  <span className="contact-value">+91 9380864434</span>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon-box" style={{ background: 'linear-gradient(135deg, #f43f5e, #e11d48)' }}>
                  <MapPin size={22} strokeWidth={2} />
                </div>
                <div className="contact-text-box">
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Udupi, Karnataka, India</span>
                </div>
              </div>

              <div className="contact-divider"></div>

              <div>
                <div className="social-title">Connect with me</div>
                <div className="social-row">
                  <a href="https://linkedin.com/in/chandana-g-kulal-167b47349" target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                    <LinkedInIcon width={20} height={20} />
                  </a>
                  <a href="https://github.com/chandanagkulal" target="_blank" rel="noopener noreferrer" className="social-btn github">
                    <GithubIcon width={20} height={20} />
                  </a>
                </div>
              </div>

            </div>

            <div className="contact-form-card">
              <form onSubmit={(e) => e.preventDefault()}>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="form-input" 
                      placeholder="e.g. Chandana" 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      className="form-input" 
                      placeholder="name@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Message Detail</label>
                  <textarea 
                    name="message"
                    className="form-textarea" 
                    placeholder="Describe your inquiry or project details here..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="button" className="btn-email" onClick={handleEmailSubmit}>
                    <Mail size={20} /> Email
                  </button>
                  <button type="button" className="btn-whatsapp" onClick={handleWhatsappSubmit}>
                    <MessageCircle size={20} /> WhatsApp
                  </button>
                </div>

              </form>
            </div>

          </div>
        </div>
      </section>

      <footer className="portfolio-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-box">C</div>
            <div className="footer-name">Chandana G Kulal</div>
          </div>
          <div className="footer-copyright">
            © {new Date().getFullYear()} Chandana G Kulal. Built with React, Vite & Modern CSS
          </div>
          <div className="footer-actions">
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Terms</a>
            </div>
            <button 
              className="back-to-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
            >
              <ChevronUp size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
