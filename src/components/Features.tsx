
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Layout, Zap } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const features: Feature[] = [
    {
      icon: Sparkles,
      title: 'AI-Suggested Content',
      description: 'Our AI analyzes your experience and suggests optimized content to make your resume stand out to employers and ATS systems.',
      color: 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400',
    },
    {
      icon: Layout,
      title: 'Easy-to-use Resume Maker',
      description: 'Intuitive interface with simple form-based entry and real-time preview. Build your perfect resume in minutes.',
      color: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400',
    },
    {
      icon: Zap,
      title: 'ATS Scanner',
      description: 'Our AI-powered scanner checks your resume for compatibility with Applicant Tracking Systems to ensure you get past the first round.',
      color: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-24">
      <div className="section-container">
        <h2 className="section-heading">
          Powerful <span className="text-blue-600 dark:text-blue-400">features</span>
        </h2>
        <p className="section-subheading">
          Our resume builder combines elegant design with powerful AI tools to help you create the perfect resume.
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional feature highlight */}
        <div className="mt-24 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent opacity-70"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center justify-center px-4 py-2 mb-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium">
                Premium Feature
              </span>
              <h3 className="text-3xl font-bold mb-4">Custom Design Tools</h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Personalize every aspect of your resume with our advanced design tools. Choose from multiple fonts, colors, and layouts to match your personal style.
              </p>
              <ul className="space-y-3">
                {[
                  'Multiple font options to match your style',
                  'Color customization for personal branding',
                  'Section arrangement based on your strengths',
                  'Export to PDF, Word, or Google Docs'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full mix-blend-multiply filter blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-96 bg-white dark:bg-gray-800 rounded-xl shadow-lg transform rotate-3 overflow-hidden border border-gray-200 dark:border-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
