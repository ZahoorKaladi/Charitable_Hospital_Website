import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}&populate=*`)
      .then(res => res.json())
      .then(data => {
        if (data.data && data.data.length > 0) {
          const item = data.data[0];
          setPost({
            id: item.id,
            title: item.title,
            author: item.author,
            date: item.date,
            fullContent: item.fullContent,
            imageUrl: item.imageUrl?.url || '',
            slug: item.slug,
          });
        } else {
          setPost(null);
        }
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(error => {
        console.error("Failed to fetch blog post:", error);
        setPost(null);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return (
      <div className="font-poppins bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="font-poppins bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Post Not Found</h1>
          <p className="text-lg text-gray-600">The blog post you are looking for does not exist.</p>
          <Link to="/blog" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="font-poppins bg-gray-50 min-h-screen pt-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10">
          {/* Post Hero Image */}
          <div className="relative w-full h-80 sm:h-96 overflow-hidden mb-8">
            <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover rounded-xl shadow-md" />
            {/*  <img src={`${import.meta.env.VITE_STRAPI_URL}${post.imageUrl}`} alt={post.title} className="w-full h-full object-cover rounded-xl shadow-md" /> */}



          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
          >
            {post.title}
          </h1>
          <div
            className="text-gray-500 text-sm mb-6"
          >
            By <span className="text-gray-700 font-medium">{post.author}</span> on {post.date}
          </div>
          
          <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: post.fullContent }}></div>
          
          <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
            <Link to="/blog" className="text-blue-600 font-bold hover:text-blue-800 transition">
              &larr; Back to All Posts
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage;
