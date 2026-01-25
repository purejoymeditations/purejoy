import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Heart, Sparkles, Calendar } from "lucide-react";
import logo from "../assets/images/High Resolution Logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#008080] text-white mt-auto border-t border-logo-gold/20 overflow-hidden">
      {/* Decorative SVG Wave Separator */}
      <div className="absolute top-0 left-0 w-full h-16 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e9e0d2" />
              <stop offset="50%" stopColor="#d4b26b" />
              <stop offset="100%" stopColor="#e9e0d2" />
            </linearGradient>
          </defs>
          <path
            d="M0,120 C300,60 600,120 900,60 C1050,30 1200,90 1200,120 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#008080] animate-gradient-x" />

      {/* Floating Natural Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Golden Stars */}
        <div className="absolute bottom-20 right-1/5 text-logo-gold animate-twinkle">
          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute bottom-16 left-1/3 text-logo-gold animate-twinkle-delayed">
          <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute bottom-24 right-1/3 text-logo-gold animate-twinkle-slow">
          <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute bottom-12 left-2/3 text-logo-gold animate-twinkle">
          <svg className="w-1 h-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* Sparkle Elements */}
        <div className="absolute bottom-20 right-1/8 text-logo-gold animate-sparkle">
          <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" />
          </svg>
        </div>
        <div className="absolute bottom-16 left-1/2 text-logo-gold animate-sparkle-delayed">
          <svg className="w-1 h-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" />
          </svg>
        </div>

        {/* Glowing Orbs */}
        <div className="absolute bottom-24 right-1/12 w-0.5 h-0.5 bg-logo-gold/50 rounded-full animate-glow" />
        <div className="absolute bottom-16 left-3/4 w-0.5 h-0.5 bg-logo-gold/40 rounded-full animate-glow-delayed" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          {/* About Section */}
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-logo-gold/5 rounded-full blur-md"></div>
                <img
                  src={logo}
                  alt="Purejoy Logo"
                  className="h-12 w-auto relative z-10 mix-blend-multiply"
                />
              </div>
              <h3 className="text-xl font-semibold text-logo-gold font-serif ml-3">
                Purejoy
              </h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Your sanctuary for healing, growth, and inner peace. Where
              nature's wisdom meets ancient healing practices.
            </p>
            <div className="flex items-center mt-4 text-logo-gold">
              <Heart className="w-4 h-4 mr-2" />
              <span className="text-sm">Made with love & intention</span>
            </div>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h4 className="font-semibold text-logo-gold font-serif mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-white/80">
                <Mail className="w-4 h-4 mr-3 text-logo-gold flex-shrink-0 mt-0.5" />
                <span className="break-words">
                  info@puregoldholisiticwellbeing.com
                </span>
              </li>
              <li className="flex items-start text-white/80">
                <MapPin className="w-4 h-4 mr-3 text-logo-gold flex-shrink-0 mt-0.5" />
                <span>
                  1 Spring St<br />
                  Maldon, Victoria 3463
                </span>
              </li>
              <li className="flex items-center text-white/80">
                <Phone className="w-4 h-4 mr-3 text-logo-gold flex-shrink-0" />
                <span>+61 0419505919</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div className="col-span-1">
            <h4 className="font-semibold text-logo-gold font-serif mb-4">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start text-white/80">
                <Calendar className="w-4 h-4 mr-3 mt-0.5 text-logo-gold flex-shrink-0" />
                <span>
                  <span className="font-medium block">Wednesdays - Thursday</span>
                  <span className="text-white/70 block mt-0.5">12pm to 4pm</span>
                </span>
              </li>
              <li className="flex items-start text-white/80">
                <Calendar className="w-4 h-4 mr-3 mt-0.5 text-logo-gold flex-shrink-0" />
                <span>
                  <span className="font-medium block">Friday - Sunday</span>
                  <span className="text-white/70 block mt-0.5">10am to 5pm</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="col-span-1">
            <h4 className="font-semibold text-logo-gold font-serif mb-4">
              Stay Connected
            </h4>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Receive updates, news, and special offers for your wellness
              journey.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2.5 rounded-l-md text-sm bg-white/10 border border-logo-gold/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-logo-gold/50 focus:border-logo-gold transition-colors duration-300"
              />
              <motion.button
                type="submit"
                className="bg-logo-gold text-slate-900 px-4 py-2.5 rounded-r-md hover:bg-logo-gold/80 transition-all duration-300 font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                &rarr;
              </motion.button>
            </form>
            <p className="text-white/60 text-xs mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-logo-gold/20 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Purejoy. All rights reserved.
            <span className="text-logo-gold ml-2">✨ Sacred Wellness ✨</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
