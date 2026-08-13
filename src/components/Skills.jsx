import React, { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Server, Database, Sparkles } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    label: 'Frontend Engineering',
    color: 'linear-gradient(135deg, #3b82f6 0%, #22d3ee 50%, #5eead4 100%)', // Blue to Cyan to Teal
    icon: Palette,
    colSpan: 'col-span-2',
    rowSpan: 'row-span-1',
    skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS', 'Redux', 'Framer Motion'],
    desc: 'Crafting pixel-perfect, highly interactive, and accessible user interfaces.'
  },
  {
    label: 'Backend & APIs',
    color: 'linear-gradient(135deg, #f97316 0%, #f59e0b 50%, #facc15 100%)', // Orange to Amber to Yellow
    icon: Server,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    skills: ['Node.js', 'Express.js', 'PHP', 'RESTful APIs'],
    desc: 'Building scalable server-side architecture and robust APIs.'
  },
  {
    label: 'Core Languages',
    color: 'linear-gradient(135deg, #9333ea 0%, #d946ef 50%, #ec4899 100%)', // Purple to Fuchsia to Pink
    icon: Code2,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    skills: ['JavaScript (ES6+)', 'Python', 'Java', 'TypeScript'],
    desc: 'Strong foundation in object-oriented and functional programming paradigms.'
  },
  {
    label: 'Database & Cloud',
    color: 'linear-gradient(135deg, #10b981 0%, #2dd4bf 50%, #06b6d4 100%)', // Emerald to Teal to Cyan
    icon: Database,
    colSpan: 'col-span-2',
    rowSpan: 'row-span-1',
    skills: ['MongoDB', 'MySQL', 'Supabase', 'PostgreSQL', 'Firebase'],
    desc: 'Designing efficient schemas and managing real-time data synchronization.'
  },
];

const BentoCard = ({ category, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const Icon = category.icon;

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 150}ms` }}
      className={`bento-card-wrapper ${category.colSpan} ${category.rowSpan} ${isVisible ? 'visible' : ''}`}
    >
      <article className="bento-card">
        {/* Animated Gradient Background */}
        <div className="bento-gradient-bg" style={{ background: category.color }} />
        
        {/* Large Watermark Icon */}
        <div className="bento-watermark">
          <Icon size={160} strokeWidth={1} />
        </div>

        <div className="bento-inner">
          <div className="bento-header">
            <div className="bento-icon-box" style={{ background: category.color }}>
              <Icon size={22} strokeWidth={2.5} color="white" />
            </div>
            <h3 className="bento-title">{category.label}</h3>
          </div>

          <p className="bento-desc">{category.desc}</p>

          <div className="bento-tech-stack">
            {category.skills.map((skill) => (
              <span key={skill} className="bento-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
};

export default function Skills() {
  return (
    <>
      <style>{`
        .skills-bento-section {
          background: var(--bg);
          padding: 140px 24px;
          position: relative;
          overflow: hidden;
        }

        .container-bento {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Bento Grid System */
        .bento-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 60px;
        }

        @media (min-width: 900px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: minmax(320px, auto);
          }
          .col-span-2 { grid-column: span 2; }
          .col-span-1 { grid-column: span 1; }
          .row-span-2 { grid-row: span 2; }
          .row-span-1 { grid-row: span 1; }
        }

        .bento-card-wrapper {
          transform: translateY(60px) scale(0.95);
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          height: 100%;
        }

        .bento-card-wrapper.visible {
          transform: translateY(0) scale(1);
          opacity: 1;
        }

        .bento-card {
          position: relative;
          height: 100%;
          border-radius: 32px;
          background: #ffffff;
          box-shadow: 0 15px 35px -10px rgba(0,0,0,0.05), 0 5px 15px -5px rgba(0,0,0,0.02);
          transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }



        /* Advanced Hover Effects */
        .bento-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.12), 0 10px 20px -5px rgba(0,0,0,0.05);
        }

        .bento-gradient-bg {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
          z-index: 0;
        }

        .bento-card:hover .bento-gradient-bg {
          opacity: 0.08; /* Subtle colored glow over the entire card */
        }

        .bento-watermark {
          position: absolute;
          right: -30px;
          bottom: -30px;
          opacity: 0.03;
          transform: rotate(-15deg) scale(0.8);
          transition: all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);
          pointer-events: none;
          z-index: 0;
          color: var(--text-primary);
        }

        .bento-card:hover .bento-watermark {
          opacity: 0.1;
          transform: rotate(0deg) scale(1);
        }

        .bento-inner {
          position: relative;
          padding: 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 1;
        }

        .bento-header {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .bento-icon-box {
          height: 52px;
          width: 52px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 20px -5px rgba(0,0,0,0.2);
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          flex-shrink: 0;
        }

        .bento-card:hover .bento-icon-box {
          transform: scale(1.15) rotate(8deg);
        }

        .bento-title {
          font-family: var(--font-heading, serif);
          font-size: 26px;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
          letter-spacing: -0.02em;
        }

        .bento-desc {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 32px;
          max-width: 90%;
        }

        .bento-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }

        .bento-pill {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-primary);
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.05);
          padding: 8px 18px;
          border-radius: 12px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }



        .bento-card:hover .bento-pill {
          background: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          border-color: transparent;
          transform: translateY(-2px);
        }
        


      `}</style>

      <section id="skills" className="skills-bento-section">
        <div className="container-bento">
          <div className="section-header-vibrant fade-up">
            <h2 className="title-vibrant">Technical <span className="gradient-text">Arsenal</span></h2>
            <p className="subtitle-vibrant">
              The tools, languages, and frameworks I use to engineer modern, high-performance digital solutions.
            </p>
          </div>

          <div className="bento-grid">
            {SKILL_CATEGORIES.map((category, index) => (
              <BentoCard key={category.label} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
