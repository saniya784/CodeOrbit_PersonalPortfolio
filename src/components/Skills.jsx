import { motion } from 'framer-motion';
import { FiCode, FiCpu, FiDatabase, FiGitBranch, FiServer } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { SKILLS } from '../data/skills';
import { fadeUp } from '../lib/motion';

const CATEGORY_STYLES = {
  Frontend: {
    Icon: FiCode,
    gradient: 'from-sky-500 to-blue-600',
    bg: 'bg-sky-500/10',
    text: 'text-sky-600 dark:text-sky-400',
  },
  Backend: {
    Icon: FiServer,
    gradient: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  Database: {
    Icon: FiDatabase,
    gradient: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-500/10',
    text: 'text-violet-600 dark:text-violet-400',
  },
  Programming: {
    Icon: FiCpu,
    gradient: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-500/10',
    text: 'text-amber-600 dark:text-amber-400',
  },
  Tools: {
    Icon: FiGitBranch,
    gradient: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-500/10',
    text: 'text-rose-600 dark:text-rose-400',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding reveal relative overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="What I work with"
          title="Technical Skills"
          subtitle="Technologies and tools I have learned and used while building my projects."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, idx) => {
            const style = CATEGORY_STYLES[group.category] ?? CATEGORY_STYLES.Frontend;
            const Icon = style.Icon;

            return (
              <motion.article
                key={group.category}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={idx}
                className="card card-hover group relative overflow-hidden p-6 sm:p-7"
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.gradient}`} />

                <div className="relative mb-5 flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${style.bg} ${style.text} ring-1 ring-current/20 transition-transform duration-300 group-hover:scale-105`}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-slate-950 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                <ul className="relative flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-slate-200/80 bg-white/70 px-2.5 py-1 text-xs font-medium text-slate-700 transition-all duration-200 hover:border-accent-blue/60 hover:bg-accent-blue/10 hover:text-accent-blue dark:border-navy-700 dark:bg-navy-800/60 dark:text-slate-200"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
