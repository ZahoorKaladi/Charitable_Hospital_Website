import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import donationData from '../data/donationData';

const DonationSection = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be a fetch call to your CMS API.
    // For now, we simulate a network delay and load the local data.
    setTimeout(() => {
      setData(donationData);
      setIsLoading(false);
    }, 1000); // Simulate a 1-second network delay
  }, []);

  const progressPercentage = data.raisedAmount ? (data.raisedAmount / data.goalAmount) * 100 : 0;

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  if (isLoading) {
    return (
      <section className="flex items-center justify-center min-h-[300px] bg-blue-800 text-white font-poppins">
        <div className="w-16 h-16 border-4 border-white border-t-blue-400 rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="bg-blue-800 text-white py-12 sm:py-20 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-10 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={containerVariants}
        >
          {/* Left Column: Call to Action */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight mb-4">
              Make a Difference Today
            </h2>
            <p className="text-sm sm:text-base opacity-80 mb-6 max-w-xl mx-auto md:mx-0">
              Your donation can provide free medical services, critical medicines, and hope to those who need it most.
            </p>
            <Link
              to="/donation"
              className="inline-block px-6 py-3 bg-white text-blue-800 rounded-lg shadow-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Donate Now
            </Link>
          </div>

          {/* Right Column: Progress Bar and Stats */}
          <div className="md:w-1/2 w-full text-white">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center">
              Annual Fundraising Goal
            </h3>
            
            {/* Progress Bar */}
            <div className="bg-white/30 rounded-full h-4 mb-3">
              <motion.div
                className="bg-green-400 h-full rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${progressPercentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              ></motion.div>
            </div>

            {/* Progress Numbers */}
            <div className="flex justify-between font-semibold text-base sm:text-lg">
              <span>Raised: PKR {data.raisedAmount.toLocaleString()}</span>
              <span>Goal: PKR {data.goalAmount.toLocaleString()}</span>
            </div>

            {/* Donation Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 text-center">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold">{data.donors}+</div>
                <div className="text-xs sm:text-sm">Donors</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold">PKR {data.annualBudget}+</div>
                <div className="text-xs sm:text-sm">Annual Budget</div>
              </div>
              <div className="space-y-1 col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-bold">{data.toPrograms}%</div>
                <div className="text-xs sm:text-sm">To Programs</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationSection;