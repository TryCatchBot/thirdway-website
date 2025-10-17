'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesCards() {
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const toggleFlip = (cardId: string) => {
    console.log('toggleFlip called for:', cardId, 'current state:', flippedCards[cardId]);
    setFlippedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      id: 'acquire',
      title: 'Acquire your dream property',
      description: 'Browse through hundreds of properties for sale with each listing filled with detailed information and photos.',
      buttonText: 'Explore',
      buttonLink: '/explore',
      personImage: '/assets/person-pointing-thirdway-dream-property.webp',
      backgroundColor: '#F0F9FF',
      patternColor: '#BFDBFE',
      backContent: {
        title: 'EXPLORE OUR PROPERTIES',
        subtitle: 'OWN LANDED PROPERTIES',
        projectName: 'THIRDWAY',
        tagline: 'YOUR BEST BET',
        description: 'Budget-friendly property solutions with industry experts ensuring prompt delivery and adequate information for informed decisions.',
        propertyImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        amenities: [
          { icon: '💰', label: 'BUDGET-FRIENDLY' },
          { icon: '👥', label: 'INDUSTRY EXPERTS' },
          { icon: '⚡', label: 'PROMPT DELIVERY' },
          { icon: '📋', label: 'ADEQUATE INFO' },
          { icon: '🏠', label: 'OWN LANDED PROPERTIES' }
        ],
        features: ['Buy House', 'Build House', 'Market Analysis', 'Expert Guidance']
      }
    },
    {
      id: 'build',
      title: 'Build your dream house',
      description: "There's a home for everyone. Talk to our experts and let's lead you home.",
      buttonText: 'Get in Touch',
      buttonLink: '/build-your-home',
      personImage: '/assets/person-holding-key-thirdway-build-your-dream-home.webp',
      backgroundColor: '#FFF7ED',
      patternColor: '#FED7AA',
      backContent: {
        title: 'Custom Home Construction',
        description: 'From architectural design to final construction, we handle every aspect of building your dream home. Our expert team ensures quality craftsmanship and timely delivery.',
        propertyImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        features: ['Architectural Design', 'Quality Materials', 'Timely Delivery', 'Warranty Support']
      }
    },
    {
      id: 'legal',
      title: 'Legal Advisory Services',
      description: 'Expert legal guidance for all your real estate transactions and property matters.',
      buttonText: 'Get Legal Help',
      buttonLink: '/real-estate-consultants',
      personImage: '/assets/thirdway-law.png',
      backgroundColor: '#F0FDF4',
      patternColor: '#BBF7D0',
      backContent: {
        title: 'Legal Advisory Services',
        description: 'Comprehensive legal support for property transactions, title verification, and real estate law compliance.',
        propertyImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        features: ['Property Conveyancing', 'Title Verification', 'Due Diligence', 'Legal Compliance']
      }
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header for Legal Services */}
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Legal Advisory & Compliance Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Expert legal counsel for property transactions, title verification, and real estate law compliance. 
            Ensuring your investments are protected with comprehensive legal documentation and due diligence.
          </p>
        </div> */}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ 
                backgroundColor: service.backgroundColor,
                height: '500px',
                perspective: '1000px'
              }}
            >
              {/* Flip Container */}
              <motion.div
                className="relative w-full h-full"
                animate={{ rotateY: flippedCards[service.id] ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
              {/* Geometric pattern overlay - triangles in lower half */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon 
                    points="0,100 15,85 30,100 45,85 60,100 75,85 90,100 100,85 100,100" 
                    fill={service.patternColor}
                  />
                  <polygon 
                    points="0,100 7,93 15,100 22,93 30,100 37,93 45,100 52,93 60,100 67,93 75,100 82,93 90,100 97,93 100,100" 
                    fill={service.patternColor}
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Top content - Title and Description */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    {service.title === 'Acquire your dream property' ? (
                      <>
                        <span className="text-blue-600">Acquire</span>
                        <span className="text-black"> your dream property</span>
                      </>
                    ) : service.title === 'Build your dream house' ? (
                      <>
                        <span className="text-blue-600">Build</span>
                        <span className="text-black"> your dream house</span>
                      </>
                    ) : (
                      <>
                        <span className="text-green-600">Legal Advisory</span>
                        <span className="text-black"> Services</span>
                      </>
                    )}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Plus Button - positioned below text, left side */}
                  <motion.button
                    onClick={() => toggleFlip(service.id)}
                    className="bg-blue-300 text-blue-700 w-12 h-12 rounded-lg font-bold text-2xl hover:bg-blue-400 hover:text-blue-800 transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    +
                  </motion.button>
                </div>

                {/* Bottom content - Person image */}
                <div className="flex justify-end mt-8">
                  {/* Person image - positioned at bottom right */}
                  <div className={`relative w-90 ${service.id === 'legal' ? 'h-70' : 'h-70'}`}>
                    <Image
                      src={service.personImage}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full" 
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  {/* Geometric pattern overlay */}
                  <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-20">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <polygon 
                        points="0,100 15,85 30,100 45,85 60,100 75,85 90,100 100,85 100,100" 
                        fill={service.patternColor}
                      />
                      <polygon 
                        points="0,100 7,93 15,100 22,93 30,100 37,93 45,100 52,93 60,100 67,93 75,100 82,93 90,100 97,93 100,100" 
                        fill={service.patternColor}
                      />
                    </svg>
                  </div>

                  {/* Back Content */}
                  <div className="relative z-10 p-6 h-full flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="#3B82F6" />
                        <circle cx="50" cy="50" r="25" fill="#60A5FA" />
                        <circle cx="50" cy="50" r="10" fill="#93C5FD" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <polygon points="50,10 90,90 10,90" fill="#8B5CF6" />
                      </svg>
                    </div>

                    {/* Back Arrow Indicator */}
                    <motion.button
                      className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 z-20"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Back arrow clicked for:', service.id);
                        toggleFlip(service.id);
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                      </svg>
                    </motion.button>

                    {/* Card Content - Different for each card */}
                    <div className="flex-1 flex flex-col justify-center text-center relative z-10">
                      {service.id === 'acquire' ? (
                        // Acquire Card Content
                        <>
                          {/* Apartment Image */}
                          <div className="relative w-full h-24 rounded-lg overflow-hidden shadow-lg mb-4">
                            <Image
                              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              alt="Modern Apartment Building"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          </div>

                          
                          {/* Services */}
                          <div className="mb-6">
                            <div className="flex flex-wrap justify-center gap-2 text-sm">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Own Land</span>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Buy House</span>
                              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">Get Professional Legal Service</span>
                            </div>
                          </div>

                          {/* Value Propositions */}
                          <div className="mb-6">
                            <h4 className="text-md font-semibold text-gray-800 mb-4">
                              ✨ Here's why we are your best bet:
                            </h4>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">01</span>
                                  <span className="font-semibold text-gray-700">Budget-friendly</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">02</span>
                                  <span className="font-semibold text-gray-700">Industry experts</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">03</span>
                                  <span className="font-semibold text-gray-700">Prompt delivery</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">04</span>
                                  <span className="font-semibold text-gray-700">Adequate info</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Contact Button */}
                          <motion.button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Request Call Back</span>
                            <span>📞</span>
                          </motion.button>
                        </>
                      ) : service.id === 'build' ? (
                        // Build Card Content
                        <>
                          {/* Construction Image */}
                          <div className="relative w-full h-24 rounded-lg overflow-hidden shadow-lg mb-4">
                            <Image
                              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              alt="Construction Site"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          </div>

                          
                          {/* Services */}
                          <div className="mb-6">
                            <div className="flex flex-wrap justify-center gap-2 text-sm">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Own Land</span>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Build House</span>
                              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">Get Professional Legal Service</span>
                            </div>
                          </div>

                          {/* Construction Features */}
                          <div className="mb-6">
                            <h4 className="text-md font-semibold text-gray-800 mb-4">
                              🏗️ Our Construction Process:
                            </h4>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">01</span>
                                  <span className="font-semibold text-gray-700">Architectural Design</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">02</span>
                                  <span className="font-semibold text-gray-700">Quality Materials</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">03</span>
                                  <span className="font-semibold text-gray-700">Timely Delivery</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">04</span>
                                  <span className="font-semibold text-gray-700">Warranty Support</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Contact Button */}
                          <motion.button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Request Call Back</span>
                            <span>📞</span>
                          </motion.button>
                        </>
                      ) : (
                        // Legal Card Content
                        <>
                          {/* Legal Image */}
                          <div className="relative w-full h-24 rounded-lg overflow-hidden shadow-lg mb-4">
                            <Image
                              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                              alt="Legal Services"
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                          </div>

                          
                          {/* Services */}
                          <div className="mb-6">
                            <div className="flex flex-wrap justify-center gap-2 text-sm">
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">Property Conveyancing</span>
                              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">Title Verification</span>
                              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-medium">Legal Documentation</span>
                            </div>
                          </div>

                          {/* Legal Features */}
                          <div className="mb-6">
                            <h4 className="text-md font-semibold text-gray-800 mb-4">
                              ⚖️ Our Legal Services:
                            </h4>
                            <div className="grid grid-cols-2 gap-3 text-sm">
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">01</span>
                                  <span className="font-semibold text-gray-700">Property Conveyancing</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">02</span>
                                  <span className="font-semibold text-gray-700">Title Verification</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">03</span>
                                  <span className="font-semibold text-gray-700">Due Diligence</span>
                                </div>
                              </div>
                              <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-white/50">
                                <div className="flex items-center justify-center mb-2">
                                  <span className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">04</span>
                                  <span className="font-semibold text-gray-700">Legal Compliance</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Contact Button */}
                          <motion.button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span>Request Call Back</span>
                            <span>📞</span>
                          </motion.button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Contact ThirdWay</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent placeholder-gray-500"
                  placeholder="+234 123 456 7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none placeholder-gray-500"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
