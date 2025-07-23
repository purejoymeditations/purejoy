import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  Star,
  Shield,
  Coffee,
  Music,
  Smile,
  Gift,
  Globe,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

// Import images - these would need to be added to your assets
import storeFrontImg from "../assets/images/storeFront.jpeg";
import leanneImg from "../assets/images/homepage/leannebio.jpeg";
import lesleyImg from "../assets/images/homepage/leselybio.jpeg";
import candleMakingImg from "../assets/images/vanilacandle.jpg";
import massageImg from "../assets/images/relaxed.jpeg";
import aromatherapyImg from "../assets/images/aroma.jpeg";
import meditationImg from "../assets/images/services/meditation.jpeg";

// Import new Aboutus images
import daySpaCollage from "../assets/images/Aboutus/Day Spa Photo Collage Luxury Package.png";
import aromaImg from "../assets/images/Aboutus/aroma.jpg";
import eventImg1 from "../assets/images/Aboutus/20250117_143433[19837].jpg";
import eventImg2 from "../assets/images/Aboutus/0c7d56c2-a981-460a-b97b-9be94ea9edca.jpg";
import eventImg3 from "../assets/images/Aboutus/4732aaea-73e4-4930-ab12-7c533000bb4a.jpg";
import eventImg4 from "../assets/images/Aboutus/6a9e58f1-2a78-402c-9ad1-809d387521b8.jpg";
import eventImg5 from "../assets/images/Aboutus/b9ba35a1-c84b-48f3-a9f4-76b664cf623f.jpg";

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("story");

  const timelineEvents = [
    {
      year: "2023",
      title: "A Journey of Healing",
      description:
        "After experiencing trauma, sexual abuse, domestic violence, and major mental health challenges, I spent 8 months in Chiang Mai, Thailand - including 3 months in a mental health rehabilitation and wellbeing centre. This transformative experience planted the seeds of hope and healing.",
      image: leanneImg,
      icon: <Heart className="text-logo-gold" size={24} />,
      side: "left",
      person: "Leanne",
    },
    {
      year: "January 2024",
      title: "A New Beginning",
      description:
        "I separated from my husband and left the state with just my clothes. A friend offered me a free studio to stay in. Lesley, a Doterra Wellness advocate, was nearby in another town. We had been doing tarot readings together in a crystal shop, having fun and building our spiritual connection.",
      image: storeFrontImg,
      icon: <Sparkles className="text-logo-gold" size={24} />,
      side: "right",
      person: "Both",
    },
    {
      year: "August 2024",
      title: "The Pop-Up Dream",
      description:
        "We both loved being creative and wanted something we could own. Jamie from Maldon Getaways offered us a pop-up shop opportunity. We chose the Gothic Festival as our starting date. After that magical weekend, Jamie asked us to stay until 2030 - he didn't want anyone else to steal us!",
      image: massageImg,
      icon: <Star className="text-logo-gold" size={24} />,
      side: "left",
      person: "Both",
    },
    {
      year: "2024",
      title: "Building Our Sanctuary",
      description:
        "We're renting a beautiful, open and airy space that we love. Out the back is a small area where the building owner lived - we're working to create healing & massage rooms. Our space is becoming a true sanctuary for transformation.",
      image: candleMakingImg,
      icon: <Shield className="text-logo-gold" size={24} />,
      side: "right",
      person: "Both",
    },
    {
      year: "Today",
      title: "Community & Empowerment",
      description:
        "Pure Gold has become more than a shop - we're a community hub supporting local women in business, hosting workshops, and creating a space for healing and empowerment. We're planning support groups for domestic violence & mental health, and supporting our friend's orphanage in Mongolia.",
      image: lesleyImg,
      icon: <Users className="text-logo-gold" size={24} />,
      side: "left",
      person: "Both",
    },
  ];

  const coreValues = [
    {
      icon: <Heart className="text-logo-gold" size={32} />,
      title: "Hope & Healing",
      description:
        "Creating a space of hope, belonging, and connection for those who have experienced trauma and challenges.",
    },
    {
      icon: <Shield className="text-logo-gold" size={32} />,
      title: "Empowerment",
      description:
        "Supporting and empowering women who have been in similar situations, building resilience and courage.",
    },
    {
      icon: <Leaf className="text-logo-gold" size={32} />,
      title: "Natural & Pure",
      description:
        "All products made with 100% pure essential oils and natural ingredients, never compromising on quality.",
    },
    {
      icon: <Users className="text-logo-gold" size={32} />,
      title: "Community",
      description:
        "Supporting local women in business, creating workshops, and building a nurturing community space.",
    },
  ];

  const currentServices = [
    {
      name: "Tarot Readings",
      description:
        "30-minute spiritual guidance sessions in our peaceful sanctuary",
      duration: "30 minutes",
      icon: <Sparkles className="text-logo-gold" size={20} />,
    },
    {
      name: "Aroma Touch Massage",
      description:
        "Therapeutic massage with essential oils for deep relaxation",
      duration: "60 minutes",
      icon: <Heart className="text-logo-gold" size={20} />,
    },
    {
      name: "Aromatherapy Roll-Ons",
      description: "Custom essential oil blends for daily wellness and healing",
      duration: "15-30 minutes",
      icon: <Leaf className="text-logo-gold" size={20} />,
    },
    {
      name: "Workshops & Events",
      description:
        "Monthly workshops including cacao ceremonies and meditation",
      duration: "2-3 hours",
      icon: <Coffee className="text-logo-gold" size={20} />,
    },
  ];

  const popularProducts = [
    {
      name: "Lemon Myrtle Candles",
      description:
        "Handmade soy wax candles with pure essential oils, crafted with love",
      details: "200g natural soy wax with Lemon Myrtle essential oil",
    },
    {
      name: "Lemongrass Candles",
      description:
        "Uplifting and energizing candles perfect for creating sacred space",
      details: "200g natural soy wax with Lemongrass essential oil",
    },
    {
      name: "Magnesium Sprays",
      description:
        "Lavender & Lemongrass magnesium sprays for relaxation and muscle relief",
      details: "100ml magnesium spray with essential oils",
    },
    {
      name: "Aromatherapy Roll-Ons",
      description:
        "Custom essential oil blends for sleep, immunity, clarity, and more",
      details: "10ml bottles with crystal infusions",
    },
  ];

  const communityEvents = [
    {
      title: "Death Cafe Events",
      description:
        "Creating safe spaces for open conversations about death, dying, and life. These events provide comfort, understanding, and community support for those navigating end-of-life topics.",
      image: eventImg1,
      icon: <Heart className="text-logo-gold" size={24} />,
    },
    {
      title: "NGO Support Events",
      description:
        "Hosting fundraising and awareness events for our friend's orphanage in Mongolia. We believe in giving back globally and supporting children in need.",
      image: eventImg2,
      icon: <Globe className="text-logo-gold" size={24} />,
    },
    {
      title: "Women's Business Network",
      description:
        "Supporting local women entrepreneurs by providing space for their products and hosting networking events. We believe in lifting each other up.",
      image: eventImg3,
      icon: <Users className="text-logo-gold" size={24} />,
    },
    {
      title: "Wellness Workshops",
      description:
        "Monthly workshops including cacao ceremonies, meditation sessions, and spiritual healing practices. Open to all who seek transformation.",
      image: eventImg4,
      icon: <Coffee className="text-logo-gold" size={24} />,
    },
    {
      title: "Support Groups",
      description:
        "Safe spaces for those who have experienced domestic violence and mental health challenges. We're planning regular support group meetings.",
      image: eventImg5,
      icon: <Shield className="text-logo-gold" size={24} />,
    },
    {
      title: "Community Gatherings",
      description:
        "Regular events that bring our Maldon community together for healing, connection, and celebration of life's beautiful moments.",
      image: daySpaCollage,
      icon: <Smile className="text-logo-gold" size={24} />,
    },
  ];

  const futurePlans = [
    {
      title: "Healing & Massage Rooms",
      description:
        "Converting the back area into dedicated healing and massage rooms for private sessions.",
      icon: <Heart className="text-logo-gold" size={24} />,
    },
    {
      title: "Beautician Services",
      description:
        "Adding beautician services beginning of next year to expand our wellness offerings.",
      icon: <Award className="text-logo-gold" size={24} />,
    },
    {
      title: "Salt Room Therapy",
      description:
        "Creating a salt room experience in a tent, plus selling salt humidifiers and red light therapy.",
      icon: <Leaf className="text-logo-gold" size={24} />,
    },
    {
      title: "Support Groups",
      description:
        "Hosting support groups for domestic violence & mental health on weeknights.",
      icon: <Users className="text-logo-gold" size={24} />,
    },
    {
      title: "Mongolia Orphanage",
      description:
        "Supporting our friend's orphanage in Mongolia through sponsorship and fundraising.",
      icon: <Gift className="text-logo-gold" size={24} />,
    },
    {
      title: "Online Expansion",
      description:
        "Expanding our online shopping presence to reach more customers beyond Maldon.",
      icon: <Star className="text-logo-gold" size={24} />,
    },
  ];

  const tabs = [
    {
      id: "story",
      label: "Our Story",
      icon: <Heart className="text-logo-gold" size={20} />,
    },
    {
      id: "services",
      label: "Our Services",
      icon: <Sparkles className="text-logo-gold" size={20} />,
    },
    {
      id: "products",
      label: "Our Products",
      icon: <Leaf className="text-logo-gold" size={20} />,
    },
    {
      id: "community",
      label: "Community Events",
      icon: <Users className="text-logo-gold" size={20} />,
    },
    {
      id: "future",
      label: "Future Plans",
      icon: <Star className="text-logo-gold" size={20} />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-beige">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-warm-cream to-golden-sand">
        <div
          className="absolute inset-0 bg-repeat bg-center opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/canvas.png')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 font-serif">
                Meet Leanne & Lesley
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Two besties who turned their dreams into a fragrant wonderland
                of healing and empowerment
              </p>
        </div>
          </AnimateOnScroll>

          {/* Founders Introduction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <AnimateOnScroll>
              <div className="text-center">
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-logo-gold/20 to-bronze/20 rounded-2xl blur-lg opacity-50"></div>
                  <img
                    src={leanneImg}
                    alt="Leanne"
                    className="relative rounded-2xl shadow-golden w-full max-w-sm mx-auto object-cover border-4 border-border-light"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                  Leanne
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  After trauma, sexual abuse, domestic violence, and major
                  mental health challenges, I spent 8 months in Chiang Mai,
                  Thailand - including 3 months in a mental health
                  rehabilitation and wellbeing centre. Opening the shop gives me
                  a sense of HOPE, belonging, connection and wanting to give
                  back to the community and empower women who have been in
                  similar situations.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <span className="px-3 py-1 bg-nature-green/20 text-earth-brown rounded-full text-sm">
                    Peace
                  </span>
                  <span className="px-3 py-1 bg-nature-green/20 text-earth-brown rounded-full text-sm">
                    Freedom
                  </span>
                  <span className="px-3 py-1 bg-nature-green/20 text-earth-brown rounded-full text-sm">
                    Resilient
                  </span>
                  <span className="px-3 py-1 bg-nature-green/20 text-earth-brown rounded-full text-sm">
                    Courageous
                  </span>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="text-center">
              <motion.div
                  className="relative mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-logo-gold/20 to-bronze/20 rounded-2xl blur-lg opacity-50"></div>
                  <img
                    src={lesleyImg}
                    alt="Lesley"
                    className="relative rounded-2xl shadow-golden w-full max-w-sm mx-auto object-cover border-4 border-border-light"
                  />
              </motion.div>
                <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                  Lesley
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  I'm a Doterra Wellness advocate and carer for my mum who is
                  94. This shop is something that is uniquely mine, that brings
                  passion, sense of purpose, connection, and purpose. We both
                  love being in partnership together having fun, laughing,
                  creating, designing, humour, drive, passion.
                </p>
                <div className="flex justify-center gap-2 mt-4">
                  <span className="px-3 py-1 bg-nature-green/20 text-earth-brown rounded-full text-sm">
                    Spiritual
                  </span>
                  <span className="px-3 py-1 bg-nature-green/20 text-earth-brown rounded-full text-sm">
                    Creative
                  </span>
                  <span className="px-3 py-1 bg-nature-green/20 text-earth-brown rounded-full text-sm">
                    Passionate
                  </span>
                  <span className="px-3 py-1 bg-nature-green/20 text-earth-brown rounded-full text-sm">
                    Supportive
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Interactive Tabs */}
      <section className="py-16 md:py-24 bg-warm-cream relative">
        {/* Subtle pattern overlay for separation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-beige/30 to-transparent"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                  Discover Pure Gold
              </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  Explore our journey, services, and vision through interactive
                  stories
              </p>
            </div>
          </AnimateOnScroll>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-healing"
                      : "bg-container-bg text-text-primary hover:bg-primary/10 border border-border-light"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimateOnScroll>
              <div className="min-h-[600px]">
                {activeTab === "story" && (
                  <div className="space-y-16">
                    {timelineEvents.map((event, index) => (
                      <div
                        key={index}
                        className={`relative flex items-center ${
                          event.side === "left"
                            ? "lg:flex-row"
                            : "lg:flex-row-reverse"
                        } gap-8 lg:gap-16`}
                      >
                        {/* Timeline dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-logo-gold rounded-full ring-4 ring-white shadow-lg hidden lg:block z-10"></div>

                        {/* Content */}
                        <div
                          className={`flex-1 ${
                            event.side === "left"
                              ? "lg:text-right"
                              : "lg:text-left"
                          }`}
                        >
                          <div className="bg-container-bg rounded-xl p-8 shadow-warm hover:shadow-golden transition-all duration-300 border border-border-light">
                            <div className="flex items-center gap-3 mb-4">
                              {event.icon}
                              <span className="text-2xl font-bold text-logo-gold">
                                {event.year}
                              </span>
                              <span className="text-sm text-earth-brown font-medium">
                                ({event.person})
                              </span>
                            </div>
                            <h3 className="text-2xl font-bold text-text-primary mb-4 font-serif">
                              {event.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                              {event.description}
                            </p>
                          </div>
                        </div>

                        {/* Image */}
                        <div className="flex-1">
                          <motion.div
                            className="relative group"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                          >
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-logo-gold/20 to-bronze/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                            <img
                              src={event.image}
                              alt={event.title}
                              className="relative rounded-2xl shadow-golden w-full object-cover border-4 border-border-light"
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "services" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentServices.map((service, index) => (
                      <motion.div
                        key={index}
                        className="bg-container-bg rounded-xl p-8 shadow-warm hover:shadow-golden transition-all duration-300 border border-border-light"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-nature-green/20 rounded-full">
                            {service.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-text-primary font-serif">
                            {service.name}
                          </h3>
                        </div>
                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-earth-brown font-medium">
                            Duration: {service.duration}
                          </span>
                          <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2 rounded-full text-sm transition-all duration-300">
                            Book Now
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "products" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {popularProducts.map((product, index) => (
                      <motion.div
                        key={index}
                        className="bg-container-bg rounded-xl p-6 shadow-warm hover:shadow-golden transition-all duration-300 border border-border-light"
                        whileHover={{ y: -5 }}
                      >
                        <h3 className="text-xl font-bold text-text-primary mb-3 font-serif">
                          {product.name}
                        </h3>
                        <p className="text-text-secondary mb-4">
                          {product.description}
                        </p>
                        <span className="text-sm text-earth-brown font-medium">
                          {product.details}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "community" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {communityEvents.map((event, index) => (
                      <motion.div
                        key={index}
                        className="bg-container-bg rounded-xl overflow-hidden shadow-warm hover:shadow-golden transition-all duration-300 border border-border-light"
                        whileHover={{ y: -5 }}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute top-4 left-4">
                            {event.icon}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-text-primary mb-3 font-serif">
                            {event.title}
                          </h3>
                          <p className="text-text-secondary">
                            {event.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "future" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {futurePlans.map((plan, index) => (
                      <motion.div
                        key={index}
                        className="bg-container-bg rounded-xl p-6 shadow-warm hover:shadow-golden transition-all duration-300 border border-border-light"
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          {plan.icon}
                          <h3 className="text-xl font-bold text-text-primary font-serif">
                            {plan.title}
                    </h3>
                        </div>
                        <p className="text-text-secondary">
                          {plan.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 md:py-24 bg-golden-sand relative">
        {/* Subtle border pattern for separation */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-logo-gold/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-logo-gold/30 to-transparent"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 font-serif">
                    Our Mission
                  </h2>
                  <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                    <p>
                      We believe in holistic well-being, where every sense is
                      engaged to promote relaxation, rejuvenation, and inner
                      harmony. Our products work in harmony to calm the body,
                      soothe emotions, and uplift the mind.
                    </p>
                    <p>
                      We want customers to have an{" "}
                      <strong className="text-text-primary">experience</strong>{" "}
                      when they come into our shop – products, essential oil
                      scents, displays, calming and relaxing environment with
                      fun thrown in too. We're creating a{" "}
                      <strong className="text-text-primary">
                        fragrant wonderland
                      </strong>
                      .
                    </p>
                    <p>
                      Our goal is to genuinely assist people to have fun, cater
                      to their needs and preferences, and create personalized
                      experiences based on their sense of smell.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-logo-gold/20 to-bronze/20 rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative bg-container-bg rounded-2xl p-8 shadow-golden border border-border-light">
                    <h3 className="text-2xl font-bold text-text-primary mb-6 font-serif">
                      What Makes Us Unique
                    </h3>
                    <ul className="space-y-4 text-text-secondary">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-logo-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Spiritual services, workshops, tarot readings, and
                          healings
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-logo-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Handmade products with only essential oils and natural
                          ingredients
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-logo-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Supporting local women in business who handmake their
                          products
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-logo-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Creating community through workshops and events
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-logo-gold rounded-full mt-2 flex-shrink-0"></div>
                        <span>Dog-friendly space welcoming all ages</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-warm-cream relative">
        {/* Subtle pattern overlay for separation */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-50/40 to-transparent"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                  Our Core Values
              </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  The principles that guide everything we do at Pure Gold
              </p>
            </div>
          </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <AnimateOnScroll key={index}>
                  <div className="bg-container-bg rounded-xl p-8 shadow-warm hover:shadow-golden transition-all duration-300 border border-border-light">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-nature-green/20 rounded-full">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-4 text-center font-serif">
                      {value.title}
                    </h3>
                    <p className="text-text-secondary text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Location */}
      <section className="py-16 md:py-24 bg-golden-sand relative">
        {/* Subtle border pattern for separation */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-logo-gold/30 to-transparent"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                  Visit Our Sanctuary
              </h2>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                  Experience the magic of Pure Gold in our beautiful Maldon
                  location
              </p>
            </div>
          </AnimateOnScroll>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AnimateOnScroll>
                <div className="bg-container-bg rounded-xl p-8 shadow-warm border border-border-light">
                  <h3 className="text-2xl font-bold text-text-primary mb-6 font-serif">
                    Our Location
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
                <div className="bg-container-bg rounded-xl p-8 shadow-warm border border-border-light">
                  <h3 className="text-2xl font-bold text-text-primary mb-6 font-serif">
                    Opening Hours
                    </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-border-light">
                      <span className="text-text-primary font-medium">
                        Monday - Friday
                      </span>
                      <span className="text-text-secondary">
                        9:00 AM - 6:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border-light">
                      <span className="text-text-primary font-medium">
                        Saturday
                      </span>
                      <span className="text-text-secondary">
                        9:00 AM - 5:00 PM
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border-light">
                      <span className="text-text-primary font-medium">
                        Sunday
                      </span>
                      <span className="text-text-secondary">
                        10:00 AM - 4:00 PM
                      </span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-nature-green/20 rounded-lg">
                    <p className="text-sm text-text-secondary">
                      <strong>Note:</strong> We recommend booking appointments
                      in advance, especially for our popular pamper packages and
                      group sessions.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-cream to-golden-sand relative">
        {/* Subtle pattern overlay for final section */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-warm-beige/20 to-transparent"></div>
        <div className="relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimateOnScroll>
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 font-serif">
                Begin Your Healing Journey
                </h2>
              <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                Experience the transformative power of natural healing in our
                sacred sanctuary. Walk into our fragrant wonderland and discover
                the magic of Pure Gold.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-healing">
                  Book Your Session
                </button>
                <button className="bg-bronze hover:bg-bronze-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-warm">
                  Shop Our Products
                </button>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;

