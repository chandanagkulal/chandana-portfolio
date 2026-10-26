import React from 'react';
import resumePdf from '../assets/resume.pdf';

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 100svh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 140px 0 100px;
          overflow: hidden;
        }

        .hero-bg-orb {
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37,99,235,0.04) 0%, transparent 70%);
          top: 10%;
          right: -10%;
          z-index: 0;
          animation: slowOrbit 20s ease-in-out infinite alternate;
          pointer-events: none;
        }

        @keyframes slowOrbit {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-30px, 30px) scale(1.05); }
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          align-items: center;
          gap: 60px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ─── LEFT COLUMN ─── */
        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 32px;
          transition: transform var(--transition);
        }
        .status-badge:hover { transform: translateY(-2px); }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          box-shadow: 0 0 8px rgba(37, 99, 235, 0.4);
          animation: subtlePulse 2s infinite;
        }
        @keyframes subtlePulse {
          0% { box-shadow: 0 0 0 0 rgba(37,99,235,0.3); }
          70% { box-shadow: 0 0 0 6px rgba(37,99,235,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,99,235,0); }
        }

        .hello-text {
          font-family: var(--font-sans);
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--text-secondary);
          margin-bottom: 8px;
          display: block;
        }

        .hero-title {
          font-family: var(--font-heading);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .role-subtitle {
          display: inline-block;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-primary);
          margin-bottom: 24px;
        }

        .hero-desc {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 540px;
          margin-bottom: 40px;
        }

        .hero-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
          flex-wrap: wrap;
        }

        .btn-primary-arrow svg {
          transition: transform 0.3s ease;
        }
        .btn-primary-arrow:hover svg {
          transform: translateX(4px);
        }

        .hero-social {
          display: flex;
          gap: 12px;
          margin-bottom: 48px;
        }
        .social-circle {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid rgba(148,163,184,0.3);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition);
        }
        .social-circle:hover {
          color: var(--accent);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(37,99,235,0.1);
        }
        .social-circle svg { width: 18px; height: 18px; }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .stat-mini {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .stat-mini-val { font-family: var(--font-mono); font-size: 22px; font-weight: 700; color: var(--text-primary); line-height: 1; }
        .stat-mini-label { font-family: var(--font-mono); font-size: 11px; font-weight: 600; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.1em; }
        .stat-divider { width: 1px; height: 28px; background: rgba(148,163,184,0.3); }

        /* ─── RIGHT COLUMN ─── */
        .hero-visuals {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .profile-container {
          position: relative;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          padding: 6px;
          background: #fff;
          border: 1px solid rgba(37,99,235,0.2);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .profile-img-inner {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #fff;
        }
        .profile-img-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Currently Building Card */
        .building-card {
          position: absolute;
          bottom: 15px;
          right: -25px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(37, 99, 235, 0.15);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          padding: 12px 18px;
          border-radius: 12px;
          width: auto;
          min-width: 180px;
          z-index: 3;
          transition: transform 0.3s ease;
        }
        .building-card:hover { transform: translateY(-4px); }
        .building-label { 
          font-family: var(--font-mono); 
          font-size: 10.5px; 
          font-weight: 700; 
          color: #059669; 
          letter-spacing: 0.08em; 
          text-transform: uppercase; 
          margin-bottom: 4px; 
          display: flex; 
          align-items: center; 
          gap: 6px; 
        }
        .building-label::before { 
          content: ''; 
          display: block; 
          width: 6px; 
          height: 6px; 
          border-radius: 50%; 
          background: #10b981; 
          animation: greenPulse 2s infinite;
        }
        @keyframes greenPulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.5); }
          70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .building-title { font-weight: 700; font-size: 14px; color: var(--text-primary); margin: 0; }

        @media (max-width: 1024px) {
          .hero-section { padding: 105px 0 60px; }
          .hero-inner { grid-template-columns: 1fr; text-align: center; gap: 28px; }
          .hero-desc { margin: 0 auto 32px; }
          .hero-cta { justify-content: center; }
          .hero-social { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-visuals { order: -1; margin-top: 10px; margin-bottom: 24px; }
          .status-badge { display: none; } /* Avoid duplicate badge on mobile since card already highlights Open to Work */
          .building-card { 
            left: 50%;
            right: auto;
            transform: translateX(-50%); 
            bottom: -14px; 
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          }
          .building-card:hover { transform: translateX(-50%) translateY(-3px); }
        }
        @media (max-width: 600px) {
          .hero-section { padding: 90px 0 45px; }
          .profile-container { width: 220px; height: 220px; }
          .building-card { 
            width: auto;
            min-width: 170px;
            padding: 9px 16px; 
            bottom: -12px; 
            border-radius: 12px;
          }
          .building-label { font-size: 10px; margin-bottom: 3px; justify-content: center; }
          .building-title { font-size: 13.5px; }
          .hero-title { font-size: 36px; margin-bottom: 12px; }
          .role-subtitle { font-size: 12.5px; margin-bottom: 20px; }
          .hero-desc { font-size: 15px; margin-bottom: 28px; }
          .hero-cta { 
            flex-direction: column; 
            width: 100%; 
            max-width: 300px; 
            margin: 0 auto 32px; 
            gap: 12px; 
          }
          .hero-cta .btn-primary, .hero-cta .btn-secondary { 
            width: 100%; 
            justify-content: center; 
          }
          .hero-social { margin-bottom: 36px; }
          .hero-stats { gap: 18px; }
        }
      `}</style>

      <section className="hero-section bg-pattern-grid" id="hero">
        <div className="hero-bg-orb"></div>
        <div className="container">
          <div className="hero-inner">
            
            <div className="hero-content fade-up">
              <div className="status-badge">
                <div className="status-dot"></div>
                OPEN TO OPPORTUNITIES
              </div>
              
              <span className="hello-text">Hello, I'm</span>
              <h1 className="hero-title">
                Chandana G Kulal
              </h1>
              
              <div className="role-subtitle">Full-Stack Developer <span style={{opacity: 0.3, margin: '0 8px'}}>•</span> MCA Graduate</div>
              
              <p className="hero-desc">
                I build responsive web applications and practical software solutions with modern frontend and backend technologies.
              </p>
              
              <div className="hero-cta">
                <button 
                  className="btn-primary btn-primary-arrow" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Projects 
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <a className="btn-secondary" href={resumePdf} download="Chandana_G_Kulal_Resume.pdf" rel="noreferrer">
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
                  Download Resume
                </a>
              </div>

              <div className="hero-social">
                <a href="https://github.com/chandanagkulal" className="social-circle" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a href="https://linkedin.com/in/chandana-g-kulal-167b47349" className="social-circle" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="mailto:chandanag0508@gmail.com" className="social-circle" aria-label="Email" title="Email">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat-mini">
                  <span className="stat-mini-val">03+</span>
                  <span className="stat-mini-label">Projects</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-mini">
                  <span className="stat-mini-val">MCA</span>
                  <span className="stat-mini-label">Graduate</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-mini">
                  <span className="stat-mini-val">Full-Stack</span>
                  <span className="stat-mini-label">Developer</span>
                </div>
              </div>
            </div>

            <div className="hero-visuals fade-up delay-2">
              <div className="profile-container">
                <div className="profile-img-inner">
                  <img src="/pfp.jpg" alt="Chandana G Kulal" />
                </div>
              </div>

              <div className="building-card">
                <div className="building-label">OPEN TO WORK</div>
                <div className="building-title">Full-Stack Developer</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

