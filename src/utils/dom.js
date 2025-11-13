export const scrollToSelector = (selector, offset = 0) => {
  if (typeof window === 'undefined') return;
  const element = document.querySelector(selector);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

