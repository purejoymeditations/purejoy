import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  Star,
  Sparkles,
  Users,
  Leaf,
  Shield,
  Globe,
  Award,
} from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

// Import story images
import story1Img1 from "../assets/images/Aboutus/ourstory/ll.jpeg";
import story1Img2 from "../assets/images/Aboutus/ourstory/ll2.jpeg";
import story1Img3 from "../assets/images/Aboutus/ourstory/popup.jpeg";
import story2Img1 from "../assets/images/Aboutus/makingproducts/aromaprep2.jpg";
import story2Img2 from "../assets/images/Aboutus/makingproducts/candleprep.jpg";
import story2Img3 from "../assets/images/Aboutus/makingproducts/candlewithpurpleimage.jpg";
import story3Img1 from "../assets/images/Aboutus/officialopening/candles.jpg";
import story3Img2 from "../assets/images/Aboutus/officialopening/gothicproducts.jpg";
import story3Img3 from "../assets/images/Aboutus/officialopening/llgothic.jpeg";
import story4Img1 from "../assets/images/Aboutus/lotus/gabby.png";
import story4Img2 from "../assets/images/Aboutus/lotus/lotusmongolia.jpeg";
import story4Img3 from "../assets/images/Aboutus/lotus/lotusmongolia2.jpeg";
import story5Img1 from "../assets/images/Aboutus/massage/a.png";
import story5Img2 from "../assets/images/Aboutus/massage/davidtobin.png";
import story5Img3 from "../assets/images/Aboutus/massage/dog.jpg";
import story6Img1 from "../assets/images/Aboutus/community/deathcafemaldon.jpeg";
import story6Img2 from "../assets/images/Aboutus/community/deathcafeevent.jpeg";
import story6Img3 from "../assets/images/Aboutus/community/deathcafeevent2.jpeg";
import story7Img1 from "../assets/images/Aboutus/expansion/event.jpeg";
import story7Img2 from "../assets/images/Aboutus/expansion/tarrot.jpeg";

const OurStory = () => {
  const [expandedSections, setExpandedSections] = useState(new Set([0])); // First section expanded by default

  const storySections = [
    {
      id: 1,
      title: "The Beginning",
      subtitle: "Where Pure Gold blossomed",
      year: "2023",
      content:
        "Pure Gold blossomed from a dream shared by two soul-connected friends, Leanne and Lesley—bound by courage, creativity, and a deep commitment to holistic healing.\n\nAfter leaving behind a difficult past, Leanne found profound healing and purpose in Chiang Mai, where she immersed herself in the world of Quantum Healing. Upon returning, she reconnected with Lesley—a devoted wellness advocate and certified AromaTouch specialist—whose passion for self-care and spiritual wellbeing matched her own.\n\nTheir journey together began playfully, offering tarot readings in a local crystal shop—just for fun. But their shared love for spirituality, natural healing, and empowering others soon sparked something bigger: a vision for their own holistic and wellbeing shop, filled with aromatherapy products, healing tools, and heart-led experiences.\n\nThat vision started to take shape when Jamie, the owner of Maldon Getaways, invited them to host a pop-up shop during the Gothic Weekend. It was a beautiful opportunity—one that gave Pure Gold its first space to connect, share, and shine.\n\nAnd so, Pure Gold was born—from friendship, healing, and the belief that true wellness comes from within.",
      images: [story1Img1, story1Img2, story1Img3],
      icon: <Heart className="text-logo-gold" size={24} />,
      color: "from-rose-50 to-pink-50",
      accentColor: "bg-rose-100",
    },
    {
      id: 2,
      title: "The Heart of Our Craft",
      subtitle: "Where magic meets creation",
      year: "2023-2024",
      content:
        "Many magical days and late nights were spent at Lesley's house, where laughter, tears, and wild creativity flowed as freely as the essential oils. Surrounded by love and intuition, we hand-blended roll-ons and sprays—each one a reflection of our shared vision and heartfelt energy.\n\nA dear friend from Adelaide flew in to teach us the art of candle-making. What followed were four unforgettable days filled with joy, curiosity, and soulful experimentation. We mixed, measured, laughed (sometimes cried), and occasionally got our essential oil conversions hilariously wrong. But every moment was part of the magic.\n\nWe poured ourselves into every step—mastering fragrance blends, choosing the perfect wicks, and learning the delicate balance of heat, wax, and scent. With Leanne leading the alchemy and Lesley adding her signature creative touch to the finishing details, each candle became more than just a product. It became a story, a feeling, a healing moment.\n\nOur hand-poured candles are crafted as vessels of wellness—designed to calm the body, soothe emotions, and lift the spirit. Every flicker carries our intention: to guide others toward peace, self-care, and inner light.\n\nThis is Pure Gold. Created with heart. Shared with love.",
      images: [story2Img1, story2Img2, story2Img3],
      icon: <Sparkles className="text-logo-gold" size={24} />,
      color: "from-purple-50 to-indigo-50",
      accentColor: "bg-purple-100",
    },
    {
      id: 3,
      title: "Our Official Opening",
      subtitle: "Where magic came to life",
      year: "August 1st, 2024",
      content:
        'As the Goldfields Gothic Festival of Dark Ideas approached, we knew we wanted to create something extra fun and a little bit wild. Lesley\'s mother playfully suggested bats and spiders—and that was all the inspiration we needed! Soon we were brewing up gothic-inspired creations: red-blooded spider sprays laced with frankincense, candles dripping with wax "blood," skull motifs, and eerie-yet-charming spider jewellery. It was quirky, unexpected, and pure magic.\n\nOn August 1st, 2024, we officially opened our 3-day pop-up shop in Maldon. Dressed in flowing black gowns and ethereal fairy wings, we fully embraced the Gothic spirit—ready to enchant and uplift with every scent, shimmer, and spark of joy.\n\nThe response was overwhelming. Our stall—filled with handcrafted aromatherapy products, healing sprays, and soulful candles—nearly sold out! Jamie from Maldon Getaways was so impressed he joked, "I want you here until 2030!"\n\nBut Pure Gold is more than a shop. For those who stepped into our space, it became a fragrant wonderland—a sanctuary woven with essential oils, intuitive healing, and heart. Built on friendship, purpose, and resilience, Pure Gold is a place where women uplift each other, reconnect with their inner strength, and celebrate who they truly are.\n\nWe believe holistic wellbeing is more than a trend—it\'s a lifestyle. One where the senses are soothed, the spirit is nourished, and every visitor feels seen, supported, and inspired.',
      images: [story3Img1, story3Img2, story3Img3],
      icon: <Users className="text-logo-gold" size={24} />,
      color: "from-blue-50 to-cyan-50",
      accentColor: "bg-blue-100",
    },
    {
      id: 4,
      title: "Giving Back: From Streets to Safety",
      subtitle: "Supporting the Lotus Children's Centre, Mongolia",
      year: "2024",
      content:
        "Lesley and Gabby have been friends since childhood. Today, Gabby stands as the inspiring founder of the Lotus Children's Centre in Ulaanbaatar, Mongolia—a sanctuary that has been transforming lives for over 30 years.\n\nWhat began as a heartfelt mission has grown into a lifeline for children abandoned on the streets. Through tireless dedication, Gabby has provided safety, education, and life skills to more than 200 children. Today, she continues to nurture 45 young lives, giving them not just shelter, but a future filled with possibility. The Centre runs entirely on donations and sponsorships, making every act of support deeply meaningful.\n\nWhen Leanne and Lesley met Gabby, the connection was instant—heartfelt and soul-deep. Moved by her story and unwavering devotion, they knew they wanted to help.\n\nAt Pure Gold Holistic & Wellbeing, we proudly support the Lotus Children's Centre by selling handmade items from Mongolia. Every piece carries a story of resilience, hope, and love—and 100% of proceeds go directly to the children. It's a small act with a powerful ripple effect—turning compassion into real, lasting change.",
      images: [story4Img1, story4Img2, story4Img3],
      icon: <Star className="text-logo-gold" size={24} />,
      color: "from-yellow-50 to-amber-50",
      accentColor: "bg-yellow-100",
    },
    {
      id: 5,
      title: "Expanding Our Healing Touch: Massage Therapy",
      subtitle: "Where hands meet heart",
      year: "2024",
      content:
        "As Pure Gold continued to grow, massage therapy felt like the natural next step—a way to bring deeper grounding, physical restoration, and embodied healing into our space.\n\nAt first, Leanne had doubts. Was massage really her calling? Were her hands made for this work? But everything changed under the wise, funny, and heart-led guidance of David John Tobin. His training was filled with laughter, soulful connection, and the kind of encouragement that melts fear away. By the end, both Leanne and Lesley left not just certified, but confident—ready to offer Relaxation and Remedial Massage with the same love and intention they brought to everything they do.\n\nJust a month later, they returned to complete their Trigger Point Massage certification, diving deeper into the art of healing the body through precision, intuition, and care.\n\nSince then, every massage—whether relaxation, remedial, or trigger point—has been infused with the Pure Gold essence: deep presence, energetic sensitivity, and just the right dash of cheeky charm.\n\nOne unforgettable moment captured it perfectly: during a massage with Lesley, a lively puppy leapt up onto the table and curled at his owner's feet—fully at peace. Even the animals could feel the calm in the room.\n\nAnd as for Leanne's trigger point sessions? Let's just say she quickly gained a reputation. \"Brace yourself—in the best way!\" became a running joke among clients who left feeling lighter, looser, and completely renewed.\n\nWhat began with uncertainty has become a beautiful, full-bodied offering—crafted with intuition, grounded in care, and delivered with heart. This is the Pure Gold touch: sacred, sensory, and soul-aligned.",
      images: [story5Img1, story5Img2, story5Img3],
      icon: <Leaf className="text-logo-gold" size={24} />,
      color: "from-green-50 to-emerald-50",
      accentColor: "bg-green-100",
    },
    {
      id: 6,
      title: "Supporting the Wider Community",
      subtitle: "Where hearts connect and souls heal",
      year: "2024",
      content:
        "At Pure Gold, community connection lies at the heart of everything we do.\n\nOne of our most cherished offerings is the monthly Spiritual Circle—a sacred gathering where intuition is honoured, laughter is shared, and sisterhood is deeply felt. It's more than a group; it's a safe, empowering space where women come together to trust their inner voice, share their wisdom, and celebrate the unfolding magic of their lives. Here, confidence blooms, healing takes root, and every soul is lifted by the energy of love and belonging.\n\nThis year, our hearts called us to birth something even more profound—Death Café Maldon.\n\nPart of a global movement, our local Death Café is a not-for-profit, gently held space where people can speak openly about death, dying, grief, legacy, and what it means to truly live. For Lesley, the idea emerged during quiet moments of reflection while caring for her elderly mother. For Leanne, it came from a personal journey through grief, mental health challenges, and the raw, real process of loss.\n\nTogether, we felt deeply moved to create a space where these tender conversations could unfold with compassion, honesty, and courage.\n\nAt Death Café Maldon, nothing is taboo. There's no agenda, no pressure—just presence. Through shared dialogue, we hope to soften fear, foster peace, and remind each other that the journey of life and death is one we need not walk alone.\n\nWhether celebrating life's vibrant highs or honouring its quiet final chapters, Pure Gold is devoted to holding space for the full spectrum of the human experience—with heart, grace, and unwavering love.",
      images: [story6Img1, story6Img2, story6Img3],
      icon: <Globe className="text-logo-gold" size={24} />,
      color: "from-teal-50 to-cyan-50",
      accentColor: "bg-teal-100",
    },
    {
      id: 7,
      title: "Wellness Expansion: Blissful Pampering Packages",
      subtitle: "Where indulgence meets soul-deep nourishment",
      year: "2024",
      content:
        "Recently, we had the absolute joy of hosting a radiant group of five women for a deeply nourishing experience—a soulful blend of relaxation massage, Reiki, tarot readings, foot spas, mandala art, and custom roll-on blending.\n\nThe space came alive with laughter, connection, and creativity. It was more than a gathering—it was a sacred circle where each woman was invited to reconnect with herself and others in a way that was both healing and magical.\n\nFrom that beautiful day, our Pure Bliss Pampering Spa Packages were born—intentionally curated experiences that combine indulgence with soul-deep nourishment. Whether hosted in our space or designed for special occasions, each package is crafted with care, intuition, and heart.\n\nAnd now, we're expanding that magic even further…\n\nWe're taking our offerings on the road—bringing the Pure Gold experience into the home. One of our first traveling pamper journeys? A 50th birthday celebration for a group of eight women, wrapped in warmth, ritual, and joyful feminine energy.\n\nThis is wellness reimagined: tender, sensory, and deeply personal. Whether you're gathering for a celebration or simply craving reconnection, our pampering packages are designed to meet you where you are—with love, intention, and a little sparkle of Pure Gold.",
      images: [story7Img1, story7Img2],
      icon: <Award className="text-logo-gold" size={24} />,
      color: "from-orange-50 to-red-50",
      accentColor: "bg-orange-100",
    },
    {
      id: 8,
      title: "The Future",
      subtitle: "What's next",
      year: "2025 & Beyond",
      content:
        "This is where you'll provide the content for section 8. You can include multiple paragraphs, quotes, or any detailed information about this part of your journey.",
      images: [
        // Add your image imports here
      ],
      icon: <Shield className="text-logo-gold" size={24} />,
      color: "from-violet-50 to-purple-50",
      accentColor: "bg-violet-100",
    },
  ];

  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-warm-beige">
      {/* Hero Section */}
      <section className="py-20 md:py-24 lg:py-32 bg-gradient-to-br from-warm-cream to-golden-sand relative overflow-hidden">
        <div
          className="absolute inset-0 bg-repeat bg-center opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/canvas.png')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-16 lg:mb-20">
              <div className="mb-8">
                <div className="w-20 h-1 bg-gradient-to-r from-logo-gold to-bronze rounded-full mx-auto mb-6"></div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-8 font-serif">
                  Our Story
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-bronze to-logo-gold rounded-full mx-auto"></div>
              </div>
              <p className="text-2xl md:text-3xl text-text-secondary max-w-5xl mx-auto leading-relaxed font-medium">
                A journey of healing, connection, and transformation that led to
                Pure Gold
              </p>
              <div className="mt-12 flex justify-center">
                <div className="flex items-center gap-4 text-logo-gold">
                  <Heart size={24} />
                  <span className="text-lg font-medium">
                    Every chapter matters
                  </span>
                  <Heart size={24} />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {storySections.map((section, index) => (
              <AnimateOnScroll key={section.id}>
                <motion.div
                  className={`bg-gradient-to-r ${section.color} rounded-3xl shadow-golden border border-border-light overflow-hidden hover:shadow-2xl transition-all duration-500`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Section Header */}
                  <div
                    className="p-8 md:p-10 cursor-pointer hover:bg-white/60 transition-all duration-500 rounded-t-2xl"
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div
                          className={`p-4 rounded-full ${section.accentColor} shadow-lg`}
                        >
                          {section.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-4 mb-3">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-primary font-serif">
                              {section.title}
                            </h2>
                            
                          </div>
                          <p className="text-xl text-text-secondary font-medium">
                            {section.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="text-logo-gold hover:text-bronze transition-colors duration-300">
                        {expandedSections.has(section.id) ? (
                          <ChevronUp size={28} />
                        ) : (
                          <ChevronDown size={28} />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSections.has(section.id) ? "auto" : 0,
                      opacity: expandedSections.has(section.id) ? 1 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-8 md:pb-10">
                      {/* Content */}
                      <div className="mb-10">
                        <div className="prose prose-lg max-w-none">
                          {section.content
                            .split("\n\n")
                            .map((paragraph, index) => (
                              <p
                                key={index}
                                className="text-text-secondary leading-relaxed text-xl mb-6 first:text-2xl first:font-medium"
                              >
                                {paragraph}
                              </p>
                            ))}
                        </div>
                      </div>

                      {/* Images Grid */}
                      {section.images && section.images.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                          {section.images.map((image, imgIndex) => (
                            <motion.div
                              key={imgIndex}
                              className="relative group overflow-hidden rounded-2xl shadow-warm"
                              whileHover={{ scale: 1.02, y: -5 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="absolute inset-0 bg-gradient-to-br from-logo-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <img
                                src={image}
                                alt={`${section.title} - Image ${imgIndex + 1}`}
                                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-sm font-medium">
                                  Pure Gold Journey
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Placeholder for images when none are provided */}
                      {(!section.images || section.images.length === 0) && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                          {[1, 2, 3].map((placeholder) => (
                            <div
                              key={placeholder}
                              className="bg-white/50 rounded-xl h-64 flex items-center justify-center border-2 border-dashed border-border-light"
                            >
                              <div className="text-center text-text-secondary">
                                <div className="text-4xl mb-2">📸</div>
                                <p className="text-sm">Image {placeholder}</p>
                                <p className="text-xs text-earth-brown">
                                  Add your image here
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-warm-cream to-golden-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6 font-serif">
              Continue Our Journey Together
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Every chapter of our story has led us here, and we're excited to
              write the next chapters with you. Join us in creating more
              beautiful moments of healing and transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-healing">
                Visit Our Shop
              </button>
              <button className="bg-bronze hover:bg-bronze-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-warm">
                Book a Session
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
