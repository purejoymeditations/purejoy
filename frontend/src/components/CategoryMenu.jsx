import React from "react";
import { motion } from "framer-motion";
import { Hand, Sparkles, Eye } from "lucide-react";

const categoryIcons = {
  "Remedial & Relaxation Massage": <Hand size={32} strokeWidth={1.5} />,
  "Energy & Ancestral Healing": <Sparkles size={32} strokeWidth={1.5} />,
  "Tarot & Card Readings": <Eye size={32} strokeWidth={1.5} />,
  "Meditation & Classes": <Sparkles size={32} strokeWidth={1.5} />,
};

const CategoryMenu = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <div className="flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-20 mb-16 border-b border-border">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryClick(category)}
          className="text-center group pt-2 pb-4 transition-colors duration-300 relative focus:outline-none"
        >
          <div
            className={`mb-2 transition-colors duration-300 ${
              activeCategory === category
                ? "text-logo-gold"
                : "text-gray-400 group-hover:text-logo-gold"
            }`}
          >
            {categoryIcons[category]}
          </div>
          <h3
            className={`font-sans font-semibold tracking-wide uppercase text-xs transition-colors duration-300 ${
              activeCategory === category
                ? "text-logo-gold"
                : "text-text-secondary group-hover:text-logo-gold"
            }`}
          >
            {category}
          </h3>
          {activeCategory === category && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-logo-gold"
              layoutId="underline"
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryMenu;
