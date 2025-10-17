'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LegalService {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  slug: string;
}

export default function RealEstateLawServices() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const serviceIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const legalServices: LegalService[] = [
    {
      title: 'Real Estate Leases, Sales and Acquisition',
      description: 'Comprehensive legal support for all real estate transactions including lease agreements, property sales, and acquisitions.',
      icon: '🏠',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      slug: 'real-estate-leases-sales-acquisition'
    },
    {
      title: 'Real Estate Investments',
      description: 'Expert legal guidance for real estate investment opportunities with risk assessment and compliance.',
      icon: '💰',
      color: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100',
      slug: 'real-estate-investments'
    },
    {
      title: 'Real Estate Title Documentation',
      description: 'Professional title documentation services to ensure clear property ownership and prevent disputes.',
      icon: '📋',
      color: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100',
      slug: 'real-estate-title-documentation'
    },
    {
      title: 'Real Estate Finance and Refinancing',
      description: 'Legal support for real estate financing and refinancing transactions with optimal terms.',
      icon: '🏦',
      color: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100',
      slug: 'real-estate-finance-refinancing'
    },
    {
      title: 'Real Estate Development and Redevelopment',
      description: 'Comprehensive legal services for development projects including zoning and permits.',
      icon: '🏗️',
      color: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100',
      slug: 'real-estate-development-redevelopment'
    },
    {
      title: 'Perfection of Title',
      description: 'Professional title perfection services to ensure clear and marketable property titles.',
      icon: '✅',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      slug: 'perfection-of-title'
    },
    {
      title: 'Real Estate Legal Documentation',
      description: 'Expert legal document drafting and review services for all real estate transactions.',
      icon: '📄',
      color: 'from-indigo-500 to-indigo-600',
      bgGradient: 'from-indigo-50 to-indigo-100',
      slug: 'real-estate-legal-documentation'
    },
    {
      title: 'Negotiation of Property Deals',
      description: 'Skilled negotiation services for property transactions to secure the best possible terms.',
      icon: '🤝',
      color: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-50 to-pink-100',
      slug: 'negotiation-property-deals'
    },
    {
      title: 'Expert Legal Advisory Services',
      description: 'Comprehensive legal advisory services to protect clients\' interests in all real estate matters.',
      icon: '⚖️',
      color: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 to-cyan-100',
      slug: 'expert-legal-advisory-services'
    },
    {
      title: 'Property Due Diligence',
      description: 'Thorough property due diligence services to identify potential issues before transactions.',
      icon: '🔍',
      color: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100',
      slug: 'property-due-diligence'
    },
    {
      title: 'Estate Management and Administration',
      description: 'Professional estate management and administration services with legal compliance.',
      icon: '🏛️',
      color: 'from-emerald-500 to-emerald-600',
      bgGradient: 'from-emerald-50 to-emerald-100',
      slug: 'estate-management-administration'
    },
    {
      title: 'Real Estate Investment Advisory',
      description: 'Expert investment advisory services for real estate opportunities with strategic guidance.',
      icon: '📊',
      color: 'from-violet-500 to-violet-600',
      bgGradient: 'from-violet-50 to-violet-100',
      slug: 'real-estate-investment-advisory'
    }
  ];

  const startServiceRotation = () => {
    if (serviceIntervalRef.current) {
      clearInterval(serviceIntervalRef.current);
    }
    
    serviceIntervalRef.current = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => 
        (prevIndex + 1) % legalServices.length
      );
    }, 3000); // Change every 3 seconds
  };

  const stopServiceRotation = () => {
    if (serviceIntervalRef.current) {
      clearInterval(serviceIntervalRef.current);
      serviceIntervalRef.current = null;
    }
  };

  useEffect(() => {
    startServiceRotation();
    return () => stopServiceRotation();
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Legal Advisory & Compliance Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Expert legal guidance for all your real estate transactions and property matters
          </p>
        </motion.div>

        {/* Swiping Cards Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-80 overflow-hidden rounded-2xl mx-4 md:mx-16">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: index === currentServiceIndex ? 1 : 0,
                  x: index === currentServiceIndex ? 0 : 100,
                  scale: index === currentServiceIndex ? 1 : 0.95
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-2xl shadow-xl cursor-pointer`}
                onClick={() => window.location.href = `/legal-services/${service.slug}`}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className="text-6xl">{service.icon}</div>
                </div>

                <div className="relative z-10 p-4 md:p-8 h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-xl md:text-2xl mr-3 md:mr-4`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-2">
                          {service.title}
                        </h3>
                        <div className={`w-12 md:w-16 h-1 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm md:text-lg leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {legalServices.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                            dotIndex === currentServiceIndex 
                              ? `bg-gradient-to-r ${service.color}` 
                              : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>

                    <motion.button
                      onClick={() => window.location.href = `/legal-services/${service.slug}`}
                      className={`bg-gradient-to-r ${service.color} text-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-bold text-sm md:text-lg hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Hire Us
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentServiceIndex((prev) => (prev - 1 + legalServices.length) % legalServices.length)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-20"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => setCurrentServiceIndex((prev) => (prev + 1) % legalServices.length)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-600 hover:text-gray-900 w-8 h-8 md:w-12 md:h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-20"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
