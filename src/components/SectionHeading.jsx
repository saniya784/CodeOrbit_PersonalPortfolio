import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../lib/motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const centered = align === 'center';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`mb-12 ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}
    >
      {eyebrow && (
        <motion.span variants={fadeUp} className="pill">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-mint" />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-5 font-display text-fluid-h2 font-bold tracking-[-0.04em] text-slate-950 dark:text-white"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        className={`mx-auto mt-4 h-px w-20 bg-gradient-to-r from-transparent via-accent-blue to-transparent ${centered ? '' : 'ml-0'}`}
      />
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400 ${
            centered ? 'mx-auto max-w-2xl' : ''
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
