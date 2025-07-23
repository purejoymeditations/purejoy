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
    <section className="py-16 md:py-24 relative overflow-hidden bg-honey-glow">
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
              Our Natural Approach
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-3xl mx-auto">
              Rooted in nature's wisdom, our healing process flows as naturally
              as the seasons, bringing you back to your truest self.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimateOnScroll key={index}>
                <div className="flex items-start gap-6 p-6 rounded-xl bg-nature-green/40 transition-all duration-300 hover:bg-nature-green/60 hover:shadow-nature border border-border-nature/50">
                  <div className="flex-shrink-0 p-3 bg-gold-light rounded-full ring-2 ring-logo-gold/20 shadow-soft">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary mb-3 font-serif">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-logo-gold/20 to-bronze/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000"></div>
              <img
                src={sunflowerImg}
                alt="Our healing approach"
                className="relative rounded-2xl shadow-golden w-full object-cover border-4 border-border-light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
