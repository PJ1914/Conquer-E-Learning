/* 
 * TODO - BACKEND DEVELOPER:
 * Add backend integration for interactive section components
 * 
 * Required API endpoints:
 * 1. POST /api/users/subscribe - Handle newsletter subscriptions from CTA section
 * 2. POST /api/contact/inquiry - Handle "Talk to an Advisor" requests
 * 3. GET /api/users/stats - Fetch real-time platform statistics
 * 4. POST /api/analytics/section-view - Track which sections users interact with
 * 5. GET /api/users/profile - Personalize content based on user preferences
 * 
 * Add proper form validation and user feedback for all interactive elements
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ModernSection, 
  GlassCard, 
  GradientButton, 
  StatCounter, 
  ModernAccordion, 
  SectionHeader 
} from '../ui/ModernComponents';

// Hero Section Component
export const HeroSection = ({ data }) => {
  const { subtitle, title, description, buttons, backgroundElements } = data;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-violet-600 to-accent-800">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className={`absolute ${backgroundElements.element1.position} ${backgroundElements.element1.size} ${backgroundElements.element1.color} rounded-full mix-blend-multiply filter blur-xl opacity-30`}
          animate={{
            x: backgroundElements.element1.animation.x,
            y: backgroundElements.element1.animation.y,
          }}
          transition={{
            duration: backgroundElements.element1.animation.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className={`absolute ${backgroundElements.element2.position} ${backgroundElements.element2.size} ${backgroundElements.element2.color} rounded-full mix-blend-multiply filter blur-xl opacity-30`}
          animate={{
            x: backgroundElements.element2.animation.x,
            y: backgroundElements.element2.animation.y,
          }}
          transition={{
            duration: backgroundElements.element2.animation.duration,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.p 
            className="text-secondary-300 font-semibold text-sm sm:text-lg uppercase tracking-wider mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {title.main} <br />
            <span className="bg-gradient-to-r from-secondary-300 to-accent-200 bg-clip-text text-transparent">
              {title.highlight}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {description}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {buttons.map((button) => (
              <Link key={button.id} to={button.link} className="w-full sm:w-auto max-w-sm sm:max-w-none">
                <GradientButton 
                  size={button.size} 
                  variant={button.variant} 
                  className="w-full sm:w-auto flex items-center justify-center gap-3 text-base sm:text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 py-3 sm:py-4"
                >
                  {button.icon}
                  {button.text}
                </GradientButton>
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Stats Section Component
export const StatsSection = ({ data }) => {
  return (
    <ModernSection className="bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {data.map((stat) => (
          <StatCounter 
            key={stat.id}
            number={stat.number} 
            label={stat.label} 
            suffix={stat.suffix} 
          />
        ))}
      </div>
    </ModernSection>
  );
};

// Features/Why Choose Us Section Component
export const FeaturesSection = ({ data, headerData }) => {
  return (
    <ModernSection gradient={true}>
      <SectionHeader
        subtitle={headerData.subtitle}
        title={headerData.title}
        description={headerData.description}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {data.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="h-full text-center hover:shadow-xl transition-shadow duration-300 p-4 sm:p-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-700 mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-dark-500 leading-relaxed">{feature.description}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </ModernSection>
  );
};

// FAQ Section Component
export const FaqSection = ({ data, headerData }) => {
  return (
    <ModernSection className="bg-white">
      <SectionHeader
        subtitle={headerData.subtitle}
        title={headerData.title}
        description={headerData.description}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-0">
        <ModernAccordion items={data.map(faq => ({
          question: faq.question,
          answer: faq.answer
        }))} />
      </div>
    </ModernSection>
  );
};

// CTA Section Component
export const CtaSection = ({ data }) => {
  const { title, description, buttons, backgroundElements } = data;

  return (
    <ModernSection className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white">
      <div className="text-center relative overflow-hidden px-4">
        <motion.div
          className={`absolute ${backgroundElements.element1.position} ${backgroundElements.element1.size} ${backgroundElements.element1.color} rounded-full ${backgroundElements.element1.opacity}`}
          animate={{ rotate: backgroundElements.element1.animation.rotate }}
          transition={{ 
            duration: backgroundElements.element1.animation.duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.div
          className={`absolute ${backgroundElements.element2.position} ${backgroundElements.element2.size} ${backgroundElements.element2.color} rounded-full ${backgroundElements.element2.opacity}`}
          animate={{ rotate: backgroundElements.element2.animation.rotate }}
          transition={{ 
            duration: backgroundElements.element2.animation.duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        
        <div className="relative z-10">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 opacity-90 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {description}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-lg sm:max-w-none mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {buttons.map((button) => (
              <Link key={button.id} to={button.link} className="w-full sm:w-auto">
                <GradientButton 
                  size="xl" 
                  variant={button.variant} 
                  className={button.className}
                >
                  {button.icon}
                  {button.text}
                </GradientButton>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </ModernSection>
  );
};