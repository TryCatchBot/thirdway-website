'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Bayo Lawal',
      position: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      bio: 'Visionary leader with over 15 years in real estate development and investment. Passionate about creating sustainable communities.',
      social: {
        linkedin: 'https://linkedin.com/in/bayolawal',
        twitter: 'https://twitter.com/bayolawal',
        instagram: 'https://instagram.com/bayolawal'
      }
    },
    {
      name: 'Lukman Shobowale',
      position: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      bio: 'Operations expert specializing in project management and client relations. Committed to delivering excellence in every project.',
      social: {
        linkedin: 'https://linkedin.com/in/lukmanshobowale',
        twitter: 'https://twitter.com/lukmanshobowale',
        instagram: 'https://instagram.com/lukmanshobowale'
      }
    },
    {
      name: 'Emmanuel Taiwo',
      position: 'Site and Inspection Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      bio: 'Technical specialist ensuring quality and compliance in all our projects. Expert in construction management and safety protocols.',
      social: {
        linkedin: 'https://linkedin.com/in/emmanueltaiwo',
        twitter: 'https://twitter.com/emmanueltaiwo',
        instagram: 'https://instagram.com/emmanueltaiwo'
      }
    },
    {
      name: 'Kehinde Afolayan',
      position: 'Human Resource Manager (People & Culture)',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80',
      bio: 'People and culture champion fostering excellence and growth. Dedicated to building inclusive and high-performing teams.',
      social: {
        linkedin: 'https://linkedin.com/in/kehindeafolayan',
        twitter: 'https://twitter.com/kehindeafolayan',
        instagram: 'https://instagram.com/kehindeafolayan'
      }
    },
    {
      name: 'Abalaka Deborah',
      position: 'Team Lead, Customer Service',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      bio: 'Customer experience expert ensuring client satisfaction and retention. Passionate about creating memorable customer journeys.',
      social: {
        linkedin: 'https://linkedin.com/in/abalakadeborah',
        twitter: 'https://twitter.com/abalakadeborah',
        instagram: 'https://instagram.com/abalakadeborah'
      }
    }
  ];

  const coreValues = [
    {
      title: 'Integrity',
      description: 'We keep our promises and agreements. We are honest, trustworthy and ethical in our all actions.'
    },
    {
      title: 'Versatility',
      description: 'We are professional and adaptable to the varied needs of our clients.'
    },
    {
      title: 'Team Work',
      description: 'We are committed to achieving common goals as a team.'
    },
    {
      title: 'Prompt delivery',
      description: 'We are prompt with allocation of assets and payment of returns on Investment.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .group-hover\\:rotate-y-180:hover {
          transform: rotateY(180deg);
        }
      `}</style>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Making realty dreams a reality
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              As a customer-centric property platform, we are dedicated to making the property journey easier, more fun, and more connected at every step. Whether it's buying, investments, partnerships, or everything in between, we provide a variety of options to satisfy the needs of our customers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                OUR VISION
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                To be the best real estate company providing unmatched real estate solutions to people from all walks of life.
              </p>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                OUR MISSION
              </h2>
              <p className="text-xl text-gray-600">
                To build strong, long term and proactive relationships with clients by creating exceptional real estate investments and delivering best results.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80"
                  alt="ThirdWay Office"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-gray-100">
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
                className="text-center bg-white p-6 rounded-lg shadow-lg"
              >
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


      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know our multi-disciplinary team members with extensive experience in their respective fields.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative h-64 w-64 mx-auto mb-4 perspective-1000">
                  {/* Card Container */}
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                    {/* Front Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden">
                      <div className="relative h-full w-full rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex flex-col items-center justify-center p-6">
                      <h3 className="text-white text-lg font-bold mb-2">
                        {member.name}
                      </h3>
                      <p className="text-blue-100 text-sm font-medium mb-3">
                        {member.position}
                      </p>
                      <p className="text-white text-xs text-center mb-4">
                        {member.bio}
                      </p>
                      
                      {/* Social Media Icons */}
                      <div className="flex space-x-3">
                        <a
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.023-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                        <a
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                          </svg>
                        </a>
                        <a
                          href={member.social.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875zm-7.83 1.297c-2.026 0-3.673 1.647-3.673 3.673s1.647 3.673 3.673 3.673 3.673-1.647 3.673-3.673-1.647-3.673-3.673-3.673z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Name and Position (always visible) */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium">
                  {member.position}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join ThirdWay and help people achieve their realty dreams
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              ThirdWay's mission is To build strong, long term and proactive relationships with clients by creating exceptional real estate investments and delivering best results. You want to be part of this dream? Join us!
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Join us
            </button>
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
              Reinventing comfort, building smiles & leading you home.
            </h2>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              We love hearing from you.
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team maintains subtle accessibility and working relationships which guarantee our clients full-time attention whenever they need our help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Call Us or Send Text
                </h3>
                <p className="text-blue-600 font-semibold mb-2">
                  (+234)9062019993
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
                <p className="text-blue-600 font-semibold mb-2">
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

      {/* Office Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Office Operating Hours:
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Monday – Friday 8am – 4pm
            </p>
            <p className="text-xl text-gray-600 mb-8">
              Inspections: Tuesday, Thursday & Saturday
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ThirdWay
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Headquarter
              </h4>
              <p className="text-gray-600 mb-4">
                Plot 45, No 35A Christ Avenue Street, Off Admiralty Road, Lekki Phase I, Lagos Nigeria.
              </p>
              <p className="text-blue-600 font-semibold">
                <strong>Tel:</strong> (+234)9062019993
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ThirdWay
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Abuja Office
              </h4>
              <p className="text-gray-600 mb-4">
                Harmony Hub 2, along fate (shoprite) road, Abuja, FCT
              </p>
              <p className="text-blue-600 font-semibold">
                <strong>Tel:</strong> (+234)9062019992
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
