import { motion as Motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motion';

const alignMap = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const alignment = alignMap[align] ?? alignMap.left;

  return (
    <Motion.div
      variants={fadeInUp}
      className={`max-w-3xl space-y-3 ${alignment === 'text-center' ? 'mx-auto' : ''}`}
    >
      {eyebrow && (
        <span className="inline-block text-sm font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-purple">{eyebrow}</span>
      )}
      {title && (
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl dark:text-slate-50">{title}</h2>
          <div className="h-1 w-24 rounded-full bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink" />
        </div>
      )}
      {description && <p className="text-base font-medium text-slate-600 md:text-lg dark:text-slate-300">{description}</p>}
    </Motion.div>
  );
};

export default SectionHeading;

