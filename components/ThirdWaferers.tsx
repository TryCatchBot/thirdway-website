'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ThirdWaferers() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Consultants' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'legal', name: 'Legal' },
    { id: 'investment', name: 'Investment' },
  ];

  const consultants = [
    {
      id: 1,
      name: 'Adebayo Lawal',
      title: 'Senior Real Estate Consultant',
      category: 'residential',
      experience: '8+ years',
      specialization: 'Residential Properties, Luxury Homes',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.9,
      clients: 150,
      description: 'Expert in residential property transactions with a focus on luxury homes and family properties.',
      achievements: ['Top Performer 2023', 'Client Satisfaction Award', 'Sales Excellence']
    },
    {
      id: 2,
      name: 'Lukman Shobowale',
      title: 'Commercial Real Estate Specialist',
      category: 'commercial',
      experience: '10+ years',
      specialization: 'Office Spaces, Retail Properties',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      rating: 4.8,
      clients: 200,
      description: 'Specializes in commercial real estate transactions and investment opportunities.',
      achievements: ['Commercial Expert', 'Investment Advisor', 'Market Analyst']
    },
    {
      id: 3,
      name: 'Emmanuel Taiwo',
      title: 'Legal Real Estate Advisor',
      category: 'legal',
      experience: '12+ years',
      specialization: 'Property Law, Due Diligence',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.9,
      clients: 300,
      description: 'Legal expert specializing in property transactions, contracts, and regulatory compliance.',
      achievements: ['Legal Excellence', 'Compliance Expert', 'Risk Management']
    },
    {
      id: 4,
      name: 'Kehinde Afolayan',
      title: 'Investment Real Estate Consultant',
      category: 'investment',
      experience: '7+ years',
      specialization: 'Real Estate Investment, Portfolio Management',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.7,
      clients: 120,
      description: 'Investment specialist helping clients build wealth through strategic real estate investments.',
      achievements: ['Investment Guru', 'Portfolio Manager', 'Wealth Builder']
    },
    {
      id: 5,
      name: 'Abalaka Deborah',
      title: 'Customer Service Lead',
      category: 'residential',
      experience: '5+ years',
      specialization: 'Client Relations, Property Management',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      rating: 4.8,
      clients: 180,
      description: 'Dedicated to providing exceptional customer service and ensuring client satisfaction.',
      achievements: ['Customer Champion', 'Service Excellence', 'Client Relations']
    },
    {
      id: 6,
      name: 'Chinedu Okonkwo',
      title: 'Land Development Specialist',
      category: 'commercial',
      experience: '9+ years',
      specialization: 'Land Acquisition, Development Projects',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      rating: 4.6,
      clients: 90,
      description: 'Expert in land development projects and large-scale property acquisitions.',
      achievements: ['Development Expert', 'Land Specialist', 'Project Manager']
    }
  ];

  const filteredConsultants = selectedCategory === 'all' 
    ? consultants 
    : consultants.filter(consultant => consultant.category === selectedCategory);

  const coreValues = [
    {
      icon: '🤝',
      title: 'Integrity',
      description: 'We keep our promises and agreements. We are honest, trustworthy and ethical in all our actions.'
    },
    {
      icon: '🔄',
      title: 'Versatility',
      description: 'We are professional and adaptable to the varied needs of our clients.'
    },
    {
      icon: '👥',
      title: 'Team Work',
      description: 'We are committed to achieving common goals as a team.'
    },
    {
      icon: '⚡',
      title: 'Prompt Delivery',
      description: 'We are prompt with allocation of assets and payment of returns on Investment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-teal-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ThirdWaferers Real Estate Consultants
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Expert real estate consultants dedicated to helping you make informed property decisions and achieve your investment goals.
            </p>
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Consultants Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredConsultants.map((consultant, index) => (
              <motion.div
                key={consultant.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={consultant.image}
                    alt={consultant.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {consultant.experience}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {consultant.name}
                  </h3>
                  <p className="text-teal-600 font-medium mb-2">
                    {consultant.title}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {consultant.specialization}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="text-gray-700 font-medium">
                        {consultant.rating}
                      </span>
                    </div>
                    <span className="text-gray-500">
                      {consultant.clients} clients
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {consultant.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {consultant.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="bg-teal-100 text-teal-700 px-2 py-1 rounded text-xs"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors duration-300">
                      Book Consultation
                    </button>
                    <button className="flex-1 border border-teal-600 text-teal-600 py-2 px-4 rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-300">
                      View Profile
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate consulting services to help you make informed decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏠',
                title: 'Property Valuation',
                description: 'Accurate property assessments and market value analysis.'
              },
              {
                icon: '📊',
                title: 'Market Analysis',
                description: 'In-depth market research and investment opportunity analysis.'
              },
              {
                icon: '📋',
                title: 'Due Diligence',
                description: 'Comprehensive property inspection and legal verification.'
              },
              {
                icon: '💰',
                title: 'Investment Advisory',
                description: 'Strategic investment planning and portfolio management.'
              },
              {
                icon: '📝',
                title: 'Legal Consultation',
                description: 'Property law advice and transaction documentation.'
              },
              {
                icon: '🤝',
                title: 'Negotiation Support',
                description: 'Expert negotiation to secure the best deals.'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Our Experts?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book a consultation with our real estate consultants and get expert advice for your property needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Book Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors duration-300">
                View Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch with Our Consultants
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team maintains subtle accessibility and working relationships which guarantee our clients full-time attention whenever they need our help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Call Us or Send Text
                </h3>
                <p className="text-teal-600 font-semibold mb-2">
                  +234 906 201 9993
                </p>
                <p className="text-gray-600 text-sm">
                  Get reply immediately
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-teal-600 font-semibold mb-2">
                  info@thirdway.com
                </p>
                <p className="text-gray-600 text-sm">
                  Get reply within 24hrs
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
