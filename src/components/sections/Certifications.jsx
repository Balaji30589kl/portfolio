import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/motion';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    let mounted = true;
    import('../../data/certifications.json')
      .then(({ default: data }) => {
        if (mounted) setCertifications(data);
      })
      .catch(() => {
        if (mounted) setCertifications([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="certifications" className="scroll-mt-24 space-y-12">
      <Motion.div
        className="space-y-10"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          eyebrow="Certifications"
          title="Credible upskilling from leading ecosystems."
          description="Continual learning keeps me adaptable. Here’s a snapshot of recent certifications that sharpen my engineering and design toolkit."
        />

        <Motion.div variants={fadeInUp} className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <div
              key={`${cert.name}-${cert.platform}`}
              className="glass-panel flex flex-col gap-4 rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent-cyan/50 hover:shadow-card-glow dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-accent-purple/50"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">{cert.platform}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-slate-100">{cert.name}</h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{cert.description}</p>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{cert.issued}</span>
                <span className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200">
                  {cert.type}
                </span>
              </div>
            </div>
          ))}
          {certifications.length === 0 && (
            <div className="rounded-3xl border border-dashed border-accent-cyan/30 bg-white/80 p-8 text-center text-sm text-slate-600 dark:bg-slate-900/40 dark:text-slate-400">
              Updating soon with fresh credentials and achievements.
            </div>
          )}
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Certifications;

