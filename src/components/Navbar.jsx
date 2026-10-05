import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiMoon, FiSun, FiDownload } from 'react-icons/fi';
import useScrollSpy from '../hooks/useScrollSpy';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const active = useScrollSpy(NAV_ITEMS.map((i) => i.id), 140);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const goTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <div className="section-container">
          <nav
            className={`flex items-center justify-between rounded-[1.4rem] px-4 sm:px-6 transition-all duration-500 backdrop-blur-xl ${
              scrolled
                ? 'h-14 border border-white/50 bg-white/70 shadow-[0_18px_50px_-28px_rgba(15,23,42,0.32)] dark:border-white/10 dark:bg-navy-900/70 dark:shadow-card-dark'
                : 'h-16 border border-transparent bg-transparent'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => goTo('home')}
              className="group flex items-center gap-2.5 focus-ring rounded-lg px-1"
              aria-label="Go to top"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple text-white text-xs font-bold shadow-glow transition-transform duration-300 group-hover:scale-105">
                SB
              </span>
              <span className="font-display text-sm sm:text-base font-bold tracking-wide text-slate-900 dark:text-white">
                Saniya <span className="gradient-text">Bohre</span>
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1 rounded-xl p-1">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="relative">
                    <button
                      onClick={() => goTo(item.id)}
                      className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-ring ${
                        isActive
                          ? 'text-accent-blue'
                          : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right actions */}
            <div className="flex items-center gap-1.5">
              <button
                aria-label="Toggle theme"
                onClick={() => setDark((d) => !d)}
                className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 hover:text-accent-blue dark:text-slate-300 dark:hover:bg-navy-800 dark:hover:text-accent-blue focus-ring"
              >
                {dark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
              </button>

              <a
                href="/resume.pdf"
                download
                className="hidden md:inline-flex btn-base bg-gradient-to-r from-accent-blue to-accent-indigo text-white shadow-glow hover:shadow-glow-lg !px-4 !py-2 text-xs"
              >
                <FiDownload className="h-3.5 w-3.5" />
                Resume
              </a>

              <button
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((m) => !m)}
                className="md:hidden rounded-lg p-2 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-navy-800 focus-ring"
              >
                {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-slate-900/40 dark:bg-navy-950/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute right-4 left-4 top-24 rounded-2xl glass-strong p-4 shadow-glow transition-all duration-300 ${
            menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => goTo(item.id)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors focus-ring ${
                    active === item.id
                      ? 'bg-accent-blue/10 text-accent-blue'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-navy-800'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="pt-2 mt-2 border-t border-slate-200/60 dark:border-white/5">
              <a
                href="/resume.pdf"
                download
                className="btn-base w-full bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-glow"
              >
                <FiDownload className="h-4 w-4" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}