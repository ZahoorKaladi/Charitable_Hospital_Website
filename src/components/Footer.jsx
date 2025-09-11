import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

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
            <p className="text-sm opacity-80 mb-5 leading-relaxed">
              People Charitable Hospital has been providing free healthcare
              services to underserved communities since 2005. Our mission is to
              ensure quality healthcare for all.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaYoutube size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:w-12 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { to: "/", text: "Home" },
                { to: "/about", text: "About Us" },
                { to: "/service", text: "Our Services" },
                { to: "/donation", text: "Donate Now" },
                { to: "#patient-stories", text: "Patient Stories" },
                { to: "#gallery", text: "Gallery" },
                { to: "#", text: "Become a Volunteer" },
                { to: "/contact", text: "Contact Us" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.to}
                    className="text-sm hover:text-blue-300 transition-transform duration-300 transform hover:translate-x-1 inline-block"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:w-12 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0">
              Contact Information
            </h3>
            <ul className="space-y-4 text-sm opacity-90">
              <li>
                <strong>Address:</strong> Office Near Bhittai Medical Store
                Shahi Bazaar Darya Khan Marri, Sindh, Pakistan
              </li>
              <li>
                <strong>Phone:</strong> +92 300 9756015
              </li>
              <li>
                <strong>Email:</strong> Peoplescharitablehospital@gmail.com
              </li>
              <li>
                <strong>Mobile:</strong> +92 300 9756015
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 relative pb-3 after:content-[''] after:absolute after:w-12 after:h-1 after:bg-blue-600 after:bottom-0 after:left-0">
              Newsletter
            </h3>
            <p className="text-sm opacity-80 mb-4 leading-relaxed">
              Subscribe to our newsletter to receive updates about our programs
              and events.
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
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="bg-blue-950 py-4 text-center text-sm opacity-80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          &copy; 2023 Peoples Charitable Hospital. All Rights Reserved. |
          Registered Charity No. ABC-123456
        </div>
      </div>
    </footer>
  );
};

export default Footer;
