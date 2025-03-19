
import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Edit, Palette, Download } from 'lucide-react';

interface Step {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const HowItWorks = () => {
  const steps: Step[] = [
    {
      icon: FileText,
      title: 'Choose a template',
      description: 'Browse our collection of professionally designed templates and select the one that fits your career goals.',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    },
    {
      icon: Edit,
      title: 'Fill in details',
      description: 'Add your personal information, work experience, education, skills, and other relevant details.',
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
    },
    {
      icon: Palette,
      title: 'Customize design',
      description: 'Personalize fonts, colors, spacing, and layouts to create a resume that reflects your personal style.',
      color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
    },
    {
      icon: Download,
      title: 'Download resume',
      description: 'Export your resume as a PDF, ready to share with potential employers and apply for your dream job.',
      color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <h2 className="section-heading">
          How it <span className="text-blue-600 dark:text-blue-400">works</span>
        </h2>
        <p className="section-subheading">
          Creating a professional resume has never been easier. Just follow these simple steps to get started.
        </p>

        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
          
          <div className="space-y-16 md:space-y-0 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="md:grid md:grid-cols-2 md:gap-8 md:items-center"
              >
                <div className={`md:text-right ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full ${step.color} mb-4 md:ml-auto md:mr-0 mx-auto`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto md:ml-auto md:mr-0">
                    {step.description}
                  </p>
                </div>
                
                <div className={`hidden md:block relative ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Step number indicator */}
                  <div className="absolute top-0 left-[50%] transform -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-200 dark:border-gray-700 flex items-center justify-center font-bold text-gray-500 dark:text-gray-400">
                    {index + 1}
                  </div>
                  
                  {/* Illustration placeholder */}
                  <div className={`w-48 h-48 mx-auto rounded-2xl ${index % 2 === 0 ? 'ml-auto mr-8' : 'mr-auto ml-8'} bg-gradient-to-br ${getGradientColor(index)}`}>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to build your professional resume?</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Start creating your resume now and land your dream job with a professionally designed resume that highlights your skills and experience.
          </p>
          <a
            href="/editor"
            className="inline-flex items-center px-8 py-4 text-white bg-black dark:bg-white dark:text-black font-medium rounded-xl hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors hover-scale"
          >
            Create Your Resume
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

function getGradientColor(index: number): string {
  const gradients = [
    'from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30',
    'from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30',
    'from-pink-100 to-pink-200 dark:from-pink-900/30 dark:to-pink-800/30',
    'from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30',
  ];
  
  return gradients[index % gradients.length];
}

export default HowItWorks;
