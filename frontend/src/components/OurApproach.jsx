import React from "react";
import { motion } from "framer-motion";
import { Calendar, HandHeart, Sparkles } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
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
      title: "Holistic & Heart-Centered",
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/light-sketch.png')",
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">
              Our Approach
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-3xl mx-auto">
              Our process is designed to be simple, supportive, and deeply
              transformative.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <AnimateOnScroll>
            <motion.div
              className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img
                src={sunflowerImg}
                alt="Healing Touch"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </AnimateOnScroll>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimateOnScroll key={index}>
                <motion.div
                  className="flex items-start p-6 rounded-lg transition-colors duration-300 hover:bg-container-bg/50"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="bg-logo-gold/10 p-4 rounded-full">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-semibold text-text-primary mb-2">
                      {step.title}
                    </h3>
                    <p className="text-lg text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
