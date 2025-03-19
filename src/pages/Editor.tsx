
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Save, Download, Sparkles, CheckCircle, 
  AlertCircle, User, Briefcase, GraduationCap, Code 
} from 'lucide-react';
import { motion } from 'framer-motion';

const Editor = () => {
  // State for form sections
  const [activeSection, setActiveSection] = useState('personal');
  const [formData, setFormData] = useState({
    personal: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      title: '',
      summary: '',
    },
    experience: [
      {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
      },
    ],
    education: [
      {
        institution: '',
        degree: '',
        field: '',
        graduationDate: '',
        description: '',
      },
    ],
    skills: [''],
    projects: [
      {
        name: '',
        description: '',
        link: '',
      },
    ],
  });

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle form changes
  const handleChange = (section: string, field: string, value: string, index?: number) => {
    setFormData((prev) => {
      const newData = { ...prev };
      
      if (index !== undefined && Array.isArray(newData[section])) {
        newData[section][index] = {
          ...newData[section][index],
          [field]: value,
        };
      } else if (section === 'skills' && index !== undefined) {
        newData.skills[index] = value;
      } else if (typeof newData[section] === 'object' && !Array.isArray(newData[section])) {
        newData[section] = {
          ...newData[section],
          [field]: value,
        };
      }
      
      return newData;
    });
  };

  // Add new items to array sections
  const addItem = (section: string) => {
    setFormData((prev) => {
      const newData = { ...prev };
      
      if (section === 'experience') {
        newData.experience = [
          ...newData.experience,
          {
            company: '',
            position: '',
            startDate: '',
            endDate: '',
            current: false,
            description: '',
          },
        ];
      } else if (section === 'education') {
        newData.education = [
          ...newData.education,
          {
            institution: '',
            degree: '',
            field: '',
            graduationDate: '',
            description: '',
          },
        ];
      } else if (section === 'skills') {
        newData.skills = [...newData.skills, ''];
      } else if (section === 'projects') {
        newData.projects = [
          ...newData.projects,
          {
            name: '',
            description: '',
            link: '',
          },
        ];
      }
      
      return newData;
    });
  };

  // Remove items from array sections
  const removeItem = (section: string, index: number) => {
    setFormData((prev) => {
      const newData = { ...prev };
      
      if (
        Array.isArray(newData[section]) && 
        newData[section].length > 1 && 
        index >= 0 && 
        index < newData[section].length
      ) {
        newData[section] = newData[section].filter((_, i) => i !== index);
      }
      
      return newData;
    });
  };

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm py-4 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white">
              <ArrowLeft className="h-5 w-5 mr-1" />
              <span>Back</span>
            </Link>
            <h1 className="text-xl font-semibold">Resume Editor</h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Save className="h-4 w-4 mr-1" />
              Save
            </button>
            <button
              className="flex items-center px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors"
            >
              <Download className="h-4 w-4 mr-1" />
              Download
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden sticky top-20">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold">Resume Sections</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Click on each section to edit
                </p>
              </div>
              <nav className="p-2">
                <ul className="space-y-1">
                  {[
                    { id: 'personal', label: 'Personal Information', icon: User },
                    { id: 'experience', label: 'Work Experience', icon: Briefcase },
                    { id: 'education', label: 'Education', icon: GraduationCap },
                    { id: 'skills', label: 'Skills', icon: Code },
                    { id: 'projects', label: 'Projects', icon: Code },
                  ].map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition-colors ${
                          activeSection === section.id
                            ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/30'
                        }`}
                      >
                        <section.icon className="h-5 w-5 mr-3" />
                        <span className="font-medium">{section.label}</span>
                        {isFormSectionComplete(formData, section.id) ? (
                          <CheckCircle className="h-4 w-4 ml-auto text-green-500 dark:text-green-400" />
                        ) : (
                          <AlertCircle className="h-4 w-4 ml-auto text-amber-500 dark:text-amber-400" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              
              <div className="p-5 border-t border-gray-200 dark:border-gray-700">
                <button
                  className="flex items-center justify-center w-full px-4 py-2.5 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 font-medium transition-colors"
                >
                  <Sparkles className="h-4 w-4 mr-2 text-blue-600 dark:text-blue-400" />
                  AI Suggestions
                </button>
              </div>
            </div>
          </div>

          {/* Middle - Form fields */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold capitalize">
                  {activeSection === 'personal' ? 'Personal Information' : activeSection}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {getSectionDescription(activeSection)}
                </p>
              </div>
              <div className="p-5">
                {/* Render the appropriate form based on active section */}
                {activeSection === 'personal' && renderPersonalForm(formData, handleChange)}
                {activeSection === 'experience' && renderExperienceForm(formData, handleChange, addItem, removeItem)}
                {activeSection === 'education' && renderEducationForm(formData, handleChange, addItem, removeItem)}
                {activeSection === 'skills' && renderSkillsForm(formData, handleChange, addItem, removeItem)}
                {activeSection === 'projects' && renderProjectsForm(formData, handleChange, addItem, removeItem)}
              </div>
            </div>
          </div>

          {/* Right - Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden sticky top-20">
              <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold">Resume Preview</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Live preview of your resume
                </p>
              </div>
              <div className="p-5 h-[calc(100vh-13rem)] overflow-auto bg-gray-50 dark:bg-gray-900/50">
                <div className="bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-4 max-w-[8.5in] mx-auto scale-[0.85] origin-top">
                  {/* Resume header */}
                  <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold mb-1">{formData.personal.fullName || 'Your Name'}</h1>
                    <p className="text-gray-700 dark:text-gray-300">{formData.personal.title || 'Professional Title'}</p>
                    <div className="flex justify-center flex-wrap gap-x-3 mt-2 text-sm text-gray-600 dark:text-gray-400">
                      {formData.personal.email && <span>{formData.personal.email}</span>}
                      {formData.personal.phone && <span>• {formData.personal.phone}</span>}
                      {formData.personal.location && <span>• {formData.personal.location}</span>}
                    </div>
                  </div>

                  {/* Summary */}
                  {formData.personal.summary && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">Summary</h2>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">{formData.personal.summary}</p>
                    </div>
                  )}

                  {/* Experience */}
                  {formData.experience.some(exp => exp.company || exp.position) && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">Experience</h2>
                      {formData.experience.map((exp, index) => (
                        (exp.company || exp.position) && (
                          <div key={index} className="mb-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{exp.position || 'Position'}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">{exp.company || 'Company'}</p>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate)}
                              </p>
                            </div>
                            {exp.description && <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{exp.description}</p>}
                          </div>
                        )
                      ))}
                    </div>
                  )}

                  {/* Education */}
                  {formData.education.some(edu => edu.institution || edu.degree) && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">Education</h2>
                      {formData.education.map((edu, index) => (
                        (edu.institution || edu.degree) && (
                          <div key={index} className="mb-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                                <p className="text-gray-700 dark:text-gray-300 text-sm">{edu.institution}</p>
                              </div>
                              {edu.graduationDate && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {formatDate(edu.graduationDate)}
                                </p>
                              )}
                            </div>
                            {edu.description && <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{edu.description}</p>}
                          </div>
                        )
                      ))}
                    </div>
                  )}

                  {/* Skills */}
                  {formData.skills.some(skill => skill) && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">Skills</h2>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.map((skill, index) => (
                          skill && (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                            >
                              {skill}
                            </span>
                          )
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Projects */}
                  {formData.projects.some(project => project.name || project.description) && (
                    <div className="mb-6">
                      <h2 className="text-lg font-semibold border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">Projects</h2>
                      {formData.projects.map((project, index) => (
                        (project.name || project.description) && (
                          <div key={index} className="mb-4">
                            <h3 className="font-medium">
                              {project.name}
                              {project.link && (
                                <a 
                                  href={project.link} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 dark:text-blue-400 text-sm ml-2 hover:underline"
                                >
                                  Link
                                </a>
                              )}
                            </h3>
                            {project.description && <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{project.description}</p>}
                          </div>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to check if a form section is complete
function isFormSectionComplete(formData, section) {
  if (section === 'personal') {
    return formData.personal.fullName && formData.personal.email;
  } else if (section === 'experience') {
    return formData.experience.some(exp => exp.company && exp.position && exp.startDate);
  } else if (section === 'education') {
    return formData.education.some(edu => edu.institution && edu.degree);
  } else if (section === 'skills') {
    return formData.skills.some(skill => skill);
  } else if (section === 'projects') {
    return formData.projects.some(project => project.name);
  }
  return false;
}

// Section descriptions
function getSectionDescription(section) {
  switch (section) {
    case 'personal':
      return 'Add your contact information and professional summary.';
    case 'experience':
      return 'Add your work history and achievements.';
    case 'education':
      return 'Add your educational background and qualifications.';
    case 'skills':
      return 'List the skills that are relevant to the job you\'re applying for.';
    case 'projects':
      return 'Showcase your projects and personal achievements.';
    default:
      return '';
  }
}

// Render Personal Information Form
function renderPersonalForm(formData, handleChange) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          value={formData.personal.fullName}
          onChange={(e) => handleChange('personal', 'fullName', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
          placeholder="John Doe"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Professional Title</label>
        <input
          type="text"
          value={formData.personal.title}
          onChange={(e) => handleChange('personal', 'title', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
          placeholder="Software Engineer"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          value={formData.personal.email}
          onChange={(e) => handleChange('personal', 'email', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
          placeholder="john.doe@example.com"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input
          type="tel"
          value={formData.personal.phone}
          onChange={(e) => handleChange('personal', 'phone', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
          placeholder="(123) 456-7890"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          value={formData.personal.location}
          onChange={(e) => handleChange('personal', 'location', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
          placeholder="New York, NY"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Professional Summary</label>
        <textarea
          value={formData.personal.summary}
          onChange={(e) => handleChange('personal', 'summary', e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
          placeholder="A brief summary of your professional background and goals"
          rows={4}
        />
      </div>
    </div>
  );
}

// Render Experience Form
function renderExperienceForm(formData, handleChange, addItem, removeItem) {
  return (
    <div className="space-y-6">
      {formData.experience.map((exp, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">Experience {index + 1}</h4>
            {formData.experience.length > 1 && (
              <button
                onClick={() => removeItem('experience', index)}
                className="text-red-500 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Company</label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => handleChange('experience', 'company', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="Company Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Position</label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => handleChange('experience', 'position', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="Job Title"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Start Date</label>
                <input
                  type="date"
                  value={exp.startDate}
                  onChange={(e) => handleChange('experience', 'startDate', e.target.value, index)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">End Date</label>
                <input
                  type="date"
                  value={exp.endDate}
                  onChange={(e) => handleChange('experience', 'endDate', e.target.value, index)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                  disabled={exp.current}
                />
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`current-job-${index}`}
                checked={exp.current}
                onChange={(e) => handleChange('experience', 'current', e.target.checked ? 'true' : '', index)}
                className="rounded border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 focus:ring-blue-500 dark:focus:ring-blue-400"
              />
              <label htmlFor={`current-job-${index}`} className="ml-2 text-sm">Current Position</label>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={exp.description}
                onChange={(e) => handleChange('experience', 'description', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="Describe your responsibilities and achievements"
                rows={3}
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => addItem('experience')}
        className="w-full py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
      >
        + Add Another Experience
      </button>
    </div>
  );
}

// Render Education Form
function renderEducationForm(formData, handleChange, addItem, removeItem) {
  return (
    <div className="space-y-6">
      {formData.education.map((edu, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">Education {index + 1}</h4>
            {formData.education.length > 1 && (
              <button
                onClick={() => removeItem('education', index)}
                className="text-red-500 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleChange('education', 'institution', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="University or School Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange('education', 'degree', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="Bachelor of Science"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Field of Study</label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) => handleChange('education', 'field', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="Computer Science"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Graduation Date</label>
              <input
                type="date"
                value={edu.graduationDate}
                onChange={(e) => handleChange('education', 'graduationDate', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Description (Optional)</label>
              <textarea
                value={edu.description}
                onChange={(e) => handleChange('education', 'description', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="Honors, achievements, or relevant coursework"
                rows={3}
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => addItem('education')}
        className="w-full py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
      >
        + Add Another Education
      </button>
    </div>
  );
}

// Render Skills Form
function renderSkillsForm(formData, handleChange, addItem, removeItem) {
  return (
    <div className="space-y-6">
      {formData.skills.map((skill, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={skill}
            onChange={(e) => handleChange('skills', '', e.target.value, index)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
            placeholder="e.g., JavaScript, Project Management, etc."
          />
          {formData.skills.length > 1 && (
            <button
              onClick={() => removeItem('skills', index)}
              className="p-2 text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
              </svg>
            </button>
          )}
        </div>
      ))}
      
      <button
        onClick={() => addItem('skills')}
        className="w-full py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
      >
        + Add Another Skill
      </button>
    </div>
  );
}

// Render Projects Form
function renderProjectsForm(formData, handleChange, addItem, removeItem) {
  return (
    <div className="space-y-6">
      {formData.projects.map((project, index) => (
        <div key={index} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium">Project {index + 1}</h4>
            {formData.projects.length > 1 && (
              <button
                onClick={() => removeItem('projects', index)}
                className="text-red-500 dark:text-red-400 text-sm hover:text-red-700 dark:hover:text-red-300"
              >
                Remove
              </button>
            )}
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Project Name</label>
              <input
                type="text"
                value={project.name}
                onChange={(e) => handleChange('projects', 'name', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="Project Name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea
                value={project.description}
                onChange={(e) => handleChange('projects', 'description', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="Describe your project, technologies used, and results"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Link (Optional)</label>
              <input
                type="url"
                value={project.link}
                onChange={(e) => handleChange('projects', 'link', e.target.value, index)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors"
                placeholder="https://example.com"
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={() => addItem('projects')}
        className="w-full py-2 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
      >
        + Add Another Project
      </button>
    </div>
  );
}

export default Editor;
