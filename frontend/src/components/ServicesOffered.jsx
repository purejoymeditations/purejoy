import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import deepTissueImg from "../assets/images/deeptissue.jpeg";
import relaxedImg from "../assets/images/relaxed.jpeg";
import aromaImg from "../assets/images/aroma.jpeg";
import tarotImg from "../assets/images/tarrot.jpeg";
import ansiImg from "../assets/images/ansi.jpeg";
import stoneImg from "../assets/images/stone.jpeg";

const servicesData = {
  Massage: [
    {
      _id: "massage1",
      name: "Remedial Full Body Massage",
      description:
        "Designed to address muscle tension and pain with techniques tailored to your unique needs.",
      price: "A$99.00",
      duration: "1 hr",
      image: deepTissueImg,
    },
    {
      _id: "massage2",
      name: "Relaxation Full Body Massage",
      description:
        "Experience the bliss of total relaxation with a massage designed to soothe your mind and body.",
      price: "A$99.00",
      duration: "1 hr",
      image: relaxedImg,
    },
    {
      _id: "massage3",
      name: "Aroma Touch Massage",
      description:
        "A deeply nurturing therapy using essential oils to bring balance to the body and mind.",
      price: "A$120.00",
      duration: "1 hr",
      image: aromaImg,
    },
  ],
  Healing: [
    {
      _id: "healing1",
      name: "Quantum Healing",
      description:
        "Accessing energetic, ethereal, and subconscious realms to initiate profound healing.",
      price: "A$160.00",
      duration: "1 hr 30 min",
      image:
        "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=2071&auto=format&fit=crop",
    },
    {
      _id: "healing2",
      name: "Ancestral Healing",
      description:
        "A transformative session connecting you to your lineage to clear energetic threads.",
      price: "A$130.00",
      duration: "1 hr",
      image: ansiImg,
    },
    {
      _id: "healing3",
      name: "Crystal Healing",
      description:
        "Elevate your healing journey with frequencies and dimensional energies.",
      price: "A$150.00",
      duration: "1 hr",
      image: stoneImg,
    },
  ],
  Readings: [
    {
      _id: "reading1",
      name: "Tarot Readings",
      description:
        "An intuitive session designed to provide deep insights into your life's unfolding journey.",
      price: "Starts at A$30.00",
      duration: "15 min+",
      image: tarotImg,
    },
  ],
};

const categoryIcons = {
  Massage: <Hand size={22} />,
  Healing: <Sparkles size={22} />,
  Readings: <BookOpen size={22} />,
};

const ServicesOffered = () => {
  const [activeCategory, setActiveCategory] = useState("Massage");

  const displayedServices = servicesData[activeCategory].slice(0, 3);

  return (
    <section id="services" className="bg-secondary py-16 md:py-24 relative">
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/az-subtle.png')",
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-3xl mx-auto">
              Holistic therapies to nurture your mind, body, and spirit.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex justify-center items-center gap-6 md:gap-10 mb-16">
          {Object.keys(servicesData).map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="relative px-2 py-3 text-lg font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`flex items-center gap-3 ${
                  activeCategory === category
                    ? "text-primary"
                    : "text-text-secondary hover:text-primary"
                }`}
              >
                {categoryIcons[category]}
                <span className="hidden sm:inline">{category}</span>
              </span>
              {activeCategory === category && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full"
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedServices.map((service) => (
              <motion.div
                key={service._id}
                className="relative overflow-hidden rounded-xl shadow-lg group h-[450px]"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <div className="text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <p className="mb-4 text-gray-200">{service.description}</p>
                    <div className="flex justify-between items-center text-lg border-t border-white/20 pt-4">
                      <span className="font-bold text-primary">
                        {service.price}
                      </span>
                      <span className="font-light">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimateOnScroll>
          <div className="mt-20 text-center">
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore All Services</span>
              <ArrowRight size={22} />
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ServicesOffered;
