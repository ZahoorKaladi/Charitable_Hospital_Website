// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Donation from "./pages/donation";
//import BlogPage from "./pages/blog"; // <-- Your main blog page
import BlogPostPage from "./pages/blog/[slug]"; // <-- Import the new dynamic page
//import Blog from "./pages/Blog";
import Blog from "./pages/blog";
import ServiceDetailPage from "./pages/services/[slug]";
import VolunteerPage from "./pages/volunteer";

function App() {
  return (
    <div>
      {/*
        The Navbar and Footer are now in Layout.jsx.
        You only define your routes here.
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/blog" element={<Blog />} /> {/* <-- Route for the list of all post*/}
        <Route path="/blog/:slug" element={<BlogPostPage />} /> 
       <Route path="/volunteer" element={<VolunteerPage />} />
        
        {/* <-- New dynamic route for a single post */}
        <Route path="/service/:slug" element={<ServiceDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;