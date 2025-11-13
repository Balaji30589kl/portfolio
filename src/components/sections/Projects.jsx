import { useEffect, useMemo, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/motion';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    let mounted = true;
    import('../../data/projects.json')
      .then(({ default: data }) => {
        if (mounted) setProjects(data);
      })
      .catch(() => {
        if (mounted) setProjects([]);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const { featuredProjects, otherProjects } = useMemo(() => {
    const featured = projects.filter((project) => project.featured);
    const others = projects.filter((project) => !project.featured);
    return { featuredProjects: featured, otherProjects: others };
  }, [projects]);

  return (
    <section id="projects" className="scroll-mt-24 space-y-12">
      <Motion.div
        className="space-y-10"
        variants={staggerContainer(0.14)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
      >
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects that explore interactive storytelling."
          description="A curated selection of case studies blending React, motion design, and emerging tech. Each project is crafted with a systems mindset and high attention to detail."
        />

        <div className="grid gap-8">
          {featuredProjects.map((project) => (
            <Motion.article
              key={project.title}
              variants={scaleIn}
              className="glass-panel grid gap-8 rounded-3xl border border-slate-200/60 bg-white/80 px-8 py-10 shadow-sm transition hover:border-accent-cyan/50 hover:shadow-card-glow dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-accent-purple/50 md:grid-cols-[1.2fr,1fr] md:px-12"
            >
              <div className="space-y-5">
                <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-slate-100">{project.title}</h3>
                <p className="text-base text-slate-600 dark:text-slate-400">{project.description}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-cyan-200/80 bg-gradient-to-r from-white to-cyan-50/50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-700 transition hover:border-accent-cyan/60 hover:from-cyan-50 hover:to-purple-50 dark:border-purple-500/30 dark:from-slate-900/70 dark:to-purple-900/30 dark:text-slate-300 dark:hover:border-accent-purple/60"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap items-center gap-3">
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-accent-cyan to-accent-purple px-5 py-2.5 text-sm font-bold text-white shadow-glow transition hover:shadow-glow-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-purple/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
                    >
                      Live Demo
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-accent-cyan/40 hover:text-accent-cyan focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/15 dark:bg-slate-900/70 dark:text-slate-100 dark:focus-visible:ring-offset-slate-950"
                    >
                      GitHub
                      <Github className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:scale-110" />
                    </a>
                  )}
                </div>
              </div>

              <Motion.div
                className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-6 dark:border-white/10 dark:bg-slate-900/50"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-purple/10" />
                <p className="relative text-sm text-slate-700 dark:text-slate-300">{project.highlight}</p>
                <div className="relative mt-6 space-y-3 text-xs text-slate-500 dark:text-slate-400">
                  {project.perspective?.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </Motion.div>
            </Motion.article>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <Motion.div variants={fadeInUp} className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="glass-panel flex flex-col gap-4 rounded-3xl border border-slate-200/60 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent-cyan/50 hover:shadow-card-glow dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-accent-purple/50"
              >
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h4>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2 text-xs text-slate-500 dark:text-slate-400">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-slate-200/80 px-3 py-1 text-slate-700 dark:border-white/10 dark:text-slate-200"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-3">
                  {project.links?.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-sm font-medium text-accent-cyan transition hover:underline"
                    >
                      Demo
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.links?.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 text-sm font-medium text-slate-600 transition hover:text-accent-cyan dark:text-slate-300"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </Motion.div>
        )}
      </Motion.div>
    </section>
  );
};

export default Projects;

