'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface ServiceDetails {
  title: string;
  description: string;
  icon: string;
  color: string;
  bgGradient: string;
  whatItIs: string;
  whyYouNeedIt: string[];
  commonTroubles: string[];
  benefits: string[];
}

export default function LegalServiceDetailsPage({ params }: { params: Promise<{ service: string }> }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const router = useRouter();

  const resolvedParams = React.use(params);

  const services: { [key: string]: ServiceDetails } = {
    'real-estate-investments': {
      title: 'Real Estate Investments',
      description: 'Expert legal guidance for real estate investment opportunities with risk assessment and compliance.',
      icon: '💰',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Real Estate Investment legal services provide comprehensive legal support for individuals and businesses looking to invest in real estate properties. Our expert team ensures that all investment transactions are legally sound, compliant with regulations, and structured to maximize returns while minimizing risks.',
      whyYouNeedIt: [
        'Legal compliance with investment regulations',
        'Risk assessment and mitigation strategies',
        'Proper investment structure and documentation',
        'Tax optimization and legal planning',
        'Due diligence and property evaluation',
        'Investment agreement drafting and review'
      ],
      commonTroubles: [
        'Non-compliance with investment regulations leading to penalties',
        'Poor investment structure resulting in tax inefficiencies',
        'Inadequate due diligence causing investment losses',
        'Legal disputes with partners or property owners',
        'Regulatory violations and compliance issues',
        'Insufficient documentation for investment protection'
      ],
      benefits: [
        'Maximized investment returns through legal optimization',
        'Reduced legal risks and compliance issues',
        'Professional investment structure and documentation',
        'Expert guidance on regulatory requirements',
        'Comprehensive due diligence and risk assessment',
        'Ongoing legal support throughout investment lifecycle'
      ]
    },
    'real-estate-leases-sales-acquisition': {
      title: 'Real Estate Leases, Sales and Acquisition',
      description: 'Comprehensive legal support for all real estate transactions including lease agreements, property sales, and acquisitions.',
      icon: '🏠',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Real Estate Leases, Sales and Acquisition services provide complete legal support for all types of real estate transactions. We handle everything from drafting lease agreements to facilitating complex property acquisitions, ensuring all transactions are legally compliant and protect your interests.',
      whyYouNeedIt: [
        'Legal protection in property transactions',
        'Compliance with real estate laws and regulations',
        'Proper documentation and contract drafting',
        'Risk assessment and mitigation',
        'Negotiation support and legal representation',
        'Transaction completion and closing assistance'
      ],
      commonTroubles: [
        'Incomplete or inadequate legal documentation',
        'Non-compliance with real estate regulations',
        'Disputes over property ownership or boundaries',
        'Breach of contract issues',
        'Title defects and ownership problems',
        'Legal disputes with tenants or buyers'
      ],
      benefits: [
        'Complete legal protection in all transactions',
        'Professional contract drafting and review',
        'Expert negotiation and legal representation',
        'Compliance with all applicable laws',
        'Risk mitigation and legal safeguards',
        'Smooth transaction completion'
      ]
    },
    'real-estate-title-documentation': {
      title: 'Real Estate Title Documentation',
      description: 'Professional title documentation services to ensure clear property ownership and prevent disputes.',
      icon: '📋',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Real Estate Title Documentation services ensure that property ownership is clearly established and legally documented. We handle all aspects of title verification, documentation, and perfection to prevent future legal disputes and ensure clear property ownership.',
      whyYouNeedIt: [
        'Clear and marketable property title',
        'Legal protection against ownership disputes',
        'Compliance with title documentation requirements',
        'Prevention of future legal issues',
        'Professional title verification and search',
        'Title insurance and risk mitigation'
      ],
      commonTroubles: [
        'Unclear or disputed property ownership',
        'Title defects and encumbrances',
        'Missing or incomplete documentation',
        'Legal disputes over property boundaries',
        'Fraudulent title claims',
        'Inadequate title search and verification'
      ],
      benefits: [
        'Clear and marketable property title',
        'Legal protection against ownership disputes',
        'Professional title verification and documentation',
        'Risk mitigation and title insurance guidance',
        'Compliance with legal requirements',
        'Peace of mind in property ownership'
      ]
    },
    'real-estate-finance-refinancing': {
      title: 'Real Estate Finance and Refinancing',
      description: 'Legal support for real estate financing and refinancing transactions with optimal terms.',
      icon: '🏦',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Real Estate Finance and Refinancing services provide comprehensive legal support for all types of real estate financing transactions. We help secure the best terms, ensure compliance with lending regulations, and protect your interests throughout the financing process.',
      whyYouNeedIt: [
        'Optimal financing terms and conditions',
        'Legal compliance with lending regulations',
        'Risk assessment and mitigation',
        'Documentation review and preparation',
        'Negotiation support with lenders',
        'Legal protection in financing agreements'
      ],
      commonTroubles: [
        'Unfavorable financing terms and conditions',
        'Non-compliance with lending regulations',
        'Inadequate documentation for loan approval',
        'Legal disputes with lenders',
        'Refinancing complications and delays',
        'Hidden fees and unfavorable clauses'
      ],
      benefits: [
        'Optimal financing terms and rates',
        'Legal compliance and risk mitigation',
        'Professional documentation and review',
        'Expert negotiation and representation',
        'Smooth financing process',
        'Ongoing legal support and guidance'
      ]
    },
    'real-estate-development-redevelopment': {
      title: 'Real Estate Development and Redevelopment',
      description: 'Comprehensive legal services for development projects including zoning and permits.',
      icon: '🏗️',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Real Estate Development and Redevelopment services provide complete legal support for all aspects of property development projects. We handle zoning, permits, environmental compliance, construction law, and all legal requirements for successful project completion.',
      whyYouNeedIt: [
        'Zoning and land use compliance',
        'Permit acquisition and management',
        'Environmental compliance and assessment',
        'Construction law and contract management',
        'Risk assessment and mitigation',
        'Project documentation and legal support'
      ],
      commonTroubles: [
        'Zoning violations and compliance issues',
        'Permit delays and regulatory obstacles',
        'Environmental compliance violations',
        'Construction disputes and delays',
        'Contract disputes with contractors',
        'Legal liability and risk exposure'
      ],
      benefits: [
        'Smooth project development process',
        'Legal compliance and risk mitigation',
        'Professional project management support',
        'Expert guidance on regulations',
        'Comprehensive legal documentation',
        'Ongoing legal support throughout project'
      ]
    },
    'perfection-of-title': {
      title: 'Perfection of Title',
      description: 'Professional title perfection services to ensure clear and marketable property titles.',
      icon: '✅',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Perfection of Title services ensure that property titles are clear, marketable, and free from defects. We identify and resolve title issues, complete necessary documentation, and ensure that property ownership is legally established and protected.',
      whyYouNeedIt: [
        'Clear and marketable property title',
        'Legal protection against title disputes',
        'Resolution of title defects and issues',
        'Compliance with title requirements',
        'Professional title verification',
        'Title insurance and risk mitigation'
      ],
      commonTroubles: [
        'Title defects and encumbrances',
        'Unclear property ownership',
        'Missing or incomplete documentation',
        'Legal disputes over property boundaries',
        'Fraudulent title claims',
        'Inadequate title search and verification'
      ],
      benefits: [
        'Clear and marketable property title',
        'Legal protection and risk mitigation',
        'Professional title verification and documentation',
        'Resolution of title issues and defects',
        'Compliance with legal requirements',
        'Peace of mind in property ownership'
      ]
    },
    'real-estate-legal-documentation': {
      title: 'Real Estate Legal Documentation',
      description: 'Expert legal document drafting and review services for all real estate transactions.',
      icon: '📄',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Real Estate Legal Documentation services provide comprehensive document drafting and review for all types of real estate transactions. We ensure that all legal documents are accurate, compliant, and protect your interests in every transaction.',
      whyYouNeedIt: [
        'Accurate and compliant legal documentation',
        'Protection of legal interests and rights',
        'Professional document drafting and review',
        'Compliance with legal requirements',
        'Risk mitigation and legal safeguards',
        'Expert legal language and terminology'
      ],
      commonTroubles: [
        'Inaccurate or incomplete legal documentation',
        'Non-compliance with legal requirements',
        'Poorly drafted contracts and agreements',
        'Legal disputes due to documentation errors',
        'Missing or inadequate legal protections',
        'Unclear legal language and terms'
      ],
      benefits: [
        'Accurate and professional legal documentation',
        'Legal protection and risk mitigation',
        'Compliance with all applicable laws',
        'Expert legal language and terminology',
        'Comprehensive legal safeguards',
        'Professional document review and validation'
      ]
    },
    'negotiation-property-deals': {
      title: 'Negotiation of Property Deals',
      description: 'Skilled negotiation services for property transactions to secure the best possible terms.',
      icon: '🤝',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Negotiation of Property Deals services provide expert negotiation support for all types of real estate transactions. We represent your interests, secure the best possible terms, and ensure that all agreements are legally sound and favorable to your position.',
      whyYouNeedIt: [
        'Optimal terms and conditions in property deals',
        'Professional negotiation and representation',
        'Legal protection and risk mitigation',
        'Expert knowledge of market conditions',
        'Strategic negotiation planning and execution',
        'Legal compliance and documentation'
      ],
      commonTroubles: [
        'Unfavorable terms and conditions',
        'Poor negotiation outcomes',
        'Legal disputes and disagreements',
        'Inadequate legal protection',
        'Market knowledge gaps',
        'Ineffective negotiation strategies'
      ],
      benefits: [
        'Optimal terms and conditions',
        'Professional negotiation and representation',
        'Legal protection and risk mitigation',
        'Expert market knowledge and strategies',
        'Successful deal completion',
        'Ongoing legal support and guidance'
      ]
    },
    'expert-legal-advisory-services': {
      title: 'Expert Legal Advisory Services',
      description: 'Comprehensive legal advisory services to protect clients\' interests in all real estate matters.',
      icon: '⚖️',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Expert Legal Advisory Services provide comprehensive legal guidance and support for all real estate matters. We offer strategic legal advice, risk assessment, compliance guidance, and ongoing legal support to protect your interests and ensure successful outcomes.',
      whyYouNeedIt: [
        'Strategic legal guidance and planning',
        'Risk assessment and mitigation strategies',
        'Compliance with legal requirements',
        'Professional legal representation',
        'Expert knowledge of real estate law',
        'Ongoing legal support and guidance'
      ],
      commonTroubles: [
        'Legal compliance issues and violations',
        'Inadequate legal protection and safeguards',
        'Poor legal planning and strategy',
        'Legal disputes and conflicts',
        'Regulatory violations and penalties',
        'Insufficient legal knowledge and guidance'
      ],
      benefits: [
        'Strategic legal planning and guidance',
        'Comprehensive risk assessment and mitigation',
        'Legal compliance and protection',
        'Expert legal representation and support',
        'Ongoing legal guidance and assistance',
        'Successful legal outcomes and protection'
      ]
    },
    'property-due-diligence': {
      title: 'Property Due Diligence',
      description: 'Thorough property due diligence services to identify potential issues before transactions.',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Property Due Diligence services provide comprehensive investigation and analysis of properties before transactions. We identify potential issues, assess risks, and provide detailed reports to help you make informed decisions and avoid costly problems.',
      whyYouNeedIt: [
        'Comprehensive property investigation and analysis',
        'Risk identification and assessment',
        'Legal compliance verification',
        'Title and ownership verification',
        'Environmental and regulatory compliance',
        'Informed decision-making support'
      ],
      commonTroubles: [
        'Undisclosed property defects and issues',
        'Title problems and ownership disputes',
        'Environmental and regulatory violations',
        'Hidden liabilities and encumbrances',
        'Inadequate property investigation',
        'Legal compliance issues and violations'
      ],
      benefits: [
        'Comprehensive property investigation and analysis',
        'Risk identification and mitigation',
        'Legal compliance verification',
        'Informed decision-making support',
        'Cost savings and risk avoidance',
        'Professional due diligence reports'
      ]
    },
    'estate-management-administration': {
      title: 'Estate Management and Administration',
      description: 'Professional estate management and administration services with legal compliance.',
      icon: '🏛️',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Estate Management and Administration services provide comprehensive legal support for estate planning, management, and administration. We handle all legal aspects of estate matters, ensuring compliance with laws and protecting the interests of all parties involved.',
      whyYouNeedIt: [
        'Professional estate planning and management',
        'Legal compliance with estate laws',
        'Protection of estate assets and interests',
        'Expert guidance on estate administration',
        'Risk mitigation and legal safeguards',
        'Ongoing legal support and guidance'
      ],
      commonTroubles: [
        'Estate planning and administration errors',
        'Legal compliance issues and violations',
        'Disputes over estate assets and distribution',
        'Inadequate estate protection and safeguards',
        'Complex estate administration challenges',
        'Legal liability and risk exposure'
      ],
      benefits: [
        'Professional estate planning and management',
        'Legal compliance and risk mitigation',
        'Protection of estate assets and interests',
        'Expert guidance and support',
        'Smooth estate administration process',
        'Ongoing legal support and assistance'
      ]
    },
    'real-estate-investment-advisory': {
      title: 'Real Estate Investment Advisory',
      description: 'Expert investment advisory services for real estate opportunities with strategic guidance.',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100',
      whatItIs: 'Our Real Estate Investment Advisory services provide expert guidance and strategic advice for real estate investment opportunities. We help you identify profitable investments, assess risks, structure deals, and maximize returns while ensuring legal compliance and protection.',
      whyYouNeedIt: [
        'Expert investment guidance and strategy',
        'Risk assessment and mitigation',
        'Investment opportunity identification',
        'Legal compliance and protection',
        'Strategic planning and execution',
        'Ongoing investment support and guidance'
      ],
      commonTroubles: [
        'Poor investment decisions and outcomes',
        'Inadequate risk assessment and mitigation',
        'Legal compliance issues and violations',
        'Investment structure problems',
        'Market knowledge gaps and poor timing',
        'Insufficient legal protection and safeguards'
      ],
      benefits: [
        'Expert investment guidance and strategy',
        'Comprehensive risk assessment and mitigation',
        'Legal compliance and protection',
        'Strategic planning and execution',
        'Maximized investment returns',
        'Ongoing support and guidance'
      ]
    }
  };

  const currentService = services[resolvedParams.service] || services['real-estate-investments'];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsModalOpen(false);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative h-96 bg-gradient-to-br ${currentService.color}`}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center mb-6"
            >
              <div className="text-6xl mr-6">{currentService.icon}</div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {currentService.title}
                </h1>
                <p className="text-xl md:text-2xl opacity-90">
                  {currentService.description}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* What It Is */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={`bg-gradient-to-br ${currentService.bgGradient} rounded-2xl p-8`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What It Is</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {currentService.whatItIs}
                </p>
              </motion.div>

              {/* Why You Need It */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why You Need It</h2>
                <ul className="space-y-4">
                  {currentService.whyYouNeedIt.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-6 h-6 bg-gradient-to-r ${currentService.color} rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0`}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{reason}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Common Troubles */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Troubles You Can Run Into</h2>
                <ul className="space-y-4">
                  {currentService.commonTroubles.map((trouble, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{trouble}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Our Service</h2>
                <ul className="space-y-4">
                  {currentService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-6 h-6 bg-gradient-to-r ${currentService.color} rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0`}>
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white rounded-2xl shadow-lg p-8 sticky top-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get This Service</h3>
                <p className="text-gray-600 mb-6">
                  Ready to get professional legal support for your real estate needs?
                </p>
                
                <div className="space-y-4">
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className={`w-full bg-gradient-to-r ${currentService.color} text-white px-6 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Request Call Back
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full border-2 border-gray-300 text-gray-700 px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Quote
                  </motion.button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Initial consultation</li>
                    <li>• Legal document review</li>
                    <li>• Ongoing support</li>
                    <li>• Compliance guidance</li>
                  </ul>
                </div>
              </motion.div>
            </div>
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
                  placeholder={`Tell us about your ${currentService.title} needs...`}
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
