import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/motion';
import { Trophy, Code2, Star } from 'lucide-react';

const iconCycle = [Trophy, Code2, Star];

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    let mounted = true;
    import('../../data/profile.json')
      .then(({ default: data }) => {
        if (mounted) setAchievements(data.achievements ?? []);
      })
      .catch(() => mounted && setAchievements([]));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="achievements" className="scroll-mt-24 space-y-12">
      <Motion.div
        className="space-y-10"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionHeading
          eyebrow="Achievements"
          title="Milestones showcasing consistency and learning."
          description="Key accomplishments reflecting dedication to problem solving and open-source contribution."
        />
        <Motion.ul
          variants={fadeInUp}
          className="grid gap-6 sm:grid-cols-2"
        >
          {achievements.map((text, idx) => {
            const Icon = iconCycle[idx % iconCycle.length];
            return (
              <li key={text}>
                <Motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                  className="glass-panel flex items-start gap-4 rounded-3xl border border-slate-200/70 bg-white/80 p-5 text-sm text-gray-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-gray-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/30 text-accent-cyan dark:from-accent-cyan/10 dark:to-accent-purple/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="leading-relaxed">{text}</p>
                </Motion.div>
              </li>
            );
          })}
          {achievements.length === 0 && (
            <li className="rounded-3xl border border-dashed border-accent-cyan/30 bg-white/80 p-8 text-center text-sm text-slate-600 dark:bg-slate-900/50 dark:text-slate-400">
              Achievements loading.
            </li>
          )}
        </Motion.ul>
      </Motion.div>
    </section>
  );
};

export default Achievements;
