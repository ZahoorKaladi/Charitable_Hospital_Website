import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import counterData from '../data/counterData';

const CounterSection = () => {
  const [counterItems, setCounterItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Use useEffect to simulate fetching data from a backend
  useEffect(() => {
    // In a real app, this would be a fetch call to your CMS API.
    // For now, we simulate a network delay and load the local data.
    setTimeout(() => {
      setCounterItems(counterData);
      setIsLoading(false);
    }, 1000); // Simulate a 1-second network delay
  }, []);

  // Variants for the section's overall animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  if (isLoading) {
    return (
      <section className="flex items-center justify-center min-h-[300px] bg-blue-600 font-poppins">
        <div className="w-16 h-16 border-4 border-white border-t-blue-400 rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="bg-blue-600 text-white py-12 sm:py-16 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={sectionVariants}
        >
          {counterItems.map((item) => (
            <CounterItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Component to handle the animated counting
const CounterItem = ({ item }) => {
  const count = useMotionValue(0);
  const roundedCount = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, item.endValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, item.endValue, count]);

  return (
    <div ref={ref} className="space-y-1">
      <div className="font-extrabold text-3xl sm:text-4xl lg:text-5xl drop-shadow-md">
        <motion.span>{roundedCount}</motion.span>
        {item.suffix}
      </div>
      <div className="text-base sm:text-lg font-medium tracking-wide opacity-80">
        {item.text}
      </div>
    </div>
  );
};

export default CounterSection;
