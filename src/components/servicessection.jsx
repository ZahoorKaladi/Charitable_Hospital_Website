import React, { useState, useEffect } from "react";
import servicesHomepageData from "../data/servicesHomepageData"; // Static data
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Ambulance,
  Baby,
  FlaskConical,
  Pill,
  HeartPulse,
} from "lucide-react";

const iconComponents = {
  Stethoscope,
  Ambulance,
  Baby,
  FlaskConical,
  Pill,
  HeartPulse,
};

const ServicesSection = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Commented out the live API fetch for local development
    /*
    fetch(`${import.meta.env.VITE_STRAPI_URL}/api/services?populate=*`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched services:", data);

        if (!data || !data.data) {
          console.error("No data received from Strapi:", data);
          setServices([]);
          setIsLoading(false);
          return;
        }

        const transformedServices = data.data
          .filter((item) => item && item.attributes)
          .map((item) => ({
            id: item.id,
            title: item.attributes.title || "Untitled",
            description: item.attributes.description || "No description available",
            slug: item.attributes.slug || "",
            date: item.attributes.date || null,
            icon:
              iconComponents[item.attributes.iconName] ||
              Stethoscope,
          }));

        setServices(transformedServices.slice(0, 6));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch services:", error);
        setIsLoading(false);
      });
    */

    // Fetching data from the local static file
    setTimeout(() => {
      setServices(servicesHomepageData);
      setIsLoading(false);
    }, 1000);
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
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  if (isLoading) {
    return (
      <section className="flex items-center justify-center min-h-[300px] bg-gray-100 font-poppins">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 sm:py-24 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive healthcare services provided free of cost to those in need.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.id}
                className="group bg-white rounded-xl shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                variants={itemVariants}
              >
                <Link to={`/service/${service.slug}`}>
                  <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                    <div className="bg-blue-600 text-white rounded-full p-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-700">
                      {ServiceIcon && <ServiceIcon size={48} />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                    {service.date && (
                      <p className="text-sm text-gray-500">
                        {new Date(service.date).toLocaleDateString()}
                      </p>
                    )}
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;