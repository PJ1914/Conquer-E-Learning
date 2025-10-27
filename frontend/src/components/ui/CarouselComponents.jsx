/* 
 * TODO - BACKEND DEVELOPER:
 * Add API integration for dynamic course enrollment and user interactions
 * 
 * Required backend functionality:
 * 1. POST /api/courses/:id/enroll - Handle course enrollment when "Enroll Now" is clicked
 * 2. GET /api/user/enrollments - Check user's current enrollments for button state
 * 3. POST /api/courses/:id/wishlist - Add/remove courses from wishlist
 * 4. GET /api/courses/:id/details - Fetch detailed course information on card click
 * 5. POST /api/analytics/view - Track course card views for analytics
 * 
 * Consider adding loading states and error handling for better UX
 */

import { 
  ModernCarousel, 
  GradientButton 
} from '../ui/ModernComponents';
import { FaStar, FaUsers } from 'react-icons/fa';

// Course Carousel Component
export const CourseCarousel = ({ courses, autoPlay = true, interval = 4000, className = '' }) => {
  return (
    <ModernCarousel 
      items={courses.map(course => (
        <div key={course.id} className="relative h-96 sm:h-[420px] bg-gradient-to-br from-primary-600 via-secondary-500 to-accent-600 rounded-2xl overflow-hidden mx-2 sm:mx-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col text-white">
            {/* Top Section - Course Info */}
            <div className="flex-1">
              <div className="mb-3 sm:mb-4 text-white text-4xl sm:text-5xl">{course.icon}</div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">{course.title}</h3>
              <p className="text-sm sm:text-base opacity-90 mb-3 line-clamp-2">{course.description}</p>
              <div className="flex space-x-2 sm:space-x-3 mb-3">
                {course.techIcons.map((icon, index) => (
                  <div key={index} className="text-secondary-200 text-base sm:text-lg">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Middle Section - Course Details */}
            <div className="mb-4">
              <div className="text-xs sm:text-sm opacity-75 mb-1">{course.duration} • {course.level}</div>
              <div className="text-xs sm:text-sm opacity-75 flex items-center space-x-2">
                <FaStar className="text-yellow-300" />
                <span>{course.rating}</span>
                <FaUsers className="ml-2" />
                <span className="hidden sm:inline">{course.students} students</span>
                <span className="sm:hidden">{course.students}</span>
              </div>
            </div>
            
            {/* Bottom Section - Price and Button */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mt-auto">
              <div className="text-left">
                <div className="text-2xl sm:text-3xl font-bold">{course.price}</div>
              </div>
              <div className="w-full sm:w-auto">
                <GradientButton 
                  size="sm" 
                  className="bg-white text-primary-600 hover:bg-secondary-100 w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Enroll Now
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      ))} 
      className={`h-96 sm:h-[420px] ${className}`}
      autoPlay={autoPlay}
      interval={interval}
    />
  );
};

// Updates Carousel Component
export const UpdatesCarousel = ({ updates, autoPlay = true, interval = 4000, className = '' }) => {
  return (
    <ModernCarousel 
      items={updates.map(update => (
        <div key={update.id} className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-secondary-500 via-accent-500 to-primary-700 rounded-2xl overflow-hidden mx-2 sm:mx-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col justify-between text-white">
            <div>
              <div className="mb-3 sm:mb-4 text-white text-2xl sm:text-3xl">{update.icon}</div>
              <div className="text-xs sm:text-sm font-medium opacity-75 mb-2">{update.type} • {update.date}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 line-clamp-2">{update.title}</h3>
              <p className="text-sm sm:text-base opacity-90 line-clamp-3">{update.description}</p>
            </div>
            <div className="flex justify-end">
              <button className="text-xs sm:text-sm bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg hover:bg-white/30 transition-all">
                Read More →
              </button>
            </div>
          </div>
        </div>
      ))} 
      className={`h-64 sm:h-72 md:h-80 ${className}`}
      autoPlay={autoPlay} 
      interval={interval} 
    />
  );
};

// Generic Content Carousel Component
export const ContentCarousel = ({ 
  items, 
  renderItem, 
  autoPlay = true, 
  interval = 4000, 
  className = '',
  height = 'h-80' 
}) => {
  return (
    <ModernCarousel 
      items={items.map((item, index) => renderItem(item, index))}
      className={`${height} ${className}`}
      autoPlay={autoPlay}
      interval={interval}
    />
  );
};

// Testimonials Carousel Component (for future use)
export const TestimonialsCarousel = ({ testimonials, autoPlay = true, interval = 5000, className = '' }) => {
  return (
    <ModernCarousel 
      items={testimonials.map(testimonial => (
        <div key={testimonial.id} className="relative h-64 sm:h-80 bg-gradient-to-br from-accent-100 to-primary-100 rounded-2xl overflow-hidden mx-2 sm:mx-0">
          <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center text-center">
            <div className="mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
            </div>
            <blockquote className="text-lg sm:text-xl font-medium text-gray-800 mb-4 line-clamp-3">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-auto">
              <div className="font-bold text-primary-600">{testimonial.name}</div>
              <div className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</div>
            </div>
          </div>
        </div>
      ))} 
      className={`h-64 sm:h-80 ${className}`}
      autoPlay={autoPlay}
      interval={interval}
    />
  );
};