import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/motion';

const Education = () => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    let mounted = true;
    import('../../data/profile.json')
      .then(({ default: data }) => {
        if (mounted) setEducation(data.education ?? []);
      })
      .catch(() => mounted && setEducation([]));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="education" className="scroll-mt-24 space-y-12">
      <Motion.div
        className="space-y-10"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation and continuous growth."
          description="Formal education that underpins my software engineering journey."
        />
        <Motion.ol
          variants={fadeInUp}
          className="relative border-l border-slate-200/70 pl-6 dark:border-slate-700/60"
        >
          {education.map((item, idx) => (
            <li key={`${item.institution}-${idx}`} className="mb-10 last:mb-0">
              <Motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="relative rounded-3xl border border-slate-200/60 bg-white/80 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/60"
              >
                <span className="absolute -left-[37px] top-6 flex h-3 w-3 items-center justify-center rounded-full border border-accent-cyan/70 bg-white dark:bg-slate-950">
                  <span className="h-2 w-2 rounded-full bg-accent-cyan" />
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{item.institution}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <p className="text-sm text-slate-600 dark:text-slate-400">{item.program}</p>
                      {item.score && (
                        <Motion.span
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, amount: 0.6 }}
                          className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-2 py-1 text-xs font-bold text-white dark:from-purple-500 dark:to-cyan-500"
                        >
                          {item.score}
                        </Motion.span>
                      )}
                    </div>
                  </div>
                  <span className="rounded-full border border-slate-200/70 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                    {item.timeline}
                  </span>
                </div>
                
              </Motion.div>
            </li>
          ))}
          {education.length === 0 && (
            <li className="rounded-3xl border border-dashed border-accent-cyan/30 bg-white/70 p-8 text-sm text-slate-600 dark:bg-slate-900/50 dark:text-slate-400">
              Education data is loading.
            </li>
          )}
        </Motion.ol>
      </Motion.div>
    </section>
  );
};

export default Education;
