
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    // Add animation delay for children
    const animatedElements = document.querySelectorAll('.hero-animated');
    animatedElements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${index * 0.15}s`;
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black -z-10"></div>
      <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] -z-10"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-1/4 right-[10%] w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float -z-10"></div>
      <div className="absolute bottom-1/3 left-[15%] w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-float animation-delay-2000 -z-10"></div>
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overhead label */}
          <div className="inline-flex items-center justify-center px-4 py-2 mb-6 rounded-full bg-gray-100 dark:bg-gray-800 bg-opacity-80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hero-animated animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium">AI-Powered Resume Builder</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gray-900 dark:text-white hero-animated animate-fade-in">
            <span className="block">Create stunning resumes</span>
            <span className="block mt-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              that get noticed
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="mt-6 text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto hero-animated animate-fade-in">
            Build beautiful, professional resumes in minutes with our intuitive builder and AI-powered suggestions.
          </p>
          
          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center hero-animated animate-fade-in">
            <Link 
              to="/editor" 
              className="flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 transition-all duration-200 shadow-sm hover:shadow hover-scale"
            >
              Create Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a 
              href="#templates" 
              className="flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow hover-scale"
            >
              View Templates
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="mt-16 flex flex-col items-center hero-animated animate-fade-in">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by thousands of job seekers</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-70">
              <div className="h-8 w-auto bg-gray-800 dark:bg-gray-200 rounded-md"></div>
              <div className="h-8 w-24 bg-gray-800 dark:bg-gray-200 rounded-md"></div>
              <div className="h-8 w-20 bg-gray-800 dark:bg-gray-200 rounded-md"></div>
              <div className="h-8 w-28 bg-gray-800 dark:bg-gray-200 rounded-md"></div>
              <div className="h-8 w-16 bg-gray-800 dark:bg-gray-200 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
