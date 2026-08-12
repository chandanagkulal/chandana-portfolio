const CONTACTS = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,12 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'chandanag0508@gmail.com',
    href: 'mailto:chandanag0508@gmail.com',
    color: 'var(--accent)',
    border: 'var(--border-accent)',
    bg: 'var(--accent-dim)',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.36 11.82 19.79 19.79 0 011.31 3.2 2 2 0 013.31 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '+91 9380864434',
    href: 'tel:+919380864434',
    color: '#059669',
    border: 'rgba(5,150,105,0.3)',
    bg: 'rgba(5,150,105,0.08)',
  },
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/chandana-g-kulal-167b47349',
    href: 'https://linkedin.com/in/chandana-g-kulal-167b47349',
    color: 'var(--cyan)',
    border: 'rgba(8,145,178,0.3)',
    bg: 'rgba(8,145,178,0.08)',
  },
  {
    icon: (
      <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/chandanagkulal',
    href: 'https://github.com/chandanagkulal',
    color: '#0f172a',
    border: 'rgba(15, 23, 42, 0.3)',
    bg: 'rgba(15, 23, 42, 0.08)',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Udupi, Karnataka, India',
    href: null,
    color: '#d97706',
    border: 'rgba(217,119,6,0.3)',
    bg: 'rgba(217,119,6,0.08)',
  },
];

export default function Contact() {
  return (
    <>
      <style>{`
        #contact {
          background: linear-gradient(180deg, var(--bg) 0%, var(--bg-2) 100%);
          position: relative;
          overflow: hidden;
        }
        #contact::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 600px;
          border-radius: 50%;
          background: rgba(168,85,247,0.06);
          filter: blur(80px);
          pointer-events: none;
        }
        .contact-intro {
          max-width: 600px;
          margin: 0 auto 56px;
          text-align: center;
        }
        .contact-intro .section-label { display: block; text-align: center; width: fit-content; margin: 0 auto 16px; }
        .contact-intro .section-title { text-align: center; }
        .contact-intro .section-subtitle { text-align: center; max-width: 100%; margin-bottom: 0; }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin: 0 auto 64px;
        }
        .contact-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          border-radius: var(--radius-md);
          background: var(--surface);
          border: 1px solid var(--border);
          transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
          text-decoration: none;
          color: inherit;
          position: relative;
          z-index: 1;
        }
        a.contact-card:hover {
          border-color: var(--card-border);
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
        }
        .contact-icon {
          width: 46px; height: 46px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 3px;
        }
        .contact-value {
          font-size: 13.5px;
          font-weight: 500;
          color: var(--text-primary);
          word-break: break-all;
        }
        /* Footer */
        .portfolio-footer {
          border-top: 1px solid var(--border);
          padding: 28px 0;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .footer-name {
          font-family: var(--font-heading);
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 6px;
        }
        .footer-copy {
          font-size: 13px;
          color: var(--text-muted);
        }
        @media (max-width: 600px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact">
        <div className="container">
          <div className="contact-intro fade-up">
            <span className="section-label">📬 Contact</span>
            <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
            <p className="section-subtitle">
              I'm currently open to internships, entry-level roles, and collaboration opportunities.
              Feel free to reach out — I'd love to chat!
            </p>
          </div>

          <div className="contact-grid">
            {CONTACTS.map(({ icon, label, value, href, color, border, bg }, i) => {
              const Tag = href ? 'a' : 'div';
              const isExt = label === 'LinkedIn' || label === 'GitHub';
              const extraProps = href ? { href, target: isExt ? '_blank' : undefined, rel: isExt ? 'noreferrer' : undefined } : {};
              return (
                <Tag
                  key={label}
                  className="contact-card fade-up"
                  style={{ '--card-border': border, transitionDelay: `${i * 0.1}s` }}
                  {...extraProps}
                >
                  <div className="contact-icon" style={{ color, background: bg, border: `1px solid ${border}` }}>
                    {icon}
                  </div>
                  <div>
                    <div className="contact-label">{label}</div>
                    <div className="contact-value">{value}</div>
                  </div>
                </Tag>
              );
            })}
          </div>
        </div>

        <footer className="portfolio-footer">
          <div className="container">
            <div className="footer-name gradient-text">Chandana G Kulal</div>
            <p className="footer-copy">© 2026 · Designed &amp; Built with ❤️ using React &amp; Vite</p>
          </div>
        </footer>
      </section>
    </>
  );
}
