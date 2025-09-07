import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Facebook, Music, Rss, X, Mail, Share2 } from "lucide-react";

// Custom TikTok Icon Component
const TikTokIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Cyan shadow */}
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
      fill="#00f2ea"
      transform="translate(-1, -1)"
    />
    {/* Red shadow */}
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
      fill="#ff0050"
      transform="translate(1, 1)"
    />
    {/* Main white note */}
    <path
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
      fill="white"
    />
  </svg>
);

const SocialMediaBar = () => {
  const [isExpanded, setIsExpanded] = useState(true); // Start open by default
  const [isScrolling, setIsScrolling] = useState(false);

  // Close on scroll functionality
  useEffect(() => {
    let scrollTimer;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        // Close after scrolling stops
        if (isExpanded) {
          setTimeout(() => setIsExpanded(false), 1000);
        }
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimer);
    };
  }, [isExpanded]);

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/puregoldholisticwellbeing/",
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-400 hover:to-purple-500",
      textColor: "text-white",
    },
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/PureGoldHolisticWellbeing/",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-500 hover:to-blue-600",
      textColor: "text-white",
    },
    {
      name: "TikTok",
      icon: <TikTokIcon className="w-5 h-5" />,
      href: "https://www.tiktok.com/@puregoldholistic",
      bgColor: "bg-gradient-to-br from-gray-900 to-black",
      hoverColor: "hover:from-gray-800 hover:to-gray-900",
      textColor: "text-white",
    },
    {
      name: "Blog",
      icon: <Rss className="w-5 h-5" />,
      href: "https://www.pinterest.com/PureGoldHolisticWellbeing",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
      hoverColor: "hover:from-orange-400 hover:to-red-400",
      textColor: "text-white",
    },
    {
      name: "Newsletter",
      icon: <Mail className="w-5 h-5" />,
      href: "#newsletter",
      bgColor: "bg-gradient-to-br from-red-500 to-pink-500",
      hoverColor: "hover:from-red-400 hover:to-pink-400",
      textColor: "text-white",
    },
  ];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50">
      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-3 group overflow-hidden ${
          isExpanded
            ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white border border-teal-400/30"
            : "bg-gradient-to-br from-teal-500/90 to-teal-600/90 text-white border border-teal-400/50 shadow-teal-500/20 animate-pulse"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: isScrolling ? 0.95 : 1,
          opacity: isScrolling ? 0.8 : 1,
        }}
      >
        <motion.div
          className="relative z-10"
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isExpanded ? (
            <X className="w-5 h-5" />
          ) : (
            <Share2 className="w-5 h-5" />
          )}
        </motion.div>
      </motion.button>

      {/* Social Media Links */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{
              duration: 0.3,
              staggerChildren: 0.05,
              ease: "easeOut",
            }}
            className="space-y-2"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="relative group"
              >
                {/* Tooltip */}
                <div className="absolute right-full mr-2 top-1/2 transform -translate-y-1/2 bg-gray-800/90 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
                  {link.name}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-2 border-l-gray-800/90 border-t-1 border-b-1 border-t-transparent border-b-transparent"></div>
                </div>

                <motion.a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    link.href.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className={`relative flex items-center justify-center w-10 h-10 ${link.bgColor} ${link.hoverColor} ${link.textColor} rounded-full shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden group/link`}
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-white/10 scale-0 group-hover/link:scale-100 transition-transform duration-200 rounded-full"></div>

                  {/* Icon */}
                  <motion.div
                    className="relative z-10"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    {link.icon}
                  </motion.div>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialMediaBar;
