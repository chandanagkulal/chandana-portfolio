import React from 'react';
import { GraduationCap, BookOpen, School, MapPin, Calendar, Star } from 'lucide-react';

const EDUCATION = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Poornaprajna Institute of Management',
    score: '8.06',
    scoreType: 'CGPA',
    period: '2024 – 2026',
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Milagres College',
    score: '7.98',
    scoreType: 'CGPA',
    period: '2021 – 2024',
    icon: BookOpen,
  },
  {
    degree: 'Pre-University (Commerce - EBACs)',
    short: 'PUC',
    institution: 'Shamili Pre-University College',
    score: '81%',
    scoreType: 'Percentage',
    period: '2019 – 2021',
    icon: School,
  },
];

export default function Education() {
  return (
    <>
      <style>{`
        .education-section {
          background: var(--bg);
          padding: 100px 24px;
          position: relative;
        }

        .container-education {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        /* Horizontal Timeline Framework */
        .timeline-wrapper {
          position: relative;
          margin-top: 60px;
        }

        .timeline-track-horizontal {
          position: absolute;
          top: 30px; /* Centers exactly with the 60px marker */
          left: 8%;
          right: 8%;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.1) 85%, transparent);
          z-index: 0;
        }

        .edu-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          position: relative;
          z-index: 1;
        }

        .edu-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        /* Sleek Minimal Marker */
        .timeline-marker-top {
          width: 60px;
          height: 60px;
          border-radius: 50%; /* Circle instead of box */
          background: var(--bg-card);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--card-shadow);
          transition: transform 0.5s ease, box-shadow 0.4s ease;
          position: relative;
          z-index: 2;
          color: var(--text-primary);
        }

        .edu-column:hover .timeline-marker-top {
          transform: translateY(-4px);
          box-shadow: var(--card-hover-shadow);
          border-color: var(--border-accent);
        }

        /* Card Setup */
        .edu-card {
          background: var(--bg-card);
          border-radius: 24px;
          padding: 40px 32px;
          box-shadow: var(--card-shadow);
          transition: all 0.4s ease;
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .edu-column:hover .edu-card {
          transform: translateY(-8px);
          box-shadow: var(--card-hover-shadow);
          border-color: var(--border-accent);
        }

        .edu-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .edu-degree {
          font-family: var(--font-heading, serif);
          font-size: 21px;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0 0 16px 0;
          line-height: 1.35;
          text-align: center;
          min-height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .edu-details-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .edu-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .edu-badge svg {
          color: var(--text-muted);
        }

        .edu-cgpa-box {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 24px;
          border-radius: 99px; /* Pill shape */
          border: 1px solid var(--tag-border);
          background: var(--tag-bg);
          font-weight: 700;
          font-size: 14px;
          color: var(--text-primary);
          width: max-content;
          margin: 0 auto;
          transition: all 0.3s ease;
        }
        
        .edu-column:hover .edu-cgpa-box {
          background: var(--accent);
          color: #ffffff;
          border-color: var(--accent);
        }

        @media (max-width: 960px) {
          .timeline-track-horizontal { display: none; }
          .edu-grid { grid-template-columns: 1fr; gap: 36px; }
          .edu-card { padding: 32px 20px; }
        }
      `}</style>

      <section id="education" className="education-section">
        <div className="container-education">
          <div className="section-header-vibrant fade-up">
            <h2 className="title-vibrant">Academic <span className="gradient-text">Journey</span></h2>
            <p className="subtitle-vibrant">
              My formal education shaping my foundation in computer science and software development.
            </p>
          </div>

          <div className="timeline-wrapper fade-up">
            <div className="timeline-track-horizontal"></div>

            <div className="edu-grid">
              {EDUCATION.map(({ degree, short, institution, score, scoreType, period, icon: Icon }, i) => (
                <div className="edu-column" key={short} style={{ transitionDelay: `${i * 150}ms` }}>
                  
                  {/* Clean Minimal Top Marker */}
                  <div className="timeline-marker-top">
                    <Icon size={26} strokeWidth={2} color="currentColor" />
                  </div>

                  {/* Clean Card */}
                  <div className="edu-card">
                    <div className="edu-content">
                      <h3 className="edu-degree">{degree} ({short})</h3>
                      
                      <div className="edu-details-grid">
                        <div className="edu-badge">
                          <MapPin size={18} /> {institution}
                        </div>
                        <div className="edu-badge">
                          <Calendar size={18} /> {period}
                        </div>
                      </div>

                      {/* Clean Score Box */}
                      <div className="edu-cgpa-box">
                        <Star size={16} fill="currentColor" /> {scoreType === 'Percentage' ? `Score: ${score}` : `CGPA: ${score}`}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
