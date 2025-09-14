import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Lightbulb, Users, HandHeart } from 'lucide-react';
//import TeamCarousel from '../components/teamcarousel';

const teamMembers = [
  {
    name: "Dr. Ayesha Malik",
    title: "Chief Medical Officer",
    imageUrl: "https://images.unsplash.com/photo-1559816538-4e8998ae3d99?auto=format&fit=crop&q=80&w=1470",
  },
  {
    name: "Dr. Zeeshan Ali",
    title: "Head of Pediatrics",
    imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1470",
  },
  {
    name: "Hina Jamil",
    title: "Head Nurse",
    imageUrl: "https://images.unsplash.com/photo-1559828940-d2c6c7e23112?auto=format&fit=crop&q=80&w=1470",
  },
  {
    name: "Imran Khan",
    title: "Volunteer Coordinator",
    imageUrl: "https://images.unsplash.com/photo-1622901243734-d02f5a43b02b?auto=format&fit=crop&q=80&w=1470",
  },
  {
    name: "Sana Akram",
    title: "Community Outreach",
    imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1470",
  },
  {
    name: "Ali Raza",
    title: "Head of Diagnostics",
    imageUrl: "https://images.unsplash.com/photo-1584308666351-916c57f9202a?auto=format&fit=crop&q=80&w=1470",
  },
];

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-800 text-white py-20 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our story of compassion, commitment, and community health.
        </motion.p>
      </div>

      {/* Mission & Vision Section (using the grid of cards) */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerVariants}
          >
            <motion.div className="md:w-1/3 text-center bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300" variants={itemVariants}>
              <Lightbulb size={64} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Mission</h3>
              <p className="text-gray-600">To provide free, high-quality healthcare services to all individuals in need, regardless of their financial status.</p>
            </motion.div>
            <motion.div className="md:w-1/3 text-center bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300" variants={itemVariants}>
              <Users size={64} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Vision</h3>
              <p className="text-gray-600">A community in Karachi and Sindh where every person has access to the healthcare they deserve, leading to a healthier and more prosperous society.</p>
            </motion.div>
            <motion.div className="md:w-1/3 text-center bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300" variants={itemVariants}>
              <HandHeart size={64} className="mx-auto mb-4 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Core Values</h3>
              <p className="text-gray-600">Compassion, integrity, and a tireless commitment to serving humanity with excellence and dignity.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12 lg:gap-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={staggerVariants}
          >
            <motion.div className="md:w-1/2 rounded-xl overflow-hidden shadow-2xl" variants={itemVariants}>
              <img
                src="https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Hospital Founding"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div className="md:w-1/2" variants={itemVariants}>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Our Founding Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">Founded in 2005, People Charitable Hospital was born from a simple yet powerful belief: that healthcare is a fundamental human right, not a privilege. Our founders, a small group of doctors and community leaders, saw a pressing need for quality medical care in underserved areas of Karachi, Sindh, Pakistan.</p>
              <p className="text-gray-600 leading-relaxed">With a single clinic and a handful of dedicated volunteers, we began our journey. Today, we have grown into a full-fledged hospital, serving thousands of patients annually and standing as a beacon of hope for those who have nowhere else to turn, providing free services to the people of Karachi and beyond.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Team Carousel Section 
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Meet Our Dedicated Team
          </motion.h2>
          <TeamCarousel />
        </div>
      </section>*/}

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-16 sm:py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg sm:text-xl opacity-80 mb-6 max-w-2xl mx-auto">
            Become a part of our family. Your time, skills, or donations can save lives.
          </p>
          <Link
            to="/donation"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg shadow-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Donate or Volunteer
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;