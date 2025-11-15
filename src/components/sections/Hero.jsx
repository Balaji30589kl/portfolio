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
        <div className="grid gap-10 lg:grid-cols-[1fr,auto] lg:items-center lg:gap-16">
          {/* Left: Text Content */}
          <Motion.div variants={staggerContainer()} initial="hidden" animate="visible" className="space-y-6">
            <Motion.span
              variants={fadeInUp}
              className="relative inline-flex items-center gap-2 rounded-full border-2 border-accent-cyan/50 bg-white/90 px-5 py-1.5 text-[11px] font-bold uppercase tracking-[0.35em] text-slate-700 shadow-sm dark:border-accent-purple/50 dark:bg-slate-900/70 dark:text-slate-200"
            >
              Full Stack Developer
              <span className="absolute -inset-[2px] -z-10 rounded-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink opacity-25 blur-sm" />
            </Motion.span>

            <div className="isolate">
              <Motion.h1
                variants={fadeInUp}
                className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink bg-clip-text text-transparent"
              >
                {title}
              </Motion.h1>
            </div>

            <Motion.p variants={fadeInUp} className="max-w-2xl text-lg font-medium text-slate-700 md:text-xl dark:text-slate-300">
              {tagline}
            </Motion.p>

            {stats.length > 0 && (
              <>
                {/* tw-ignore-start */}
                <Motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap items-center gap-8 rounded-2xl border border-slate-200/50 bg-white/10 p-6 backdrop-blur-xl text-slate-800 dark:border-white/10 dark:bg-slate-900/50 dark:text-white [text-shadow:_0_0_6px_rgba(0,0,0,0.35)]"
                >
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex items-baseline gap-3">
                      <span className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</span>
                      <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-slate-400">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </Motion.div>
                {/* tw-ignore-end */}
              </>
            )}

            <Motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4">
              <Motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink px-7 py-3.5 text-sm font-bold text-white shadow-glow transition hover:shadow-glow-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
              >
                View Resume
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Motion.a>
              <Motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full border-2 border-accent-cyan/40 bg-gradient-to-r from-accent-cyan/10 to-accent-purple/10 px-6 py-3 text-sm font-bold text-slate-800 backdrop-blur-sm transition hover:border-accent-purple/60 hover:from-accent-cyan/20 hover:to-accent-purple/20 hover:shadow-card-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-accent-purple/40 dark:from-accent-purple/10 dark:to-accent-pink/10 dark:text-slate-100 dark:hover:border-accent-cyan/60 dark:hover:from-accent-cyan/20 dark:hover:to-accent-purple/20 dark:focus-visible:ring-offset-slate-950"
              >
                Projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Motion.a>
              <Motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full border border-slate-300/70 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.3em] text-slate-700 transition hover:border-accent-cyan/50 hover:text-accent-cyan hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-slate-600/50 dark:text-slate-200 dark:hover:border-accent-purple/50 dark:hover:text-accent-purple dark:focus-visible:ring-offset-slate-950"
              >
                Contact
                <Mail className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Motion.a>
            </Motion.div>
          </Motion.div>

          {/* Right: Profile Image */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: [0, -3, 0]
            }}
            transition={{
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              x: { duration: 0.8 },
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            className="relative mx-auto flex h-48 w-48 items-center justify-center lg:h-56 lg:w-56"
          >
            {/* Gradient border ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan via-accent-purple to-accent-pink p-[3px]">
              <div className="h-full w-full rounded-full bg-white/30 backdrop-blur-xl dark:bg-slate-900/40" />
            </div>
            
            {/* Image */}
            <div className="relative z-10 h-[calc(100%-6px)] w-[calc(100%-6px)] overflow-hidden rounded-full shadow-card-glow">
              <img
                src="/profile.jpg"
                alt="S Balaji Rao"
                className="h-full w-full object-cover object-top scale-90 transition-all duration-300"
              />
            </div>
            
            {/* Reflection glow */}
            <div className="absolute -bottom-4 left-1/2 h-20 w-28 -translate-x-1/2 rounded-full bg-gradient-to-t from-accent-cyan/20 to-transparent blur-2xl" />
          </Motion.div>
        </div>

        <Motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-cyan-200/60 bg-gradient-to-r from-cyan-50/80 to-purple-50/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-600 shadow-sm dark:border-purple-500/30 dark:from-slate-900/60 dark:to-purple-900/40 dark:text-slate-300"
        >
          <Scroll className="h-4 w-4 text-accent-cyan" />
          Scroll to explore
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default Hero;

