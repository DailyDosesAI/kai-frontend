import { useState, useEffect } from 'react';

export function useScrollSection(totalSections) {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight;
      
      // Calculate which section should be active based on scroll position
      const newSection = Math.round(scrollPosition / sectionHeight);
      const clampedSection = Math.max(0, Math.min(newSection, totalSections - 1));
      
      if (clampedSection !== currentSection) {
        setCurrentSection(clampedSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentSection, totalSections]);

  return currentSection;
} 