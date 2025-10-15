'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LegalServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

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
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const legalServices = [
    {
      title: 'Real Estate Leases, Sales and Acquisition',
      description: 'Comprehensive legal support for all real estate transactions including lease agreements, property sales, and acquisitions. We ensure all legal requirements are met and protect your interests throughout the process.',
      features: [
        'Drafting and review of lease agreements',
        'Property acquisition due diligence',
        'Sales contract preparation',
        'Legal compliance verification',
        'Transaction documentation'
      ]
    },
    {
      title: 'Real Estate Investments',
      description: 'Expert legal guidance for real estate investment opportunities. We help structure investments, assess risks, and ensure compliance with all relevant laws and regulations.',
      features: [
        'Investment structure analysis',
        'Risk assessment and mitigation',
        'Regulatory compliance',
        'Investment documentation',
        'Legal due diligence'
      ]
    },
    {
      title: 'Real Estate Title Documentation',
      description: 'Professional title documentation services to ensure clear property ownership and prevent future legal disputes. We handle all aspects of title verification and documentation.',
      features: [
        'Title search and verification',
        'Title insurance guidance',
        'Documentation preparation',
        'Ownership verification',
        'Title defect resolution'
      ]
    },
    {
      title: 'Real Estate Finance and Refinancing',
      description: 'Legal support for real estate financing and refinancing transactions. We help secure the best terms and ensure all legal requirements are met.',
      features: [
        'Loan documentation review',
        'Refinancing legal support',
        'Mortgage compliance',
        'Financial transaction structuring',
        'Legal risk assessment'
      ]
    },
    {
      title: 'Real Estate Development and Redevelopment',
      description: 'Comprehensive legal services for real estate development projects. We handle zoning, permits, environmental compliance, and all legal aspects of development.',
      features: [
        'Zoning and land use planning',
        'Development permit assistance',
        'Environmental compliance',
        'Construction law support',
        'Project documentation'
      ]
    },
    {
      title: 'Perfection of Title',
      description: 'Professional title perfection services to ensure clear and marketable property titles. We resolve title issues and ensure proper documentation.',
      features: [
        'Title defect identification',
        'Title perfection strategies',
        'Legal documentation',
        'Title insurance coordination',
        'Ownership verification'
      ]
    },
    {
      title: 'Real Estate Legal Documentation and Drafting',
      description: 'Expert legal document drafting and review services for all real estate transactions. We ensure accuracy, compliance, and protection of your interests.',
      features: [
        'Contract drafting and review',
        'Legal document preparation',
        'Compliance verification',
        'Document standardization',
        'Legal language optimization'
      ]
    },
    {
      title: 'Negotiation of Property Deals',
      description: 'Skilled negotiation services for property transactions. We represent your interests and work to secure the best possible terms and conditions.',
      features: [
        'Deal structure negotiation',
        'Terms and conditions review',
        'Price negotiation support',
        'Legal risk assessment',
        'Transaction optimization'
      ]
    },
    {
      title: 'Provision of Expert Legal Advisory Services',
      description: 'Comprehensive legal advisory services to protect clients\' interests in all real estate matters. We provide strategic legal guidance and risk management.',
      features: [
        'Strategic legal planning',
        'Risk assessment and mitigation',
        'Legal compliance guidance',
        'Dispute prevention',
        'Client interest protection'
      ]
    },
    {
      title: 'Property Due Diligence',
      description: 'Thorough property due diligence services to identify potential issues and risks before property transactions. We ensure informed decision-making.',
      features: [
        'Property investigation',
        'Legal risk assessment',
        'Title verification',
        'Compliance checking',
        'Due diligence reporting'
      ]
    },
    {
      title: 'Estate Management and Administration',
      description: 'Professional estate management and administration services. We handle all legal aspects of estate planning, management, and administration.',
      features: [
        'Estate planning documentation',
        'Estate administration',
        'Probate proceedings',
        'Asset management',
        'Legal compliance'
      ]
    },
    {
      title: 'Real Estate Investment Advisory',
      description: 'Expert investment advisory services for real estate opportunities. We provide strategic guidance and legal support for investment decisions.',
      features: [
        'Investment opportunity analysis',
        'Legal structure planning',
        'Risk assessment',
        'Investment documentation',
        'Strategic guidance'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-green-600 to-emerald-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Legal Advisory Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl"
            >
              Expert legal guidance for all your real estate transactions and property matters
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              Get Legal Consultation
            </motion.button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Legal Services</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive legal support for all your real estate needs. Our expert team provides 
              professional guidance to protect your interests and ensure compliance with all relevant laws.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              <h3 className="text-xl font-bold text-gray-900">Contact ThirdWay Legal</h3>
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
                  placeholder="Tell us about your legal needs..."
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
                  className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}
