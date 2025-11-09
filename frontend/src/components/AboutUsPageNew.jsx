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
  Instagram,
  Facebook,
  MessageCircle,
  Rss,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

// Import images
import leanneImg from "../assets/images/homepage/leannebio.jpeg";
import lesleyImg from "../assets/images/homepage/leselybio.jpeg";

// Import Our Story images
import storyImg1 from "../assets/images/Aboutus/ourstory/ll.jpeg";
import storyImg2 from "../assets/images/Aboutus/ourstory/ll2.jpeg";
import storyImg3 from "../assets/images/Aboutus/ourstory/popup.jpeg";
import makingImg1 from "../assets/images/Aboutus/makingproducts/aromaprep.jpeg";
import makingImg2 from "../assets/images/Aboutus/makingproducts/candleprep.jpg";
import makingImg3 from "../assets/images/Aboutus/makingproducts/candleprep2.jpg";
import openingImg1 from "../assets/images/Aboutus/officialopening/candles.jpg";
import openingImg2 from "../assets/images/Aboutus/officialopening/gothicproducts.jpg";
import openingImg3 from "../assets/images/Aboutus/officialopening/llgothic.jpeg";
import mongoliaImg1 from "../assets/images/Aboutus/lotus/gabby.png";
import mongoliaImg2 from "../assets/images/Aboutus/lotus/lotusmongolia.jpeg";
import mongoliaImg3 from "../assets/images/Aboutus/lotus/lotusmongolia2.jpeg";
import massageImg1 from "../assets/images/Aboutus/massage/a.png";
import massageImg2 from "../assets/images/Aboutus/massage/davidtobin.png";
import massageImg3 from "../assets/images/Aboutus/massage/dog.jpg";

const AboutUsPageNew = () => {
  const [activeSection, setActiveSection] = useState("founders");

  const sections = [
    {
      id: "founders",
      title: "Who We Are",
      icon: <Heart className="text-logo-gold" size={24} />,
    },
    {
      id: "story",
      title: "Our Story",
      icon: <Sparkles className="text-logo-gold" size={24} />,
    },
    {
      id: "mission",
      title: "What Drives US",
      icon: <Star className="text-logo-gold" size={24} />,
    },
  ];

  const founders = [
    {
      name: "Leanne",
      title: "Quantum Lightworker & Multidimensional Healer",
      image: leanneImg,
      story:
        "Leanne offers quantum healing sessions infused with multidimensional frequencies from the Galactic Universe, interwoven with her own embodied advanced healing techniques anchored in higher light intelligence. Leanne works within advanced dimensional frequencies to clear illness at its energetic root, activating deep healing across timelines, heal past & present soul layers, ancestral lines and fragmented chakras.",
    },
    {
      name: "Lesley",
      title: "Aromatic Alchemist / Energy Healer",
      image: lesleyImg,
      story:
        "Lesley's passion for wellbeing and intuitive guidance has transformed the lives of those she supports. With expertise in Reiki, Tarot, and Rune readings, she brings a profound sense of clarity to those seeking spiritual and emotional alignment. As a skilled AromaTouch and Massage Therapist, she uses the art of touch to restore harmony within the body.",
    },
  ];

  const storySections = [
    {
      title: "The Beginning",
      content:
        "Pure Gold blossomed from a dream shared by two soul-connected friends, Leanne and Lesley—bound by courage, creativity, and a deep commitment to holistic healing. After leaving behind a difficult past, Leanne found profound healing and purpose in Chiang Mai, where she immersed herself in the world of Quantum Healing. Upon returning, she reconnected with Lesley—a devoted wellness advocate and certified AromaTouch specialist—whose passion for self-care and spiritual wellbeing matched her own. Their journey together began playfully, offering tarot readings in a local crystal shop—just for fun. But their shared love for spirituality, natural healing, and empowering others soon sparked something bigger: a vision for their own holistic and wellbeing shop, filled with aromatherapy products, healing tools, and heart-led experiences.",
      year: "2024",
      images: [storyImg1, storyImg2, storyImg3],
    },
    {
      title: "The Heart of Our Craft",
      content:
        "Many magical days and late nights were spent at Lesley's house, where laughter, tears, and wild creativity flowed as freely as the essential oils. Surrounded by love and intuition, we hand-blended roll-ons and sprays—each one a reflection of our shared vision and heartfelt energy. A dear friend from Adelaide flew in to teach us the art of candle-making. What followed were four unforgettable days filled with joy, curiosity, and soulful experimentation. We mixed, measured, laughed (sometimes cried), and occasionally got our essential oil conversions hilariously wrong. But every moment was part of the magic. We poured ourselves into every step—mastering fragrance blends, choosing the perfect wicks, and learning the delicate balance of heat, wax, and scent. With Leanne leading the alchemy and Lesley adding her signature creative touch to the finishing details, each candle became more than just a product. It became a story, a feeling, a healing moment.",
      year: "2024",
      images: [makingImg1, makingImg2, makingImg3],
    },
    {
      title: "Our Official Opening",
      content:
        'As the Goldfields Gothic Festival of Dark Ideas approached, we knew we wanted to create something extra fun and a little bit wild. Lesley\'s mother playfully suggested bats and spiders—and that was all the inspiration we needed! Soon we were brewing up gothic-inspired creations: red-blooded spider sprays laced with frankincense, candles dripping with wax "blood," skull motifs, and eerie-yet-charming spider jewellery. It was quirky, unexpected, and pure magic. On August 1st, 2024, we officially opened our 3-day pop-up shop in Maldon. Dressed in flowing black gowns and ethereal fairy wings, we fully embraced the Gothic spirit—ready to enchant and uplift with every scent, shimmer, and spark of joy. The response was overwhelming. Our stall—filled with handcrafted aromatherapy products, healing sprays, and soulful candles—nearly sold out! Jamie from Maldon Getaways was so impressed he joked, "I want you here until 2030!"',
      year: "2024",
      images: [openingImg1, openingImg2, openingImg3],
    },
    {
      title: "Giving Back: From Streets to Safety",
      content:
        "Lesley and Gabby have been friends since childhood. Today, Gabby stands as the inspiring founder of the Lotus Children's Centre in Ulaanbaatar, Mongolia—a sanctuary that has been transforming lives for over 30 years. What began as a heartfelt mission has grown into a lifeline for children abandoned on the streets. Through tireless dedication, Gabby has provided safety, education, and life skills to more than 200 children. Today, she continues to nurture 45 young lives, giving them not just shelter, but a future filled with possibility. When Leanne and Lesley met Gabby, the connection was instant—heartfelt and soul-deep. Moved by her story and unwavering devotion, they knew they wanted to help. At Pure Gold Holistic & Wellbeing, we proudly support the Lotus Children's Centre by selling handmade items from Mongolia. Every piece carries a story of resilience, hope, and love—and 100% of proceeds go directly to the children.",
      year: "2024",
      images: [mongoliaImg1, mongoliaImg2, mongoliaImg3],
    },
    {
      title: "Expanding Our Healing Touch",
      content:
        "As Pure Gold continued to grow, massage therapy felt like the natural next step—a way to bring deeper grounding, physical restoration, and embodied healing into our space. At first, Leanne had doubts. Was massage really her calling? Were her hands made for this work? But everything changed under the wise, funny, and heart-led guidance of David John Tobin. His training was filled with laughter, soulful connection, and the kind of encouragement that melts fear away. By the end, both Leanne and Lesley left not just certified, but confident—ready to offer Relaxation and Remedial Massage with the same love and intention they brought to everything they do. Just a month later, they returned to complete their Trigger Point Massage certification, diving deeper into the art of healing the body through precision, intuition, and care.",
      year: "2024",
      images: [massageImg1, massageImg2, massageImg3],
    },
  ];

  const values = [
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-beige">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-warm-cream to-golden-sand opacity-90"></div>
        <div
          className="absolute inset-0 bg-repeat opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/canvas.png')",
          }}
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 font-serif">
                Meet Our Nature Guides
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Connected to earth's wisdom, here to guide you on your healing
                journey
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
          {activeSection === "founders" && (
            <div className="space-y-16">
              {founders.map((founder, index) => (
                <AnimateOnScroll key={founder.name}>
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="relative">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover border-4 border-logo-gold/20"
                        />
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-logo-gold/10 to-transparent"></div>
                      </div>
                    </div>
                    <div className="flex-1 text-center lg:text-left">
                      <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-serif">
                        {founder.name}
                      </h3>
                      <p className="text-xl text-logo-gold mb-6 font-medium">
                        {founder.title}
                      </p>
                      <p className="text-text-secondary leading-relaxed text-lg">
                        {founder.story}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}

          {activeSection === "story" && (
            <div className="space-y-8">
              {storySections.map((section, index) => (
                <AnimateOnScroll key={index}>
                  <motion.div
                    className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/60 overflow-hidden relative"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    {/* Header with Icon and Title */}
                    <div className="flex items-start gap-6 mb-8">
                      <div className="flex-shrink-0">
                        <div className="p-4 bg-gradient-to-br from-logo-gold/20 to-bronze/20 rounded-2xl shadow-lg">
                          <Sparkles className="text-logo-gold" size={32} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-2">
                          <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-serif leading-tight">
                            {section.title}
                          </h2>
                          <span className="inline-flex items-center px-4 py-2 text-sm font-bold text-logo-gold bg-gradient-to-r from-logo-gold/20 to-bronze/20 rounded-full shadow-md border border-logo-gold/30">
                            {section.year}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content and Images Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                      {/* Text Content */}
                      <div className="space-y-6">
                        <div className="prose prose-lg max-w-none">
                          <p className="text-text-secondary leading-relaxed text-lg md:text-xl">
                            {section.content}
                          </p>
                        </div>
                      </div>

                      {/* Images Gallery */}
                      {section.images && section.images.length > 0 && (
                        <div className="space-y-6">
                          <h3 className="text-2xl font-bold text-text-primary font-serif mb-6">
                            Visual Journey
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {section.images.map((image, imgIndex) => (
                              <motion.div
                                key={imgIndex}
                                className="relative group overflow-hidden rounded-2xl shadow-xl"
                                whileHover={{ scale: 1.03, y: -8 }}
                                transition={{
                                  duration: 0.5,
                                  ease: "easeOut",
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-logo-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                  src={image}
                                  alt={`${section.title} - Image ${
                                    imgIndex + 1
                                  }`}
                                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                  loading="lazy"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <p className="text-white text-lg font-semibold">
                                    Pure Gold
                                  </p>
                                  <p className="text-white/80 text-sm">
                                    Journey of Healing
                                  </p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-logo-gold/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-bronze/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                  </motion.div>
                </AnimateOnScroll>
              ))}
            </div>
          )}

          {activeSection === "mission" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimateOnScroll>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 font-serif"></h2>
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
                      experiences based on their senses.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-logo-gold/20 to-bronze/20 rounded-2xl blur-lg opacity-50"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
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
                        <span>
                          Contibution through Not for Profit Organisation
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
          )}

          {activeSection === "values" && (
            <div>
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
                {values.map((value, index) => (
                  <AnimateOnScroll key={index}>
                    <motion.div
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 text-center"
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex justify-center mb-6">
                        <div className="p-4 bg-gradient-to-br from-logo-gold/20 to-bronze/20 rounded-full">
                          {value.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-text-primary mb-4 font-serif">
                        {value.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {value.description}
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
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
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
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
                <div className="mt-6 p-4 bg-gradient-to-r from-logo-gold/20 to-bronze/20 rounded-lg">
                  <p className="text-sm text-text-secondary">
                    <strong>Note:</strong> We recommend booking appointments in
                    advance, especially for our popular pamper packages and
                    group sessions.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-cream to-golden-sand">
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
      </section>
    </div>
  );
};

export default AboutUsPageNew;
