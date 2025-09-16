import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TeamCarousel = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 🔹 This is the API fetch call
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/team-members?populate=*`)
      .then(res => res.json())
      .then(data => {
        // Corrected data transformation to access nested attributes
        const transformedMembers = data.data.map(item => ({
          id: item.id,
          name: item.attributes.name,
          title: item.attributes.title,
          // Correctly access the nested image URL from Cloudinary
          imageUrl: item.attributes.imageUrl.data.attributes.url,
        }));
        setTeamMembers(transformedMembers);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch team members:", error);
        setIsLoading(false);
      });

    // 🔹 The static data code is now commented out
    /*
    setTeamMembers(teamMembersData);
    setIsLoading(false);
    */
  }, []);

  // Auto-sliding effect
  useEffect(() => {
    if (teamMembers.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [teamMembers]);

  const slideVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 1 } },
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  const visibleMembers =
    teamMembers.length >= 3
      ? [
          teamMembers[currentIndex],
          teamMembers[(currentIndex + 1) % teamMembers.length],
          teamMembers[(currentIndex + 2) % teamMembers.length],
        ]
      : teamMembers;

  return (
    <div className="relative max-w-7xl mx-auto overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4"
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {visibleMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-xl p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-40 h-45 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-200">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
            </div>
              <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
              <p className="text-sm text-blue-600 font-semibold">{member.title}</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TeamCarousel;
