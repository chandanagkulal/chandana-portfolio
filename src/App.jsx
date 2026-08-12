import { useEffect } from 'react';
import './App.css';

import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Skills       from './components/Skills';
import Achievements from './components/Achievements';
import Education    from './components/Education';
import Contact      from './components/Contact';

export default function App() {
  // Intersection Observer for scroll-triggered fade-up animations
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </div>
  );
}
