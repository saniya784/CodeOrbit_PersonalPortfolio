const TECH = [
  'React',
  'Next.js',
  'JavaScript',
  'Python',
  'Node.js',
  'MongoDB',
  'Tailwind CSS',
  'Bootstrap',
  'HTML',
  'CSS',
  'C',
  'Git',
  'GitHub',
  'REST APIs',
  'Socket.IO',
  'Convex',
];

export default function TechMarquee() {
  const items = [...TECH, ...TECH];

  return (
    <section
      aria-label="Technologies I work with"
      className="relative overflow-hidden border-y border-slate-200/70 bg-white/45 py-6 dark:border-white/5 dark:bg-navy-900/35"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent dark:from-navy-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent dark:from-navy-950" />

      <div className="flex w-max animate-marquee gap-8 will-change-transform">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap font-mono text-sm font-medium uppercase tracking-widest text-slate-500 transition-colors hover:text-accent-blue dark:text-slate-400"
          >
            {tech}
            <span className="ml-8 text-accent-mint/50">/</span>
          </span>
        ))}
      </div>
    </section>
  );
}
