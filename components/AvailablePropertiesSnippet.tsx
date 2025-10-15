'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { properties, Property } from '../data/properties';

export default function AvailablePropertiesSnippet() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
    
    scrollIntervalRef.current = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = hoveredCard ? 0.5 : 1; // Slower when hovering
        carouselRef.current.scrollLeft += scrollAmount;
        
        // Reset to beginning when reaching the end
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth - carouselRef.current.clientWidth) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    }, 20);
  };

  const stopScrolling = () => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isPlaying) {
      startScrolling();
    } else {
      stopScrolling();
    }

    return () => stopScrolling();
  }, [isPlaying, hoveredCard]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" fill="#3B82F6" />
              <circle cx="50" cy="50" r="25" fill="#60A5FA" />
              <circle cx="50" cy="50" r="10" fill="#93C5FD" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Properties
            </h2>
            {/* <p className="text-gray-600 text-lg max-w-2xl">
              We understand the intricacies and challenges that come with buying lands, and we know how to deal with each one.
            </p> */}
          </div>

          {/* Play/Pause Controls - hidden on mobile */}
          <div className="hidden md:block absolute top-6 right-6 flex gap-2">
            <motion.button
              onClick={togglePlayPause}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600 text-white' 
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setHoveredCard('carousel')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-72 md:w-80"
                onMouseEnter={() => setHoveredCard(property.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => window.location.href = `/property/${property.id}`}
                >
                  {/* Image Container */}
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Availability Status - Left */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        property.status === 'Available' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {property.status}
                      </span>
                    </div>
                    
                    {/* Property Type - Right */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                        {property.type ? property.type.charAt(0).toUpperCase() + property.type.slice(1) : 'Property'}
                      </span>
                    </div>
                    
                  </div>

                  {/* Content */}
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {property.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3 text-sm md:text-base">
                      {property.location}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4">
                      {property.description}
                    </p>
                    
                    {/* More Details Button - only visible on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredCard === property.id ? 1 : 0,
                        y: hoveredCard === property.id ? 0 : 10
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.button
                        onClick={() => window.location.href = `/property/${property.id}`}
                        className="w-full bg-blue-500 text-white px-3 md:px-4 py-2 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-600 transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        More Details
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
