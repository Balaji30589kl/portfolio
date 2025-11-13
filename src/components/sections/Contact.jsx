import { useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/motion';

const Contact = () => {
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

  const socials = [
    profile?.email
      ? { label: 'Email', href: `mailto:${profile.email}`, icon: Mail }
      : null,
    profile?.links?.github
      ? { label: 'GitHub', href: profile.links.github, icon: Github }
      : null,
    profile?.links?.linkedin
      ? { label: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin }
      : null,
  ].filter(Boolean);

  const [status, setStatus] = useState({ type: null, message: '' });
  const formRef = useRef(null);

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: 'pending', message: 'Sending…' });
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus({ type: 'success', message: '✅ Message sent successfully!' });
      formRef.current?.reset();
    } catch {
      setStatus({ type: 'error', message: '⚠️ Message failed to send. Please try again.' });
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 space-y-12">
      <Motion.div
        className="glass-panel grid gap-12 px-8 py-12 md:grid-cols-[1.1fr,1fr] md:px-12 md:py-16"
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something remarkable together."
            description="Open to collaborations, internships, and full‑stack opportunities."
          />
          <Motion.ul variants={fadeInUp} className="flex flex-wrap gap-4">
            {socials.map(({ label, href, icon }) => {
              const IconComponent = icon;
              return (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-accent-cyan/40 hover:text-accent-cyan dark:border-white/10 dark:bg-slate-900/60 dark:text-slate-200"
                  >
                    <IconComponent className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:scale-110" />
                    {label}
                  </a>
                </li>
              );
            })}
          </Motion.ul>
          <Motion.p variants={fadeInUp} className="text-sm text-slate-600 dark:text-slate-400">
            Prefer a more detailed brief or proposal deck? Send a quick note — I typically respond within
            two business days.
          </Motion.p>
        </div>

        <div className="space-y-3">
          {status.type === 'success' && (
            <Motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-emerald-300/40 bg-emerald-50/70 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-600/30 dark:bg-emerald-900/40 dark:text-emerald-200"
            >
              {status.message}
            </Motion.div>
          )}
          {status.type === 'error' && (
            <Motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-orange-300/40 bg-orange-50/70 px-4 py-3 text-sm text-orange-800 dark:border-orange-600/30 dark:bg-orange-900/40 dark:text-orange-200"
            >
              {status.message}
            </Motion.div>
          )}
        
          <Motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={fadeInUp}
            className="space-y-4 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-lg dark:border-white/10 dark:bg-slate-950/60"
          >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
              Name
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="rounded-2xl border border-slate-200/80 bg-white px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-accent-cyan/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/60 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="rounded-2xl border border-slate-200/80 bg-white px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-accent-cyan/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/60 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
              />
            </label>
          </div>
          <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
            Subject
            <input
              type="text"
              name="subject"
              placeholder="Let’s collaborate on..."
              className="rounded-2xl border border-slate-200/80 bg-white px-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-accent-cyan/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/60 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
            Message
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Share project details, goals, or timelines."
              className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-accent-cyan/50 focus:outline-none focus:ring-2 focus:ring-accent-cyan/60 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500"
            />
          </label>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-teal px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
          >
            Send Message
          </button>
          </Motion.form>
        </div>
      </Motion.div>
    </section>
  );
};

export default Contact;

