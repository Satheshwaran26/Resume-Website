
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs: FAQItem[] = [
    {
      question: "How does the AI suggestion feature work?",
      answer: "Our AI analyzes your input and compares it with successful resumes in your industry to provide tailored suggestions. It helps you highlight relevant skills and achievements that match job descriptions, making your resume more effective at passing through ATS systems."
    },
    {
      question: "Can I customize the templates to match my personal brand?",
      answer: "Absolutely! All our templates are fully customizable. You can change colors, fonts, spacing, and layout to match your personal brand or the company you're applying to. Our design tools make it easy to create a unique resume while maintaining professional standards."
    },
    {
      question: "What formats can I download my resume in?",
      answer: "You can download your resume as a PDF, which is the most widely accepted format for job applications. PDF preserves your formatting across all devices and ensures your resume looks exactly as designed when employers open it."
    },
    {
      question: "What is ATS and why is it important for my resume?",
      answer: "ATS (Applicant Tracking System) is software used by employers to scan and filter resumes before they reach human recruiters. Our ATS Scanner ensures your resume contains the right keywords and formatting to pass through these systems, increasing your chances of getting an interview."
    },
    {
      question: "Is my data secure with your service?",
      answer: "Yes, we take data security very seriously. All your personal information is encrypted and stored securely. We never share your data with third parties without your explicit consent, and you can delete your account and all associated data at any time."
    },
    {
      question: "Can I create multiple versions of my resume for different job applications?",
      answer: "Yes! We recommend tailoring your resume for each job application. Our platform allows you to create and save multiple versions of your resume, making it easy to customize for different positions or industries."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24">
      <div className="section-container">
        <h2 className="section-heading">
          Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
        </h2>
        <p className="section-subheading">
          Find answers to common questions about our resume builder and how it can help you land your dream job.
        </p>

        <div className="mt-16 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className={cn(
                  "flex justify-between items-center w-full p-6 text-left rounded-xl transition-colors",
                  openIndex === index 
                    ? "bg-blue-50 dark:bg-blue-900/20" 
                    : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                )}
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform",
                    openIndex === index ? "transform rotate-180" : ""
                  )}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-4">Still have questions?</h3>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-lg hover:bg-gray-900 dark:hover:bg-gray-100 transition-colors hover-scale"
          >
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
