import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Sparkles, Heart } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import bannerImg from "../assets/images/Sheargold-25.jpg";

const Hero = () => {
  return (
    <AnimateOnScroll>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Elegant background with multiple layers */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-warm-cream via-honey-glow to-sage-whisper"></div>

          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 bg-logo-gold rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blush-rose rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Main content container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div
              className="text-left space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Elegant subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center space-x-3 text-logo-gold"
              >
                <Sparkles size={20} className="animate-pulse" />
                <span className="text-sm font-medium tracking-widest uppercase">
                  Sacred Wellness
                </span>
                <Sparkles size={20} className="animate-pulse" />
              </motion.div>

              {/* Main heading with elegant typography */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="block text-text-primary font-serif">
                  A Sacred
                </span>
                <span className="block text-logo-gold font-serif mt-2">
                  Sanctuary for
                </span>
                <span className="block text-text-primary font-serif mt-2">
                  Natural Healing
                </span>
              </motion.h1>

              {/* Elegant description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-lg"
              >
                Your journey to wellness begins here, where nature's wisdom
                meets ancient healing practices. We offer a sacred space where
                transformation flows as naturally as the earth's seasons.
              </motion.p>

              {/* Elegant CTA section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="/#services"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:rotate-6" />
                  <span>Book Appointment</span>
                </motion.a>

                <motion.a
                  href="/about"
                  className="group inline-flex items-center justify-center bg-transparent border-2 border-logo-gold text-logo-gold hover:bg-logo-gold hover:text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Learn More</span>
                </motion.a>
              </motion.div>

              {/* Elegant stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex items-center space-x-8 pt-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-logo-gold">500+</div>
                  <div className="text-sm text-text-secondary">
                    Happy Clients
                  </div>
                </div>
                <div className="w-px h-8 bg-border-light"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-logo-gold">10+</div>
                  <div className="text-sm text-text-secondary">
                    Years Experience
                  </div>
                </div>
                <div className="w-px h-8 bg-border-light"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-logo-gold">100%</div>
                  <div className="text-sm text-text-secondary">
                    Natural Healing
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative">
                {/* Elegant frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-logo-gold/20 to-transparent rounded-3xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform -rotate-3"></div>

                {/* Main image container */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <img
                    src={bannerImg}
                    alt="Healing Sanctuary"
                    className="w-full h-[500px] md:h-[600px] object-cover"
                  />

                  {/* Elegant overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Heart className="h-6 w-6 text-logo-gold" />
                  </div>
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
};

export default Hero;
