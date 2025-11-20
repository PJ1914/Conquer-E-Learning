import { useState } from 'react';

const ResumeMakerPage = () => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      portfolio: '',
    },
    summary: '',
    education: [
      {
        id: 1,
        degree: '',
        institution: '',
        location: '',
        startDate: '',
        endDate: '',
        gpa: '',
      },
    ],
    experience: [
      {
        id: 1,
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ],
    skills: '',
    projects: [
      {
        id: 1,
        name: '',
        description: '',
        technologies: '',
        link: '',
      },
    ],
  });

  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  const handlePersonalInfoChange = (field, value) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  const handleSummaryChange = (value) => {
    setResumeData({
      ...resumeData,
      summary: value,
    });
  };

  const handleSkillsChange = (value) => {
    setResumeData({
      ...resumeData,
      skills: value,
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        {
          id: Date.now(),
          degree: '',
          institution: '',
          location: '',
          startDate: '',
          endDate: '',
          gpa: '',
        },
      ],
    });
  };

  const removeEducation = (id) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.filter((edu) => edu.id !== id),
    });
  };

  const handleEducationChange = (id, field, value) => {
    setResumeData({
      ...resumeData,
      education: resumeData.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          id: Date.now(),
          title: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          description: '',
        },
      ],
    });
  };

  const removeExperience = (id) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((exp) => exp.id !== id),
    });
  };

  const handleExperienceChange = (id, field, value) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        {
          id: Date.now(),
          name: '',
          description: '',
          technologies: '',
          link: '',
        },
      ],
    });
  };

  const removeProject = (id) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.filter((proj) => proj.id !== id),
    });
  };

  const handleProjectChange = (id, field, value) => {
    setResumeData({
      ...resumeData,
      projects: resumeData.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and contemporary design' },
    { id: 'classic', name: 'Classic', description: 'Traditional professional layout' },
    { id: 'creative', name: 'Creative', description: 'Bold and eye-catching design' },
  ];

  return (
    <div className="bg-secondary-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-600 to-dark-600 text-white py-12 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Create Your Professional Resume
            </h1>
            <p className="text-lg sm:text-xl mb-6 text-accent-200 leading-relaxed">
              Build a stunning resume in minutes with our easy-to-use resume builder. Choose from professional templates and customize to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 print:grid-cols-1 print:gap-0">
          {/* Form Section */}
          <div className="space-y-6 print:hidden">
            {/* Template Selection */}
            <div className="bg-white rounded-xl shadow-sm border border-accent-200 p-6">
              <h2 className="text-2xl font-bold text-dark-600 mb-4">Choose Template</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-200 ${
                      selectedTemplate === template.id
                        ? 'border-primary-600 bg-primary-50'
                        : 'border-accent-200 hover:border-accent-300'
                    }`}
                  >
                    <h3 className="font-semibold text-dark-600 mb-1">{template.name}</h3>
                    <p className="text-sm text-accent-600">{template.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-white rounded-xl shadow-sm border border-accent-200 p-6">
              <h2 className="text-2xl font-bold text-dark-600 mb-4">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-dark-600 mb-1">Full Name *</label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.fullName}
                    onChange={(e) => handlePersonalInfoChange('fullName', e.target.value)}
                    className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-600 mb-1">Email *</label>
                    <input
                      type="email"
                      value={resumeData.personalInfo.email}
                      onChange={(e) => handlePersonalInfoChange('email', e.target.value)}
                      className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-600 mb-1">Phone *</label>
                    <input
                      type="tel"
                      value={resumeData.personalInfo.phone}
                      onChange={(e) => handlePersonalInfoChange('phone', e.target.value)}
                      className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-600 mb-1">Location</label>
                  <input
                    type="text"
                    value={resumeData.personalInfo.location}
                    onChange={(e) => handlePersonalInfoChange('location', e.target.value)}
                    className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="City, State"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-600 mb-1">LinkedIn</label>
                    <input
                      type="url"
                      value={resumeData.personalInfo.linkedin}
                      onChange={(e) => handlePersonalInfoChange('linkedin', e.target.value)}
                      className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-600 mb-1">Portfolio</label>
                    <input
                      type="url"
                      value={resumeData.personalInfo.portfolio}
                      onChange={(e) => handlePersonalInfoChange('portfolio', e.target.value)}
                      className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="yourwebsite.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-accent-200 p-6">
              <h2 className="text-2xl font-bold text-dark-600 mb-4">Professional Summary</h2>
              <textarea
                value={resumeData.summary}
                onChange={(e) => handleSummaryChange(e.target.value)}
                rows="4"
                className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Write a brief summary about your professional background and career objectives..."
              />
            </div>

            {/* Education */}
            <div className="bg-white rounded-xl shadow-sm border border-accent-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-dark-600">Education</h2>
                <button
                  onClick={addEducation}
                  className="btn-primary text-sm py-2 px-4"
                >
                  + Add Education
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.education.map((edu) => (
                  <div key={edu.id} className="p-4 border border-accent-200 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-dark-600">Education Entry</h3>
                      {resumeData.education.length > 1 && (
                        <button
                          onClick={() => removeEducation(edu.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Degree *</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Bachelor of Science in Computer Science"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Institution *</label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => handleEducationChange(edu.id, 'institution', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="University Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Location</label>
                        <input
                          type="text"
                          value={edu.location}
                          onChange={(e) => handleEducationChange(edu.id, 'location', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="City, State"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-dark-600 mb-1">Start Date</label>
                          <input
                            type="text"
                            value={edu.startDate}
                            onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
                            className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Aug 2020"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark-600 mb-1">End Date</label>
                          <input
                            type="text"
                            value={edu.endDate}
                            onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                            className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="May 2024"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">GPA (Optional)</label>
                        <input
                          type="text"
                          value={edu.gpa}
                          onChange={(e) => handleEducationChange(edu.id, 'gpa', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="3.8/4.0"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white rounded-xl shadow-sm border border-accent-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-dark-600">Work Experience</h2>
                <button
                  onClick={addExperience}
                  className="btn-primary text-sm py-2 px-4"
                >
                  + Add Experience
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.experience.map((exp) => (
                  <div key={exp.id} className="p-4 border border-accent-200 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-dark-600">Experience Entry</h3>
                      {resumeData.experience.length > 1 && (
                        <button
                          onClick={() => removeExperience(exp.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Job Title *</label>
                        <input
                          type="text"
                          value={exp.title}
                          onChange={(e) => handleExperienceChange(exp.id, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Software Engineer"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Company *</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Company Name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Location</label>
                        <input
                          type="text"
                          value={exp.location}
                          onChange={(e) => handleExperienceChange(exp.id, 'location', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="City, State"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-dark-600 mb-1">Start Date</label>
                          <input
                            type="text"
                            value={exp.startDate}
                            onChange={(e) => handleExperienceChange(exp.id, 'startDate', e.target.value)}
                            className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Jan 2022"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark-600 mb-1">End Date</label>
                          <input
                            type="text"
                            value={exp.endDate}
                            onChange={(e) => handleExperienceChange(exp.id, 'endDate', e.target.value)}
                            className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="Present"
                            disabled={exp.current}
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={exp.current}
                          onChange={(e) => {
                            handleExperienceChange(exp.id, 'current', e.target.checked);
                            if (e.target.checked) {
                              handleExperienceChange(exp.id, 'endDate', 'Present');
                            }
                          }}
                          className="mr-2"
                        />
                        <label className="text-sm text-dark-600">I currently work here</label>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Description</label>
                        <textarea
                          value={exp.description}
                          onChange={(e) => handleExperienceChange(exp.id, 'description', e.target.value)}
                          rows="3"
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Describe your responsibilities and achievements..."
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-xl shadow-sm border border-accent-200 p-6">
              <h2 className="text-2xl font-bold text-dark-600 mb-4">Skills</h2>
              <textarea
                value={resumeData.skills}
                onChange={(e) => handleSkillsChange(e.target.value)}
                rows="3"
                className="w-full px-4 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="List your skills separated by commas (e.g., JavaScript, React, Node.js, Python)"
              />
            </div>

            {/* Projects */}
            <div className="bg-white rounded-xl shadow-sm border border-accent-200 p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-dark-600">Projects</h2>
                <button
                  onClick={addProject}
                  className="btn-primary text-sm py-2 px-4"
                >
                  + Add Project
                </button>
              </div>
              <div className="space-y-4">
                {resumeData.projects.map((proj) => (
                  <div key={proj.id} className="p-4 border border-accent-200 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-dark-600">Project Entry</h3>
                      {resumeData.projects.length > 1 && (
                        <button
                          onClick={() => removeProject(proj.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Project Name</label>
                        <input
                          type="text"
                          value={proj.name}
                          onChange={(e) => handleProjectChange(proj.id, 'name', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="E-commerce Platform"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Description</label>
                        <textarea
                          value={proj.description}
                          onChange={(e) => handleProjectChange(proj.id, 'description', e.target.value)}
                          rows="2"
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Brief description of the project..."
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Technologies Used</label>
                        <input
                          type="text"
                          value={proj.technologies}
                          onChange={(e) => handleProjectChange(proj.id, 'technologies', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="React, Node.js, MongoDB"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-600 mb-1">Project Link</label>
                        <input
                          type="url"
                          value={proj.link}
                          onChange={(e) => handleProjectChange(proj.id, 'link', e.target.value)}
                          className="w-full px-3 py-2 border border-accent-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="https://github.com/username/project"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-xl shadow-sm border border-accent-200 p-6">
              <div className="flex gap-4">
                <button
                  onClick={handlePrint}
                  className="btn-primary flex-1"
                >
                  <svg className="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print / Download PDF
                </button>
              </div>
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 h-fit print:static">
            <div className="bg-white rounded-xl shadow-lg border border-accent-200 p-8 print:shadow-none print:border-0">
              <div className="mb-4 print:hidden">
                <h2 className="text-2xl font-bold text-dark-600">Live Preview</h2>
                <p className="text-sm text-accent-600">This is how your resume will look</p>
              </div>
              
              {/* Resume Preview */}
              <div className={`resume-preview ${selectedTemplate}`}>
                {selectedTemplate === 'modern' && (
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center pb-4 border-b-2 border-primary-600">
                      <h1 className="text-3xl font-bold text-dark-600 mb-2">
                        {resumeData.personalInfo.fullName || 'Your Name'}
                      </h1>
                      <div className="text-sm text-accent-600 space-y-1">
                        {resumeData.personalInfo.email && <div>{resumeData.personalInfo.email}</div>}
                        {resumeData.personalInfo.phone && <div>{resumeData.personalInfo.phone}</div>}
                        {resumeData.personalInfo.location && <div>{resumeData.personalInfo.location}</div>}
                        <div className="flex justify-center gap-3 mt-2">
                          {resumeData.personalInfo.linkedin && (
                            <span className="text-primary-600">{resumeData.personalInfo.linkedin}</span>
                          )}
                          {resumeData.personalInfo.portfolio && (
                            <span className="text-primary-600">{resumeData.personalInfo.portfolio}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    {resumeData.summary && (
                      <div>
                        <h2 className="text-xl font-bold text-primary-600 mb-2">Professional Summary</h2>
                        <p className="text-sm text-dark-600">{resumeData.summary}</p>
                      </div>
                    )}

                    {/* Education */}
                    {resumeData.education.some(edu => edu.degree || edu.institution) && (
                      <div>
                        <h2 className="text-xl font-bold text-primary-600 mb-3">Education</h2>
                        <div className="space-y-3">
                          {resumeData.education.map((edu) => (
                            (edu.degree || edu.institution) && (
                              <div key={edu.id}>
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-semibold text-dark-600">{edu.degree || 'Degree'}</h3>
                                    <p className="text-sm text-accent-600">{edu.institution || 'Institution'}</p>
                                    {edu.location && <p className="text-sm text-accent-600">{edu.location}</p>}
                                  </div>
                                  <div className="text-right">
                                    {(edu.startDate || edu.endDate) && (
                                      <p className="text-sm text-accent-600">
                                        {edu.startDate} {edu.startDate && edu.endDate && '-'} {edu.endDate}
                                      </p>
                                    )}
                                    {edu.gpa && <p className="text-sm text-accent-600">GPA: {edu.gpa}</p>}
                                  </div>
                                </div>
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experience */}
                    {resumeData.experience.some(exp => exp.title || exp.company) && (
                      <div>
                        <h2 className="text-xl font-bold text-primary-600 mb-3">Work Experience</h2>
                        <div className="space-y-4">
                          {resumeData.experience.map((exp) => (
                            (exp.title || exp.company) && (
                              <div key={exp.id}>
                                <div className="flex justify-between items-start mb-1">
                                  <div>
                                    <h3 className="font-semibold text-dark-600">{exp.title || 'Job Title'}</h3>
                                    <p className="text-sm text-accent-600">{exp.company || 'Company'}</p>
                                    {exp.location && <p className="text-sm text-accent-600">{exp.location}</p>}
                                  </div>
                                  {(exp.startDate || exp.endDate) && (
                                    <p className="text-sm text-accent-600">
                                      {exp.startDate} {exp.startDate && exp.endDate && '-'} {exp.endDate}
                                    </p>
                                  )}
                                </div>
                                {exp.description && <p className="text-sm text-dark-600 mt-2">{exp.description}</p>}
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {resumeData.skills && (
                      <div>
                        <h2 className="text-xl font-bold text-primary-600 mb-2">Skills</h2>
                        <p className="text-sm text-dark-600">{resumeData.skills}</p>
                      </div>
                    )}

                    {/* Projects */}
                    {resumeData.projects.some(proj => proj.name) && (
                      <div>
                        <h2 className="text-xl font-bold text-primary-600 mb-3">Projects</h2>
                        <div className="space-y-3">
                          {resumeData.projects.map((proj) => (
                            proj.name && (
                              <div key={proj.id}>
                                <div className="flex justify-between items-start">
                                  <h3 className="font-semibold text-dark-600">{proj.name}</h3>
                                  {proj.link && (
                                    <a href={proj.link} className="text-sm text-primary-600 print:text-dark-600">
                                      {proj.link}
                                    </a>
                                  )}
                                </div>
                                {proj.description && <p className="text-sm text-dark-600 mt-1">{proj.description}</p>}
                                {proj.technologies && (
                                  <p className="text-sm text-accent-600 mt-1">
                                    <span className="font-medium">Technologies:</span> {proj.technologies}
                                  </p>
                                )}
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedTemplate === 'classic' && (
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="text-center pb-4 border-b border-dark-600">
                      <h1 className="text-3xl font-bold text-dark-600 mb-2 uppercase tracking-wide">
                        {resumeData.personalInfo.fullName || 'Your Name'}
                      </h1>
                      <div className="text-sm text-dark-600">
                        {resumeData.personalInfo.email && <span>{resumeData.personalInfo.email}</span>}
                        {resumeData.personalInfo.email && resumeData.personalInfo.phone && <span> | </span>}
                        {resumeData.personalInfo.phone && <span>{resumeData.personalInfo.phone}</span>}
                        {(resumeData.personalInfo.email || resumeData.personalInfo.phone) && resumeData.personalInfo.location && <span> | </span>}
                        {resumeData.personalInfo.location && <span>{resumeData.personalInfo.location}</span>}
                      </div>
                      {(resumeData.personalInfo.linkedin || resumeData.personalInfo.portfolio) && (
                        <div className="text-sm text-dark-600 mt-1">
                          {resumeData.personalInfo.linkedin && <span>{resumeData.personalInfo.linkedin}</span>}
                          {resumeData.personalInfo.linkedin && resumeData.personalInfo.portfolio && <span> | </span>}
                          {resumeData.personalInfo.portfolio && <span>{resumeData.personalInfo.portfolio}</span>}
                        </div>
                      )}
                    </div>

                    {/* Summary */}
                    {resumeData.summary && (
                      <div>
                        <h2 className="text-lg font-bold text-dark-600 mb-2 uppercase tracking-wide border-b border-accent-300 pb-1">
                          Summary
                        </h2>
                        <p className="text-sm text-dark-600">{resumeData.summary}</p>
                      </div>
                    )}

                    {/* Education */}
                    {resumeData.education.some(edu => edu.degree || edu.institution) && (
                      <div>
                        <h2 className="text-lg font-bold text-dark-600 mb-2 uppercase tracking-wide border-b border-accent-300 pb-1">
                          Education
                        </h2>
                        <div className="space-y-3">
                          {resumeData.education.map((edu) => (
                            (edu.degree || edu.institution) && (
                              <div key={edu.id}>
                                <div className="flex justify-between">
                                  <div>
                                    <h3 className="font-semibold text-dark-600">{edu.degree || 'Degree'}</h3>
                                    <p className="text-sm text-dark-600">{edu.institution || 'Institution'}</p>
                                  </div>
                                  <div className="text-right">
                                    {(edu.startDate || edu.endDate) && (
                                      <p className="text-sm text-dark-600">
                                        {edu.startDate} {edu.startDate && edu.endDate && '-'} {edu.endDate}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                {edu.gpa && <p className="text-sm text-dark-600">GPA: {edu.gpa}</p>}
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experience */}
                    {resumeData.experience.some(exp => exp.title || exp.company) && (
                      <div>
                        <h2 className="text-lg font-bold text-dark-600 mb-2 uppercase tracking-wide border-b border-accent-300 pb-1">
                          Experience
                        </h2>
                        <div className="space-y-3">
                          {resumeData.experience.map((exp) => (
                            (exp.title || exp.company) && (
                              <div key={exp.id}>
                                <div className="flex justify-between mb-1">
                                  <div>
                                    <h3 className="font-semibold text-dark-600">{exp.title || 'Job Title'}</h3>
                                    <p className="text-sm text-dark-600">{exp.company || 'Company'}</p>
                                  </div>
                                  {(exp.startDate || exp.endDate) && (
                                    <p className="text-sm text-dark-600">
                                      {exp.startDate} {exp.startDate && exp.endDate && '-'} {exp.endDate}
                                    </p>
                                  )}
                                </div>
                                {exp.description && <p className="text-sm text-dark-600">{exp.description}</p>}
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {resumeData.skills && (
                      <div>
                        <h2 className="text-lg font-bold text-dark-600 mb-2 uppercase tracking-wide border-b border-accent-300 pb-1">
                          Skills
                        </h2>
                        <p className="text-sm text-dark-600">{resumeData.skills}</p>
                      </div>
                    )}

                    {/* Projects */}
                    {resumeData.projects.some(proj => proj.name) && (
                      <div>
                        <h2 className="text-lg font-bold text-dark-600 mb-2 uppercase tracking-wide border-b border-accent-300 pb-1">
                          Projects
                        </h2>
                        <div className="space-y-3">
                          {resumeData.projects.map((proj) => (
                            proj.name && (
                              <div key={proj.id}>
                                <h3 className="font-semibold text-dark-600">{proj.name}</h3>
                                {proj.description && <p className="text-sm text-dark-600">{proj.description}</p>}
                                {proj.technologies && (
                                  <p className="text-sm text-dark-600">
                                    <span className="font-medium">Technologies:</span> {proj.technologies}
                                  </p>
                                )}
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedTemplate === 'creative' && (
                  <div className="space-y-6">
                    {/* Header with colored background */}
                    <div className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white p-6 rounded-lg -mx-8 -mt-8 mb-6 print:rounded-none">
                      <h1 className="text-3xl font-bold mb-2">
                        {resumeData.personalInfo.fullName || 'Your Name'}
                      </h1>
                      <div className="text-sm space-y-1">
                        {resumeData.personalInfo.email && <div>{resumeData.personalInfo.email}</div>}
                        {resumeData.personalInfo.phone && <div>{resumeData.personalInfo.phone}</div>}
                        {resumeData.personalInfo.location && <div>{resumeData.personalInfo.location}</div>}
                        <div className="flex gap-3 mt-2">
                          {resumeData.personalInfo.linkedin && <span>{resumeData.personalInfo.linkedin}</span>}
                          {resumeData.personalInfo.portfolio && <span>{resumeData.personalInfo.portfolio}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    {resumeData.summary && (
                      <div>
                        <h2 className="text-xl font-bold text-secondary-600 mb-2 flex items-center">
                          <span className="w-2 h-6 bg-secondary-600 mr-2"></span>
                          About Me
                        </h2>
                        <p className="text-sm text-dark-600 ml-4">{resumeData.summary}</p>
                      </div>
                    )}

                    {/* Education */}
                    {resumeData.education.some(edu => edu.degree || edu.institution) && (
                      <div>
                        <h2 className="text-xl font-bold text-secondary-600 mb-3 flex items-center">
                          <span className="w-2 h-6 bg-secondary-600 mr-2"></span>
                          Education
                        </h2>
                        <div className="space-y-3 ml-4">
                          {resumeData.education.map((edu) => (
                            (edu.degree || edu.institution) && (
                              <div key={edu.id} className="border-l-2 border-primary-300 pl-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="font-semibold text-dark-600">{edu.degree || 'Degree'}</h3>
                                    <p className="text-sm text-accent-600">{edu.institution || 'Institution'}</p>
                                  </div>
                                  {(edu.startDate || edu.endDate) && (
                                    <p className="text-sm text-accent-600">
                                      {edu.startDate} - {edu.endDate}
                                    </p>
                                  )}
                                </div>
                                {edu.gpa && <p className="text-sm text-accent-600 mt-1">GPA: {edu.gpa}</p>}
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Experience */}
                    {resumeData.experience.some(exp => exp.title || exp.company) && (
                      <div>
                        <h2 className="text-xl font-bold text-secondary-600 mb-3 flex items-center">
                          <span className="w-2 h-6 bg-secondary-600 mr-2"></span>
                          Experience
                        </h2>
                        <div className="space-y-4 ml-4">
                          {resumeData.experience.map((exp) => (
                            (exp.title || exp.company) && (
                              <div key={exp.id} className="border-l-2 border-primary-300 pl-4">
                                <div className="flex justify-between items-start mb-1">
                                  <div>
                                    <h3 className="font-semibold text-dark-600">{exp.title || 'Job Title'}</h3>
                                    <p className="text-sm text-accent-600">{exp.company || 'Company'}</p>
                                  </div>
                                  {(exp.startDate || exp.endDate) && (
                                    <p className="text-sm text-accent-600">
                                      {exp.startDate} - {exp.endDate}
                                    </p>
                                  )}
                                </div>
                                {exp.description && <p className="text-sm text-dark-600 mt-2">{exp.description}</p>}
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Skills */}
                    {resumeData.skills && (
                      <div>
                        <h2 className="text-xl font-bold text-secondary-600 mb-2 flex items-center">
                          <span className="w-2 h-6 bg-secondary-600 mr-2"></span>
                          Skills
                        </h2>
                        <p className="text-sm text-dark-600 ml-4">{resumeData.skills}</p>
                      </div>
                    )}

                    {/* Projects */}
                    {resumeData.projects.some(proj => proj.name) && (
                      <div>
                        <h2 className="text-xl font-bold text-secondary-600 mb-3 flex items-center">
                          <span className="w-2 h-6 bg-secondary-600 mr-2"></span>
                          Projects
                        </h2>
                        <div className="space-y-3 ml-4">
                          {resumeData.projects.map((proj) => (
                            proj.name && (
                              <div key={proj.id} className="border-l-2 border-primary-300 pl-4">
                                <h3 className="font-semibold text-dark-600">{proj.name}</h3>
                                {proj.description && <p className="text-sm text-dark-600 mt-1">{proj.description}</p>}
                                {proj.technologies && (
                                  <p className="text-sm text-accent-600 mt-1">
                                    <span className="font-medium">Technologies:</span> {proj.technologies}
                                  </p>
                                )}
                              </div>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMakerPage;
