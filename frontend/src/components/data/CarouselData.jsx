import { 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker, 
  FaCode, 
  FaChartBar, 
  FaTools,
  FaBrain,
  FaLaptopCode
} from 'react-icons/fa';

import { 
  Psychology as PsychologyIcon,
  Cloud as CloudIcon,
  Rocket as RocketIcon,
  EmojiEvents as TrophyIcon,
  Analytics as AnalyticsIcon
} from '@mui/icons-material';

/* 
 * TODO - BACKEND DEVELOPER:
 * Replace this static data with API calls to fetch dynamic course data
 * 
 * Required API endpoints:
 * 1. GET /api/courses - Fetch all courses with pagination
 * 2. GET /api/courses/category/:category - Fetch courses by category
 * 3. GET /api/courses/featured - Fetch featured/trending courses
 * 4. GET /api/updates - Fetch latest platform updates/news
 * 5. GET /api/updates/recent/:limit - Fetch recent updates with limit
 * 
 * Expected data structure should match the current coursesData and updatesData format
 * Include fields: id, title, description, price, duration, level, rating, students, etc.
 */

// Courses Data Component
// To Do : Make the Backend API to fetch this data dynamically
export const coursesData = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    description: "Master React, Node.js, and modern web technologies",
    duration: "6 months",
    level: "Beginner to Advanced",
    students: "15,420",
    rating: "4.9",
    icon: <FaLaptopCode className="text-6xl" />,
    price: "$299",
    techIcons: [<FaReact key="react" />, <FaNodeJs key="node" />, <FaCode key="code" />]
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Deep dive into AI, ML algorithms, and neural networks",
    duration: "8 months",
    level: "Intermediate",
    students: "8,230",
    rating: "4.8",
    icon: <FaBrain className="text-6xl" />,
    price: "$399",
    techIcons: [<PsychologyIcon key="ai" />, <AnalyticsIcon key="analytics" />, <FaChartBar key="chart" />]
  },
  {
    id: 3,
    title: "Cloud Computing & DevOps",
    description: "AWS, Docker, Kubernetes, and modern deployment",
    duration: "5 months",
    level: "Intermediate",
    students: "12,100",
    rating: "4.9",
    icon: <CloudIcon className="text-6xl" />,
    price: "$349",
    techIcons: [<FaAws key="aws" />, <FaDocker key="docker" />, <FaTools key="tools" />]
  },
  {
    id: 4,
    title: "Data Science & Analytics",
    description: "Python, R, SQL, and advanced data visualization techniques",
    duration: "7 months",
    level: "Intermediate to Advanced",
    students: "9,850",
    rating: "4.7",
    icon: <FaChartBar className="text-6xl" />,
    price: "$379",
    techIcons: [<AnalyticsIcon key="analytics" />, <FaCode key="python" />, <FaChartBar key="stats" />]
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "React Native, Flutter, and native iOS/Android development",
    duration: "6 months",
    level: "Beginner to Advanced",
    students: "11,200",
    rating: "4.8",
    icon: <FaCode className="text-6xl" />,
    price: "$329",
    techIcons: [<FaReact key="react-native" />, <FaCode key="flutter" />, <FaTools key="mobile" />]
  }
];

// Updates Data Component
export const updatesData = [
  {
    id: 1,
    title: "New AI Course Launch",
    date: "Oct 27, 2025",
    description: "Introducing our comprehensive Artificial Intelligence masterclass with hands-on projects",
    icon: <RocketIcon className="text-5xl" />,
    type: "Course Launch"
  },
  {
    id: 2,
    title: "Student Success Story",
    date: "Oct 25, 2025", 
    description: "Maria landed a senior developer role at Google after completing our Full-Stack program",
    icon: <TrophyIcon className="text-5xl" />,
    type: "Success Story"
  },
  {
    id: 3,
    title: "Platform Update v2.5",
    date: "Oct 22, 2025",
    description: "New interactive coding labs, enhanced video streaming, and mobile app improvements",
    icon: <FaTools className="text-5xl" />,
    type: "Platform Update"
  },
  {
    id: 4,
    title: "Industry Partnership",
    date: "Oct 20, 2025",
    description: "New partnership with Microsoft for Azure certification programs and internships",
    icon: <CloudIcon className="text-5xl" />,
    type: "Partnership"
  },
  {
    id: 5,
    title: "Scholarship Program",
    date: "Oct 18, 2025",
    description: "Launching need-based scholarships for underrepresented communities in tech",
    icon: <TrophyIcon className="text-5xl" />,
    type: "Announcement"
  }
];

// Utility function to get courses by category
export const getCoursesByCategory = (category) => {
  const categoryMap = {
    'web': [1, 5], // Full-Stack and Mobile
    'ai': [2, 4], // AI/ML and Data Science
    'cloud': [3], // Cloud/DevOps
    'all': [1, 2, 3, 4, 5]
  };
  
  const courseIds = categoryMap[category] || categoryMap['all'];
  return coursesData.filter(course => courseIds.includes(course.id));
};

// Utility function to get recent updates
export const getRecentUpdates = (limit = 3) => {
  return updatesData.slice(0, limit);
};

// Utility function to get updates by type
export const getUpdatesByType = (type) => {
  return updatesData.filter(update => update.type.toLowerCase() === type.toLowerCase());
};