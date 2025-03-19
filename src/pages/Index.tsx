
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Templates from '@/components/Templates';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Templates />
        <Features />
        <HowItWorks />
        <FAQ />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
