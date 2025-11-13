import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/motion';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    let mounted = true;
    import('../../data/experience.json')
      .then(({ default: data }) => {
        if (mounted) setExperiences(data);
      })
      .catch(() => {
        if (mounted) setExperiences([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="experience" className="scroll-mt-24 space-y-12">
      <Motion.div
        className="space-y-10"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          eyebrow="Experience"
          title="A timeline of collaborations, impact, and experiments."
          description="From product teams to creative labs, I lead with empathy and an engineering mindset to deliver results."
        />

        <Motion.ol variants={fadeInUp} className="relative border-l border-slate-200/80 pl-6 dark:border-slate-700/60">
          {experiences.map((item, index) => (
            <li key={`${item.company}-${item.role}`} className="mb-12 last:mb-0">
              <Motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-sm transition hover:border-accent-cyan/50 hover:shadow-card-glow dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-accent-purple/50"
              >
                <span className="absolute -left-[37px] top-6 flex h-3 w-3 items-center justify-center rounded-full border border-accent-cyan/70 bg-gradient-to-br from-white to-cyan-50 shadow-sm dark:border-accent-purple/70 dark:from-slate-950 dark:to-purple-950">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple" />
                </span>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{item.role}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.company} • {item.location}
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300">
                    {item.period}
                  </span>
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-purple" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Motion.div>
            </li>
          ))}
          {experiences.length === 0 && (
            <li className="rounded-3xl border border-dashed border-accent-cyan/30 bg-white/80 p-8 text-sm text-slate-600 dark:bg-slate-900/40 dark:text-slate-400">
              Adding more milestones soon. Meanwhile, you can explore recent projects above.
            </li>
          )}
        </Motion.ol>
      </Motion.div>
    </section>
  );
};

export default Experience;

