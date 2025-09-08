import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-10">
          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:w-12 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0">
              About Us
            </h3>
            <p className="text-sm opacity-80 mb-5">
              People Charitable Hospital has been providing free healthcare services to underserved communities since 2005. Our mission is to ensure quality healthcare for all.
            </p>
            {/* Social Icons - Now using simple styled circles */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition">
                <span className="font-bold">FB</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition">
                <span className="font-bold">TW</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition">
                <span className="font-bold">IN</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition">
                <span className="font-bold">YT</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition">
                <span className="font-bold">LI</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:w-12 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-white transition-transform duration-300 transform hover:translate-x-1 inline-block">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-transform duration-300 transform hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link to="/service" className="text-sm hover:text-white transition-transform duration-300 transform hover:translate-x-1 inline-block">Our Services</Link></li>
              <li><Link to="/donation" className="text-sm hover:text-white transition-transform duration-300 transform hover:translate-x-1 inline-block">Donate Now</Link></li>
              <li><Link to="#patient-stories" className="text-sm hover:text-white transition-transform duration-300 transform hover:translate-x-1 inline-block">Patient Stories</Link></li>
              <li><Link to="#gallery" className="text-sm hover:text-white transition-transform duration-300 transform hover:translate-x-1 inline-block">Gallery</Link></li>
              <li><Link to="#" className="text-sm hover:text-white transition-transform duration-300 transform hover:translate-x-1 inline-block">Become a Volunteer</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-transform duration-300 transform hover:translate-x-1 inline-block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:w-12 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0">
              Contact Information
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="text-blue-400 mt-1 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>123 Healthcare Road, Karachi, Sindh, Pakistan</div>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.158l-2.012 1.21a.998.998 0 00-.573 1.09L8.27 16.612a8.001 8.001 0 005.115 5.115l1.378-2.316a.998.998 0 001.09-.573l1.21-2.012a1 1 0 011.158-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C6.234 21 2.915 14.766 2.915 6.425V5z"></path></svg>
                </div>
                <div>+92 21 1234567</div>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v10z"></path></svg>
                </div>
                <div>info@peoplecharitablehospital.org</div>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-blue-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4 14.5l-2-2m0 0l2-2m-2 2h10m0 0l-2-2m2 2l-2 2"></path></svg>
                </div>
                <div>+92 300 1234567</div>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:w-12 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0">
              Newsletter
            </h3>
            <p className="text-sm opacity-80 mb-4">
              Subscribe to our newsletter to receive updates about our programs and events.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 p-3 text-gray-800 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white p-3 rounded-r-lg hover:bg-blue-700 transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Bar */}
      <div className="bg-blue-950 py-4 text-center text-sm opacity-80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          &copy; 2023 People Charitable Hospital. All Rights Reserved. | Registered Charity No. ABC-123456
        </div>
      </div>
    </footer>
  );
};

export default Footer;