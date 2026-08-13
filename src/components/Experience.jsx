import React from 'react';

export default function Experience() {
  const bullets = [
    'Developing and maintaining full-stack web applications using React.js, Node.js and MongoDB.',
    'Building an interactive Floor Planning System with drawing tools, canvas-based rendering, requirement collection, and project management features.',
  ];

  return (
    <>
      <style>{`
        #experience { 
          background: var(--bg);
          padding: 100px 0;
        }

        .exp-header-wrapper {
          text-align: center;
          margin-bottom: 48px;
          width: 100%;
        }

        .section-label { 
          display: inline-block;
          font-family: var(--font-mono); 
          font-size: 11px; 
          font-weight: 700; 
          color: var(--accent); 
          letter-spacing: 0.1em; 
          text-transform: uppercase; 
          margin-bottom: 12px; 
          background: rgba(37,99,235,0.05);
          padding: 4px 12px;
          border-radius: 99px;
        }
        
        .section-title { 
          font-family: var(--font-heading); 
          font-size: clamp(32px, 4vw, 40px); 
          font-weight: 800; 
          color: var(--text-primary); 
          margin-bottom: 16px; 
        }
        
        .section-subtitle { 
          font-size: 16px; 
          color: var(--text-secondary); 
          line-height: 1.6; 
          max-width: 600px;
          margin: 0 auto;
        }

        /* Timeline Layout */
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 6px;
          top: 8px;
          bottom: 0;
          width: 2px;
          background: rgba(148, 163, 184, 0.2);
        }

        .timeline-item {
          position: relative;
          padding-left: 48px;
        }

        .timeline-dot {
          position: absolute;
          left: 0;
          top: 36px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #fff;
          border: 2px solid var(--accent);
          z-index: 2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        /* Professional Card Layout */
        .exp-card {
          position: relative;
          background: #fff;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .exp-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.05);
          border-color: rgba(37, 99, 235, 0.2);
        }
        
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }
        
        .exp-company {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }
        
        .exp-role {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }
        
        .exp-location {
          font-size: 14px;
          color: var(--text-muted);
        }

        .exp-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid rgba(37, 99, 235, 0.15);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent);
          flex-shrink: 0;
        }
        
        .exp-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 0 0 24px 0;
          padding: 0;
        }
        
        .exp-bullet {
          display: flex;
          gap: 12px;
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
        }
        
        .exp-bullet::before {
          content: '→';
          color: var(--accent);
          font-weight: bold;
          flex-shrink: 0;
        }
        
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .exp-tag {
          font-family: var(--font-sans);
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 6px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: var(--text-secondary);
        }
        
        .exp-key-project {
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid rgba(148,163,184,0.2);
          font-size: 13px;
          color: var(--text-secondary);
        }
        .exp-key-project strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .timeline-line { display: none; }
          .timeline-item { padding-left: 0; }
          .timeline-dot { display: none; }
          
          .exp-card { 
            padding: 24px; 
          }
          
          .exp-header { 
            flex-direction: column; 
            gap: 12px;
          }
          
          .exp-date-badge {
            order: 3; /* Move date below role/location on mobile */
            margin-top: 8px;
          }
        }
      `}</style>

      <section id="experience" className="experience-section bg-pattern-diagonal">
        <div className="container">
          
          <div className="section-header-vibrant fade-up">
            <h2 className="title-vibrant">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="subtitle-vibrant">
              Building practical web applications and gaining hands-on<br/>experience in modern software development.
            </p>
          </div>

          <div className="timeline-container">
            <div className="timeline-line"></div>
            
            <div className="timeline-item fade-up delay-1">
              <div className="timeline-dot"></div>
              
              <div className="exp-card">
                
                <div className="exp-header">
                  <div className="exp-company-block">
                    <div className="exp-company">Kakunje Software Pvt. Ltd.</div>
                    <div className="exp-role">Web Application Development Intern</div>
                    <div className="exp-location">📍 Mangalore, Karnataka</div>
                  </div>
                  <span className="exp-date-badge">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    May 2026 – Present
                  </span>
                </div>

                <ul className="exp-bullets">
                  {bullets.map((b, i) => (
                    <li className="exp-bullet" key={i}>{b}</li>
                  ))}
                </ul>

                <div className="exp-tags">
                  {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Canvas API', 'JavaScript'].map((t, i) => (
                    <span key={i} className="exp-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="exp-key-project">
                  <strong>Key Project:</strong> Floor Planning System
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
