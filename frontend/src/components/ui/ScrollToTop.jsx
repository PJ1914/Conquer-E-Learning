import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, key } = useLocation();

  useEffect(() => {
    // Only scroll to top on route changes, not on initial load
    if (key !== 'default') {
      // Small delay to ensure the page content is rendered
      const timeoutId = setTimeout(() => {
        // Try smooth scroll first
        try {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        } catch (error) {
          // Fallback for browsers that don't support smooth behavior
          window.scrollTo(0, 0);
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [pathname, key]);

  // Also handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setTimeout(() => {
        try {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        } catch (error) {
          window.scrollTo(0, 0);
        }
      }, 100);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollToTop;