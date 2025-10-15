'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { properties } from '../../../data/properties';

interface PropertyDetails {
  id: string;
  name: string;
  location: string;
  status: 'Available' | 'Sold';
  price: string;
  image: string;
  description: string;
  features: string[];
  paymentPlan: string[];
}

export default function PropertyDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const [activeTab, setActiveTab] = useState<'description' | 'features' | 'payment'>('description');
  const router = useRouter();
  
  // Unwrap params using React.use()
  const resolvedParams = React.use(params);

  // Property data based on ID
  const getPropertyData = (id: string): PropertyDetails => {
    const property = properties.find(p => p.id === id);
    if (!property) {
      return {
        id: '1',
        name: 'Dallas Prime',
        location: 'Ibadan',
        status: 'Available',
        price: '₦25,000,000',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Prime land location in Ibadan with excellent development potential. This strategic location offers great investment opportunities with modern infrastructure and accessibility.',
        features: [
          'Prime location in Ibadan',
          'Excellent development potential',
          'Modern infrastructure access',
          'High investment returns',
          'Secure and gated community',
          'Flexible payment options'
        ],
        paymentPlan: [
          'Initial deposit: 30% of total cost',
          'Monthly installments over 12 months',
          'Final payment: 40% on completion',
          'No hidden charges or fees',
          'Flexible payment terms available',
          'Early payment discounts available'
        ]
      };
    }

    return {
      id: property.id,
      name: property.name,
      location: property.location,
      status: property.status,
      price: property.price || 'Price on Request',
      image: property.image,
      description: property.description,
      features: property.features || [],
      paymentPlan: [
        'Initial deposit: 30% of total cost',
        'Monthly installments over 12 months',
        'Final payment: 40% on completion',
        'No hidden charges or fees',
        'Flexible payment terms available',
        'Early payment discounts available'
      ]
    };
  };

  const property = getPropertyData(resolvedParams.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-blue-600">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{property.name}</h1>
            <p className="text-xl md:text-2xl text-blue-200">{property.location}</p>
            <div className="mt-6">
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                property.status === 'Available' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {property.status}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Property Image and Actions */}
            <div className="lg:col-span-2">
              {/* Property Image */}
              <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
                <Image
                  src={property.image}
                  alt={property.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <motion.button
                  className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Download Brochure</span>
                  <span>📄</span>
                </motion.button>
                <motion.button
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Purchase</span>
                  <span>💰</span>
                </motion.button>
              </div>

              {/* Tabs */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Tab Headers */}
                <div className="flex border-b border-gray-200">
                  {[
                    { id: 'description', label: 'Description' },
                    { id: 'features', label: 'Features' },
                    { id: 'payment', label: 'Payment Plan' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex-1 px-6 py-4 text-sm font-semibold transition-colors duration-300 ${
                        activeTab === tab.id
                          ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="p-6">
                  {activeTab === 'description' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Property Description</h3>
                      <p className="text-gray-600 leading-relaxed">{property.description}</p>
                    </motion.div>
                  )}

                  {activeTab === 'features' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features</h3>
                      <ul className="space-y-3">
                        {property.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  {activeTab === 'payment' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Plan</h3>
                      <ul className="space-y-3">
                        {property.paymentPlan.map((plan, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{plan}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Price and Quick Actions */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{property.price}</h3>
                  <p className="text-gray-600">Price per square meter</p>
                </div>

                <div className="space-y-4">
                  <motion.button
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Payment Plan
                  </motion.button>
                  
                  <motion.button
                    className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download Brochure
                  </motion.button>
                  
                  <motion.button
                    className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Purchase
                  </motion.button>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Phone:</strong> +234 906 201 9993</p>
                    <p><strong>Email:</strong> info@thirdway.com</p>
                    <p><strong>Office Hours:</strong> Mon-Fri 8am-4pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Properties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Suggested Properties</h2> */}
            <p className="text-gray-600 text-lg">You might also be interested in these properties</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 3).map((suggestedProperty, index) => (
              <motion.div
                key={suggestedProperty.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.location.href = `/property/${suggestedProperty.id}`}
              >
                {/* Property Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={suggestedProperty.image}
                    alt={suggestedProperty.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      suggestedProperty.status === 'Available' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {suggestedProperty.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {suggestedProperty.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {suggestedProperty.location}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {suggestedProperty.price || 'Price on Request'}
                  </p>
                  
                  {/* More Details Button */}
                  <motion.button
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.button
            onClick={() => {
              console.log('Button clicked - navigating to /explore');
              router.push('/explore');
            }}
            className="bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Properties
          </motion.button>
        </div>
      </section>
    </div>
  );
}
