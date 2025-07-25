import React from "react";
import { motion } from "framer-motion";
import { Calendar, HandHeart, Sparkles, Heart } from "lucide-react";
import sunflowerImg from "../assets/images/sunflower.jpeg";

const OurApproach = () => {
  const steps = [
    {
      icon: <Calendar size={32} className="text-logo-gold" />,
      title: "1. Book with Ease",
      description:
        "Schedule your session and take the first step towards transformation.",
    },
    {
      icon: <HandHeart size={32} className="text-logo-gold" />,
      title: "2. Holistic & Heart-Centered",
      description:
        "We believe in treating the whole person—mind, body, and spirit.",
    },
    {
      icon: <Sparkles size={32} className="text-logo-gold" />,
      title: "3. Emerge Renewed",
      description:
        "Leave with a sense of peace, clarity, and profound well-being.",
    },
  ];

  return (
    <section className="py-12 lg:py-16 xl:py-20 relative overflow-hidden bg-gradient-to-b from-blush-beige via-warm-ecru to-earth-brown/10">
      {/* Subtle natural pattern overlay - Enhanced for consistency */}
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-6"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/light-sketch.png')",
        }}
      ></div>

      {/* Additional background elements for visual consistency */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-logo-gold rounded-full blur-3xl opacity-6"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl opacity-6"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blush-rose rounded-full blur-2xl opacity-6"></div>
      </div>

      {/* Floating natural elements for visual unity */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 text-soft-gold animate-twinkle">
          <Heart className="w-4 h-4" />
        </div>
        <div className="absolute top-32 right-1/3 text-primary animate-twinkle-delayed">
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute bottom-32 left-1/3 text-soft-gold animate-twinkle-slow">
          <Heart className="w-3 h-3" />
        </div>
        <div className="absolute bottom-20 right-1/4 text-primary animate-twinkle">
          <Sparkles className="w-2 h-2" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center space-x-3 mb-4 lg:mb-6"
          >
            <Sparkles className="w-5 h-5 text-logo-gold animate-twinkle" />
            <span className="text-sm font-medium tracking-widest uppercase text-logo-gold">
              Our Approach
            </span>
            <Sparkles className="w-5 h-5 text-logo-gold animate-twinkle-delayed" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-earth-brown mb-4 lg:mb-6">
            Our Natural Approach
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-earth-brown/80 max-w-4xl mx-auto leading-relaxed">
            We believe in the power of nature's wisdom, combining ancient
            healing practices with modern understanding to create transformative
            experiences.
          </p>
        </motion.div>

        {/* Content Grid - Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-8 lg:pt-12">
          {/* Left side - Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6 lg:space-y-8 order-2 lg:order-1"
          >
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="group flex items-start gap-4 lg:gap-6 p-6 lg:p-8 rounded-3xl transition-all duration-300 bg-gradient-to-br from-nature-cream to-warm-ecru border border-soft-gold/20 hover:border-soft-gold/40 shadow-lg hover:shadow-xl cursor-pointer"
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(212, 178, 107, 0.15)",
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
              >
                <div className="flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-pale-honey to-blush-beige ring-2 ring-soft-gold/30 rounded-full flex items-center justify-center group-hover:ring-soft-gold/50 transition-all duration-300 shadow-md group-hover:shadow-lg">
                  <div className="group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl lg:text-2xl font-semibold text-earth-brown mb-3 leading-tight group-hover:text-logo-gold transition-colors duration-300">
                    <span className="text-logo-gold">
                      {step.title.split(" ")[0]}
                    </span>
                    {step.title.includes(" ") && (
                      <span className="text-earth-brown group-hover:text-logo-gold transition-colors duration-300">
                        {" "}
                        {step.title.split(" ").slice(1).join(" ")}
                      </span>
                    )}
                  </h3>
                  <p className="text-earth-brown/80 leading-relaxed text-base lg:text-lg group-hover:text-earth-brown transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Enhanced glow effect - Warm gold/peach tones */}
              <div className="absolute -inset-8 bg-gradient-to-br from-logo-gold/30 via-soft-gold/20 to-blush-rose/25 rounded-3xl blur-xl"></div>

              {/* Soft vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5"></div>

              <img
                src={sunflowerImg}
                alt="Woman in sunflower field"
                className="w-full h-auto object-cover"
              />

              {/* Top-right icon */}
              <div className="absolute top-4 right-4 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md">
                <Heart className="w-5 h-5 text-logo-gold" />
              </div>

              {/* Bottom-left icon */}
              <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md">
                <Sparkles className="w-5 h-5 text-logo-gold" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
