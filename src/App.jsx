// src/App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Donation from "./pages/donation";
import Blog from "./pages/blog";
import BlogPostPage from "./pages/blog/[slug]";
import ServiceDetailPage from "./pages/service/[slug]";
import Volunteer from "./pages/volunteer";
import Layout from "./components/Layout";
import ScrollToTop from "./components/scrolltotop";

function App() {
  return (
    <BrowserRouter>
      {/* This is the main fix. overflow-x-hidden prevents the horizontal scrollbar 
        that was causing the page to be dragged left and right on mobile. 
      */}
      <div className="overflow-x-hidden">
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/service/:slug" element={<ServiceDetailPage />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
