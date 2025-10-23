import { 
  FadeIn, 
  SlideIn, 
  StaggerContainer, 
  StaggerItem, 
  HoverScale, 
  ScrollReveal 
} from '../components/ui/AnimationWrapper';

const AboutUsPage = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Head of Curriculum',
      image: 'https://via.placeholder.com/200x200/22C55E/FFFFFF?text=SJ',
      bio: 'Former Google engineer with expertise in designing comprehensive tech education programs.'
    },
    {
      name: 'Michael Chen',
      role: 'Senior Instructor',
      image: 'https://via.placeholder.com/200x200/8B5CF6/FFFFFF?text=MC',
      bio: 'Full-stack developer and mentor who has helped hundreds of students transition into tech careers.'
    }
  ];

  const values = [
    {
      title: 'Excellence in Education',
      description: 'We are committed to providing the highest quality education with industry-relevant curriculum.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: 'Student-Centric Approach',
      description: 'Every decision we make is focused on improving the learning experience and outcomes for our students.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Innovation & Technology',
      description: 'We embrace cutting-edge technology to create engaging and effective learning experiences.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Community & Support',
      description: 'We foster a supportive learning community where students and mentors collaborate and grow together.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeIn direction="down" delay={0.2}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Conquer E-Learning
              </h1>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We are on a mission to democratize quality technology education and empower 
                the next generation of innovators and problem solvers.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideIn direction="left" delay={0.3}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="prose text-gray-600 space-y-4">
                  <p className="text-lg">
                    Conquer E-Learning emerged from a simple yet powerful vision: 
                    to bridge the gap between traditional education and the rapidly evolving technology industry.
                  </p>
                  <p>
                    Having witnessed countless talented individuals struggle to find quality, practical 
                    technology education, we set out to create a platform that combines expert instruction, 
                    hands-on learning, and real-world application.
                  </p>
                  <p>
                    Today, we are proud to serve thousands of students worldwide, helping them transform 
                    their careers and achieve their professional goals through comprehensive, industry-relevant 
                    courses and personalized mentorship. We are proudly supported by CodeTapasya as our 
                    IT service provider, ensuring robust technical infrastructure and innovative solutions.
                  </p>
                </div>
              </div>
            </SlideIn>
            <SlideIn direction="right" delay={0.5}>
              <div className="lg:order-first">
                <img 
                  src="https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Our+Story" 
                  alt="Our Story" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape the learning experience we provide.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8" staggerDelay={0.2}>
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <HoverScale className="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 h-full">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                        {value.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate educators and industry experts dedicated to your success.
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.2}>
            {team.map((member, index) => (
              <StaggerItem key={index}>
                <HoverScale className="text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="mx-auto w-32 h-32 rounded-full mb-6 shadow-lg"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {member.bio}
                  </p>
                </HoverScale>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-primary-100 max-w-4xl mx-auto mb-8">
            To empower individuals with the skills, knowledge, and confidence needed to thrive 
            in the technology industry through innovative, accessible, and practical education.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100">Lives Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Job Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-100">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;