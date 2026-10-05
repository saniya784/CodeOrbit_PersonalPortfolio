import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  FiArrowDown,
  FiArrowRight,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiServer,
} from 'react-icons/fi';
import Button from './Button';
import AnimatedText from './AnimatedText';
import MagneticButton from './MagneticButton';
import { fadeUp, staggerContainer } from '../lib/motion';

const EMAIL = 'saniabohre10@gmail.com';
const GITHUB_URL = 'https://github.com/saniya784';
const LINKEDIN_URL = 'https://www.linkedin.com/in/saniya-bohre-55307a2a1/';

const FLOAT_BADGES = [
  { label: 'React', icon: FiCode, color: 'text-accent-sky', pos: 'top-3 -left-3 sm:-left-8', delay: 0 },
  { label: 'Node.js', icon: FiServer, color: 'text-accent-mint', pos: 'top-1/3 -right-4 sm:-right-10', delay: 0.45 },
  { label: 'MongoDB', icon: FiDatabase, color: 'text-accent-amber', pos: 'bottom-20 -left-4 sm:-left-10', delay: 0.75 },
  { label: 'Next.js', icon: FiCode, color: 'text-accent-rose', pos: 'bottom-5 -right-2 sm:-right-6', delay: 1.05 },
];

const STATS = [
  { label: 'Semester', value: '7th' },
  { label: 'Focus', value: 'Full stack' },
  { label: 'Projects', value: '3+' },
];

export default function Hero() {
  const goTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yGrid = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yPanel = useTransform(scrollYProgress, [0, 1], [0, -55]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.18]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <motion.div
        style={{ y: yGrid, opacity }}
        className="pointer-events-none absolute inset-0 -z-10 bg-grid"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-mesh" />
      <motion.div
        aria-hidden
        animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(90deg,rgba(79,141,247,0.22),rgba(52,211,153,0.16),rgba(245,158,11,0.16),rgba(79,141,247,0.22))] bg-[length:220%_100%] opacity-70 blur-3xl"
      />

      <div className="section-container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="pill mb-5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-mint opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-mint" />
            </span>
            Available for Internships
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mb-3 text-sm font-medium text-slate-600 dark:text-slate-400 sm:text-base"
          >
            Hello, I am
          </motion.p>

          <h1 className="font-display text-[clamp(2.35rem,5vw+0.5rem,4.75rem)] font-bold leading-[1.02] tracking-tight text-slate-950 dark:text-white">
            <AnimatedText text="Saniya" delay={0.15} />{' '}
            <AnimatedText text="Bohre" delay={0.4} className="gradient-text-animate" />
          </h1>

          <motion.h2
            variants={fadeUp}
            custom={2}
            className="mt-5 flex flex-wrap items-center gap-2 text-lg font-semibold text-slate-700 dark:text-slate-300 sm:text-xl md:text-2xl"
          >
            <span className="font-mono text-accent-mint">/</span>
            Software Developer
            <span className="text-slate-400 dark:text-slate-600">|</span>
            Full-Stack Developer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mt-6 max-w-xl text-fluid-body leading-relaxed text-slate-600 dark:text-slate-400"
          >
            B.Tech Computer Science & Engineering student building practical,
            polished web applications with modern frontend, backend, API, and
            database workflows.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            className="mt-8 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/65 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-navy-900/50"
          >
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-4 py-4 ${index > 0 ? 'border-l border-slate-200/80 dark:border-white/10' : ''}`}
              >
                <p className="font-display text-lg font-bold text-slate-950 dark:text-white sm:text-xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} custom={5} className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton>
              <Button onClick={() => goTo('projects')} className="group">
                View Projects
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </MagneticButton>

            <Button as="a" href="/resume.pdf" download variant="outline" icon="download">
              Resume
            </Button>

            <Button onClick={() => goTo('contact')} variant="ghost">
              Contact
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} custom={6} className="mt-9 flex items-center gap-3">
            <span className="hidden text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 sm:inline">
              Find me
            </span>
            <span className="hidden h-px w-8 bg-slate-300 dark:bg-navy-600 sm:inline-block" />
            {[
              { Icon: FiLinkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
              { Icon: FiGithub, href: GITHUB_URL, label: 'GitHub' },
              { Icon: FiMail, href: `mailto:${EMAIL}`, label: 'Email' },
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-slate-300/80 bg-white/55 p-2.5 text-slate-700 backdrop-blur-sm transition-colors hover:border-accent-blue hover:text-accent-blue hover:shadow-glow dark:border-navy-600 dark:bg-navy-800/50 dark:text-slate-300 focus-ring"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yPanel }}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="animated-border relative w-full max-w-[27rem] overflow-hidden rounded-[2rem] bg-white/70 p-4 shadow-card backdrop-blur-2xl dark:bg-navy-900/65 dark:shadow-card-dark">
            <div className="rounded-[1.45rem] border border-slate-200/80 bg-slate-950 p-3 shadow-inner dark:border-white/10">
              <div className="mb-3 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-rose" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-amber" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent-mint" />
              </div>
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-slate-950">
                <motion.div
                  animate={{ x: ['-35%', '35%', '-35%'] }}
                  transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                />
                <div className="relative grid min-h-[25rem] place-items-center p-7">
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative h-64 w-64 sm:h-72 sm:w-72"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                      className="absolute -inset-5 rounded-full border border-dashed border-accent-mint/35"
                    />
                    <div className="relative h-full w-full overflow-hidden rounded-full border border-white/15 bg-slate-100 p-1 shadow-glow dark:bg-navy-900">
                      <img
                        src="/images/profile.svg"
                        alt="Saniya Bohre profile placeholder"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                    {FLOAT_BADGES.map(({ label, icon: Icon, color, pos, delay }) => (
                      <motion.div
                        key={label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.75 + delay, duration: 0.5 }}
                        className={`absolute ${pos}`}
                      >
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4.2 + delay, repeat: Infinity, ease: 'easeInOut' }}
                          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-xl"
                        >
                          <Icon className={`h-3.5 w-3.5 ${color}`} />
                          {label}
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => goTo('about')}
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-slate-400 transition-colors hover:text-accent-blue dark:text-slate-500 md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.button>
    </section>
  );
}
