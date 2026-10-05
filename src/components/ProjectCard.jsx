import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheck, FiArrowUpRight } from 'react-icons/fi';
import SpotlightCard from './SpotlightCard';

export default function ProjectCard({ project, index = 0 }) {
  const cardRef = useRef(null);

  // Tilt values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  const onMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <SpotlightCard className="card h-full transition-all duration-500 group-hover:border-accent-blue/40 group-hover:shadow-glow">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

          <div className="absolute left-3 top-3">
            <span className="rounded-md border border-white/20 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-accent-blue shadow-sm backdrop-blur-sm dark:bg-navy-950/80 dark:text-accent-blue">
              {project.category}
            </span>
          </div>

          <div className="absolute right-3 top-3 flex h-8 w-8 translate-y-[-8px] items-center justify-center rounded-full bg-white/95 text-slate-800 opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-navy-950/95 dark:text-white">
            <FiArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 transition-colors group-hover:border-accent-blue/20 dark:border-navy-700 dark:bg-navy-800/60 dark:text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="mt-5 space-y-1.5">
            {project.features.slice(0, 4).map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300"
              >
                <FiCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent-blue" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base flex-1 border border-slate-300/80 text-slate-800 hover:border-accent-blue hover:bg-accent-blue/5 hover:text-accent-blue dark:border-navy-600 dark:text-slate-100 dark:hover:text-accent-blue"
            >
              <FiGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base flex-1 bg-gradient-to-r from-accent-blue to-accent-indigo text-white shadow-glow hover:shadow-glow-lg"
            >
              <FiExternalLink className="h-4 w-4" />
              Live Demo
            </a>
          </div>
        </div>
      </SpotlightCard>
    </motion.article>
  );
}