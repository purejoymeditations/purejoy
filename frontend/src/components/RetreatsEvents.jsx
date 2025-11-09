import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import { Heart, Sparkles } from "lucide-react";
import eventImg from "../assets/images/event.jpeg";
import storeFrontImg from "../assets/images/storeFront.jpeg";
import { motion } from "framer-motion";

const RetreatsEvents = () => {
  const events = [
    {
      id: 1,
      name: "Full Moon Healing Retreat",
      date: "October 28-30, 2024",
      description:
        "A transformative weekend under the full moon, focusing on deep healing and spiritual renewal.",
      image: eventImg,
    },
    {
      id: 2,
      name: "Introduction to Tarot Workshop",
      date: "Every Wednesday, 7 PM",
      description:
        "Unlock the secrets of the cards and learn to trust your intuition in this beginner-friendly workshop.",
      image: storeFrontImg,
    },
  ];

  return (
    <section className="py-12 lg:py-16 xl:py-20 relative overflow-hidden bg-gradient-to-b from-blush-beige via-warm-ecru to-earth-brown/10">
      {/* Subtle natural pattern overlay */}
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-6"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/light-sketch.png')",
        }}
      />

      {/* Additional background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-logo-gold rounded-full blur-3xl opacity-6" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl opacity-6" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blush-rose rounded-full blur-2xl opacity-6" />
      </div>

      {/* Floating natural elements */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4b3c2f] pb-6">
            Sacred Gatherings in Nature
          </h2>
          <p className="text-lg text-[#5e5042] max-w-3xl mx-auto leading-relaxed">
            Connect with earth's rhythms and like-minded souls in our nurturing
            sanctuary, both online and in our natural healing space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {events.map((event, index) => (
            <AnimateOnScroll key={event.id}>
              <div className="relative">
                {/* Optional glow element behind first card */}
                {index === 0 && (
                  <div className="absolute top-1/3 left-[20%] w-80 h-80 bg-cyan-200 opacity-20 blur-3xl rounded-full z-0 pointer-events-none" />
                )}

                <div className="relative bg-[#fdfaf6] rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01] border border-[#f0ebe3] overflow-hidden">
                  <div className="h-72 overflow-hidden bg-[#fdfaf5]">
                  <img
                    src={event.image}
                    alt={event.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex flex-col space-y-4">
                      <p className="text-xs uppercase tracking-wider text-[#b18b4f] font-medium">
                    {event.date}
                  </p>
                      <h3 className="text-2xl font-bold text-[#4b3c2f] font-serif leading-tight">
                    {event.name}
                  </h3>
                      <p className="text-[#5e5042] leading-relaxed text-sm">
                    {event.description}
                  </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-[#f0ebe3]">
                      <a
                        href="#"
                        className="inline-flex items-center space-x-2 text-[#D8B86F] hover:text-[#c7a85f] font-medium transition-colors duration-300 group cursor-pointer border border-[#D8B86F]/30 hover:border-[#c7a85f]/50 px-4 py-2 rounded-full"
                      >
                        <span>Learn More</span>
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <motion.button
            className="bg-[#008080] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#006666] transition-all duration-300 font-medium text-lg group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>Explore All Events</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default RetreatsEvents;
