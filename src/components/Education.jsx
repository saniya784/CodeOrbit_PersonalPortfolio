import SectionHeading from './SectionHeading';

export default function Education() {
  return (
    <section id="education" className="section-padding reveal bg-slate-100/60 dark:bg-navy-900/50">
      <div className="section-container">
        <SectionHeading
          eyebrow="Academic background"
          title="Education"
          subtitle="Where I'm currently pursuing my undergraduate degree."
        />

        <div className="mx-auto max-w-3xl">
          <div className="relative pl-8 sm:pl-10">
            {/* Timeline line */}
            <span className="absolute left-2 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-accent-blue via-accent-indigo to-accent-purple sm:left-3" />

            <div className="relative">
              {/* Dot */}
              <span className="absolute -left-[26px] top-3 h-4 w-4 rounded-full border-4 border-slate-50 bg-accent-blue dark:border-navy-950 sm:-left-[34px]" />

              <div className="card p-6 transition-all hover:border-accent-blue/40 hover:shadow-glow sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
                    B.Tech — Computer Science &amp; Engineering
                  </h3>
                  <span className="rounded-full border border-accent-blue/30 bg-accent-blue/10 px-3 py-1 text-xs font-semibold text-accent-blue">
                    2023 – 2027
                  </span>
                </div>

                <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Institute:</span> ITM University, Raipur, Chhattisgarh
                </p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">Current Status:</span> 7th Semester
                </p>
                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">
                  <span className="font-semibold">CGPA:</span> 8.0 / 10.0
                </p>

                {/* Coursework chips */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {['DSA', 'OOP', 'DBMS', 'OS', 'Computer Networks'].map((c) => (
                    <span
                      key={c}
                      className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-navy-700 dark:bg-navy-800/60 dark:text-slate-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}