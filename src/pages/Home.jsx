import { useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import HeroSection from '../components/sections/Hero';
import AboutSection from '../components/sections/About';
import EducationSection from '../components/sections/Education';
import ProjectsSection from '../components/sections/Projects';
import AchievementsSection from '../components/sections/Achievements';
import CertificationsSection from '../components/sections/Certifications';
import ExperienceSection from '../components/sections/Experience';
import ContactSection from '../components/sections/Contact';
import { fadeIn } from '../utils/motion';
import { scrollToSelector } from '../utils/dom';

const Home = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const { hash } = window.location;
    if (hash) {
      setTimeout(() => scrollToSelector(hash, 120), 120);
    }
  }, []);

  return (
    <Motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col gap-24 pb-16"
    >
      <HeroSection />
  <AboutSection />
  <EducationSection />
  <ProjectsSection />
  <AchievementsSection />
      <CertificationsSection />
      <ExperienceSection />
      <ContactSection />
    </Motion.div>
  );
};

export default Home;

