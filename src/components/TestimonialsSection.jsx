import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    name: "Ahmed Khan",
    title: "Factory Worker",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80",
    quote:
      "Jab mera kahin aur koi sahara na tha hadsay ke baad, toh People Charitable Hospital ne mujhe apna bana liya aur woh surgery ki jo mujhe zaroorat thi. Unhon ne sirf meri taang hi nahi bachai balki meri rozi bhi lauta di.",
  },
  {
    id: 2,
    name: "Fatima Bibi",
    title: "Housewife",
    image:
      "https://images.unsplash.com/photo-1595152778350-5ba671c1b0eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote:
      "Meri walida ki tabiyat bahut kharab ho gai thi, aur hum pareshan the ke kahan jayen. People Charitable Hospital ne unka muft ilaaj kiya aur ab woh bilkul theek hain.",
  },
  {
    id: 3,
    name: "Imran Ali",
    title: "Student",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote:
      "Mujhe bukhar aur infection ho gaya tha aur mere paas doctor ko dikhane ke paise nahi the. Hospital mein mujhe dawai bhi mili aur achi salah bhi.",
  },
  {
    id: 4,
    name: "Aisha Jamil",
    title: "Teacher",
    image:
      "https://images.unsplash.com/photo-1628157500122-2976d2a7c4a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    quote:
      "Main ne kabhi socha bhi nahi tha ke aisi behtareen health care muft mil sakti hai. Hospital ne hamari family ko sahara diya jab hum mushkil mein the.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Smooth slide animation
  const slideVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section className="py-16 sm:py-24 font-poppins bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Patient Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories of hope and healing from our patients
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center w-full"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Bigger image */}
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 shadow-md">
                <img
                  src={testimonialsData[currentIndex].image}
                  alt={testimonialsData[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <blockquote className="text-lg italic text-gray-700 mb-6 leading-relaxed max-w-2xl">
                "{testimonialsData[currentIndex].quote}"
              </blockquote>
              <div className="font-semibold text-gray-900 text-lg">
                {testimonialsData[currentIndex].name}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonialsData[currentIndex].title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
