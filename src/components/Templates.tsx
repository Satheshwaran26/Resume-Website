
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Check } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
}

const Templates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  
  const templates: Template[] = [
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Clean and simple design focusing on content and readability.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Classic and sophisticated layout for corporate environments.',
      image: 'https://images.unsplash.com/photo-1626784215021-2e49448702d5?q=80&w=2071&auto=format&fit=crop',
      color: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
      id: 'creative',
      name: 'Creative',
      description: 'Bold and distinctive design for creative professionals.',
      image: 'https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?q=80&w=2070&auto=format&fit=crop',
      color: 'bg-pink-50 dark:bg-pink-900/20',
    },
    {
      id: 'modern',
      name: 'Modern',
      description: 'Contemporary layout with a focus on visual hierarchy.',
      image: 'https://images.unsplash.com/photo-1631863454453-c0450ee0fbd6?q=80&w=2072&auto=format&fit=crop',
      color: 'bg-green-50 dark:bg-green-900/20',
    },
  ];

  const handleSelectTemplate = (id: string) => {
    setSelectedTemplate(id);
    // You could pass the selected template to the resume editor
  };

  return (
    <section id="templates" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="section-container">
        <h2 className="section-heading">
          Choose your perfect <span className="text-blue-600 dark:text-blue-400">template</span>
        </h2>
        <p className="section-subheading">
          Select from our collection of professionally designed templates tailored for different industries and career stages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {templates.map((template) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 ${
                selectedTemplate === template.id ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
              }`}
            >
              {/* Template preview */}
              <div className={`aspect-[3/4] ${template.color} overflow-hidden`}>
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Template info */}
              <div className="p-5 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-1">{template.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{template.description}</p>
                
                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleSelectTemplate(template.id)}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      selectedTemplate === template.id
                        ? 'bg-blue-600 text-white dark:bg-blue-500'
                        : 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {selectedTemplate === template.id ? (
                      <>
                        <Check className="w-4 h-4 mr-1 inline" /> Selected
                      </>
                    ) : (
                      'Select'
                    )}
                  </button>
                  <button
                    className="p-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 transition-colors"
                    aria-label="Preview template"
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Selected Badge */}
              {selectedTemplate === template.id && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center">
                  <Check className="w-3 h-3 mr-1" />
                  Selected
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
            to="/editor"
            className={`inline-flex items-center px-8 py-4 rounded-xl text-white font-medium transition-all ${
              selectedTemplate
                ? 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
                : 'bg-black hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100'
            } shadow-sm hover:shadow hover-scale`}
          >
            {selectedTemplate ? 'Continue with selected template' : 'Create your resume'}
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
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Templates;
