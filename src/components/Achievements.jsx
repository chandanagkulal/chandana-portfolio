const ACHIEVEMENTS = [
  { icon: '🏆', title: 'National Level Quiz Competition', desc: 'Participated and represented at national level academic competition.' },
  { icon: '🌿', title: 'NSS Camp', desc: 'Actively participated in National Service Scheme community outreach camp.' },
  { icon: '💻', title: 'Full-Stack Projects', desc: 'Developed multiple full-stack academic and internship projects independently.' },
];

export default function Achievements() {
  return (
    <>
      <style>{`
        .achieve-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .achieve-card {
          padding: 32px 24px;
          text-align: center;
          border-radius: var(--radius-md);
          background: var(--surface);
          border: 1px solid var(--border);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .achieve-card:hover {
          border-color: var(--border-accent);
          transform: translateY(-4px);
          box-shadow: var(--shadow-glow);
        }
        .achieve-icon {
          font-size: 36px;
          margin-bottom: 16px;
          display: block;
        }
        .achieve-title {
          font-family: var(--font-heading);
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 10px;
        }
        .achieve-desc {
          font-size: 14px;
          line-height: 1.65;
          color: var(--text-muted);
        }
        @media (max-width: 768px) {
          .achieve-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="achievements">
        <div className="container">
          <div className="fade-up">
            <span className="section-label">🌟 Achievements</span>
            <h2 className="section-title">Notable <span className="gradient-text">Achievements</span></h2>
            <p className="section-subtitle">Highlights from my academic and extracurricular journey.</p>
          </div>

          <div className="achieve-grid">
            {ACHIEVEMENTS.map(({ icon, title, desc }, i) => (
              <div className="achieve-card fade-up" key={title} style={{ transitionDelay: `${i * 0.12}s` }}>
                <span className="achieve-icon">{icon}</span>
                <div className="achieve-title">{title}</div>
                <div className="achieve-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
