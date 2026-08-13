import React, { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Code,
  Grid3X3,
  Smartphone,
  ShoppingBag,
  Store,
  Ticket,
  Activity,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Floor Planning System",
    type: "WEB APPLICATION",
    description: "An interactive web application for creating and managing floor plans with drawing tools, requirement collection, and project management features.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Canvas API"],
    icon: Grid3X3,
    liveUrl: "",
    githubUrl: "https://github.com/chandanagkulal/floor",
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: 2,
    name: "DineDesk",
    type: "MOBILE APP",
    description: "Developed a mobile canteen management application with authentication, role-based access, menu browsing, and order management.",
    technologies: ["React Native", "Supabase", "JavaScript"],
    icon: Smartphone,
    liveUrl: "",
    githubUrl: "https://github.com/chandanagkulal/DineDesk",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Beauty Palette",
    type: "E-COMMERCE PLATFORM",
    description: "Developed a responsive e-commerce platform with user authentication, product listing, and order management.",
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    icon: ShoppingBag,
    liveUrl: "",
    githubUrl: "https://github.com/chandanagkulal/BeautyPallete",
    color: "from-rose-400 to-orange-400",
  },
  {
    id: 4,
    name: "Chandana General Store",
    type: "DIGITAL STOREFRONT",
    description: "A digital storefront with product categories, mapping, and WhatsApp enquiry integration.",
    technologies: ["React", "Vite", "Tailwind CSS"],
    icon: Store,
    liveUrl: "https://chandanastore.vercel.app/",
    githubUrl: "https://github.com/chandanagkulal/chandana-general-store",
    color: "from-emerald-400 to-teal-500",
  },
  {
    id: 5,
    name: "GetMyTicket",
    type: "EVENT BOOKING",
    description: "A web platform for browsing events and securely booking tickets online.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    icon: Ticket,
    liveUrl: "",
    githubUrl: "https://github.com/chandanagkulal/GetMyTicket",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    name: "LifeLink",
    type: "EMERGENCY SYSTEM",
    description: "An open-source application designed to streamline emergency alerts and medical coordination.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    icon: Activity,
    liveUrl: "",
    githubUrl: "https://github.com/VishwambharBK/LifeLink",
    color: "from-red-500 to-rose-400",
  },
];

const ProjectCard = ({ project, index }) => {
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

  const Icon = project.icon;

  // We assign a dynamic gradient based on the project's color property
  const gradientStyles = {
    "--grad-start": `var(--${project.color.split(' ')[0].replace('from-', '')})`,
    "--grad-end": `var(--${project.color.split(' ')[1].replace('to-', '')})`
  };

  return (
    <div
      ref={cardRef}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`vibrant-card-wrapper ${isVisible ? 'visible' : ''}`}
    >
      <article className="vibrant-card">
        {/* Animated Gradient Border Layer */}
        <div className={`card-gradient-border bg-gradient-to-br ${project.color}`} />
        
        <div className="card-inner">
          <div className="card-header">
            <div className={`icon-container bg-gradient-to-br ${project.color}`}>
              <Icon size={24} strokeWidth={2} color="white" />
            </div>
            <span className="project-type">{project.type}</span>
          </div>

          <h3 className="project-title">{project.name}</h3>
          <p className="project-description">{project.description}</p>

          <div className="tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>

          <div className="card-footer">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-live">
                View Live
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                <Code size={16} />
                Source
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <style>{`
        /* Vibrant Colors for Gradients */
        :root {
          --blue-500: #3b82f6;
          --cyan-400: #22d3ee;
          --purple-500: #a855f7;
          --pink-500: #ec4899;
          --rose-400: #fb7185;
          --orange-400: #fb923c;
          --emerald-400: #34d399;
          --teal-500: #14b8a6;
          --indigo-500: #6366f1;
          --red-500: #ef4444;
        }

        /* Utility classes for gradients */
        .bg-gradient-to-br { background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); }
        
        .from-blue-500 { --tw-gradient-from: var(--blue-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(59, 130, 246, 0)); }
        .to-cyan-400 { --tw-gradient-to: var(--cyan-400); }
        
        .from-purple-500 { --tw-gradient-from: var(--purple-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(168, 85, 247, 0)); }
        .to-pink-500 { --tw-gradient-to: var(--pink-500); }
        
        .from-rose-400 { --tw-gradient-from: var(--rose-400); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(251, 113, 133, 0)); }
        .to-orange-400 { --tw-gradient-to: var(--orange-400); }
        
        .from-emerald-400 { --tw-gradient-from: var(--emerald-400); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(52, 211, 153, 0)); }
        .to-teal-500 { --tw-gradient-to: var(--teal-500); }
        
        .from-indigo-500 { --tw-gradient-from: var(--indigo-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(99, 102, 241, 0)); }
        
        .from-red-500 { --tw-gradient-from: var(--red-500); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 68, 68, 0)); }


        .vibrant-projects-section {
          background: var(--bg);
          padding: 120px 24px;
          position: relative;
        }

        .container-vibrant {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header-vibrant {
          text-align: center;
          margin-bottom: 80px;
        }

        .title-vibrant {
          font-family: var(--font-heading, serif);
          font-size: clamp(40px, 6vw, 56px);
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 20px;
          letter-spacing: -0.02em;
        }

        .title-highlight {
          background: linear-gradient(to right, #ec4899, #8b5cf6, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: shine 4s linear infinite;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        .subtitle-vibrant {
          font-size: 18px;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 40px;
        }

        /* --- Card Wrapper --- */
        .vibrant-card-wrapper {
          transform: translateY(50px);
          opacity: 0;
          transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
        }

        .vibrant-card-wrapper.visible {
          transform: translateY(0);
          opacity: 1;
        }

        /* --- Card Itself --- */
        .vibrant-card {
          position: relative;
          height: 100%;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.08);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          z-index: 1;
        }



        /* Animated Hover Border */
        .card-gradient-border {
          position: absolute;
          inset: -2px;
          border-radius: 26px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .vibrant-card:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.15);
        }

        .vibrant-card:hover .card-gradient-border {
          opacity: 1;
          animation: border-spin 3s linear infinite;
        }

        .card-inner {
          background: inherit;
          border-radius: 24px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .icon-container {
          height: 56px;
          width: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 16px -4px rgba(0,0,0,0.15);
          transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .vibrant-card:hover .icon-container {
          transform: rotate(10deg) scale(1.1);
        }

        .project-type {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-secondary);
          text-transform: uppercase;
          background: rgba(0,0,0,0.04);
          padding: 6px 12px;
          border-radius: 99px;
        }
        


        .project-title {
          font-family: var(--font-heading, serif);
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
        }

        .project-description {
          font-size: 15px;
          line-height: 1.6;
          color: var(--text-secondary);
          flex-grow: 1;
          margin-bottom: 24px;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 32px;
        }

        .tech-tag {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-secondary);
          background: rgba(0,0,0,0.03);
          border: 1px solid rgba(0,0,0,0.05);
          padding: 6px 12px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }



        .vibrant-card:hover .tech-tag {
          background: rgba(0,0,0,0.06);
          border-color: rgba(0,0,0,0.1);
          color: var(--text-primary);
        }



        .card-footer {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: auto;
        }

        .btn-live, .btn-github {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 12px;
          padding: 10px 20px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .btn-live {
          background: var(--text-primary);
          color: var(--bg);
        }

        .btn-live:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px -4px rgba(0,0,0,0.2);
        }

        .btn-github {
          background: transparent;
          color: var(--text-primary);
          border: 1px solid rgba(0,0,0,0.1);
        }



        .btn-github:hover {
          background: rgba(0,0,0,0.04);
        }


      `}</style>

      <section id="projects" className="projects-section bg-pattern-mesh">
        <div className="container-vibrant">
          <div className="section-header-vibrant">
            <h2 className="title-vibrant">
              Explore My <span className="title-highlight">Projects</span>
            </h2>
            <p className="subtitle-vibrant">
              A curated collection of web applications, platforms, and digital experiences I've brought to life.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
