export default function About() {
  const stats = [
    { value: '2+',  label: 'Projects Built' },
    { value: '1',   label: 'Internship' },
    { value: '8+',  label: 'Technologies' },
    { value: '8.06', label: 'MCA CGPA' },
  ];

  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .about-text p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--text-secondary);
          margin-bottom: 18px;
        }
        .about-text p:last-child { margin-bottom: 0; }
        .about-highlight {
          color: var(--accent-light);
          font-weight: 600;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .stat-card {
          padding: 28px 20px;
          text-align: center;
          border-radius: var(--radius-md);
          background: var(--surface);
          border: 1px solid var(--border);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
        }
        .stat-card:hover {
          border-color: var(--border-accent);
          transform: translateY(-4px);
          box-shadow: var(--shadow-glow);
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 8px;
          background: linear-gradient(135deg, var(--accent-light), var(--cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .stat-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.07em;
        }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>

      <section id="about">
        <div className="container">
          <div className="fade-up">
            <span className="section-label">✦ About Me</span>
            <h2 className="section-title">Passionate About <span className="gradient-text">Building Solutions</span></h2>
            <p className="section-subtitle">Here's a little more about who I am and what drives me.</p>
          </div>

          <div className="about-grid">
            <div className="about-text fade-up delay-1">
              <p>
                I'm an <span className="about-highlight">MCA student</span> passionate about full-stack development
                and building user-friendly web and mobile applications. I enjoy transforming ideas into
                practical solutions and continuously improving my skills through hands-on learning.
              </p>
              <p>
                I have experience working with technologies such as{' '}
                <span className="about-highlight">React, JavaScript, Python, PHP, MySQL, HTML</span>, and CSS.
                I've developed projects like a canteen management mobile app (<span className="about-highlight">DineDesk</span>) and
                an e-commerce platform, which strengthened my understanding of real-world application development,
                including authentication, database integration, and responsive design.
              </p>
              <p>
                I am a <span className="about-highlight">self-motivated and detail-oriented</span> individual with
                strong problem-solving abilities. I adapt quickly, work well in team environments, and value
                continuous learning and growth.
              </p>
              <p>
                I'm currently looking for opportunities to apply my skills, gain industry experience,
                and grow as a software developer. 🚀
              </p>
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
