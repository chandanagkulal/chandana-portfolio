import React from 'react';

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100svh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 120px 0 80px;
          background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(248,250,252,0.96) 100%);
        }
        
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }
        .hero-orb-1 {
          width: 640px; height: 640px;
          background: rgba(147, 51, 234, 0.12);
          top: -120px; left: -120px;
          animation: floatOrb 10s ease-in-out infinite;
        }
        .hero-orb-2 {
          width: 420px; height: 420px;
          background: rgba(8, 145, 178, 0.1);
          bottom: -80px; right: -80px;
          animation: floatOrb 12s ease-in-out infinite reverse;
        }
        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.05); }
        }

        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(15, 23, 42, 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.015) 1px, transparent 1px);
          background-size: 64px 64px;
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 64px;
          max-width: 1220px;
          margin: 0 auto;
        }

        .hero-content {
          text-align: left;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-primary);
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(148, 163, 184, 0.3);
          padding: 6px 14px;
          border-radius: 99px;
          margin-bottom: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.03);
          backdrop-filter: blur(10px);
        }
        .status-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #0ea5e9;
          box-shadow: 0 0 8px #0ea5e9;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(40px, 5vw, 64px);
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--text-primary);
          line-height: 1.08;
          margin-bottom: 24px;
        }
        .hero-title .gradient-text {
          display: block;
          margin-top: 8px;
          font-size: clamp(26px, 3vw, 42px);
          background: linear-gradient(135deg, #7e22ce, #0ea5e9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc-box {
          border-left: 3px solid #7e22ce;
          padding-left: 20px;
          margin-bottom: 40px;
        }
        .hero-desc {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 520px;
        }
        .hero-desc strong {
          color: var(--text-primary);
          font-weight: 700;
        }

        .hero-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 48px;
        }
        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%);
          color: #fff;
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 12px;
          box-shadow: 0 10px 24px rgba(124, 58, 237, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          cursor: pointer;
          border: none;
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(124, 58, 237, 0.35);
          color: #fff;
        }
        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255,255,255,0.8);
          color: var(--text-primary);
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 15px;
          padding: 14px 28px;
          border-radius: 12px;
          border: 1px solid rgba(148, 163, 184, 0.4);
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
          text-decoration: none;
          cursor: pointer;
        }
        .hero-btn-secondary:hover {
          background: #fff;
          border-color: rgba(124, 58, 237, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.04);
        }

        .hero-find-me {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .find-me-text {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
        }
        .find-me-icons {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .social-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: rgba(255,255,255,0.8);
          border: 1px solid rgba(148,163,184,0.35);
          color: var(--text-primary);
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.04);
          transition: all 0.2s ease;
        }
        .social-box:hover {
          transform: translateY(-3px);
          border-color: rgba(124, 58, 237, 0.3);
          background: #fff;
          box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
        }
        .social-box svg {
          width: 20px;
          height: 20px;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 40px;
          border-top: 1px solid rgba(148,163,184,0.3);
          padding-top: 32px;
        }
        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .stat-value {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 800;
          color: var(--text-primary);
        }
        .stat-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #0ea5e9;
        }

        /* Right Side: Photo & Badges */
        .hero-photo-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-photo-ring {
          width: 420px; height: 420px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(147,51,234,0.05), rgba(6,182,212,0.05));
          border: 1px solid rgba(147,51,234,0.15);
          padding: 24px;
          position: relative;
        }
        .hero-photo-ring img {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
        }

        /* Floating Badges */
        .float-badge {
          position: absolute;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(148, 163, 184, 0.3);
          padding: 14px 20px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.06);
          animation: floatBadge 6s ease-in-out infinite;
          z-index: 2;
        }
        .float-badge-1 {
          top: 15%; left: -30px;
          animation-delay: 0s;
        }
        .float-badge-2 {
          bottom: 20%; right: -20px;
          animation-delay: 2s;
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .badge-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(147,51,234,0.1), rgba(6,182,212,0.1));
          display: flex; align-items: center; justify-content: center;
          font-size: 20px;
        }
        .badge-text {
          display: flex; flex-direction: column;
        }
        .badge-title { font-size: 14px; font-weight: 700; color: var(--text-primary); }
        .badge-sub { font-size: 12px; color: var(--text-muted); }

        /* Fade-up animations */
        .fade-up-1 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both; }
        .fade-up-2 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
        .fade-up-3 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
        .fade-up-4 { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both; }
        
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; gap: 64px; }
          .hero-content { align-items: center; display: flex; flex-direction: column; }
          .hero-desc-box { border-left: none; padding-left: 0; text-align: center; }
          .hero-stats { justify-content: center; }
          .hero-photo-wrap { order: -1; margin-top: 40px; }
          .hero-photo-ring { width: 320px; height: 320px; }
          .float-badge-1 { left: -10px; }
          .float-badge-2 { right: -10px; }
        }
        @media (max-width: 600px) {
          .hero-title { font-size: 42px; }
          .hero-photo-ring { width: 280px; height: 280px; padding: 12px; }
          .float-badge { padding: 8px 12px; }
          .badge-icon { width: 28px; height: 28px; font-size: 14px; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />

        <div className="container">
          <div className="hero-inner">
            
            <div className="hero-content">
              
              
              <h1 className="hero-title fade-up-2">
                <br/>
                <span className="gradient-text">Full-Stack Developer</span>
              </h1>
              
              <div className="hero-desc-box fade-up-3">
                <p className="hero-desc">
                  I am <strong>Chandana G Kulal</strong>, a full-stack developer specializing in creating high-performance, premium web experiences. I help professionals and businesses build standout portfolios and scalable applications.
                </p>
              </div>
              
              <div className="hero-cta fade-up-4">
                <button 
                  className="hero-btn-primary" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  Download Resume
                </button>
                <a className="hero-btn-secondary" href="mailto:chandanag0508@gmail.com">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
                  Let's Connect
                </a>
              </div>

              <div className="hero-find-me fade-up-4">
                <span className="find-me-text">Find me on</span>
                <div className="find-me-icons">
                  <a href="https://linkedin.com/in/chandana-g-kulal-167b47349" className="social-box" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="https://github.com/chandanagkulal" className="social-box" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="mailto:chandanag0508@gmail.com" className="social-box" aria-label="Email">
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                  </a>
                </div>
              </div>

              <div className="hero-stats fade-up-4">
                <div className="stat-item">
                  <span className="stat-value">5+</span>
                  <span className="stat-label">Projects Built</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">MCA</span>
                  <span className="stat-label">Postgraduate</span>
                </div>
              </div>
            </div>

            <div className="hero-photo-wrap fade-up-2">
              <div className="hero-photo-ring">
                <img src="/pfp.jpg" alt="Chandana G Kulal" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
