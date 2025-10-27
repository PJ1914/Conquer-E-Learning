/* 
 * TODO - BACKEND DEVELOPER:
 * Implement API calls to replace static data with dynamic content from the backend
 * 
 * Priority tasks:
 * 1. Create API service layer for data fetching
 * 2. Add loading states for all sections while data is being fetched
 * 3. Implement error handling and fallback content
 * 4. Add user authentication to personalize content
 * 5. Implement caching strategy for better performance
 * 6. Add analytics tracking for user interactions
 * 
 * Consider using React Query or SWR for efficient data fetching and caching
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ModernSection, 
  SectionHeader 
} from '../components/ui/ModernComponents';

// Import reusable carousel components
import { CourseCarousel, UpdatesCarousel } from '../components/ui/CarouselComponents';

// Import reusable section components
import { 
  HeroSection, 
  StatsSection, 
  FeaturesSection, 
  FaqSection, 
  CtaSection 
} from '../components/sections/HomeSections';

// Import all dynamic data
import { coursesData, getRecentUpdates } from '../components/data/CarouselData';
import { 
  getHeroData,
  getStatsData, 
  getFeaturesData, 
  getFaqData, 
  getCtaData, 
  getSectionHeaders,
  getPageConfig 
} from '../components/data/HomePageData';

const HomePage = () => {
  // Get all dynamic data
  const heroData = getHeroData();
  const statsData = getStatsData();
  const featuresData = getFeaturesData();
  const faqData = getFaqData();
  const ctaData = getCtaData();
  const sectionHeaders = getSectionHeaders();
  const pageConfig = getPageConfig();
  
  // Carousel data
  const courses = coursesData;
  const updates = getRecentUpdates(3);

  return (
    <div className={pageConfig.backgroundClass}>
      {/* Hero Section */}
      {pageConfig.sections.hero.enabled && (
        <HeroSection data={heroData} />
      )}

      {/* Stats Section */}
      {pageConfig.sections.stats.enabled && (
        <StatsSection data={statsData} />
      )}

      {/* Courses Carousel Section */}
      {pageConfig.sections.courses.enabled && (
        <ModernSection gradient={pageConfig.sections.courses.gradient}>
          <SectionHeader
            subtitle={sectionHeaders.courses.subtitle}
            title={sectionHeaders.courses.title}
            description={sectionHeaders.courses.description}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <CourseCarousel 
              courses={courses}
              autoPlay={true}
              interval={4000}
            />
          </div>
        </ModernSection>
      )}

      {/* Updates Carousel Section */}
      {pageConfig.sections.updates.enabled && (
        <ModernSection className={pageConfig.sections.updates.className}>
          <SectionHeader
            subtitle={sectionHeaders.updates.subtitle}
            title={sectionHeaders.updates.title}
            description={sectionHeaders.updates.description}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-0">
            <UpdatesCarousel 
              updates={updates}
              autoPlay={true}
              interval={4000}
            />
          </div>
        </ModernSection>
      )}

      {/* Features Section */}
      {pageConfig.sections.features.enabled && (
        <FeaturesSection 
          data={featuresData} 
          headerData={sectionHeaders.features} 
        />
      )}

      {/* FAQ Section */}
      {pageConfig.sections.faq.enabled && (
        <FaqSection 
          data={faqData} 
          headerData={sectionHeaders.faq} 
        />
      )}

      {/* CTA Section */}
      {pageConfig.sections.cta.enabled && (
        <CtaSection data={ctaData} />
      )}
    </div>
  );
};

export default HomePage;