import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, Mail, Scroll } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/motion';

const Hero = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('../../data/profile.json')
      .then(({ default: data }) => {
        if (mounted) setProfile(data);
      })
      .catch(() => {
        if (mounted) setProfile(null);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const title = profile?.hero?.title ?? 'Full Stack Developer';
  const tagline = profile?.hero?.tagline ?? 'I build user-focused digital experiences.';
  const stats = profile?.hero?.stats ?? [];
  const resumeUrl = profile?.links?.resumeUrl ?? '#';

  return (
    <section id="hero" className="relative">
      <Motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-panel overflow-hidden px-8 py-12 md:px-12 md:py-16"
      >
        <Motion.div variants={staggerContainer()} initial="hidden" animate="visible" className="space-y-8">
          <Motion.span
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.4em] text-accent-cyan/80 dark:border-white/10 dark:bg-slate-900/60"
          >
            Creative Technologist
          </Motion.span>

          <Motion.h1
            variants={fadeInUp}
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-slate-50"
          >
            {title}
          </Motion.h1>

          <Motion.p variants={fadeInUp} className="max-w-2xl text-lg text-slate-600 md:text-xl dark:text-slate-300">
            {tagline}
          </Motion.p>

          {stats.length > 0 && (
            <Motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-6 rounded-2xl border border-slate-200/70 bg-white/80 p-4 dark:border-white/10 dark:bg-slate-900/50"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-3">
                  <span className="text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">{stat.value}</span>
                  <span className="text-xs uppercase tracking-[0.25em] text-slate-600 md:text-sm dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </Motion.div>
          )}

          <Motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-teal px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
            >
              View Resume
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent-cyan/40 hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100 dark:focus-visible:ring-offset-slate-950"
            >
              Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-slate-200/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-600 transition hover:border-accent-cyan/40 hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:text-slate-300 dark:focus-visible:ring-offset-slate-950"
            >
              Contact
              <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Motion.div>
        </Motion.div>

        <Motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-500 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-400"
        >
          <Scroll className="h-4 w-4 text-accent-cyan" />
          Scroll to explore
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;

