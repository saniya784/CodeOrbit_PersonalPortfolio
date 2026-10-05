import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { fadeUp } from '../lib/motion';

const CERTIFICATIONS = [
  {
    title: 'Full-Stack Development',
    issuer: 'Project-based learning',
    detail: 'React, Node.js, APIs, authentication, and database workflows.',
  },
  {
    title: 'AI Web Applications',
    issuer: 'Hands-on portfolio work',
    detail: 'AI assistant features, recommendation flows, and modern app UI.',
  },
  {
    title: 'Software Fundamentals',
    issuer: 'Computer Science coursework',
    detail: 'Programming, data structures, databases, and problem solving.',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding reveal relative overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="Learning proof"
          title="Certifications & Focus Areas"
          subtitle="A concise view of the subjects I am actively strengthening through coursework and project practice."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {CERTIFICATIONS.map((item, index) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              className="card card-hover relative overflow-hidden p-6"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-blue via-emerald-400 to-amber-400" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-accent-blue ring-1 ring-slate-200 dark:bg-navy-900 dark:ring-white/10">
                {index === 0 ? (
                  <FiAward className="h-5 w-5" />
                ) : index === 1 ? (
                  <FiCheckCircle className="h-5 w-5" />
                ) : (
                  <FiBookOpen className="h-5 w-5" />
                )}
              </div>
              <h3 className="font-display text-lg font-bold text-slate-950 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                {item.issuer}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
