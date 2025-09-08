import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; 
import { missionText, sliderData } from '../data/missionData';

const MissionSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [text, setText] = useState(missionText);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };
  
  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-gray-50 py-14 sm:py-20 font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Text Content */}
          <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-5 leading-tight">
              {text.title}
            </h2>
            {text.text.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-gray-700 mb-3 leading-relaxed">
                    {paragraph}
                </p>
            ))}
            <Link to="/about" className="w-fit mx-auto md:mx-0 px-6 py-2.5 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition font-semibold text-sm">
              Learn More About Us
            </Link>
          </div>

          {/* Image Slider Gallery */}
          <div className="md:w-1/2 overflow-hidden rounded-xl shadow-xl relative h-56 sm:h-80 lg:h-96 mt-6 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={sliderData[currentIndex].imageUrl}
                alt={sliderData[currentIndex].caption}
                className="w-full h-full object-cover absolute inset-0"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={imageVariants}
              />
            </AnimatePresence>
            <div className="absolute inset-x-0 bottom-0 bg-black bg-opacity-60 text-white text-center py-2 px-4 text-xs sm:text-sm font-medium z-10">
              {sliderData[currentIndex].caption}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
