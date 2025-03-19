
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Templates', href: '#templates' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#blog' },
        { label: 'Resume Tips', href: '#tips' },
        { label: 'Career Advice', href: '#advice' },
        { label: 'Help Center', href: '#help' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'Privacy Policy', href: '#privacy' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '#terms' },
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Cookie Policy', href: '#cookies' },
        { label: 'GDPR', href: '#gdpr' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  return (
    <footer id="contact" className="bg-gray-50 dark:bg-gray-900/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 pb-12 border-b border-gray-200 dark:border-gray-800">
          {/* Brand and description */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                resumeAI
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xs">
              Build beautiful, professional resumes in minutes with our AI-powered resume builder.
            </p>
            
            {/* Social links */}
            <div className="mt-8 flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer links */}
          {footerLinks.map((column, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Footer bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} resumeAI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
