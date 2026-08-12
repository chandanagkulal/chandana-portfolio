export default function Experience() {
  const bullets = [
    'Developing and maintaining full-stack web applications using React.js, Node.js and MongoDB.',
    'Building an interactive Floor Planning System with drawing tools, canvas-based rendering, requirement collection, and project management features.',
  ];

  return (
    <>
      <style>{`
        #experience { background: var(--bg-2); }
        .exp-card {
          padding: 36px 40px;
          position: relative;
          overflow: hidden;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, var(--accent), var(--cyan));
          border-radius: 0 2px 2px 0;
        }
        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 8px;
        }
        .exp-company {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .exp-location {
          font-size: 13px;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .exp-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          background: var(--accent-dim);
          border: 1px solid var(--border-accent);
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 600;
          color: var(--accent-light);
          white-space: nowrap;
        }
        .exp-role {
          font-size: 15px;
          font-weight: 600;
          color: var(--cyan);
          margin-bottom: 20px;
        }
        .exp-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .exp-bullet {
          display: flex;
          gap: 12px;
          font-size: 15px;
          line-height: 1.65;
          color: var(--text-secondary);
        }
        .exp-bullet::before {
          content: '▸';
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .exp-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }
        @media (max-width: 600px) {
          .exp-card { padding: 28px 24px 28px 28px; }
          .exp-header { flex-direction: column; }
        }
      `}</style>

      <section id="experience">
        <div className="container">
          <div className="fade-up">
            <span className="section-label">💼 Experience</span>
            <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
            <p className="section-subtitle">Hands-on industry experience shaping my development journey.</p>
          </div>

          <div className="glass-card exp-card fade-up delay-1">
            <div className="exp-header">
              <div>
                <div className="exp-company">Kakunje Software Pvt. Ltd.</div>
                <div className="exp-location">📍 Mangalore, Karnataka</div>
              </div>
              <span className="exp-date-badge">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                May 2026 – Sep 2026
              </span>
            </div>

            <div className="exp-role">Web Application Development Intern</div>

            <ul className="exp-bullets">
              {bullets.map((b, i) => (
                <li className="exp-bullet" key={i}>{b}</li>
              ))}
            </ul>

            <div className="exp-tags">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Canvas API', 'JavaScript'].map(t => (
                <span key={t} className="badge" style={{ color: 'var(--accent)', borderColor: 'var(--border-accent)', background: 'var(--accent-dim)' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
