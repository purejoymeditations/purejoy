import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Submenu = ({ items, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-md py-2 w-56"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.title}>
            <Link
              to={item.href}
              className="block px-4 py-2 text-sm text-text-primary hover:bg-secondary"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Submenu;
