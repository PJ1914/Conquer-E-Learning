import { useState } from 'react';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'DevOps', 'AI/ML'];

  const courses = [
    {
      id: 1,
      title: 'Full Stack Web Development with MERN',
      category: 'Web Development',
      instructor: 'John Doe',
      price: 2999,
      duration: '12 weeks',
      level: 'Intermediate',
      rating: 4.8,
      students: 1250,
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=MERN+Stack',
      description: 'Master MongoDB, Express.js, React, and Node.js to build modern web applications.'
    },
    {
      id: 2,
      title: 'React Native Mobile App Development',
      category: 'Mobile Development',
      instructor: 'Jane Smith',
      price: 3499,
      duration: '10 weeks',
      level: 'Intermediate',
      rating: 4.7,
      students: 890,
      image: 'https://via.placeholder.com/400x250/22C55E/FFFFFF?text=React+Native',
      description: 'Build cross-platform mobile apps using React Native and modern development practices.'
    },
    {
      id: 3,
      title: 'Python for Data Science & Machine Learning',
      category: 'Data Science',
      instructor: 'Dr. Mike Johnson',
      price: 4999,
      duration: '16 weeks',
      level: 'Beginner',
      rating: 4.9,
      students: 2100,
      image: 'https://via.placeholder.com/400x250/8B5CF6/FFFFFF?text=Python+ML',
      description: 'Learn Python, pandas, numpy, scikit-learn, and build real-world ML projects.'
    },
    {
      id: 4,
      title: 'DevOps with Docker & Kubernetes',
      category: 'DevOps',
      instructor: 'Sarah Wilson',
      price: 3999,
      duration: '8 weeks',
      level: 'Advanced',
      rating: 4.6,
      students: 670,
      image: 'https://via.placeholder.com/400x250/EF4444/FFFFFF?text=DevOps',
      description: 'Master containerization, orchestration, and modern DevOps practices.'
    },
    {
      id: 5,
      title: 'AI & Deep Learning Fundamentals',
      category: 'AI/ML',
      instructor: 'Dr. Alex Chen',
      price: 5999,
      duration: '20 weeks',
      level: 'Advanced',
      rating: 4.8,
      students: 1400,
      image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=AI+Deep+Learning',
      description: 'Dive deep into neural networks, TensorFlow, and cutting-edge AI technologies.'
    },
    {
      id: 6,
      title: 'JavaScript Mastery: From Basics to Advanced',
      category: 'Web Development',
      instructor: 'Tom Brown',
      price: 1999,
      duration: '6 weeks',
      level: 'Beginner',
      rating: 4.5,
      students: 3200,
      image: 'https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=JavaScript',
      description: 'Complete JavaScript course covering ES6+, async programming, and modern frameworks.'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0v15z"/>
        </svg>
      );
    }

    return stars;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore Our Courses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover industry-relevant courses designed to help you master the skills needed for your dream career.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-80 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {course.category}
                    </span>
                    <span className="text-sm text-gray-500">{course.level}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex items-center mr-2">
                      {renderStars(course.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      {course.rating} ({course.students} students)
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600">By {course.instructor}</span>
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{course.price.toLocaleString()}
                    </span>
                    <Link
                      to={`/courses/${course.id}`}
                      className="btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;