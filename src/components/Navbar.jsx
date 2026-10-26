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
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          padding: 8px;
          cursor: pointer;
          background: rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 10px;
          transition: background 0.2s;
        }
        .hamburger:hover {
          background: rgba(0, 0, 0, 0.06);
        }
        .hamburger span {
          display: block;
          width: 20px; 
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.2s ease;
        }
        .hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }
        .mobile-menu {
          display: none;
          flex-direction: column;
          background: rgba(255, 255, 255, 0.98);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          padding: 16px 20px 24px;
          gap: 6px;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          animation: navSlideDown 0.2s ease-out;
        }
        @keyframes navSlideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nav-brand-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .mobile-menu .nav-link { width: 100%; text-align: left; padding: 12px 16px; }
        @media (max-width: 768px) {
          .nav-inner {
            padding: 0 16px;
            height: 64px;
            justify-content: flex-start;
          }
          .nav-logo {
            font-size: 20px;
          }
          .nav-links { display: none; }
          .hamburger { 
            display: flex;
            margin-left: 0;
          }
          .mobile-menu { display: flex; }
        }
      `}</style>

      <nav className={`navbar${scrolled || menuOpen ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-brand-group">
            <button 
              className={`hamburger${menuOpen ? ' open' : ''}`} 
              onClick={() => setMenuOpen(o => !o)} 
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
            <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Chandana G Kulal
            </span>
          </div>

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
