import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import CategoryMenu from "./CategoryMenu";
import DynamicServiceCard from "./DynamicServiceCard";
import bannerImg from "../assets/images/banner.jpeg"; // Import banner image

// Import service images
import remedialImg from "../assets/images/services/remedial.jpeg";
import relaxationImg from "../assets/images/services/relaxation.jpeg";
import triggerpointImg from "../assets/images/services/triggerpoint.jpeg";
import aromatouchImg from "../assets/images/services/aromatouch.jpeg";
import ancestralhealingImg from "../assets/images/services/ancestralhealing.jpeg";
import reikiImg from "../assets/images/services/reiki.jpeg";
import quantumImg from "../assets/images/services/quantum.jpeg";
import reikiheadImg from "../assets/images/services/reikihead.jpeg";
import crystalImg from "../assets/images/services/crystal.jpeg";
import wombImg from "../assets/images/services/womb.jpeg";
import holographicImg from "../assets/images/services/holographic.jpeg";
import reikiserviceImg from "../assets/images/services/reikiservice.jpeg";
import deepTissueImg from "../assets/images/deeptissue.jpeg";
import relaxedImg from "../assets/images/relaxed.jpeg";
import tarotImg from "../assets/images/tarrot.png";
import stoneImg from "../assets/images/stone.jpeg";
import meditationImg from "../assets/images/services/meditation.jpeg";

// Image mapping object
const imageMap = {
  "services/remedial.jpeg": remedialImg,
  "services/relaxation.jpeg": relaxationImg,
  "services/triggerpoint.jpeg": triggerpointImg,
  "services/aromatouch.jpeg": aromatouchImg,
  "services/ancestralhealing.jpeg": ancestralhealingImg,
  "services/reiki.jpeg": reikiImg,
  "services/quantum.jpeg": quantumImg,
  "services/reikihead.jpeg": reikiheadImg,
  "services/crystal.jpeg": crystalImg,
  "services/womb.jpeg": wombImg,
  "services/holographic.jpeg": holographicImg,
  "services/reikiservice.jpeg": reikiserviceImg,
  "remedial.jpeg": remedialImg,
  "relaxation.jpeg": relaxationImg,
  "triggerpoint.jpeg": triggerpointImg,
  "aromatouch.jpeg": aromatouchImg,
  "ancestralhealing.jpeg": ancestralhealingImg,
  "reiki.jpeg": reikiImg,
  "quantum.jpeg": quantumImg,
  "reikihead.jpeg": reikiheadImg,
  "crystal.jpeg": crystalImg,
  "womb.jpeg": wombImg,
  "holographic.jpeg": holographicImg,
  "reikiservice.jpeg": reikiserviceImg,
  "deeptissue.jpeg": deepTissueImg,
  "relaxed.jpeg": relaxedImg,
  "tarrot.jpeg": tarotImg,
  "stone.jpeg": stoneImg,
  "services/meditation.jpeg": meditationImg,
  "meditation.jpeg": meditationImg,
};

// Helper to create URL-friendly IDs
const createId = (text) =>
  text.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-");

const categoryDescriptions = {
  "Remedial & Relaxation Massage":
    "Experience the therapeutic art of touch. Our massage therapies are designed to release tension, alleviate pain, and restore a sense of profound calm and well-being to your entire body.",
  "Energy & Ancestral Healing":
    "Journey beyond the physical. These sessions work on the subtle energy bodies, clearing blockages, healing past traumas, and reconnecting you with your innate wisdom and spiritual lineage.",
  "Tarot & Card Readings":
    "Seek clarity and guidance. Our intuitive readings use the ancient wisdom of Tarot and oracle cards to illuminate your path, answer your deepest questions, and empower you to move forward with confidence.",
  "Meditation & Classes":
    "Find your center and cultivate inner peace. Our guided meditations and classes provide a supportive space to quiet the mind, reduce stress, and develop a deeper connection with your true self.",
};

const AllServicesPage = () => {
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/services`)
      .then((response) => {
        const fetchedServices = response.data.filter(
          (s) => s.slug !== "discovery-call"
        );

        const uniqueCategories = [
          "Remedial & Relaxation Massage",
          "Energy & Ancestral Healing",
          "Tarot & Card Readings",
          "Meditation & Classes",
        ];

        setServices(fetchedServices);
        setCategories(uniqueCategories);
        setActiveCategory(uniqueCategories[0]); // Set initial active category
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        const navbarHeight = 96; // From h-24 on Navbar
        const stickyMenuHeight = 88; // From h-20 on CategoryMenu container + padding
        const offset = navbarHeight + stickyMenuHeight;

        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        setTimeout(() => {
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location, loading]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    const element = document.getElementById(createId(category));
    if (element) {
      const navbarHeight = 96;
      const stickyMenuHeight = 88;
      const offset = navbarHeight + stickyMenuHeight;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return <div className="text-center p-10">Loading services...</div>;
  }

  return (
    <div className="bg-secondary">
      {/* Banner Image */}
      <div
        className="h-48 md:h-64 bg-cover bg-bottom"
        style={{ backgroundImage: `url(${bannerImg})` }}
      ></div>

      <div className="sticky top-24 z-30 bg-background shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CategoryMenu
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 lg:py-16 xl:py-20 bg-background">
        {categories.map((category, categoryIndex) => (
          <React.Fragment key={category}>
            <section id={createId(category)} className="mb-16 lg:mb-20">
              <motion.div
                className="text-center mb-12 lg:mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">
                  {category}
                </h2>
                <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
                  {categoryDescriptions[category]}
                </p>
                {/* Add visual separator */}
                <div className="mt-8 flex justify-center">
                  <div className="w-24 h-0.5 bg-logo-gold"></div>
                </div>
              </motion.div>

              <div className="space-y-16 lg:space-y-20">
                {category === "Meditation & Classes" ? (
                  // Special handling for Meditation & Classes - show hardcoded service if none from database
                  services.filter((s) => s.category === category).length > 0 ? (
                    services
                      .filter((s) => s.category === category)
                      .map((service, index) => (
                        <DynamicServiceCard
                          key={service._id}
                          service={service}
                          index={index}
                          imageMap={imageMap}
                        />
                      ))
                  ) : (
                    <DynamicServiceCard
                      key="meditation-hardcoded"
                      service={{
                        _id: "meditation-sessions",
                        name: "Meditation Sessions",
                        description:
                          "Guided meditation sessions to help you find inner peace and develop mindfulness. Choose from individual sessions or a comprehensive 5-session package.",
                        image: "services/meditation.jpeg",
                        category: "Meditation & Classes",
                      }}
                      index={0}
                      imageMap={imageMap}
                    />
                  )
                ) : (
                  services
                    .filter((s) => s.category === category)
                    .map((service, index) => {
                      // Check if this service has dynamic pricing options
                      const hasDynamicPricing =
                        service.name === "Meditation Sessions" ||
                        service.name === "Tarot Readings";

                      if (hasDynamicPricing) {
                        return (
                          <DynamicServiceCard
                            key={service._id}
                            service={service}
                            index={index}
                            imageMap={imageMap}
                          />
                        );
                      }

                      // Regular service card for services without dynamic pricing
                      return (
                        <motion.div
                          key={service._id}
                          className="max-w-5xl mx-auto"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ duration: 0.6 }}
                          variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 30 },
                          }}
                        >
                          <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                            {/* Service Name Header */}
                            <div className="px-8 py-8 text-center border-b border-border bg-warm-beige/50">
                              <h3 className="text-2xl md:text-3xl font-sans font-semibold text-text-primary tracking-wide">
                                {service.name}
                              </h3>
                            </div>

                            <div
                              className={`grid md:grid-cols-2 ${
                                index % 2 !== 0 ? "md:grid-flow-col-dense" : ""
                              }`}
                            >
                              {/* Image */}
                              <div
                                className={`${
                                  index % 2 !== 0 ? "md:col-start-2" : ""
                                } flex items-center justify-center`}
                              >
                                <img
                                  src={
                                    imageMap[service.image] ||
                                    `/src/assets/images/${service.image}`
                                  }
                                  alt={service.name}
                                  className="w-full h-64 md:h-96 object-contain object-center"
                                />
                              </div>

                              {/* Content */}
                              <div
                                className={`p-8 md:p-12 flex flex-col justify-center ${
                                  index % 2 !== 0 ? "md:col-start-1" : ""
                                }`}
                              >
                                <div className="space-y-6">
                                  <div className="text-text-secondary leading-relaxed space-y-4">
                                    {service.description
                                      .split(". ")
                                      .slice(0, 4)
                                      .map((sentence, idx) => (
                                        <p
                                          key={idx}
                                          className="text-base leading-relaxed"
                                        >
                                          {sentence
                                            .replace(/[✨🌟]/g, "")
                                            .trim()}
                                          {sentence.endsWith(".") ? "" : "."}
                                        </p>
                                      ))}
                                  </div>

                                  <div className="pt-6 mt-8 border-t border-gray-200">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-baseline gap-3">
                                        <span className="text-3xl font-bold text-text-primary">
                                          ${service.price}
                                        </span>
                                        <span className="text-sm text-text-secondary">
                                          {service.duration} minutes
                                        </span>
                                      </div>

                                      <Link to={`/book/${service._id}`}>
                                        <button className="px-8 py-3 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                                          Book Now
                                        </button>
                                      </Link>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })
                )}
              </div>
            </section>

            {categoryIndex < categories.length - 1 && (
              <div className="flex justify-center">
                <hr className="my-12 lg:my-16 w-1/2 border-t-2 border-border" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AllServicesPage;
