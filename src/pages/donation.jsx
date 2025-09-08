import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const headerMessages = [
  {
    title: "Donate and Help Us",
    subtitle: "Your support provides free medical services and hope to the community."
  },
  {
    title: "Your Generosity Saves Lives",
    subtitle: "Every rupee you donate helps a family in need."
  }
];

const DonationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    donationType: 'General',
  });
  const [submissionStatus, setSubmissionStatus] = useState('initial');
  const navigate = useNavigate();
  const [headerIndex, setHeaderIndex] = useState(0);

  // Cycle header messages
  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderIndex((prevIndex) => (prevIndex + 1) % headerMessages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDonationTypeChange = (type) => {
    setFormData({ ...formData, donationType: type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    try {
      await axios.post('http://localhost:1337/api/donation-submissions', { data: formData });
      setSubmissionStatus('success');
      setTimeout(() => {
        navigate('/about'); 
      }, 3000);
    } catch (error) {
      console.error('Error submitting donation:', error);
      setSubmissionStatus('error');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const headerTextVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div
        className="relative py-24 sm:py-32 text-white text-center overflow-hidden"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1542810634-71277d95ae51?auto=format&fit=crop&q=80&w=1470')`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        <div className="absolute inset-0 bg-blue-800 opacity-90"></div>
        <AnimatePresence mode="wait">
          <motion.div
            key={headerIndex}
            className="relative z-10"
            variants={headerTextVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-2 drop-shadow-lg">
              {headerMessages[headerIndex].title}
            </h1>
            <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto">
              {headerMessages[headerIndex].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Donation Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <motion.div
            className="flex flex-col md:flex-row gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            {/* Left Column: Form */}
            <motion.div
              className="md:w-1/2 w-full p-8 bg-white rounded-xl shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                Tell Us Your Details
              </h2>

              {submissionStatus === 'success' && (
                <motion.div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-bold">Thank you for your generosity!</p>
                  <p className="text-sm">Our team will contact you shortly.</p>
                </motion.div>
              )}

              {submissionStatus === 'error' && (
                <motion.div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="font-bold">Submission failed.</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </motion.div>
              )}

              {submissionStatus === 'initial' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Donation Type</label>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['General', 'Zakat', 'Sadqah', 'Monthly'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleDonationTypeChange(type)}
                          className={`px-4 py-3 rounded-full font-medium text-sm transition-colors ${
                            formData.donationType === type
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount (PKR)</label>
                    <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleInputChange} className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 5000" />
                  </div>
                  <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white rounded-md shadow-lg font-bold hover:bg-blue-700 transition">
                    Submit Details
                  </button>
                </form>
              )}
            </motion.div>
            
            {/* Right Column: Contact Info */}
            <motion.div
              className="md:w-1/2 w-full p-8 bg-white rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Our Details</h2>
              <ul className="space-y-6">
                <motion.li className="flex items-center gap-4" variants={itemVariants}>
                  <MapPin size={28} className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">123 Healthcare Road, Karachi, Sindh, Pakistan</p>
                  </div>
                </motion.li>
                <motion.li className="flex items-center gap-4" variants={itemVariants}>
                  <Phone size={28} className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+92 21 1234567</p>
                  </div>
                </motion.li>
                <motion.li className="flex items-center gap-4" variants={itemVariants}>
                  <Mail size={28} className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@peoplecharitablehospital.org</p>
                  </div>
                </motion.li>
                <motion.li className="flex items-center gap-4" variants={itemVariants}>
                  <Clock size={28} className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Operating Hours</h4>
                    <p className="text-gray-600">24/7 Emergency, General OPD: 9 AM - 5 PM</p>
                  </div>
                </motion.li>
              </ul>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-4">Connect with Us</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-blue-600 transition">
                    <Facebook size={28} />
                  </a>
                  <a href="#" className="hover:text-blue-600 transition">
                    <Twitter size={28} />
                  </a>
                  <a href="#" className="hover:text-blue-600 transition">
                    <Instagram size={28} />
                  </a>
                  <a href="#" className="hover:text-blue-600 transition">
                    <Linkedin size={28} />
                  </a>
                  <a href="https://wa.me/+923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                    <MessageCircle size={28} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
