import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { id: 'about',       label: 'About' },
  { id: 'experience',  label: 'Experience' },
  { id: 'projects',    label: 'Projects' },
  { id: 'skills',      label: 'Skills' },
  { id: 'education',   label: 'Education' },
  { id: 'contact',     label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive]   = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers = NAV_LINKS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
          width: 100%;
          padding: 0 64px;
        }
        .nav-logo {
          font-family: var(--font-heading);
          font-size: 26px;
          font-weight: 800;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--accent) 0%, var(--cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          cursor: pointer;
          user-select: none;
          transition: opacity var(--transition), transform var(--transition);
        }
        .nav-logo:hover {
          opacity: 0.8;
          transform: translateY(-1px);
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .nav-link {
          position: relative;
          padding: 8px 16px;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          cursor: pointer;
          border: none;
          background: none;
          font-family: var(--font-mono);
          transition: color var(--transition), background var(--transition);
        }
        .nav-link:hover { color: var(--text-primary); background: rgba(0,0,0,0.03); }
        .nav-link.active { color: var(--accent); }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 50%; transform: translateX(-50%);
          width: 20px; height: 2px;
          background: var(--accent);
          border-radius: 1px;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 8px;
          cursor: pointer;
          background: none;
          border: none;
        }
        .hamburger span {
          display: block;
          width: 22px; height: 2px;
          background: var(--text-primary);
          border-radius: 1px;
          transition: var(--transition);
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.97);
          border-top: 1px solid var(--border);
          padding: 16px 24px 24px;
          gap: 4px;
          backdrop-filter: blur(16px);
        }
        .mobile-menu .nav-link { width: 100%; text-align: left; padding: 12px 16px; }
        @media (max-width: 720px) {
          .nav-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Chandana G Kulal
          </span>
          <div className="nav-links">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                className={`nav-link${active === id ? ' active' : ''}`}
                onClick={() => handleNav(id)}
              >
                {label}
              </button>
            ))}
          </div>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {NAV_LINKS.map(({ id, label }) => (
              <button
                key={id}
                className={`nav-link${active === id ? ' active' : ''}`}
                onClick={() => handleNav(id)}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
