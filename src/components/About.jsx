import React from 'react';

export default function About() {
  const stats = [
    { value: '2+',  label: 'Projects Built' },
    { value: '1',   label: 'Internship Completed' },
    { value: '8+',  label: 'Technologies Mastered' },
    { value: '8.06', label: 'MCA CGPA' },
  ];

  return (
    <>
      <style>{`
        #about {
          padding: 70px 0 90px;
          position: relative;
        }
        
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        /* Left Side: Header & Text */
        .about-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-primary);
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }
        .section-badge::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #7c3aed;
        }

        .section-title {
          margin-bottom: 24px;
        }
        .section-title .gradient-text {
          display: block;
          margin-top: 12px;
          font-size: clamp(22px, 2.5vw, 28px);
          font-weight: 700;
          background: linear-gradient(135deg, #7e22ce, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 17px;
          line-height: 1.8;
          color: var(--text-secondary);
        }
        .about-text p {
          margin: 0;
          text-align: justify;
        }
        .about-highlight {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Right Side: Stats */
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
          box-shadow: var(--card-shadow);
        }
        .stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(124, 58, 237, 0.4);
          box-shadow: var(--card-hover-shadow);
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 800;
          background: linear-gradient(135deg, #7e22ce 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .stat-label {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr; gap: 56px; }
          .about-content { align-items: center; text-align: center; }
        }
        @media (max-width: 600px) {
          .about-stats { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="about" className="about-section bg-pattern-dots">
        <div className="container">
          <div className="section-header-vibrant fade-up">
            <h2 className="title-vibrant">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="subtitle-vibrant">
              Passionate about building solutions.
            </p>
          </div>

          <div className="about-grid">
            
            <div className="about-content fade-up">
              <div className="about-text">
                <p>
                  I’m an <span className="about-highlight">MCA graduate</span> with a strong interest in full-stack development,
                  building practical and user-friendly web and mobile applications.
                </p>
                <p>
                  I have worked with <span className="about-highlight">React, JavaScript, Python, PHP, MySQL, HTML, and CSS</span>,
                  and I enjoy turning ideas into clean, scalable, real-world digital solutions.
                </p>
                <p>
                  I’m a <span className="about-highlight">quick learner</span> with a problem-solving mindset, and I value teamwork,
                  continuous learning, and building impactful software.
                </p>
              </div>
            </div>

            <div className="about-stats fade-up delay-2">
              {stats.map(({ value, label }) => (
                <div className="stat-card" key={label}>
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
