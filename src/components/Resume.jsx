import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiFileText } from 'react-icons/fi';
import SectionHeading from './SectionHeading';

export default function Resume() {
  return (
    <section id="resume" className="section-padding reveal relative overflow-hidden">
      <div className="section-container">
        <SectionHeading
          eyebrow="My CV"
          title="Resume"
          subtitle="A quick overview of my skills, projects, and academic background."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="animated-border relative mx-auto max-w-3xl overflow-hidden rounded-[2.2rem] bg-slate-950 p-[1px] text-center shadow-[0_28px_90px_-30px_rgba(15,23,42,0.7)] dark:shadow-card-dark"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(18,30,60,0.96),rgba(14,116,144,0.72))] p-8 sm:p-12">
            <motion.div
              aria-hidden
              animate={{ x: ['-35%', '35%', '-35%'] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent"
            />

            <div className="relative">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue via-accent-mint to-accent-amber shadow-[0_18px_40px_-18px_rgba(79,141,247,0.7)]">
                <FiFileText className="h-7 w-7 text-white" />
              </div>

              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Want the complete profile?
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                Download or view the resume for the full summary of skills,
                project work, and academic details.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-base bg-gradient-to-r from-accent-blue to-accent-mint text-white shadow-[0_18px_40px_-18px_rgba(52,211,153,0.7)] hover:shadow-[0_22px_50px_-18px_rgba(79,141,247,0.7)]"
                >
                  <FiDownload className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base border border-white/15 bg-white/5 text-white hover:border-accent-mint hover:text-accent-mint"
                >
                  <FiEye className="h-4 w-4" />
                  View Resume
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Frontend</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Backend</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Projects</span>
              </div>

              <p className="mt-6 text-xs text-slate-500">
                Resume file path: public/resume.pdf
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
