import { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/motion';

const About = () => {
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState([]);
  const [currentlyLearning, setCurrentlyLearning] = useState([]);

  useEffect(() => {
    let mounted = true;
    import('../../data/skills.json')
      .then(({ default: data }) => {
        if (!mounted) return;
        setBio(data.bio ?? '');
        setSkills(data.skills ?? []);
        setCurrentlyLearning(data.currentlyLearning ?? []);
      })
      .catch(() => {
        if (mounted) {
          setBio('Passionate about crafting immersive digital products and thoughtful design systems.');
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="about" className="scroll-mt-24 space-y-12">
      <Motion.div
        className="glass-panel px-8 py-12 md:px-12 md:py-16"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <SectionHeading
          eyebrow="About"
          title="Design-driven engineering with a future-focused lens."
          description={bio}
        />

        <Motion.div variants={fadeInUp} className="mt-10 grid gap-10 lg:grid-cols-[2fr,1fr]">
          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-accent-purple/80">Core Skills</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.category}
                  className="rounded-2xl border border-slate-200/70 bg-white/80 p-5 dark:border-white/10 dark:bg-slate-900/60"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-600 dark:text-slate-400">{group.category}</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm uppercase tracking-[0.35em] text-accent-purple/80">Currently Learning</h3>
            <ul className="mt-6 space-y-3">
              {currentlyLearning.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm text-slate-700 dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-accent-cyan" />
                  <span>{item}</span>
                </li>
              ))}
              {currentlyLearning.length === 0 && (
                <li className="rounded-2xl border border-dashed border-accent-cyan/30 bg-white/60 px-4 py-3 text-sm text-slate-600 dark:bg-slate-900/40 dark:text-slate-300">
                  Always curious and exploring emerging technologies.
                </li>
              )}
            </ul>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default About;

