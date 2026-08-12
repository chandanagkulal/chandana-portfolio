const SKILL_CATEGORIES = [
  {
    label: 'Languages',
    color: '#9333ea',
    bg: 'rgba(147,51,234,0.08)',
    border: 'rgba(147,51,234,0.3)',
    icon: '⌨️',
    skills: ['Java', 'Python', 'JavaScript'],
  },
  {
    label: 'Frontend',
    color: '#0891b2',
    bg: 'rgba(8,145,178,0.08)',
    border: 'rgba(8,145,178,0.3)',
    icon: '🎨',
    skills: ['React.js', 'React Native', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    color: '#d97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.3)',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'PHP'],
  },
  {
    label: 'Databases',
    color: '#059669',
    bg: 'rgba(5,150,105,0.08)',
    border: 'rgba(5,150,105,0.3)',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL', 'Supabase'],
  },
];

export default function Skills() {
  return (
    <>
      <style>{`
        #skills { background: var(--bg-2); }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .skill-category {
          padding: 28px 28px 24px;
          border-radius: var(--radius-md);
          background: var(--surface);
          border: 1px solid var(--border);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .skill-category:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .skill-cat-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border);
        }
        .skill-cat-icon {
          font-size: 18px;
          width: 36px; height: 36px;
          border-radius: var(--radius-sm);
          background: var(--surface-hover);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .skill-cat-label {
          font-family: var(--font-heading);
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }
        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .skill-tag {
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 500;
          border-radius: var(--radius-full);
          border: 1px solid;
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .skill-tag:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="skills">
        <div className="container">
          <div className="fade-up">
            <span className="section-label">🛠 Skills</span>
            <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
            <p className="section-subtitle">Technologies and tools I work with across the full stack.</p>
          </div>

          <div className="skills-grid">
            {SKILL_CATEGORIES.map(({ label, color, bg, border, icon, skills }, i) => (
              <div
                className="skill-category fade-up"
                key={label}
                style={{ borderColor: border, transitionDelay: `${i * 0.1}s` }}
              >
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">{icon}</div>
                  <span className="skill-cat-label" style={{ color }}>{label}</span>
                </div>
                <div className="skill-tags">
                  {skills.map(s => (
                    <span key={s} className="skill-tag" style={{ color, borderColor: border, background: bg }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
