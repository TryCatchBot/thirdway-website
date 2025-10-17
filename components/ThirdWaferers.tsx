'use client';

import React, { useState, useEffect } from 'react';

export default function ThirdWaferers() {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [clickedValue, setClickedValue] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const coreValues = [
    {
      title: 'Integrity',
      description: 'We keep our promises and agreements. We are honest, trustworthy and ethical in our all actions.',
      icon: '🤝',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Versatility',
      description: 'We are professional and adaptable to the varied needs of our clients.',
      icon: '🔄',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Team Work',
      description: 'We are committed to achieving common goals as a team.',
      icon: '👥',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Prompt delivery',
      description: 'We are prompt with allocation of assets and payment of returns on Investment.',
      icon: '⚡',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const handleValueClick = (index: number) => {
    setClickedValue(clickedValue === index ? null : index);
    // You can add more functionality here like opening a modal or navigating to a section
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
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
    // You can add API call here
    alert('Thank you for your interest! We will contact you soon.');
    handleModalClose();
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
      {/* Hero Section - matches Dukiya exactly */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        {/* <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build your dream house
            </h1>
            <p className="text-xl mb-8">Get in Touch</p>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold">ThirdWay</h2>
              <p className="text-lg">+234 906 201 9993</p>
            </div>
          </div>
        </div> */}
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Are you looking for a way to earn money as you work a 9-5?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Earn commission when you refer our products to your community. Join the ThirdWaferers.
          </p>
          <button 
            onClick={handleModalOpen}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg"
          >
            Register Now
            </button>
        </div>
      </section>

      {/* Main CTA Section - matches Dukiya exactly */}
      <section className="py-16 bg-white">
        {/* <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Are you looking for a way to earn money as you work a 9-5?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Earn commission when you refer our products to your community. Join the ThirdWaferers.
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg">
            Register Now
          </button>
        </div> */}
      </section>

      {/* Core Values Section - Interactive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Core Values
            </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.title}
                className={`text-center bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group border-2 ${
                  clickedValue === index 
                    ? 'border-blue-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-blue-500'
                }`}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                onClick={() => handleValueClick(index)}
              >
                <div className="mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300 ${
                    clickedValue === index 
                      ? `bg-gradient-to-r ${value.color} shadow-lg` 
                      : 'bg-gray-100 group-hover:bg-blue-100'
                  }`}>
                    <span className={`text-2xl transition-all duration-300 ${
                      clickedValue === index 
                        ? 'text-white scale-110' 
                        : 'text-gray-600 group-hover:text-blue-600'
                    }`}>
                      {value.icon}
                    </span>
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                  clickedValue === index 
                    ? 'text-blue-600' 
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  {value.title}
                </h3>
                <p className={`transition-colors duration-300 ${
                  clickedValue === index 
                    ? 'text-gray-800' 
                    : 'text-gray-600 group-hover:text-gray-800'
                }`}>
                  {value.description}
                </p>
                
                {/* Progress bar that appears on hover/click */}
                <div className={`mt-4 transition-opacity duration-300 ${
                  hoveredValue === index || clickedValue === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        clickedValue === index 
                          ? `bg-gradient-to-r ${value.color}` 
                          : 'bg-blue-500'
                      }`}
                      style={{
                        width: hoveredValue === index || clickedValue === index ? '100%' : '0%'
                      }}
                    ></div>
                  </div>
                </div>
                
                {/* Click indicator */}
                {clickedValue === index && (
                  <div className="mt-3 text-sm text-blue-600 font-medium animate-pulse">
                    ✓ Selected
                  </div>
                )}
              </div>
                    ))}
                  </div>
                  
          {/* Selected value details */}
          {clickedValue !== null && (
            <div className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-blue-200 animate-fadeIn">
              <div className="text-center">
                <div className="text-4xl mb-4">{coreValues[clickedValue].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {coreValues[clickedValue].title}
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  {coreValues[clickedValue].description}
                </p>
                <button 
                  onClick={() => setClickedValue(null)}
                  className="mt-6 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                >
                  Close
                    </button>
                  </div>
                </div>
          )}
        </div>
      </section>

      {/* ThirdWaferers Section - matches Dukiya exactly */}
      <section className="py-16 bg-gray-100 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be a part of #ThirdWaferers
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            ThirdWay's mission is To build strong, long term and proactive relationships with clients by creating exceptional real estate investments and delivering best results. You want to be part of this dream? Join us!
          </p>
          <button 
            onClick={handleModalOpen}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 text-lg"
          >
            Join us
          </button>
        </div>
      </section>



      {/* Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Join ThirdWaferers</h2>
                <button
                  onClick={handleModalClose}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Why are you interested in joining ThirdWaferers?"
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={handleModalClose}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to our terms and conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}