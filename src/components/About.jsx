import { motion } from 'framer-motion';
import { FiLayers, FiTarget, FiZap } from 'react-icons/fi';
import CountUp from './CountUp';
import SectionHeading from './SectionHeading';
import { fadeUp } from '../lib/motion';

const HIGHLIGHTS = [
  'B.Tech CSE',
  '7th Semester',
  'Fresher',
  'Software Development',
  'Full-Stack Development',
];

const SNAPSHOT = [
  { label: 'Projects', value: 3, suffix: '+' },
  { label: 'Core skills', value: 14, suffix: '+' },
  { label: 'Learning track', value: 2027, suffix: '' },
];

export default function About() {
  return (
    <section id="about" className="section-padding reveal relative overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get to know me"
          title="About Me"
          subtitle="A short introduction to who I am and what I am working towards."
        />

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="card-surface animated-border md:col-span-2 p-6 sm:p-8"
          >
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue ring-1 ring-accent-blue/20">
              <FiLayers className="h-5 w-5" />
            </div>
            <p className="leading-relaxed text-slate-700 dark:text-slate-300">
              I am a Computer Science Engineering student interested in software
              development and building practical web applications. I enjoy working
              with modern web technologies and learning how frontend, backend,
              databases, and APIs work together.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {SNAPSHOT.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-navy-900/55"
                >
                  <p className="font-display text-2xl font-bold text-slate-950 dark:text-white">
                    <CountUp to={item.value} suffix={item.suffix} />
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6 dark:border-navy-600">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-mint/10 text-accent-mint ring-1 ring-accent-mint/20">
                  <FiTarget className="h-4 w-4" />
                </span>
                <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">
                  Career Objective
                </h3>
              </div>
              <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                To start my career as a Software Developer and contribute to
                building scalable and user-focused applications while continuously
                improving my technical and problem-solving skills.
              </p>
            </div>
          </motion.div>

          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            custom={1}
            className="card-surface p-6 sm:p-8"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-amber/10 text-accent-amber ring-1 ring-accent-amber/20">
              <FiZap className="h-5 w-5" />
            </div>
            <h3 className="font-display text-lg font-semibold text-slate-950 dark:text-white">
              Highlights
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {HIGHLIGHTS.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-accent-blue/40 hover:text-accent-blue dark:border-navy-600 dark:bg-navy-700/70 dark:text-slate-200"
                >
                  {h}
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
