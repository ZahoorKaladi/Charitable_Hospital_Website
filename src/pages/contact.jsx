import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import axios from "axios";

const headerMessages = [
  {
    title: "We’d Love to Hear From You",
    subtitle: "Reach out with questions, feedback, or just to say hi!",
  },
  {
    title: "Get in Touch Anytime",
    subtitle: "Our team is here to support you around the clock.",
  },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("initial");
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
    setFormData({ ...formData, [name]: value }); // ✅ controlled fields
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus("submitting");

    try {
      await axios.post("http://localhost:1337/api/contact-submissions", {
        data: formData,
      });
      setSubmissionStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" }); // ✅ reset
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmissionStatus("error");
    }
  };

  const headerTextVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.6 } },
  };

  return (
    <div className="font-poppins bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div
        className="relative py-24 sm:py-32 text-white text-center overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&q=80&w=1470')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
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

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            {/* Form */}
            <div className="md:w-1/2 w-full p-8 bg-white rounded-xl shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
                Send Us a Message
              </h2>

              {submissionStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
                  <p className="font-bold">Message sent successfully!</p>
                  <p className="text-sm">We’ll get back to you soon.</p>
                </div>
              )}

              {submissionStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
                  <p className="font-bold">Something went wrong.</p>
                  <p className="text-sm">Please try again later.</p>
                </div>
              )}

              {submissionStatus === "initial" && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-blue-600 text-white rounded-md shadow-lg font-bold hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="md:w-1/2 w-full p-8 bg-white rounded-xl shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                Contact Information
              </h2>
              <ul className="space-y-6">
                <li className="flex items-center gap-4">
                  <MapPin size={28} className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      123 Healthcare Road, Karachi, Sindh, Pakistan
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Phone size={28} className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+92 21 1234567</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Mail size={28} className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">
                      info@peoplecharitablehospital.org
                    </p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <Clock size={28} className="text-blue-600" />
                  <div>
                    <h4 className="font-bold text-gray-800">Working Hours</h4>
                    <p className="text-gray-600">
                      24/7 Emergency, OPD: 9 AM - 5 PM
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
