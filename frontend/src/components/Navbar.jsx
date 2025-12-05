import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingCart, X } from "lucide-react";
import logo from "../assets/images/High Resolution Logo.png";
import Submenu from "./Submenu";
import { useCart } from "../context/CartContext.jsx";

// Helper to create URL-friendly IDs
const createId = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

const currencyFormatter = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();
  const { itemCount, totalPrice } = useCart();
  const formattedTotal = currencyFormatter.format(totalPrice);

  const navLinks = [
    { title: "HOME", href: "/" },
    { title: "ABOUT US", href: "/about" },
    // { title: "OUR STORY", href: "/our-story" },
    { title: "COMMUNITY", href: "/community" },
    {
      title: "SERVICES",
      href: "/services",
      submenu: [
        //   {
        //     title: "Remedial & Relaxation Massage",
        //     href: `/services#${createId("Remedial & Relaxation Massage")}`,
        //   },
        //   {
        //     title: "Energy & Ancestral Healing",
        //     href: `/services#${createId("Energy & Ancestral Healing")}`,
        //   },
        //   {
        //     title: "Tarot & Card Readings",
        //     href: `/services#${createId("Tarot & Card Readings")}`,
        //   },
        //   {
        //     title: "Meditation & Classes",
        //     href: `/services#${createId("Meditation & Classes")}`,
        //   },
      ],
    },
    { title: "SHOP", href: "/shop" },
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
    <header className="relative bg-[#008080] backdrop-blur-sm sticky top-0 z-50 shadow-2xl border-b border-logo-gold/20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#008080] animate-gradient-x" />

      {/* Floating Natural Elements - Reduced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Golden Stars - Reduced and Repositioned */}
        <div className="absolute top-2 right-1/5 text-logo-gold animate-twinkle">
          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute top-4 left-1/3 text-logo-gold animate-twinkle-delayed">
          <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute top-3 right-1/3 text-logo-gold animate-twinkle-slow">
          <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute top-5 left-2/3 text-logo-gold animate-twinkle">
          <svg className="w-1 h-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        {/* Sparkle Elements - Reduced */}
        <div className="absolute top-2 right-1/8 text-logo-gold animate-sparkle">
          <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" />
          </svg>
        </div>
        <div className="absolute top-4 left-1/2 text-logo-gold animate-sparkle-delayed">
          <svg className="w-1 h-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" />
          </svg>
        </div>

        {/* Glowing Orbs - Reduced */}
        <div className="absolute top-3 right-1/12 w-0.5 h-0.5 bg-logo-gold/50 rounded-full animate-glow" />
        <div className="absolute top-5 left-3/4 w-0.5 h-0.5 bg-logo-gold/40 rounded-full animate-glow-delayed" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="group relative flex items-center">
              <div className="absolute inset-0 bg-logo-gold/5 rounded-full blur-md group-hover:bg-logo-gold/20 transition-all duration-500"></div>
              <img
                src={logo}
                alt="Purejoy Logo"
                className="h-20 w-auto transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-golden relative z-10 mix-blend-multiply"
              />
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
                  className="relative group/nav"
                  onMouseEnter={() =>
                    isServicesLink && setIsServicesHovered(true)
                  }
                  onMouseLeave={() =>
                    isServicesLink && setIsServicesHovered(false)
                  }
                >
                  <Link
                    to={link.href}
                    className={`font-medium transition-all duration-300 relative group ${
                      isActive
                        ? "text-logo-gold"
                        : "text-white hover:text-logo-gold"
                    }`}
                  >
                    <span className="relative z-10">{link.title}</span>
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-logo-gold transition-all duration-300 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    ></span>

                    {/* Glowing hover effect */}
                    <div className="absolute inset-0 bg-logo-gold/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-sm"></div>
                  </Link>

                  {/* Pulse effect on hover */}
                  <div className="absolute inset-0 bg-logo-gold/5 rounded-lg opacity-0 group-hover/nav:opacity-100 transition-all duration-500 animate-pulse"></div>

                  {/* <AnimatePresence>
                    {isServicesLink && isServicesHovered && (
                      <Submenu
                        items={link.submenu}
                        onMouseEnter={() => setIsServicesHovered(true)}
                        onMouseLeave={() => setIsServicesHovered(false)}
                      />
                    )}
                  </AnimatePresence> */}
                </div>
              );
            })}
            <Link
              to="/cart"
              className="relative flex items-center gap-3 pl-6 border-l border-white/20 text-white hover:text-logo-gold transition"
            >
              <div className="relative">
                <ShoppingCart size={24} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-logo-gold text-[#1b0f08] text-xs font-bold rounded-full px-1.5 py-0.5">
                    {itemCount}
                  </span>
                )}
              </div>
              <div className="hidden lg:flex flex-col leading-tight text-sm">
                <span className="uppercase tracking-[0.4em] text-white/60">
                  Cart
                </span>
                <span className="font-semibold">
                  {currencyFormatter.format(totalPrice)}
                </span>
              </div>
            </Link>
          </nav>

          {/* Mobile Cart + Menu */}
          <div className="md:hidden flex items-center gap-4">
            <Link
              to="/cart"
              className="relative text-white hover:text-logo-gold transition"
              aria-label="Open cart"
            >
              <ShoppingCart size={26} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-logo-gold text-[#1b0f08] text-xs font-bold rounded-full px-1.5 py-0.5">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative text-white hover:text-logo-gold transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-logo-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative z-10">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-gradient-to-b from-slate-900 to-purple-900 absolute top-full left-0 right-0 shadow-2xl border-b border-logo-gold/20"
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
                  className="font-medium text-xl text-white hover:text-logo-gold transition-colors duration-300"
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
