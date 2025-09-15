import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const content = [
  {
    title: "Compassionate Care, For Every Life",
    description:
      "Every donation helps us provide free medical services to underserved communities. Together, we can bring hope and healing.",
  },
  {
    title: "Peoples Charitable Hospital, Saving Futures",
    description:
      "Your support funds that leads to save the life of patients through treatments and cures for life-threatening diseases.",
  },
  {
    title: "Empowering Communities, Building Health",
    description:
      "Join our mission to build healthier communities through education, preventive care, and accessible medical services.",
  },
];

// Urdu donation quotes
const urduQuotes = [
  " “آپ کا عطیہ… کسی کی زندگی کا سہارا!",
  " ہاتھ بڑھائیں، دعا پائیں پیپلز چیریٹیبل اسپتال کی تعمیر میں حصہ ڈالیں۔”",
  " ایک اینٹ آپ کی طرف سے… ایک مسکراہٹ مریض کی طرف سے۔",
  " پیپلز چیریٹیبل اسپتال انسانیت کا گھر، آپ کے عطیات کا ثمر۔",
  " یہ عمارت صرف پتھر نہیں… یہ امید ہے! آئیں اس امید کو مکمل کریں۔",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [urduIndex, setUrduIndex] = useState(0);

  // English content slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Urdu quotes slider
  useEffect(() => {
    const interval = setInterval(() => {
      setUrduIndex((prevIndex) => (prevIndex + 1) % urduQuotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  const imageURL =
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1353&q=80";

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
          >
            {/* English Title */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug tracking-tight mb-6 drop-shadow-md">
              {content[currentIndex].title}
            </h1>

            {/* English Description */}
            <p className="text-base sm:text-lg md:text-xl font-medium mb-6 max-w-2xl mx-auto text-gray-100/90 leading-relaxed">
              {content[currentIndex].description}
            </p>

            {/* Urdu Quotes Slider */}
            <AnimatePresence mode="wait">
              <motion.p
                key={urduIndex}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={textVariants}
                className="text-xl md:text-2xl font-urdu font-semibold text-yellow-200 drop-shadow-md mt-4"
                dir="rtl"
              >
                {urduQuotes[urduIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 space-y-4 sm:space-y-0 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            to="/donation"
            className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition duration-300 rounded-xl font-semibold shadow-lg"
          >
            Donate Now
          </Link>
          <Link
            to="/volunteer"
            className="w-full sm:w-auto px-8 py-3 border-2 border-white hover:bg-white hover:text-blue-700 transition duration-300 rounded-xl font-semibold shadow-lg"
          >
            Become a Volunteer
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
