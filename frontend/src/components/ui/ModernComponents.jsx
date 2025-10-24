import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Modern Carousel Component
export const ModernCarousel = ({ items, autoPlay = true, interval = 5000, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!autoPlay || isPaused || !items || items.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % items.length;
        return nextIndex;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length, isPaused, items]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
    
    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Safety check
  if (!items || items.length === 0) {
    return <div className={`${className} flex items-center justify-center`}>No items to display</div>;
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-2xl ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hidden md:flex"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hidden md:flex"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator - Visible on all devices */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

// Modern Section Container
export const ModernSection = ({ children, className = '', gradient = false, dark = false }) => {
  const bgClass = gradient 
    ? 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
    : dark 
    ? 'bg-gray-900'
    : 'bg-white';

  return (
    <section className={`py-20 lg:py-28 ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

// Modern Card with Glass Effect
export const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      className={`
        bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl p-6
        shadow-lg hover:shadow-2xl transition-all duration-300
        ${hover ? 'hover:scale-105 hover:bg-white/90' : ''}
        ${className}
      `}
      whileHover={{ y: hover ? -5 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

// Gradient Button
export const GradientButton = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-600 hover:from-primary-700 hover:via-secondary-600 hover:to-accent-700 text-white',
    secondary: 'bg-gradient-to-r from-secondary-500 via-accent-500 to-primary-600 hover:from-secondary-600 hover:via-accent-600 hover:to-primary-700 text-white',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white bg-transparent',
    solid: 'bg-primary-600 hover:bg-primary-700 text-white',
    solidSecondary: 'bg-secondary-600 hover:bg-secondary-700 text-white'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  };

  return (
    <motion.button
      className={`
        ${variants[variant]} 
        ${sizes[size]} 
        rounded-xl font-semibold shadow-lg hover:shadow-xl 
        transition-all duration-300 transform hover:-translate-y-1
        focus:outline-none focus:ring-4 focus:ring-primary-300
        ${className}
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

// Stats Counter
export const StatCounter = ({ number, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const target = parseInt(number.replace(/[^\d]/g, ''));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
        setHasAnimated(true);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number, hasAnimated]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text mb-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </motion.div>
      <div className="text-gray-600 font-medium text-lg">{label}</div>
    </motion.div>
  );
};

// Accordion Component
export const ModernAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-secondary-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left bg-gradient-to-r from-secondary-50 to-primary-50 hover:from-secondary-100 hover:to-primary-100 transition-all duration-200 ease-in-out flex items-center justify-between"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={{ type: "spring", stiffness: 600, damping: 30 }}
          >
            <span className="font-semibold text-lg text-primary-800">{item.question}</span>
            <motion.svg
              className="w-6 h-6 text-primary-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              animate={{ rotate: activeIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </motion.svg>
          </motion.button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0, y: -10 }}
                animate={{ height: 'auto', opacity: 1, y: 0 }}
                exit={{ height: 0, opacity: 0, y: -10 }}
                transition={{ 
                  duration: 0.3, 
                  ease: [0.4, 0.0, 0.2, 1],
                  height: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
                  opacity: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
                  y: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }
                }}
                className="overflow-hidden"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="px-6 py-6 text-primary-700 leading-relaxed bg-secondary-25"
                >
                  {item.answer}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

// Section Header
export const SectionHeader = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  gradient = true 
}) => {
  return (
    <motion.div 
      className={`${centered ? 'text-center' : ''} mb-16`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {subtitle && (
        <motion.p 
          className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2 
        className={`
          text-4xl md:text-5xl lg:text-6xl font-bold mb-6
          ${gradient 
            ? 'bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent' 
            : 'text-gray-900'
          }
        `}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p 
          className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};