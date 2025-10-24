import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ModernCarousel, 
  ModernSection, 
  GlassCard, 
  GradientButton, 
  StatCounter, 
  ModernAccordion, 
  SectionHeader 
} from '../components/ui/ModernComponents';

// React Icons
import { 
  FaReact, 
  FaNodeJs, 
  FaAws, 
  FaDocker, 
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
  FaStar
} from 'react-icons/fa';

import { 
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

// Material UI Icons
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

const HomePage = () => {
  // Sample data for courses carousel
  const courses = [
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
    }
  ];

  // Sample data for updates carousel
  const updates = [
    {
      id: 1,
      title: "New AI Course Launch",
      date: "Oct 20, 2025",
      description: "Introducing our comprehensive Artificial Intelligence masterclass",
      icon: <RocketIcon className="text-5xl" />,
      type: "Course Launch"
    },
    {
      id: 2,
      title: "Student Success Story",
      date: "Oct 18, 2025", 
      description: "Maria landed a senior developer role at Google after completing our program",
      icon: <TrophyIcon className="text-5xl" />,
      type: "Success Story"
    },
    {
      id: 3,
      title: "Platform Update v2.5",
      date: "Oct 15, 2025",
      description: "New interactive coding labs and enhanced video streaming",
      icon: <FaTools className="text-5xl" />,
      type: "Platform Update"
    }
  ];

  return (
    <div className="bg-secondary-100">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-violet-600 to-accent-800">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.p 
              className="text-secondary-300 font-semibold text-lg uppercase tracking-wider mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Transform Your Future
            </motion.p>
            
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Conquer Skills That <br />
              <span className="bg-gradient-to-r from-secondary-300 to-accent-200 bg-clip-text text-transparent">
                Matter
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-secondary-200 mb-12 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Join the next generation of learners with our cutting-edge curriculum, expert mentorship, 
              and hands-on projects that prepare you for the jobs of tomorrow.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link to="/courses" className="w-full sm:w-auto">
                <GradientButton size="xl" variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-3 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <FaRocket className="text-xl" />
                  Start Learning Today
                </GradientButton>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <GradientButton size="xl" variant="outline" className="w-full sm:w-auto flex items-center justify-center gap-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300">
                  <FaBookOpen className="text-xl" />
                  Learn More
                </GradientButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <ModernSection className="bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter number="50000" label="Active Students" suffix="+" />
          <StatCounter number="200" label="Expert Instructors" suffix="+" />
          <StatCounter number="1000" label="Courses Available" suffix="+" />
          <StatCounter number="95" label="Success Rate" suffix="%" />
        </div>
      </ModernSection>

      {/* Courses Carousel Section */}
      <ModernSection gradient={true}>
        <SectionHeader
          subtitle="Popular Courses"
          title="Trending Skills"
          description="Master the most in-demand skills with our expertly crafted courses designed by industry professionals."
        />
        <div className="max-w-4xl mx-auto">
          <ModernCarousel items={courses.map(course => (
            <div key={course.id} className="relative h-96 bg-gradient-to-br from-primary-600 via-secondary-500 to-accent-600 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="mb-4 text-white">{course.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <p className="text-lg opacity-90 mb-4">{course.description}</p>
                  <div className="flex space-x-3 mb-4">
                    {course.techIcons.map((icon, index) => (
                      <div key={index} className="text-secondary-200 text-xl">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-sm opacity-75">{course.duration} • {course.level}</div>
                    <div className="text-sm opacity-75 flex items-center space-x-2">
                      <FaStar className="text-yellow-300" />
                      <span>{course.rating}</span>
                      <FaUsers className="ml-2" />
                      <span>{course.students} students</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{course.price}</div>
                    <GradientButton size="sm" className="bg-white text-primary-600 hover:bg-secondary-100">
                      Enroll Now
                    </GradientButton>
                  </div>
                </div>
              </div>
            </div>
          ))} className="h-96" />
        </div>
      </ModernSection>

      {/* Updates Carousel Section */}
      <ModernSection className="bg-white">
        <SectionHeader
          subtitle="Latest Updates"
          title="What's New"
          description="Stay updated with the latest course launches, student achievements, and platform improvements."
        />
        <div className="max-w-4xl mx-auto">
          <ModernCarousel items={updates.map(update => (
            <div key={update.id} className="relative h-80 bg-gradient-to-br from-secondary-500 via-accent-500 to-primary-700 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                <div>
                  <div className="mb-4 text-white">{update.icon}</div>
                  <div className="text-sm font-medium opacity-75 mb-2">{update.type} • {update.date}</div>
                  <h3 className="text-xl font-bold mb-3">{update.title}</h3>
                  <p className="text-base opacity-90">{update.description}</p>
                </div>
                <div className="flex justify-end">
                  <button className="text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))} className="h-80" autoPlay={true} interval={4000} />
        </div>
      </ModernSection>

      {/* Why ConquerE-Learning Section */}
      <ModernSection gradient={true}>
        <SectionHeader
          subtitle="Why Choose Us"
          title="Why ConquerE-Learning?"
          description="Discover what makes us the leading choice for professional skill development and career transformation."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaChartLine className="text-4xl text-primary-600" />,
              title: "Personalized Learning Paths",
              description: "AI-powered recommendations tailored to your learning style, career goals, and industry preferences.",
              bgColor: "bg-secondary-100"
            },
            {
              icon: <FaUserTie className="text-4xl text-secondary-600" />,
              title: "Expert Mentorship",
              description: "1-on-1 guidance from industry professionals with years of real-world experience.",
              bgColor: "bg-accent-100"
            },
            {
              icon: <FaRocket className="text-4xl text-accent-600" />,
              title: "Real Industry Projects",
              description: "Work on actual projects used by top companies to build your portfolio.",
              bgColor: "bg-primary-50"
            },
            {
              icon: <TrophyIcon className="text-4xl text-secondary-500" />,
              title: "Job Placement Guarantee",
              description: "95% job placement rate with our extensive network of hiring partners.",
              bgColor: "bg-secondary-100"
            },
            {
              icon: <FaMobile className="text-4xl text-accent-700" />,
              title: "Mobile-First Learning",
              description: "Learn anywhere, anytime with our responsive platform and offline capabilities.",
              bgColor: "bg-accent-50"
            },
            {
              icon: <FaGlobe className="text-4xl text-primary-700" />,
              title: "Global Community",
              description: "Connect with learners worldwide and build your professional network.",
              bgColor: "bg-primary-50"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-700 mb-3">{feature.title}</h3>
                <p className="text-dark-500 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </ModernSection>

      {/* FAQ Section */}
      <ModernSection className="bg-white">
        <SectionHeader
          subtitle="Help Center"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our courses, platform, and learning experience."
        />
        <div className="max-w-4xl mx-auto">
          <ModernAccordion items={[
            {
              question: "What makes ConquerE-Learning different from other platforms?",
              answer: "We offer personalized learning paths, 1-on-1 mentorship, real industry projects, and guaranteed job placement assistance. Our curriculum is designed by industry experts and updated regularly."
            },
            {
              question: "How does the LMS work for students?",
              answer: "Our LMS provides 24/7 access to courses, interactive coding labs, progress tracking, peer collaboration tools, and direct communication with instructors. Everything is mobile-friendly and works offline."
            },
            {
              question: "What kind of certificates do you provide?",
              answer: "We provide industry-recognized certificates upon course completion, verified badges for each module, and career portfolio assistance. Our certificates are accepted by top tech companies globally."
            },
            {
              question: "Do you offer job placement assistance?",
              answer: "Yes! We provide resume reviews, interview preparation, portfolio development, and direct connections with our hiring partners. 95% of our graduates find jobs within 6 months."
            }
          ]} />
        </div>
      </ModernSection>

      {/* CTA Section */}
      <ModernSection className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 text-white">
        <div className="text-center relative overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full opacity-10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Career?
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8 opacity-90"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Join over 50,000 students who are already building their future with ConquerE-Learning
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/courses" className="w-full sm:w-auto">
                <GradientButton size="xl" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-secondary-100 flex items-center justify-center gap-3 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-xl">
                  <FaPlayCircle className="text-2xl" />
                  Start Your Journey
                </GradientButton>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <GradientButton size="xl" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-600 flex items-center justify-center gap-3 text-xl font-bold transform hover:scale-105 transition-all duration-300 rounded-xl">
                  <FaHandshake className="text-2xl" />
                  Talk to an Advisor
                </GradientButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </ModernSection>
    </div>
  );
};

export default HomePage;
