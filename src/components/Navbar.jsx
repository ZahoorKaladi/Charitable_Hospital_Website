import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // icons
import Hospital_logo from '../assets/Hospital_logo.png';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // This useEffect hook listens for scroll events to change the navbar's style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo */}
<Link to="/" className="flex items-center gap-3">
          <img src={Hospital_logo} alt="Hospital_Logo" className="h-10" />
        </Link>
        {/*<Link to="/" className="flex items-center gap-3">Charitable Hospital</Link>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center gap-8 relative font-semibold transition-all duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          <li className="group">
            <Link to="/" className="relative hover:text-blue-600 transition-colors duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li className="group">
            <Link to="/service" className="relative hover:text-blue-600 transition-colors duration-300">
              Service
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li className="group">
            <Link to="/about" className="relative hover:text-blue-600 transition-colors duration-300">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li className="group">
            <Link to="/contact" className="relative hover:text-blue-600 transition-colors duration-300">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </li>
          <li className="group">
            <Link to="/Blog" className="relative hover:text-blue-600 transition-colors duration-300">
              Blog Posts
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          </li>
          <Link to="/donation" className="hidden md:block bg-blue-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition">Donate Now</Link>
        </ul>
       

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown - Conditionally Renders with a smooth animation */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button className="text-gray-800" onClick={() => setOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col py-4 space-y-2 font-medium text-gray-700">
          <li className="w-full">
            <Link 
              to="/" 
              onClick={() => setOpen(false)}
              className="block w-full text-center py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link 
              to="/service" 
              onClick={() => setOpen(false)}
              className="block w-full text-center py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Services
            </Link>
          </li>
          <li className="w-full">
            <Link 
              to="/contact" 
              onClick={() => setOpen(false)}
              className="block w-full text-center py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact
            </Link>
          </li>
          <li className="w-full">
          </li>
          <Link to="/donation" onClick={() => setOpen(false)} className="bg-blue-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md transition w-48 mt-4 mx-auto">Donate Now</Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;