import { useEffect, useState } from 'react';

const Footer = () => {
  const [footerText, setFooterText] = useState('');

  useEffect(() => {
    let mounted = true;
    import('../../data/profile.json')
      .then(({ default: data }) => {
        if (mounted) setFooterText(data.footerText ?? '');
      })
      .catch(() => {
        if (mounted) setFooterText('');
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <footer className="mx-auto mt-20 w-full max-w-6xl px-6 pb-12 text-sm text-slate-500 md:px-10 dark:text-slate-400">
      <div className="glass-panel flex flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        <p className="text-center text-sm text-slate-600 md:text-left dark:text-slate-200">
          {footerText || (
            <>
              Made with <span className="text-accent-purple">❤️</span> by Balaji
            </>
          )}
        </p>
        {!footerText && (
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Crafted with React, Vite, Tailwind CSS, and Framer Motion.
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;

