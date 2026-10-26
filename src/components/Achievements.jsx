import React from 'react';
import { Trophy, Leaf, Rocket } from 'lucide-react';

const ACHIEVEMENTS = [
  { 
    icon: Trophy, 
    title: 'National Level Quiz Competition', 
    desc: 'Participated and represented at national level academic competition.',
    color: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)' // Gold/Amber
  },
  { 
    icon: Leaf, 
    title: 'NSS Camp', 
    desc: 'Actively participated in National Service Scheme community outreach camp.',
    color: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)' // Green/Emerald
  },
  { 
    icon: Rocket, 
    title: 'Full-Stack Projects', 
    desc: 'Developed multiple full-stack academic and internship projects independently.',
    color: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)' // Indigo/Purple
  },
];

export default function Achievements() {
  return (
    <>
      <style>{`
        .achievements-section {
          background: var(--bg-2);
          padding: 120px 24px;
          position: relative;
        }

        .container-achievements {
          max-width: 1100px;
          margin: 0 auto;
        }

        .achieve-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 50px;
        }

        .achieve-card {
          position: relative;
          background: var(--bg-card);
          border-radius: 24px;
          padding: 40px 32px;
          text-align: center;
          box-shadow: var(--card-shadow);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          overflow: hidden;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid var(--border);
        }

        .achieve-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: var(--card-hover-shadow);
        }

        .achieve-gradient-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .achieve-card:hover .achieve-gradient-bg {
          opacity: 0.05;
        }

        .achieve-icon-wrapper {
          position: relative;
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          z-index: 1;
        }

        .achieve-card:hover .achieve-icon-wrapper {
          transform: scale(1.1) rotate(10deg);
        }

        .achieve-title {
          font-family: var(--font-heading, serif);
          font-size: 22px;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 16px;
          line-height: 1.3;
          z-index: 1;
        }

        .achieve-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
          z-index: 1;
        }

        /* Subtle ring effect behind icon */
        .achieve-icon-wrapper::before {
          content: '';
          position: absolute;
          inset: -8px;
          border-radius: 28px;
          background: inherit;
          opacity: 0.2;
          z-index: -1;
          transition: transform 0.4s ease, opacity 0.4s ease;
        }

        .achieve-card:hover .achieve-icon-wrapper::before {
          transform: scale(1.2);
          opacity: 0.3;
        }
      `}</style>

      <section id="achievements" className="achievements-section">
        <div className="container-achievements">
          <div className="section-header-vibrant fade-up">
            <h2 className="title-vibrant">Notable <span className="gradient-text">Achievements</span></h2>
            <p className="subtitle-vibrant">Highlights from my academic and extracurricular journey.</p>
          </div>

          <div className="achieve-grid">
            {ACHIEVEMENTS.map(({ icon: Icon, title, desc, color }, i) => (
              <div className="achieve-card fade-up" key={title} style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="achieve-gradient-bg" style={{ background: color }} />
                
                <div className="achieve-icon-wrapper" style={{ background: color }}>
                  <Icon size={32} color="white" strokeWidth={2} />
                </div>
                
                <h3 className="achieve-title">{title}</h3>
                <p className="achieve-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
