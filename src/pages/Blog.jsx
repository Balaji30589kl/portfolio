import { motion as Motion } from 'framer-motion';
import { fadeInUp } from '../utils/motion';

const Blog = () => (
  <section className="glass-panel mx-auto mt-24 flex w-full max-w-4xl flex-col items-center gap-6 border border-dashed border-accent-purple/40 px-8 py-16 text-center">
    <Motion.h1
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="text-4xl font-semibold text-slate-900 dark:text-slate-100"
    >
      Notes & Experiments — Coming Soon
    </Motion.h1>
    <Motion.p
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
      className="max-w-2xl text-base text-slate-600 md:text-lg dark:text-slate-400"
    >
      A dedicated space for deep dives, lessons learned, and creative sparks is on its way. Stay
      tuned as Balaji curates thoughtful content around design systems, front-end tooling, and
      futuristic interfaces.
    </Motion.p>
  </section>
);

export default Blog;

