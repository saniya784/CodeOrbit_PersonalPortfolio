import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import TechMarquee from './components/TechMarquee';         // ← NEW
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';   // ← NEW

export default function App() {
  // Scroll reveal for elements that still use `.reveal` class
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-navy-950 dark:text-slate-100">
      <div aria-hidden className="ambient-orb orb-1" />
      <div aria-hidden className="ambient-orb orb-2" />
      <div aria-hidden className="ambient-orb orb-3" />

      <ScrollProgress />
      <Navbar />
      <main className="relative">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}