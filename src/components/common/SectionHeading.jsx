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
        <span className="text-sm uppercase tracking-[0.3em] text-accent-cyan/80">{eyebrow}</span>
      )}
      {title && <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl dark:text-slate-50">{title}</h2>}
      {description && <p className="text-base text-slate-600 md:text-lg dark:text-slate-400">{description}</p>}
    </Motion.div>
  );
};

export default SectionHeading;

