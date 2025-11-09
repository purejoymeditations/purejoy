import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ServiceCard = ({
  title,
  imageUrl,
  description,
  price,
  originalPrice,
  duration,
  tag,
}) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] bg-white h-full flex flex-col hover:ring-2 hover:ring-[#D8B86F]/40 hover:ring-offset-2 hover:ring-offset-white"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Service Image with improved visibility */}
      <div className="relative aspect-w-4 aspect-h-3 overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#FAF5EF] to-[#F5F0E8]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Service Content - Always Visible */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Service Title */}
        <h3 className="text-xl lg:text-2xl font-bold text-[#6B4F3B] mb-3 leading-tight font-serif">
          {title}
        </h3>

        {/* Service Description */}
        <p
          className="text-[#7A5C3E]/80 text-sm lg:text-base leading-relaxed mb-4 flex-grow overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </p>

        {/* Price and Duration Row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#D8B86F]">{price}</span>
              {originalPrice && (
                <span className="text-sm text-[#7A5C3E]/50 line-through">
                  {originalPrice}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-sm text-[#7A5C3E]/70 font-medium">🕒</span>
              <span className="text-sm text-[#7A5C3E]/70 font-medium">
                {duration}
              </span>
            </div>
          </div>
        </div>

        {/* Learn More Button */}
        <motion.button
          className="flex items-center space-x-2 text-[#D8B86F] hover:text-[#c7a85f] transition-colors duration-300 font-medium text-sm group mt-auto"
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
