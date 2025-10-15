'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import TypingText from './TypingText';
import FloatingShapes from './FloatingShapes';
import PartnersCarousel from './PartnersCarousel';

export default function Hero() {
  const typingStrings = [
    "Re-shaping Cities, Transforming Communities",
    "Building Sustainable Urban Futures",
    "Creating Innovative Living Spaces",
    "Leading Land Development Excellence"
  ];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-teal-900"
        initial={{ scale: 1.1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      
      {/* Background Image with Zoom Effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          backgroundBlendMode: "overlay"
        }}
        initial={{ scale: 1.2, opacity: 0.3 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      
      {/* Floating Shapes */}
      <FloatingShapes />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main headline with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              <TypingText 
                strings={typingStrings}
                className="text-white"
                typeSpeed={80}
                backSpeed={50}
                loop={true}
                showCursor={true}
              />
            </h1>
          </motion.div>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            As a land bank company, we lead the way in urban land development, crafting innovative and sustainable communities that redefine modern living.
          </motion.p>
          
          {/* Call to action buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link href="/explore">
              <motion.button 
                className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold text-lg rounded-full hover:bg-white/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black shadow-lg hover:shadow-xl"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Explore Portfolio
                </motion.span>
              </motion.button>
            </Link>
            <Link href="/inspection-booking">
              <motion.button 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Sales
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle background text elements */}
      <motion.div 
        className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 text-white/20 text-sm font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
      >
        <p>The future of sustainable living is here, and it's called Thirdway Investments</p>
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute top-32 right-8 text-white/30 text-xs font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
      >
        <p>Expert Real Estate Legal Services & Property Development</p>
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute top-1/3 left-8 text-white/25 text-xs font-light max-w-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        <p>Land Acquisition • Property Rights • Real Estate Law</p>
      </motion.div>
      
      {/* <motion.div 
        className="absolute top-1/2 right-12 text-white/20 text-sm font-light max-w-56"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3.5 }}
      >
        <p>Transforming Urban Landscapes Through Legal Excellence</p>
      </motion.div> */}
      
      <motion.div 
        className="hidden md:block absolute bottom-1/3 left-16 text-white/30 text-xs font-light max-w-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 4 }}
      >
        <p>Property Development • Land Banking • Legal Advisory</p>
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute bottom-1/4 right-1/4 text-white/25 text-sm font-light max-w-52"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 4.5 }}
      >
        <p>Your Trusted Partner in Real Estate Investment & Legal Services</p>
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute top-1/4 left-1/3 text-white/20 text-xs font-light max-w-44"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 5 }}
      >
        <p>Commercial Real Estate • Residential Development</p>
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute bottom-1/2 right-8 text-white/30 text-xs font-light max-w-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 5.5 }}
      >
        <p>Property Conveyancing • Title Verification • Due Diligence</p>
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute top-2/3 left-1/4 text-white/25 text-sm font-light max-w-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 6 }}
      >
        <p>Strategic Land Banking Solutions for Future Growth</p>
      </motion.div>
      
      <motion.div 
        className="hidden md:block absolute bottom-1/5 left-1/2 text-white/20 text-xs font-light max-w-46"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 6.5 }}
      >
        <p>Real Estate Investment Advisory • Market Analysis</p>
      </motion.div>
      
      {/* <motion.div 
        className="absolute top-3/4 right-1/3 text-white/30 text-xs font-light max-w-42"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 7 }}
      >
        <p>Legal Compliance • Regulatory Affairs • Risk Management</p>
      </motion.div> */}
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
      </section>
      
      {/* Partners Carousel */}
      <PartnersCarousel />
    </>
  );
}
