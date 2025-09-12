import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is the fetch call to your local Strapi instance
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/blog-posts?populate=*`)
      .then(res => res.json())
      .then(data => {
        const transformedPosts = data.data.map(item => ({
          id: item.id,
          // Strapi v5 flattens scalar fields, so we access them directly from item
          title: item.title,
          excerpt: item.excerpt,
          slug: item.slug,
          // Correctly handle the nested media object
          imageUrl: item.imageUrl?.url || '',
        }));
        setBlogPosts(transformedPosts);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Failed to fetch blog posts:", error);
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
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (isLoading) {
    return (
      <div className="font-poppins bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-800 text-white py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Our Blog</h1>
        <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto">
          Stay up-to-date with our latest news and community events.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={containerVariants}
          >
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                className="bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer group transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
                variants={itemVariants}
              >
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative w-full h-48 overflow-hidden">
                    <img src={`${import.meta.env.VITE_STRAPI_URL}${post.imageUrl}`}
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;