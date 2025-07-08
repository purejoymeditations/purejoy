import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/High Resolution Logo.png";
import Submenu from "./Submenu";

// Helper to create URL-friendly IDs
const createId = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "HOME", href: "/" },
    { title: "ABOUT US", href: "#" },
    {
      title: "SERVICES",
      href: "/services",
      submenu: [
        {
          title: "Remedial & Relaxation Massage",
          href: `/services#${createId("Remedial & Relaxation Massage")}`,
        },
        {
          title: "Energy & Ancestral Healing",
          href: `/services#${createId("Energy & Ancestral Healing")}`,
        },
        {
          title: "Tarot & Card Readings",
          href: `/services#${createId("Tarot & Card Readings")}`,
        },
        {
          title: "Meditation & Classes",
          href: `/services#${createId("Meditation & Classes")}`,
        },
      ],
    },
    { title: "OUR PEOPLE", href: "#" },
    { title: "CONTACT US", href: "#" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="bg-container-bg/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <a href="#">
              <img src={logo} alt="Purejoy Logo" className="h-20 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              const isServicesLink = link.title === "SERVICES";

              return (
                <div
                  key={link.title}
                  className="relative"
                  onMouseEnter={() =>
                    isServicesLink && setIsServicesHovered(true)
                  }
                  onMouseLeave={() =>
                    isServicesLink && setIsServicesHovered(false)
                  }
                >
                  <Link
                    to={link.href}
                    className={`font-medium transition-colors duration-300 relative group ${
                      isActive
                        ? "text-logo-gold"
                        : "text-text-primary hover:text-logo-gold"
                    }`}
                  >
                    <span>{link.title}</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-logo-gold transition-all duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>
                  </Link>
                  <AnimatePresence>
                    {isServicesLink && isServicesHovered && (
                      <Submenu
                        items={link.submenu}
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            <a href="/#services" className="ml-4">
              <button className="font-semibold px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                Book Now
              </button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-primary transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-container-bg absolute top-full left-0 right-0 shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="font-medium text-xl text-text-primary hover:text-primary transition-colors duration-300"
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </motion.a>
              ))}
              <a
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="mt-6"
              >
                <button className="font-semibold w-full text-center px-8 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-lg">
                  Book Now
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
