'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ExpertCTA() {
  return (
    <motion.div 
      className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white text-center py-3 px-4 fixed top-0 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-center gap-2 sm:gap-4">
        <p className="text-sm sm:text-base font-medium">
          <span className="hidden sm:inline">Overwhelmed with a lot of questions? Speak with an expert now</span>
          <span className="sm:hidden">Need expert help?</span>
        </p>
        <Link href="/real-estate-consultants">
          <motion.button 
            className="bg-white text-blue-500 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Help
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}
