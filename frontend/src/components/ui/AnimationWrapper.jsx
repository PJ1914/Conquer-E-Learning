import { motion } from 'framer-motion';

// Fade In Animation
export const FadeIn = ({ children, delay = 0, duration = 0.6, direction = 'up', className = '' }) => {
  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

// Slide In Animation
export const SlideIn = ({ children, delay = 0, duration = 0.8, direction = 'left', className = '' }) => {
  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    up: { y: -100 },
    down: { y: 100 },
  };

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      animate={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      transition={{ 
        duration, 
        delay,
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale Animation
export const ScaleIn = ({ children, delay = 0, duration = 0.5, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        scale: 0.8 
      }}
      animate={{ 
        opacity: 1, 
        scale: 1 
      }}
      transition={{ 
        duration, 
        delay,
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger Container for multiple items
export const StaggerContainer = ({ children, staggerDelay = 0.1, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Stagger Item for use inside StaggerContainer
export const StaggerItem = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

// Bounce Animation
export const Bounce = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: 50 
      }}
      animate={{ 
        opacity: 1, 
        y: 0 
      }}
      transition={{ 
        duration: 0.6,
        delay,
        type: "spring",
        bounce: 0.4 
      }}
    >
      {children}
    </motion.div>
  );
};

// Rotate Animation
export const RotateIn = ({ children, delay = 0, duration = 0.8, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        rotate: -180,
        scale: 0.5 
      }}
      animate={{ 
        opacity: 1, 
        rotate: 0,
        scale: 1 
      }}
      transition={{ 
        duration, 
        delay,
        ease: "easeInOut" 
      }}
    >
      {children}
    </motion.div>
  );
};

// Typewriter Animation
export const TypeWriter = ({ text, delay = 0, speed = 0.05, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: delay + index * speed,
            duration: 0.1,
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Hover Scale Effect
export const HoverScale = ({ children, scale = 1.05, className = '' }) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale,
        transition: { duration: 0.2 } 
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
};

// Page Transition Wrapper
export const PageTransition = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.4,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Scroll Reveal Animation
export const ScrollReveal = ({ children, threshold = 0.1, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Pulse Animation
export const Pulse = ({ children, scale = 1.1, duration = 1, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

// Float Animation
export const Float = ({ children, y = -10, duration = 2, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, y, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};