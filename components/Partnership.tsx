'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Partnership() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investmentAmount: '',
    partnershipPlan: '',
    experience: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const partnershipPlans = [
    {
      duration: '6 months',
      interest: '12%',
      minAmount: '₦2,000,000',
      maxAmount: '₦50,000,000',
      description: 'Short-term partnership with guaranteed returns'
    },
    {
      duration: '1 year',
      interest: '25%',
      minAmount: '₦2,000,000',
      maxAmount: '₦50,000,000',
      description: 'Medium-term partnership with higher returns'
    },
    {
      duration: '1.5 years',
      interest: '40.5%',
      minAmount: '₦2,000,000',
      maxAmount: '₦50,000,000',
      description: 'Long-term partnership with maximum returns'
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Guaranteed Returns',
      description: 'Secure and guaranteed returns on your investment with no risk involved.'
    },
    {
      icon: '📈',
      title: 'High Interest Rates',
      description: 'Competitive interest rates ranging from 12% to 40.5% based on partnership duration.'
    },
    {
      icon: '🏗️',
      title: 'Real Estate Projects',
      description: 'Invest in ongoing building and construction projects in major cities.'
    },
    {
      icon: '⏰',
      title: 'Flexible Duration',
      description: 'Choose from 6 months, 1 year, or 1.5 years partnership plans.'
    },
    {
      icon: '🛡️',
      title: 'Risk-Free Investment',
      description: 'No stress or drama involved - we handle all the complexities.'
    },
    {
      icon: '📋',
      title: 'Transparent Process',
      description: 'Clear documentation and regular updates on your investment progress.'
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-4"
        >
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Partnership Application Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in partnering with us. Our team will contact you within 24 hours to discuss your partnership opportunity.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300"
          >
            Submit Another Application
          </button>
        </motion.div>
      </div>
    );
  }

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
              Now you can build wealth without laying a brick
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              Partner with us in our ongoing building and construction projects in major cities such as Lagos, Abeokuta, Ilorin and Ibadan and get access to safe and secure returns within 6-18 months.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Register Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Plans Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the partnership plan that best suits your investment goals and timeline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnershipPlans.map((plan, index) => (
              <motion.div
                key={plan.duration}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-teal-500 transition-colors duration-300"
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.duration}
                  </h3>
                  <div className="text-4xl font-bold text-teal-600 mb-4">
                    {plan.interest}
                  </div>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="text-sm text-gray-500">
                      Min: {plan.minAmount}
                    </div>
                    <div className="text-sm text-gray-500">
                      Max: {plan.maxAmount}
                    </div>
                  </div>
                  <button className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300">
                    Choose Plan
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the benefits of partnering with ThirdWay Investments for your real estate investment needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Be a part of #ThirdWayPartnership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sign up to partner with us on ThirdWay Partnership with as low as ₦2,000,000 and a maximum of ₦50,000,000. Ready to build wealth seamlessly with no stress or drama involved?
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-50 rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="+234 906 201 9993"
                  />
                </div>

                <div>
                  <label htmlFor="investmentAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Investment Amount *
                  </label>
                  <select
                    id="investmentAmount"
                    name="investmentAmount"
                    required
                    value={formData.investmentAmount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select investment amount</option>
                    <option value="2-5">₦2,000,000 - ₦5,000,000</option>
                    <option value="5-10">₦5,000,000 - ₦10,000,000</option>
                    <option value="10-20">₦10,000,000 - ₦20,000,000</option>
                    <option value="20-50">₦20,000,000 - ₦50,000,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="partnershipPlan" className="block text-sm font-medium text-gray-700 mb-2">
                    Partnership Plan *
                  </label>
                  <select
                    id="partnershipPlan"
                    name="partnershipPlan"
                    required
                    value={formData.partnershipPlan}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select partnership plan</option>
                    <option value="6-months">6 months (12% interest)</option>
                    <option value="1-year">1 year (25% interest)</option>
                    <option value="1.5-years">1.5 years (40.5% interest)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Real Estate Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">Select experience level</option>
                    <option value="beginner">Beginner (0-2 years)</option>
                    <option value="intermediate">Intermediate (2-5 years)</option>
                    <option value="advanced">Advanced (5+ years)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Tell us about your investment goals and any questions you may have..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
              </div>
            </form>
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
              Need More Information?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our partnership team is ready to answer your questions and guide you through the investment process.
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
