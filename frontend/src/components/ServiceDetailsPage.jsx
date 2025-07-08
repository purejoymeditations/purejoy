import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Phone } from "lucide-react";

const ServiceDetailsPage = () => {
  const [service, setService] = useState(null);
  const [discoveryCall, setDiscoveryCall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchServiceData = async () => {
      try {
        const serviceRes = await axios.get(
          `http://localhost:3001/api/services/${slug}`
        );
        setService(serviceRes.data);

        const discoveryRes = await axios.get(
          `http://localhost:3001/api/services/discovery-call`
        );
        setDiscoveryCall(discoveryRes.data);
      } catch (err) {
        setError("Service not found.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceData();
  }, [slug]);

  if (loading) {
    return <div className="text-center p-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center p-20 text-red-500">{error}</div>;
  }

  if (!service) return null;

  // Example content for Quantum Healing
  const serviceContent = {
    "quantum-healing": {
      howItWorks: [
        "We begin with a conversation to understand your intentions and what you wish to transform.",
        "You'll be guided into a deep state of relaxation, similar to meditation, allowing access to the subconscious.",
        "Leanne connects to your higher self and energy field, identifying and clearing energetic blocks, past traumas, and limiting beliefs.",
        "The session concludes with grounding techniques and a discussion of the insights and healing that occurred.",
      ],
      benefits: [
        "Profound emotional release and healing from past traumas.",
        "Increased clarity, purpose, and direction in life.",
        "Relief from physical ailments linked to energetic blocks.",
        "Deepened connection to your intuition and higher self.",
        "Breaking free from negative patterns and beliefs.",
      ],
      onlineOffline:
        "Quantum Healing is equally effective whether conducted in-person at our sanctuary or online via video call. Energy is not bound by physical distance, ensuring a powerful and transformative experience regardless of your location.",
    },
  };

  const content = serviceContent[slug] || {};

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section
        className="py-32 md:py-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(/src/assets/images/${service.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h1
            className="text-4xl md:text-6xl font-serif font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {service.name}
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* What is it? */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif text-text-primary mb-4">
            What is {service.name}?
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {service.description}
          </p>
        </motion.div>

        {/* How it works */}
        {content.howItWorks && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif text-text-primary mb-6">
              How The Session Works
            </h2>
            <ul className="space-y-4">
              {content.howItWorks.map((step, index) => (
                <li key={index} className="flex items-start">
                  <Sparkles className="h-6 w-6 text-logo-gold mr-4 mt-1 flex-shrink-0" />
                  <span className="text-lg text-text-secondary">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Benefits */}
        {content.benefits && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif text-text-primary mb-6">
              Key Benefits
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {content.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg text-text-secondary">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Online / Offline */}
        {content.onlineOffline && (
          <motion.div
            className="mt-12 bg-secondary p-6 rounded-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif text-text-primary mb-3">
              Online & In-Person Sessions
            </h3>
            <p className="text-lg text-text-secondary">
              {content.onlineOffline}
            </p>
          </motion.div>
        )}

        {/* Booking Section */}
        <motion.div
          className="mt-16 text-center border-t pt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-serif text-text-primary mb-6">
            Ready to Begin?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            {/* Main Service Booking */}
            <Link to={`/book/${service._id}`}>
              <motion.button
                className="w-full md:w-auto bg-primary text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:bg-primary-hover transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a Session (${service.price})
              </motion.button>
            </Link>

            {/* Discovery Call Booking */}
            {discoveryCall && (
              <Link to={`/book/${discoveryCall._id}`}>
                <motion.button
                  className="w-full md:w-auto bg-transparent border-2 border-primary text-primary font-semibold px-10 py-4 rounded-full text-lg hover:bg-primary hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="inline-block mr-3 h-5 w-5" />
                  Book a Free Discovery Call
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
