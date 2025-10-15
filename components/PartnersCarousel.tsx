'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ServicesCards from './ServicesCards';
import RealEstateLawServices from './RealEstateLawServices';
import AvailablePropertiesSnippet from './AvailablePropertiesSnippet';

export default function PartnersCarousel() {
  const [isHovered, setIsHovered] = useState(false);

  const partners = [
    { 
      name: 'Partner 1', 
      logo: '/assets/partner1.png',
      website: 'https://example1.com'
    },
    { 
      name: 'Partner 2', 
      logo: '/assets/partner2.png',
      website: 'https://example2.com'
    },
    { 
      name: 'Partner 3', 
      logo: '/assets/partner3.jpg',
      website: 'https://example3.com'
    },
    { 
      name: 'Partner 4', 
      logo: '/assets/partner4.png',
      website: 'https://example4.com'
    },
    { 
      name: 'Partner 5', 
      logo: '/assets/partner5.jpg',
      website: 'https://example5.com'
    },
    { 
      name: 'Partner 6', 
      logo: '/assets/partner6.png',
      website: 'https://example6.com'
    },
    { 
      name: 'Partner 8', 
      logo: '/assets/partner8.jpeg',
      website: 'https://example8.com'
    },
    { 
      name: 'Partner 9', 
      logo: '/assets/partner9.png',
      website: 'https://example9.com'
    },
    { 
      name: 'Partner 10', 
      logo: '/assets/partner10.png',
      website: 'https://example10.com'
    },
    { 
      name: 'Partner 11', 
      logo: '/assets/partner11.png',
      website: 'https://example11.com'
    },
    { 
      name: 'Partner 12', 
      logo: '/assets/partner12.png',
      website: 'https://example12.com'
    },
    { 
      name: 'Partner 13', 
      logo: '/assets/partner13.png',
      website: 'https://example13.com'
    },
  ];

  const handlePartnerClick = (website: string) => {
    window.open(website, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              <span className="md:hidden">4,000+ Partnerships & Counting</span>
              <span className="hidden md:inline">Partnered with 4,000+ Real Businesses & Counting</span>
            </h2>
           
          </motion.div>

          {/* Partners Carousel */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex space-x-8 items-center"
              animate={{
                x: isHovered ? 0 : [-100 * partners.length, 0],
              }}
              transition={{
                x: {
                  repeat: isHovered ? 0 : Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: `${partners.length * 200}px` }}
            >
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center transition-shadow duration-300 cursor-pointer"
                  style={{ minWidth: '80px', height: '80px' }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handlePartnerClick(partner.website)}
                >
                  <div className="relative w-16 h-16">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          
        </div>
      </section>
      
      {/* Services Cards */}
      <ServicesCards />
      
      {/* Real Estate Law Services */}
      <RealEstateLawServices />
      
      {/* Available Properties */}
      <AvailablePropertiesSnippet />
    </>
  );
}