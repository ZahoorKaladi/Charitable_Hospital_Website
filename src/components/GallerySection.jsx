import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const GallerySection = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // This is the fetch call to your local Strapi instance
    fetch('http://localhost:1337/api/galleries?populate=*')
      .then(res => res.json())
      .then(({ data }) => {
        const transformedItems = data.flatMap(galleryEntry =>
          galleryEntry.imageUrl.map(image => ({
            id: image.id,
            caption: galleryEntry.caption,
            imageUrl: image.url || '',
          }))
        );
        setGalleryItems(transformedItems);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch gallery items:", error);
        setIsLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (isLoading) {
    return (
      <section className="flex items-center justify-center min-h-[400px] bg-white font-poppins">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 sm:py-24 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
            Our Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Moments from our healthcare journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="relative overflow-hidden rounded-md group h-[250px] cursor-pointer"
              variants={itemVariants}
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={`http://localhost:1337${item.imageUrl}`}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div
                className="absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"
              >
                <div className="text-white text-sm sm:text-base font-semibold">
                  {item.caption}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Modal for full-screen image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 cursor-pointer"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={`http://localhost:1337${selectedImage.imageUrl}`}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-lg shadow-xl max-h-[80vh]"
              />
              <div className="mt-4 text-center text-white text-sm sm:text-base">
                {selectedImage.caption}
              </div>
              <button
                className="absolute top-2 right-2 p-2 rounded-full bg-white text-gray-800 hover:bg-gray-200 transition"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;