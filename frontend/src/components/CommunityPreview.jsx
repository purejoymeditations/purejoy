import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Users,
  Coffee,
  Calendar,
  Heart,
  ArrowRight,
  Globe,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

// Import community images
import deathCafeEvent1 from "../assets/images/Aboutus/community/deathcafeevent.jpeg";
import eventImg from "../assets/images/Aboutus/expansion/event.jpeg";

// Import Mongolia NGO image
import mongoliaImg1 from "../assets/images/Aboutus/lotus/gabby.png";

const CommunityPreview = () => {
  const communityHighlights = [
    {
      title: "Community Workshops",
      description:
        "Learn tarot reading, aromatherapy, meditation, and other healing practices in our intimate group settings.",
      icon: <Users className="text-logo-gold" size={24} />,
      image: eventImg,
      link: "/community#workshops",
      featured: false,
    },
    {
      title: "Healing Circles",
      description:
        "Monthly community healing sessions where we come together to meditate, share, and support one another.",
      icon: <Heart className="text-logo-gold" size={24} />,
      image: deathCafeEvent1,
      link: "/community#events",
      featured: false,
    },
    {
      title: "Not for Profit Support",
      description:
        "Supporting the Lotus Children's Centre in Mongolia and other global initiatives through our products and partnerships.",
      icon: <Globe className="text-logo-gold" size={24} />,
      image: mongoliaImg1,
      link: "/community#ngo",
      featured: false,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-cream-50 to-warm-beige relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-logo-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-bronze/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 text-logo-gold mb-4"
            >
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium tracking-widest uppercase">
                Community Connection
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 font-serif">
              Join Our
              <span className="block text-logo-gold">Community</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Connect with like-minded individuals, participate in meaningful
              conversations, and be part of a supportive healing community
            </p>
          </div>
        </AnimateOnScroll>

        {/* Community Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {communityHighlights.map((highlight, index) => (
            <AnimateOnScroll key={index}>
              <motion.div
                className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 overflow-hidden h-full flex flex-col ${
                  highlight.featured ? "ring-2 ring-logo-gold/50" : ""
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {highlight.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 text-sm font-bold text-logo-gold bg-gradient-to-r from-logo-gold/20 to-bronze/20 rounded-full shadow-md border border-logo-gold/30">
                      <Calendar className="w-4 h-4 mr-1" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-logo-gold/20 to-bronze/20 rounded-full">
                    {highlight.icon}
                  </div>
                </div>

                {/* Image */}
                <div className="mb-6 flex-shrink-0">
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-text-primary mb-4 font-serif text-center">
                    {highlight.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed text-center mb-6 flex-grow">
                    {highlight.description}
                  </p>

                  {/* CTA Button */}
                  <Link
                    to={highlight.link}
                    className="group/btn w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-healing flex items-center justify-center gap-2 mt-auto"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Call to Action */}
        <AnimateOnScroll>
          <div className="text-center">
            <motion.div
              className="bg-gradient-to-r from-logo-gold/20 to-bronze/20 rounded-3xl p-12 border border-logo-gold/30 max-w-4xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-bold text-text-primary mb-4 font-serif">
                Be Part of Something Meaningful
              </h3>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Whether you're looking to connect with others, learn new skills,
                or simply be part of a supportive community, we welcome you with
                open arms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/community"
                  className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-healing inline-flex items-center gap-2"
                >
                  <Users className="w-5 h-5" />
                  Explore Community
                </Link>
                <Link
                  to="/community#events"
                  className="bg-bronze hover:bg-bronze-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-warm inline-flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  View Events
                </Link>
              </div>
            </motion.div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default CommunityPreview;
