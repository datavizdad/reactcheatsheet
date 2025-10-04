import { useState, useEffect, useCallback } from 'react';

const useScrollSpy = (sectionIds, options = {}) => {
  const [activeSection, setActiveSection] = useState('');

  const {
    rootMargin = '-20% 0px -35% 0px',
    threshold = 0.1
  } = options;

  const scrollToSection = useCallback((sectionId, updateHistory = true) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of sticky header
      const elementPosition = element.offsetTop - headerHeight - 20;

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      // Update URL hash
      if (updateHistory) {
        window.history.pushState(null, null, `#${sectionId}`);
      }
      setActiveSection(sectionId);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleEntries = entries.filter(entry => entry.isIntersecting);

        if (visibleEntries.length > 0) {
          // Sort by intersection ratio and position
          const sortedEntries = visibleEntries.sort((a, b) => {
            // If intersection ratios are similar, prefer the one higher on the page
            if (Math.abs(a.intersectionRatio - b.intersectionRatio) < 0.1) {
              return a.boundingClientRect.top - b.boundingClientRect.top;
            }
            return b.intersectionRatio - a.intersectionRatio;
          });

          const targetId = sortedEntries[0].target.id;
          setActiveSection(targetId);

          // Update URL hash without scrolling
          if (window.location.hash !== `#${targetId}`) {
            window.history.replaceState(null, null, `#${targetId}`);
          }
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    // Handle hash changes (back/forward navigation)
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && sectionIds.includes(hash)) {
        setActiveSection(hash);
        scrollToSection(hash, false); // Don't update history
      }
    };

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on URL hash
    const hash = window.location.hash.slice(1);
    if (hash && sectionIds.includes(hash)) {
      setActiveSection(hash);
      // Scroll to section on initial load
      setTimeout(() => scrollToSection(hash, false), 100);
    } else if (sectionIds.length > 0) {
      setActiveSection(sectionIds[0]);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [sectionIds, rootMargin, threshold, scrollToSection]);

  return { activeSection, scrollToSection };
};

export default useScrollSpy;