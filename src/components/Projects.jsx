const PROJECTS = [
  {
    name: 'DineDesk',
    emoji: '🍽️',
    tagline: 'Mobile Canteen Management App',
    tech: ['React Native', 'Supabase', 'JavaScript'],
    techColor: { color: 'var(--cyan)', border: 'rgba(6,182,212,0.4)', bg: 'rgba(6,182,212,0.1)' },
    bullets: [
      'Developed a mobile canteen management application with user authentication, role-based access, and menu browsing.',
      'Integrated Supabase for authentication and backend services, enabling seamless order management and real-time ordering experience.',
    ],
  },
  {
    name: 'Beauty Palette',
    emoji: '💄',
    tagline: 'E-Commerce Web Platform',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS'],
    techColor: { color: '#db2777', border: 'rgba(219,39,119,0.3)', bg: 'rgba(219,39,119,0.08)' },
    bullets: [
      'Developed a web-based e-commerce platform with user authentication, product listing, and order management.',
      'Designed a responsive user interface using HTML and CSS, providing an intuitive shopping experience across devices.',
    ],
  },
];

export default function Projects() {
  return (
    <>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .project-card {
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
          overflow: hidden;
        }
        .project-card::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 200px; height: 200px;
          border-radius: 50%;
          opacity: 0.06;
          background: var(--card-glow, var(--accent));
          pointer-events: none;
          transition: opacity var(--transition);
        }
        .project-card:hover::after { opacity: 0.1; }
        .project-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 8px;
        }
        .project-emoji {
          font-size: 28px;
          width: 52px; height: 52px;
          border-radius: var(--radius-md);
          background: var(--surface-hover);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .project-name {
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 700;
          background: linear-gradient(135deg, var(--accent-light), var(--cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .project-tagline {
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 18px;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 20px;
        }
        .project-bullets {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
        }
        .project-bullet {
          display: flex;
          gap: 10px;
          font-size: 14px;
          line-height: 1.65;
          color: var(--text-secondary);
        }
        .project-bullet::before {
          content: '▸';
          color: var(--accent);
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="projects">
        <div className="container">
          <div className="fade-up">
            <span className="section-label">🚀 Projects</span>
            <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
            <p className="section-subtitle">A selection of projects I've built that showcase my technical skills and problem-solving approach.</p>
          </div>

          <div className="projects-grid">
            {PROJECTS.map(({ name, emoji, tagline, tech, techColor, bullets }, i) => (
              <div className="glass-card project-card fade-up" style={{ '--card-glow': techColor.color, transitionDelay: `${i * 0.1 + 0.1}s` }} key={name}>
                <div className="project-header">
                  <div className="project-emoji">{emoji}</div>
                  <div>
                    <div className="project-name">{name}</div>
                  </div>
                </div>
                <div className="project-tagline">{tagline}</div>

                <div className="project-tech">
                  {tech.map(t => (
                    <span key={t} className="badge" style={{ color: techColor.color, borderColor: techColor.border, background: techColor.bg }}>
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="project-bullets">
                  {bullets.map((b, j) => (
                    <li className="project-bullet" key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
