import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Users,
  Calendar,
  MapPin,
  Coffee,
  Star,
  BookOpen,
  Phone,
  Mail,
  Globe,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

// Import community images
import deathCafeEvent1 from "../assets/images/Aboutus/community/deathcafeevent.jpeg";
import deathCafeEvent2 from "../assets/images/Aboutus/community/deathcafeevent2.jpeg";
import deathCafeMaldon from "../assets/images/Aboutus/community/deathcafemaldon.jpeg";
import eventImg from "../assets/images/Aboutus/expansion/event.jpeg";
import tarotImg from "../assets/images/Aboutus/expansion/tarrot.jpeg";

// Import Mongolia NGO images
import mongoliaImg1 from "../assets/images/Aboutus/lotus/gabby.png";
import mongoliaImg2 from "../assets/images/Aboutus/lotus/lotusmongolia.jpeg";
import mongoliaImg3 from "../assets/images/Aboutus/lotus/lotusmongolia2.jpeg";

const CommunityPage = () => {
  const [activeSection, setActiveSection] = useState("events");

  const sections = [
    {
      id: "events",
      title: "Community Events",
      icon: <Calendar className="text-logo-gold" size={24} />,
    },
    {
      id: "deathcafe",
      title: "Death Cafe",
      icon: <Coffee className="text-logo-gold" size={24} />,
    },
    // {
    //   id: "workshops",
    //   title: "Workshops & Classes",
    //   icon: <BookOpen className="text-logo-gold" size={24} />,
    // },
    {
      id: "ngo",
      title: "Not for Profit",
      icon: <Globe className="text-logo-gold" size={24} />,
    },
    {
      id: "impact",
      title: "Community Impact",
      icon: <Heart className="text-logo-gold" size={24} />,
    },
  ];

  const upcomingEvents = [
    {
      title: "Monthly Death Cafe",
      date: "Every First Saturday",
      time: "2:00 PM - 4:00 PM",
      location: "Pure Gold Holistic & Wellbeing",
      description:
        "Join us for open, honest conversations about death and dying in a safe, supportive environment.",
      image: deathCafeMaldon,
      featured: true,
    },
    {
      title: "Tarot & Intuition Workshop",
      date: "Monthly",
      time: "10:00 AM - 12:00 PM",
      location: "Pure Gold Holistic & Wellbeing",
      description:
        "Learn to read tarot cards and develop your intuitive abilities in this hands-on workshop.",
      image: tarotImg,
      featured: false,
    },
    {
      title: "Community Healing Circle",
      date: "Every Third Sunday",
      time: "6:00 PM - 8:00 PM",
      location: "Pure Gold Holistic & Wellbeing",
      description:
        "A monthly gathering for community healing, meditation, and connection.",
      image: eventImg,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-beige">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-cream to-golden-sand opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 font-serif">
                Our Community
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Building connections, fostering healing, and creating meaningful
                experiences together
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-border-light sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-primary text-white shadow-healing"
                    : "bg-container-bg text-text-primary hover:bg-primary/10 border border-border-light"
                }`}
              >
                {section.icon}
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Community Events Section */}
          {activeSection === "events" && (
            <div id="events" className="space-y-12">
              <AnimateOnScroll>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                    Upcoming Community Events
                  </h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    Join us for meaningful gatherings, workshops, and community
                    connections
                  </p>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <AnimateOnScroll key={index}>
                    <motion.div
                      className={`bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 overflow-hidden relative ${
                        event.featured ? "ring-2 ring-logo-gold/50" : ""
                      }`}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {event.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="inline-flex items-center px-3 py-1 text-sm font-bold text-logo-gold bg-gradient-to-r from-logo-gold/20 to-bronze/20 rounded-full shadow-md border border-logo-gold/30">
                            <Star className="w-4 h-4 mr-1" />
                            Featured Event
                          </span>
                        </div>
                      )}

                      <div className="mb-6">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-49 object-cover rounded-2xl shadow-lg"
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-text-primary mb-4 font-serif">
                        {event.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-text-secondary">
                          <Calendar className="text-logo-gold" size={20} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3 text-text-secondary">
                          <MapPin className="text-logo-gold" size={20} />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-6">
                        {event.description}
                      </p>

                      <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-healing">
                        Learn More
                      </button>
                    </motion.div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          )}

          {/* Death Cafe Section */}
          {activeSection === "deathcafe" && (
            <div id="deathcafe" className="space-y-16">
              <AnimateOnScroll>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                    Death Cafe Maldon
                  </h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    Creating Safe Spaces for Meaningful Conversations
                  </p>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <AnimateOnScroll>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-text-primary mb-4 font-serif">
                        What is Death Cafe?
                      </h3>
                      <p className="text-text-secondary leading-relaxed text-lg">
                        Death Cafe is a global movement that encourages open,
                        honest discussions about death and dying. Our Maldon
                        chapter provides a safe, supportive environment where
                        people can share their thoughts, fears, and experiences
                        without judgment.
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-logo-gold/20 to-bronze/20 rounded-2xl p-6 border border-logo-gold/30">
                      <h4 className="text-xl font-bold text-text-primary mb-3 font-serif">
                        Next Death Cafe
                      </h4>
                      <div className="space-y-2 text-text-secondary">
                        <p>
                          <strong>Date:</strong> First Saturday of each month
                        </p>
                        <p>
                          <strong>Time:</strong> 2:00 PM - 4:00 PM
                        </p>
                        <p>
                          <strong>Location:</strong> Pure Gold Holistic &
                          Wellbeing
                        </p>
                        <p>
                          <strong>Cost:</strong> Free
                        </p>
                      </div>
                      <button className="mt-4 bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-healing">
                        RSVP Now
                      </button>
                    </div>
                  </div>
                </AnimateOnScroll>

                <AnimateOnScroll>
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-text-primary font-serif mb-6">
                      Visual Journey
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      {[deathCafeEvent1, deathCafeEvent2].map(
                        (image, index) => (
                          <motion.div
                            key={index}
                            className="relative group overflow-hidden rounded-2xl shadow-xl"
                            whileHover={{ scale: 1.03, y: -8 }}
                            transition={{ duration: 0.5 }}
                          >
                            <img
                              src={image}
                              alt={`Death Cafe Event ${index + 1}`}
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                          </motion.div>
                        )
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          )}

          {/* Workshops Section */}
          {activeSection === "workshops" && (
            <div id="workshops" className="space-y-16">
              <AnimateOnScroll>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                    Workshops & Classes
                  </h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    Learn new skills, deepen your practice, and connect with
                    like-minded individuals
                  </p>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Tarot & Intuition Development",
                    instructor: "Lesley",
                    duration: "2 hours",
                    price: "$45",
                    description:
                      "Learn the basics of tarot reading and develop your intuitive abilities.",
                    image: tarotImg,
                  },
                  {
                    title: "Aromatherapy & Essential Oils",
                    instructor: "Leanne & Lesley",
                    duration: "3 hours",
                    price: "$65",
                    description:
                      "Discover the healing properties of essential oils and learn to create your own blends.",
                    image: eventImg,
                  },
                  {
                    title: "Meditation & Mindfulness",
                    instructor: "Leanne",
                    duration: "1.5 hours",
                    price: "$35",
                    description:
                      "Learn meditation techniques and mindfulness practices to reduce stress.",
                    image: deathCafeMaldon,
                  },
                ].map((workshop, index) => (
                  <AnimateOnScroll key={index}>
                    <motion.div
                      className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 overflow-hidden"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="mb-6">
                        <img
                          src={workshop.image}
                          alt={workshop.title}
                          className="w-full h-48 object-cover rounded-2xl shadow-lg"
                        />
                      </div>

                      <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                        {workshop.title}
                      </h3>

                      <div className="flex items-center justify-between mb-4">
                        <div className="text-text-secondary text-sm">
                          {workshop.duration}
                        </div>
                        <span className="text-2xl font-bold text-logo-gold">
                          {workshop.price}
                        </span>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-6">
                        {workshop.description}
                      </p>

                      <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-healing">
                        Book Workshop
                      </button>
                    </motion.div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          )}

          {/* NGO Support Section */}
          {activeSection === "ngo" && (
            <div id="ngo" className="space-y-16">
              <AnimateOnScroll>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                    Supporting Global Change
                  </h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    Making a difference in communities around the world through
                    our NGO partnerships
                  </p>
                </div>
              </AnimateOnScroll>

              {/* Lotus Children's Centre - Mongolia */}
              <AnimateOnScroll>
                <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/60 overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-logo-gold/20 to-bronze/20 rounded-full">
                          <Heart className="text-logo-gold" size={24} />
                        </div>
                        <h3 className="text-3xl font-bold text-text-primary font-serif">
                          Lotus Children's Centre
                        </h3>
                      </div>

                      <p className="text-text-secondary leading-relaxed text-lg">
                        Lesley and Gabby have been friends since childhood.
                        Today, Gabby stands as the inspiring founder of the
                        Lotus Children's Centre in Ulaanbaatar, Mongolia—a
                        sanctuary that has been transforming lives for over 30
                        years.
                      </p>

                      <p className="text-text-secondary leading-relaxed text-lg">
                        What began as a heartfelt mission has grown into a
                        lifeline for children abandoned on the streets. Through
                        tireless dedication, Gabby has provided safety,
                        education, and life skills to more than 200 children.
                        Today, she continues to nurture 45 young lives, giving
                        them not just shelter, but a future filled with
                        possibility.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-logo-gold/10 to-bronze/10 rounded-xl p-4 border border-logo-gold/20">
                          <div className="text-2xl font-bold text-logo-gold">
                            200+
                          </div>
                          <div className="text-sm text-text-secondary">
                            Children Helped
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-logo-gold/10 to-bronze/10 rounded-xl p-4 border border-logo-gold/20">
                          <div className="text-2xl font-bold text-logo-gold">
                            30+
                          </div>
                          <div className="text-sm text-text-secondary">
                            Years of Service
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-logo-gold/20 to-bronze/20 rounded-2xl p-6 border border-logo-gold/30">
                        <h4 className="text-xl font-bold text-text-primary mb-3 font-serif">
                          How We Help
                        </h4>
                        <p className="text-text-secondary mb-4">
                          At Pure Gold Holistic & Wellbeing, we proudly support
                          the Lotus Children's Centre by selling handmade items
                          from Mongolia. Every piece carries a story of
                          resilience, hope, and love—and 100% of proceeds go
                          directly to the children.
                        </p>
                        <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-healing">
                          Shop Mongolia Products
                        </button>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-text-primary font-serif mb-6">
                        Visual Journey
                      </h3>
                      <div className="grid grid-cols-1 gap-6">
                        {[mongoliaImg1, mongoliaImg2, mongoliaImg3].map(
                          (image, index) => (
                            <motion.div
                              key={index}
                              className="relative group overflow-hidden rounded-2xl shadow-xl"
                              whileHover={{ scale: 1.03, y: -8 }}
                              transition={{ duration: 0.5 }}
                            >
                              <img
                                src={image}
                                alt={`Mongolia NGO ${index + 1}`}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                              />
                              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-lg font-semibold">
                                  Lotus Children's Centre
                                </p>
                                <p className="text-white/80 text-sm">
                                  Ulaanbaatar, Mongolia
                                </p>
                              </div>
                            </motion.div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Other NGO Initiatives */}
              <AnimateOnScroll>
                <div className="bg-gradient-to-r from-logo-gold/10 to-bronze/10 rounded-3xl p-8 border border-logo-gold/30">
                  <h3 className="text-2xl font-bold text-text-primary mb-6 font-serif text-center">
                    Our Commitment to Global Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="p-4 bg-white/80 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Globe className="text-logo-gold" size={24} />
                      </div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        International Support
                      </h4>
                      <p className="text-text-secondary text-sm">
                        Partnering with NGOs worldwide to create positive change
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="p-4 bg-white/80 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Heart className="text-logo-gold" size={24} />
                      </div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        100% Transparency
                      </h4>
                      <p className="text-text-secondary text-sm">
                        All proceeds from NGO products go directly to the cause
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="p-4 bg-white/80 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Users className="text-logo-gold" size={24} />
                      </div>
                      <h4 className="font-semibold text-text-primary mb-2">
                        Community Building
                      </h4>
                      <p className="text-text-secondary text-sm">
                        Connecting local communities with global initiatives
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          )}

          {/* Community Impact Section */}
          {activeSection === "impact" && (
            <div id="impact" className="space-y-16">
              <AnimateOnScroll>
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                    Our Community Impact
                  </h2>
                  <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                    See how we're making a difference in our local community and
                    beyond
                  </p>
                </div>
              </AnimateOnScroll>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Supporting Local Women",
                    description:
                      "We actively support and promote local women in business, creating opportunities for collaboration and growth in our community.",
                    icon: <Users className="text-logo-gold" size={32} />,
                  },
                  {
                    title: "Mental Health Awareness",
                    description:
                      "Through our Death Cafe and healing workshops, we're helping to normalize conversations about difficult topics and promote mental wellbeing.",
                    icon: <Heart className="text-logo-gold" size={32} />,
                  },
                  {
                    title: "Educational Programs",
                    description:
                      "We offer workshops and classes that empower people with knowledge about holistic healing, spirituality, and self-care.",
                    icon: <BookOpen className="text-logo-gold" size={32} />,
                  },
                  {
                    title: "Community Connection",
                    description:
                      "Our space serves as a hub for like-minded individuals to connect, share experiences, and build meaningful relationships.",
                    icon: <Heart className="text-logo-gold" size={32} />,
                  },
                ].map((impact, index) => (
                  <AnimateOnScroll key={index}>
                    <motion.div
                      className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/60 text-center"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-logo-gold/20 to-bronze/20 rounded-full">
                          {impact.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-text-primary mb-4 font-serif">
                        {impact.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {impact.description}
                      </p>
                    </motion.div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-cream to-golden-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                Get Involved
              </h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Ready to be part of our community? Here's how you can get
                started
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimateOnScroll>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                <h3 className="text-2xl font-bold text-text-primary mb-6 font-serif">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-logo-gold mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        Address
                      </h4>
                      <p className="text-text-secondary">
                        1 Spring Street, Maldon, Victoria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-logo-gold mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        Phone
                      </h4>
                      <p className="text-text-secondary">0419 505 919</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-logo-gold mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-text-primary mb-1">
                        Email
                      </h4>
                      <p className="text-text-secondary">
                        info@puregold.com.au
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
                <h3 className="text-2xl font-bold text-text-primary mb-6 font-serif">
                  Ways to Get Involved
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-logo-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">
                      Attend our monthly Death Cafe
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-logo-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">
                      Join our workshops and classes
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-logo-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-text-secondary">
                      Connect with like-minded individuals
                    </span>
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-logo-gold/10 to-bronze/10 rounded-xl p-6 border border-logo-gold/20">
                  <h4 className="text-lg font-bold text-text-primary mb-3 font-serif">
                    Stay Connected
                  </h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Get updates on community events, workshops, and special
                    offers.
                  </p>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-2 rounded-lg text-sm bg-white/80 border border-logo-gold/30 text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-logo-gold/50 focus:border-logo-gold transition-colors duration-300"
                    />
                    <button
                      type="submit"
                      className="bg-logo-gold text-white px-4 py-2 rounded-lg hover:bg-logo-gold/80 transition-all duration-300 font-semibold text-sm"
                    >
                      Subscribe
                    </button>
                  </form>
                  <p className="text-text-secondary text-xs mt-2">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
