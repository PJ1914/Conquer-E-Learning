import { useState } from 'react';

const CareersPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Education', 'Marketing', 'Operations', 'Design'];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Mumbai, India / Remote',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Join our engineering team to build scalable e-learning platforms using MERN stack technologies.',
      requirements: [
        'Strong experience with React.js, Node.js, and MongoDB',
        'Knowledge of cloud platforms (AWS, Azure)',
        'Experience with microservices architecture',
        'Understanding of educational technology is a plus'
      ]
    },
    {
      id: 2,
      title: 'Senior Curriculum Designer',
      department: 'Education',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Design and develop comprehensive technology curricula that prepare students for successful careers.',
      requirements: [
        'Masters in Education or related field',
        'Experience in curriculum development',
        'Knowledge of modern programming languages',
        'Strong understanding of learning methodologies'
      ]
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Mumbai, India / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Drive our digital marketing efforts to reach and engage prospective students worldwide.',
      requirements: [
        'Experience with Google Ads, Facebook Ads',
        'SEO and content marketing expertise',
        'Analytics and data-driven decision making',
        'Experience in education sector preferred'
      ]
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Mumbai, India / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Create intuitive and engaging user experiences for our learning management system.',
      requirements: [
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio of web and mobile designs',
        'Experience with design systems',
        'Understanding of educational user flows'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Mumbai, India / Remote',
      type: 'Full-time',
      experience: '3-6 years',
      description: 'Build and maintain robust infrastructure to support our growing platform.',
      requirements: [
        'Experience with Docker, Kubernetes',
        'Knowledge of CI/CD pipelines',
        'Cloud infrastructure management',
        'Monitoring and logging systems'
      ]
    },
    {
      id: 6,
      title: 'Student Success Manager',
      department: 'Operations',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Ensure our students achieve their learning goals and have an exceptional experience.',
      requirements: [
        'Excellent communication skills',
        'Experience in customer success or education',
        'Data analysis and reporting skills',
        'Passion for helping students succeed'
      ]
    }
  ];

  const filteredJobs = jobOpenings.filter(job => 
    selectedDepartment === 'All' || job.department === selectedDepartment
  );

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Remote Flexibility',
      description: 'Work from anywhere with flexible hours and hybrid options',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and professional development budget',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive healthcare, mental health support, and wellness programs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: 'Innovation Time',
      description: '20% time for personal projects and innovation initiatives',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities, conferences, and company retreats',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-secondary-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-600 to-dark-600 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Join Our Mission to
              <span className="block text-secondary-300 mt-2">Transform Education</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-accent-200 leading-relaxed">
              Be part of a team that's shaping the future of learning. Build innovative solutions 
              that empower millions of students worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
              <a href="#openings" className="btn-secondary text-lg px-8 py-3 inline-block text-center">
                View Open Positions
              </a>
              <a href="#culture" className="btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary-600 inline-block text-center">
                Learn About Our Culture
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section id="culture" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-600 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg lg:text-xl text-accent-600 max-w-3xl mx-auto">
              Join a company that values innovation, growth, and making a real impact on education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-box hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-dark-600 mb-3">{benefit.title}</h3>
                <p className="text-accent-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-16 lg:py-20 bg-secondary-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-600 mb-4">
              Open Positions
            </h2>
            <p className="text-lg lg:text-xl text-accent-600 max-w-3xl mx-auto">
              Discover exciting opportunities to grow your career while making a difference in education.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedDepartment === dept
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-accent-600 hover:bg-accent-100'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-white rounded-xl shadow-sm border border-accent-200 p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-dark-600 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-accent-600">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V4m8 2v12a2 2 0 002 2H6a2 2 0 002-2V6" />
                        </svg>
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {job.type} • {job.experience}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <button className="btn-primary w-full lg:w-auto">
                      Apply Now
                    </button>
                  </div>
                </div>
                
                <p className="text-accent-600 mb-4">{job.description}</p>
                
                <div>
                  <h4 className="font-semibold text-dark-600 mb-2">Key Requirements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-accent-600">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-accent-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H8a2 2 0 00-2-2V4m8 2v12a2 2 0 002 2H6a2 2 0 002-2V6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-dark-600 mb-2">No positions found</h3>
              <p className="text-accent-600">Try selecting a different department or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-600 mb-4">
              Our Hiring Process
            </h2>
            <p className="text-lg lg:text-xl text-accent-600 max-w-3xl mx-auto">
              We believe in a transparent and fair hiring process that helps us find the best fit for both you and our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-dark-600 mb-2">Application</h3>
              <p className="text-accent-600">Submit your application with resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-dark-600 mb-2">Screening</h3>
              <p className="text-accent-600">Initial phone/video call to discuss your background</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-dark-600 mb-2">Interview</h3>
              <p className="text-accent-600">Technical and cultural fit interviews with the team</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-dark-600 mb-2">Decision</h3>
              <p className="text-accent-600">Final decision and offer discussion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg lg:text-xl mb-8 text-secondary-100 max-w-2xl mx-auto">
            Don't see a position that fits? We're always looking for talented individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto sm:max-w-none">
            <a href="mailto:careers@conquerelearning.com" className="btn-primary text-lg px-8 py-3 bg-white text-secondary-600 hover:bg-accent-100 inline-block text-center">
              Send Your Resume
            </a>
            <a href="#openings" className="btn-outline text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-secondary-600 inline-block text-center">
              View All Positions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;