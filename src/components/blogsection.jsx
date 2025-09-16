import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is the fetch call to your local Strapi instance
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/blog-posts?populate=*`)
      .then(res => res.json())
      .then(data => {
        const transformedPosts = data.data.map(item => ({
          id: item.id,
          title: item.title,
          excerpt: item.excerpt,
          slug: item.slug,
          imageUrl: item.imageUrl?.url || '', // Correctly handle the nested media object in Strapi v5
        }));
        setBlogPosts(transformedPosts);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch blog posts:", error);
        setIsLoading(false);
      });
  }, []);

  // Auto-sliding effect
  useEffect(() => {
    if (blogPosts.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
      }, 8000); 
      return () => clearInterval(interval);
    }
  }, [blogPosts]);

  const slideVariants = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
    exit: { x: '-100%', opacity: 0, transition: { duration: 1 } },
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[450px] bg-gray-50 py-16">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Ensure there are at least 3 posts to display
  const visiblePosts = blogPosts.length >= 3 ? [
    blogPosts[currentIndex],
    blogPosts[(currentIndex + 1) % blogPosts.length],
    blogPosts[(currentIndex + 2) % blogPosts.length],
  ] : blogPosts;

  return (
    <section className="bg-gray-50 py-16 sm:py-24 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Stay up-to-date with our latest news, events, and patient stories.
          </p>
        </motion.div>

        <div className="relative overflow-hidden w-full max-w-7xl mx-auto min-h-[450px]">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {visiblePosts.map((post) => (
                <Link
                  to={`/blog/${post.slug}`}
                  key={post.id}
                  className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer group transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-blue-600 drop-shadow">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
