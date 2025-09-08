import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import blogPosts from '../../data/blogPosts'; // Assuming this is the correct path

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the post that matches the URL slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    if (foundPost) {
      setPost(foundPost);
      // Smoothly scroll to the top of the page when the post changes
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      setPost(null);
    }
  }, [slug]);

  const currentPostIndex = blogPosts.findIndex(p => p.slug === slug);
  const nextPost = blogPosts[(currentPostIndex + 1) % blogPosts.length];
  const previousPost = blogPosts[(currentPostIndex - 1 + blogPosts.length) % blogPosts.length];

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
      className="font-poppins bg-gray-50 min-h-screen"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Post Hero Image */}
      <div className="relative w-full h-80 sm:h-96 overflow-hidden">
        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-10">
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
            {previousPost && (
              <Link to={`/blog/${previousPost.slug}`} className="text-blue-600 font-bold hover:text-blue-800 transition">
                &larr; Previous Post
              </Link>
            )}
            {nextPost && (
              <Link to={`/blog/${nextPost.slug}`} className="text-blue-600 font-bold hover:text-blue-800 transition ml-auto">
                Next Post &rarr;
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostPage;