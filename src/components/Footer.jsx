import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const EMAIL = 'saniabohre10@gmail.com';
const GITHUB_URL = 'https://github.com/saniya784';
const LINKEDIN_URL = 'https://www.linkedin.com/in/saniya-bohre-55307a2a1/';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-slate-200/70 dark:border-navy-800/70">
      <div className="section-container flex flex-col items-center gap-6 py-10 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p className="font-display text-sm font-semibold text-slate-800 dark:text-slate-100">
            Saniya <span className="gradient-text">Bohre</span>
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            © {year} Saniya Bohre. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {[
            { Icon: FiGithub, href: GITHUB_URL, label: 'GitHub', external: true },
            {
              Icon: FiLinkedin,
              href: LINKEDIN_URL,
              label: 'LinkedIn',
              external: true,
            },
            { Icon: FiMail, href: `mailto:${EMAIL}`, label: 'Email', external: false },
          ].map(({ Icon, href, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="rounded-xl border border-slate-300/80 bg-white/60 p-2.5 text-slate-700 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent-blue hover:text-accent-blue hover:shadow-glow dark:border-navy-700 dark:bg-navy-800/50 dark:text-slate-300 focus-ring"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="ml-1 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition-colors hover:text-accent-blue dark:text-slate-400 focus-ring"
          >
            Back to top
            <FiArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}