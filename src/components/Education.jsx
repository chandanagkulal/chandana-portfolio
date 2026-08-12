const EDUCATION = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Poornaprajna Institute of Management',
    cgpa: '8.06',
    period: '2024 – 2026',
    icon: '🎓',
    color: 'var(--accent)',
    border: 'var(--border-accent)',
    bg: 'var(--accent-dim)',
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Milagres College',
    cgpa: '7.98',
    period: '2021 – 2024',
    icon: '📚',
    color: 'var(--cyan)',
    border: 'rgba(8,145,178,0.3)',
    bg: 'rgba(8,145,178,0.08)',
  },
];

export default function Education() {
  return (
    <>
      <style>{`
        #education { background: var(--bg-2); }
        .edu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .edu-card {
          padding: 36px 32px;
          position: relative;
          overflow: hidden;
        }
        .edu-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          background: var(--edu-accent);
          border-radius: 0 2px 2px 0;
        }
        .edu-icon-wrap {
          width: 52px; height: 52px;
          border-radius: var(--radius-md);
          background: var(--edu-bg);
          border: 1px solid var(--edu-border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .edu-short {
          font-family: var(--font-heading);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--edu-accent);
          margin-bottom: 6px;
        }
        .edu-degree {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .edu-institution {
          font-size: 14px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }
        .edu-meta {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .edu-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 600;
          border-radius: var(--radius-full);
          border: 1px solid;
        }
        @media (max-width: 640px) {
          .edu-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="education">
        <div className="container">
          <div className="fade-up">
            <span className="section-label">🎓 Education</span>
            <h2 className="section-title">Academic <span className="gradient-text">Background</span></h2>
            <p className="section-subtitle">My educational foundation in computer science and applications.</p>
          </div>

          <div className="edu-grid">
            {EDUCATION.map(({ degree, short, institution, cgpa, period, icon, color, border, bg }, i) => (
              <div
                className="glass-card edu-card fade-up"
                key={short}
                style={{
                  '--edu-accent': color,
                  '--edu-border': border,
                  '--edu-bg': bg,
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                <div className="edu-icon-wrap">{icon}</div>
                <div className="edu-short">{short}</div>
                <div className="edu-degree">{degree}</div>
                <div className="edu-institution">📍 {institution}</div>
                <div className="edu-meta">
                  <span className="edu-chip" style={{ color, borderColor: border, background: bg }}>
                    ⭐ CGPA: {cgpa}
                  </span>
                  <span className="edu-chip" style={{ color: 'var(--text-secondary)', borderColor: 'var(--border)', background: 'var(--surface)' }}>
                    📅 {period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
