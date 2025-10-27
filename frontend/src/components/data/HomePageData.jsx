/* 
 * TODO - BACKEND DEVELOPER:
 * Replace all static data in this file with API calls to fetch dynamic content
 * 
 * Required API endpoints:
 * 1. GET /api/homepage/hero - Fetch hero section data (title, subtitle, description, buttons)
 * 2. GET /api/homepage/stats - Fetch platform statistics (students, instructors, courses, success rate)
 * 3. GET /api/homepage/features - Fetch platform features/benefits
 * 4. GET /api/homepage/faq - Fetch frequently asked questions
 * 5. GET /api/homepage/cta - Fetch call-to-action section data
 * 6. GET /api/homepage/config - Fetch page configuration (which sections to show/hide)
 * 
 * Data structure should match the current format for seamless integration
 * Consider implementing caching for better performance
 */

import { 
  FaRocket, 
  FaTrophy, 
  FaCertificate,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaMobile,
  FaGlobe,
  FaPlayCircle,
  FaCheckCircle,
  FaStar,
  FaRobot, 
  FaChartBar, 
  FaCode, 
  FaDatabase, 
  FaShieldAlt, 
  FaTools,
  FaBrain,
  FaLaptopCode,
  FaUserTie,
  FaBookOpen,
  FaHandshake
} from 'react-icons/fa';

import { 
  School as SchoolIcon,
  Psychology as PsychologyIcon,
  Cloud as CloudIcon,
  Rocket as RocketIcon,
  EmojiEvents as TrophyIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  Analytics as AnalyticsIcon,
  Group as GroupIcon,
  Quiz as QuizIcon,
  Assignment as AssignmentIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';

// Hero Section Data
export const heroSectionData = {
  subtitle: "Transform Your Future",
  title: {
    main: "Conquer Skills That",
    highlight: "Matter"
  },
  description: "Join the next generation of learners with our cutting-edge curriculum, expert mentorship, and hands-on projects that prepare you for the jobs of tomorrow.",
  buttons: [
    {
      id: 1,
      text: "Start Learning Today",
      icon: <FaRocket className="text-lg sm:text-xl" />,
      link: "/courses",
      variant: "primary",
      size: "xl"
    },
    {
      id: 2,
      text: "Learn More",
      icon: <FaBookOpen className="text-lg sm:text-2xl" />,
      link: "/about",
      variant: "solid",
      size: "xl"
    }
  ],
  backgroundElements: {
    element1: {
      position: "top-10 sm:top-20 left-5 sm:left-20",
      size: "w-32 sm:w-72 h-32 sm:h-72",
      color: "bg-secondary-500",
      animation: {
        x: [0, 50, 0],
        y: [0, -50, 0],
        duration: 20
      }
    },
    element2: {
      position: "top-20 sm:top-40 right-5 sm:right-20",
      size: "w-24 sm:w-72 h-24 sm:h-72",
      color: "bg-accent-500",
      animation: {
        x: [0, -50, 0],
        y: [0, 50, 0],
        duration: 25
      }
    }
  }
};

// Stats Section Data
export const statsData = [
  {
    id: 1,
    number: "50000",
    label: "Active Students",
    suffix: "+"
  },
  {
    id: 2,
    number: "200",
    label: "Expert Instructors",
    suffix: "+"
  },
  {
    id: 3,
    number: "1000",
    label: "Courses Available",
    suffix: "+"
  },
  {
    id: 4,
    number: "95",
    label: "Success Rate",
    suffix: "%"
  }
];

// Section Headers Data
export const sectionHeadersData = {
  courses: {
    subtitle: "Popular Courses",
    title: "Trending Skills",
    description: "Master the most in-demand skills with our expertly crafted courses designed by industry professionals."
  },
  updates: {
    subtitle: "Latest Updates",
    title: "What's New",
    description: "Stay updated with the latest course launches, student achievements, and platform improvements."
  },
  features: {
    subtitle: "Why Choose Us",
    title: "Why ConquerE-Learning?",
    description: "Discover what makes us the leading choice for professional skill development and career transformation."
  },
  faq: {
    subtitle: "Help Center",
    title: "Frequently Asked Questions",
    description: "Find answers to common questions about our courses, platform, and learning experience."
  }
};

// Features/Why Choose Us Section Data
export const featuresData = [
  {
    id: 1,
    icon: <FaChartLine className="text-3xl sm:text-4xl text-primary-600" />,
    title: "Personalized Learning Paths",
    description: "AI-powered recommendations tailored to your learning style, career goals, and industry preferences.",
    bgColor: "bg-secondary-100"
  },
  {
    id: 2,
    icon: <FaUserTie className="text-3xl sm:text-4xl text-secondary-600" />,
    title: "Expert Mentorship",
    description: "1-on-1 guidance from industry professionals with years of real-world experience.",
    bgColor: "bg-accent-100"
  },
  {
    id: 3,
    icon: <FaRocket className="text-3xl sm:text-4xl text-accent-600" />,
    title: "Real Industry Projects",
    description: "Work on actual projects used by top companies to build your portfolio.",
    bgColor: "bg-primary-50"
  },
  {
    id: 4,
    icon: <TrophyIcon className="text-3xl sm:text-4xl text-secondary-500" />,
    title: "Job Placement Guarantee",
    description: "95% job placement rate with our extensive network of hiring partners.",
    bgColor: "bg-secondary-100"
  },
  {
    id: 5,
    icon: <FaMobile className="text-3xl sm:text-4xl text-accent-700" />,
    title: "Mobile-First Learning",
    description: "Learn anywhere, anytime with our responsive platform and offline capabilities.",
    bgColor: "bg-accent-50"
  },
  {
    id: 6,
    icon: <FaGlobe className="text-3xl sm:text-4xl text-primary-700" />,
    title: "Global Community",
    description: "Connect with learners worldwide and build your professional network.",
    bgColor: "bg-primary-50"
  }
];

// FAQ Section Data
export const faqData = [
  {
    id: 1,
    question: "What makes ConquerE-Learning different from other platforms?",
    answer: "We offer personalized learning paths, 1-on-1 mentorship, real industry projects, and guaranteed job placement assistance. Our curriculum is designed by industry experts and updated regularly."
  },
  {
    id: 2,
    question: "How does the LMS work for students?",
    answer: "Our LMS provides 24/7 access to courses, interactive coding labs, progress tracking, peer collaboration tools, and direct communication with instructors. Everything is mobile-friendly and works offline."
  },
  {
    id: 3,
    question: "What kind of certificates do you provide?",
    answer: "We provide industry-recognized certificates upon course completion, verified badges for each module, and career portfolio assistance. Our certificates are accepted by top tech companies globally."
  },
  {
    id: 4,
    question: "Do you offer job placement assistance?",
    answer: "Yes! We provide resume reviews, interview preparation, portfolio development, and direct connections with our hiring partners. 95% of our graduates find jobs within 6 months."
  }
];

// CTA Section Data
export const ctaSectionData = {
  title: "Ready to Transform Your Career?",
  description: "Join over 50,000 students who are already building their future with ConquerE-Learning",
  buttons: [
    {
      id: 1,
      text: "Start Your Journey",
      icon: <FaPlayCircle className="text-xl sm:text-2xl" />,
      link: "/courses",
      className: "w-full sm:w-auto bg-white text-primary-600 hover:bg-secondary-100 flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl py-3 sm:py-4 px-6 sm:px-8"
    },
    {
      id: 2,
      text: "Talk to an Advisor",
      icon: <FaHandshake className="text-xl sm:text-2xl" />,
      link: "/contact",
      variant: "solid",
      className: "w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold transform hover:scale-105 transition-all duration-300 rounded-xl py-3 sm:py-4 px-6 sm:px-8"
    }
  ],
  backgroundElements: {
    element1: {
      position: "top-4 sm:top-10 left-4 sm:left-10",
      size: "w-16 h-16 sm:w-32 sm:h-32",
      color: "bg-white",
      opacity: "opacity-10",
      animation: {
        rotate: 360,
        duration: 20
      }
    },
    element2: {
      position: "bottom-4 sm:bottom-10 right-4 sm:right-10",
      size: "w-12 h-12 sm:w-24 sm:h-24",
      color: "bg-white",
      opacity: "opacity-10",
      animation: {
        rotate: -360,
        duration: 15
      }
    }
  }
};

// Page Configuration
export const pageConfig = {
  backgroundClass: "bg-secondary-100",
  sections: {
    hero: {
      enabled: true,
      className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-violet-600 to-accent-800"
    },
    stats: {
      enabled: true,
      className: "bg-white"
    },
    courses: {
      enabled: true,
      gradient: true
    },
    updates: {
      enabled: true,
      className: "bg-white"
    },
    features: {
      enabled: true,
      gradient: true
    },
    faq: {
      enabled: true,
      className: "bg-white"
    },
    cta: {
      enabled: true,
      className: "bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white"
    }
  }
};

// Utility functions
export const getHeroData = () => heroSectionData;
export const getStatsData = () => statsData;
export const getFeaturesData = () => featuresData;
export const getFaqData = () => faqData;
export const getCtaData = () => ctaSectionData;
export const getSectionHeaders = () => sectionHeadersData;
export const getPageConfig = () => pageConfig;

// API simulation functions (for future backend integration)
export const fetchHomePageData = async () => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        hero: heroSectionData,
        stats: statsData,
        features: featuresData,
        faq: faqData,
        cta: ctaSectionData,
        sectionHeaders: sectionHeadersData,
        config: pageConfig
      });
    }, 100);
  });
};

export const updateHomePageData = async (section, data) => {
  // Simulate API call for updating data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, section, data });
    }, 200);
  });
};