import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import bannerImg from "../assets/images/banner.jpeg";

const Hero = () => {
  return (
    <AnimateOnScroll>
      <section className="py-12 md:py-20 text-center relative">
        {/* Soft healing background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-purple-50/20 to-background"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="w-full max-w-5xl mx-auto mb-8"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="aspect-w-16 aspect-h-9 rounded-t-full overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={bannerImg}
                alt="Healing Sanctuary"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-logo-gold mb-4 font-serif leading-tight">
              A Sacred Space for Healing & Renewal
            </p>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Your journey to peace and wellness begins here. We offer a sacred
            space for transformation, compassion, and profound healing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/#services"
              className="group inline-flex items-center bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <Calendar className="mr-3 h-6 w-6 transition-transform duration-300 group-hover:rotate-6" />
              <span>BOOK APPOINTMENT</span>
            </a>
          </motion.div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Hero;
