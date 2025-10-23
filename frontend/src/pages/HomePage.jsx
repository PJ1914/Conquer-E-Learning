import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-600 to-dark-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Conquer Your Future with
              <span className="block text-secondary-300 mt-2">E-Learning Excellence</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-accent-200 leading-relaxed">
              Join thousands of students who have transformed their careers with our comprehensive, 
              industry-leading technology courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
              <Link to="/courses" className="btn-secondary text-lg px-8 py-3 inline-block text-center">
                Explore Courses
              </Link>
              <Link to="/login" className="btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary-600 inline-block text-center">
                Access LMS
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-600 mb-4">
              Why Choose Conquer E-Learning?
            </h2>
            <p className="text-lg lg:text-xl text-accent-600 max-w-3xl mx-auto">
              We provide a comprehensive learning experience with cutting-edge technology and expert instruction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="feature-box hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-600 mb-3">Expert-Led Courses</h3>
              <p className="text-accent-600">
                Learn from industry professionals with years of real-world experience in cutting-edge technologies.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="feature-box hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-600 mb-3">Hands-On Learning</h3>
              <p className="text-accent-600">
                Practice with real projects, online compiler, and interactive assessments that prepare you for the job market.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="feature-box hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent-200 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-dark-600 mb-3">Mentorship Support</h3>
              <p className="text-accent-600">
                Get personalized guidance from assigned mentors who help you navigate your learning journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-sm lg:text-base text-accent-600">Students Enrolled</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-2">50+</div>
              <div className="text-sm lg:text-base text-accent-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-sm lg:text-base text-accent-600">Courses Available</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-secondary-500 mb-2">95%</div>
              <div className="text-sm lg:text-base text-accent-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
            Join our community of learners and take the first step towards mastering the technologies of tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <Link to="/courses" className="btn-primary text-lg px-8 py-3 bg-white text-secondary-600 hover:bg-accent-100 inline-block text-center">
              Browse Courses
            </Link>
            <Link to="/contact" className="btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-secondary-600 inline-block text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;