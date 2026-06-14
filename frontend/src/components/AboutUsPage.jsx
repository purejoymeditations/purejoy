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
import { useNavigate } from "react-router-dom";

// Import images
import leanneImg from "../assets/images/homepage/leannebio.jpeg";
import lesleyImg from "../assets/images/homepage/leselybio.jpeg";

// Import Our Story images
import storyImg1 from "../assets/images/Aboutus/ourstory/ll.jpeg";
import storyImg2 from "../assets/images/Aboutus/ourstory/ll2.jpeg";
import storyImg3 from "../assets/images/Aboutus/ourstory/popup.jpeg";
import makingImg1 from "../assets/images/Aboutus/makingproducts/candlewithpurpleimage.jpg";
import makingImg2 from "../assets/images/Aboutus/makingproducts/candleprep.jpg";
import makingImg3 from "../assets/images/Aboutus/makingproducts/candleprep2.jpg";
import openingImg1 from "../assets/images/Aboutus/officialopening/officialopeningcandle.jpg";
import openingImg2 from "../assets/images/Aboutus/officialopening/gothicproducts.jpg";
import openingImg3 from "../assets/images/Aboutus/officialopening/llgothic.jpeg";
import mongoliaImg1 from "../assets/images/Aboutus/lotus/gabby.png";
import mongoliaImg2 from "../assets/images/Aboutus/lotus/lotusmongolia.jpeg";
import mongoliaImg3 from "../assets/images/Aboutus/lotus/lotusmongolia2.jpeg";
import massageImg1 from "../assets/images/Aboutus/massage/a.png";
import massageImg2 from "../assets/images/Aboutus/massage/davidtobin.png";
import massageImg3 from "../assets/images/Aboutus/massage/dog.jpg";
// Import images for What Makes Us Unique section
import uniqueImg1 from "../assets/images/Aboutus/officialopening/kellywhatmakesusunique.png";
import uniqueImg2 from "../assets/images/Aboutus/officialopening/ourfriendship.png";
import uniqueImg3 from "../assets/images/Aboutus/officialopening/puregoldunique.png";
import uniqueImg4 from "../assets/images/Aboutus/officialopening/uniqueproduct.png";

const AboutUsPage = () => {
  const [activeSection, setActiveSection] = useState("founders");
  const navigate = useNavigate();

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
      title: "What makes us Unique?",
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
      title: "Reiki healing / Tarot / Aromatouch massage",
      image: lesleyImg,
      story:
        "A Healer’s Light Heart open, soul aligned— to heal, inspire, and uplift.I do not mend with hands alone, but with the warmth my soul has known.In love I walk, in light I lead, With open heart and gentle creed.My compassion flows, a healing stream, reviving hearts, restoring dreams.I hold the space where truth can rise, where fears are met, not brushed aside.To awaken and ignite—our flames as one, our inner light.For every heart, a sacred role- This is the vow of my spirit’s soul.",
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
      year: "2025",
      images: [massageImg1, massageImg2, massageImg3],
    },
    {
      title: " A Year of Expansion, Energy & New Holistic Services",
      content:
        "ITOVI WELLNESS SCAN -- In 2026, Pure Gold Holistic & Wellbeing proudly expanded into deeper personalised wellness support with the introduction of iTovi Wellness Scanning. This unique scan offers insight into energetic and physical imbalances, supporting customers with tailored recommendations for their individual needs. Whether you’re seeking clarity around stress, fatigue, immune support, emotional wellbeing, or nervous system regulation, iTovi provides a beautiful starting point for deeper self-awareness and healing. This marks an exciting evolution in our mission: helping people reconnect with their body’s wisdom and restore balance from the inside out. Personalised one on one sessions available. SPIRITUAL CIRCLES -- To welcome the bold and transformative frequency of the Year of the Fire Horse, we hosted our first Spiritual Circle of 2026, drawing together 15 beautiful souls for a morning of ritual, release, and empowerment. During this powerful circle, each participant created their own Fire Horse Alchemy Jar, infused with intention, symbolism, and energetic tools to support them throughout the year. These jars became sacred reminders to release old stories, outdated identities, limiting beliefs, and inherited stereotypes — and to step into freedom, momentum, and self-leadership. It was a celebration of new beginnings, soul expansion, and the reminder that the Universe responds when we choose courage. Circles - 1st Sunday of each month – 10am to 12 am.",
      year: "2026",
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
                                className="relative group overflow-hidden rounded-2xl shadow-xl bg-gray-100"
                                whileHover={{ scale: 1.03, y: -8 }}
                                transition={{
                                  duration: 0.5,
                                  ease: "easeOut",
                                }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                <div className="absolute inset-0 bg-gradient-to-br from-logo-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                <div className="w-full h-72 flex items-center justify-center overflow-hidden">
                                  <img
                                    src={image}
                                    alt={`${section.title} - Image ${
                                      imgIndex + 1
                                    }`}
                                    className="max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-110 transition-transform duration-700"
                                    loading="lazy"
                                  />
                                </div>
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
            <div className="space-y-16">
              {/* Main Content */}
              <AnimateOnScroll>
                <div className="bg-gradient-to-br from-white/95 to-warm-cream/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-logo-gold/10 relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-logo-gold/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-bronze/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-12">
                      <div className="inline-flex items-center justify-center mb-6">
                        <Sparkles className="text-logo-gold mr-3" size={32} />
                        <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-serif">
                          Why Pure Gold Holistic & Wellbeing Is a Must-Visit
                        </h2>
                        <Sparkles className="text-logo-gold ml-3" size={32} />
                      </div>
                      <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-text-secondary leading-relaxed mb-4">
                          Pure Gold Holistic & Wellbeing isn't just a shop —
                          it's an experience.
                        </p>
                        <p className="text-lg text-text-secondary leading-relaxed">
                          From the moment you walk through the door, you step
                          into a space designed to soothe the senses, calm the
                          nervous system, and reconnect you to yourself.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 space-y-6 max-w-4xl mx-auto">
                    {/* Point 1 */}
                    <motion.div
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 border border-logo-gold/10 hover:border-logo-gold/20 hover:shadow-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-gradient-to-br from-logo-gold/10 to-bronze/10 rounded-xl">
                        <Leaf className="text-logo-gold" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                          🌿 1. A True Sensory Sanctuary
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed">
                          Every detail is intentional — the scent of essential
                          oils, soft lighting, crystals, textures, and sound.
                          It's not retail-first; it's how your body feels while
                          you're here. People often say they feel calmer the
                          moment they enter.
                        </p>
                      </div>
                    </motion.div>

                    {/* Point 2 */}
                    <motion.div
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 border border-logo-gold/10 hover:border-logo-gold/20 hover:shadow-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-gradient-to-br from-logo-gold/10 to-bronze/10 rounded-xl">
                        <Heart className="text-logo-gold" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                          🌿 2. Healing + Beauty Under One Roof
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed mb-3">
                          Few spaces genuinely blend holistic healing and beauty
                          therapy. At Pure Gold, you can:
                        </p>
                        <ul className="space-y-2 text-lg text-text-secondary ml-6">
                          <li className="list-disc">
                            Receive energy healing, massage, meditation, and
                            spiritual sessions
                          </li>
                          <li className="list-disc">
                            Book beauty services that feel nurturing, not rushed
                          </li>
                          <li className="list-disc">
                            Shop handcrafted products infused with intention
                          </li>
                        </ul>
                        <p className="text-lg text-text-secondary leading-relaxed mt-3">
                          It's self-care that honours both body and soul.
                        </p>
                      </div>
                    </motion.div>

                    {/* Point 3 */}
                    <motion.div
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 border border-logo-gold/10 hover:border-logo-gold/20 hover:shadow-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-gradient-to-br from-logo-gold/10 to-bronze/10 rounded-xl">
                        <Sparkles className="text-logo-gold" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                          🌿 3. Handcrafted, High-Vibration Products
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed mb-3">
                          Your products aren't mass-made. They're:
                        </p>
                        <ul className="space-y-2 text-lg text-text-secondary ml-6">
                          <li className="list-disc">
                            Handcrafted in small batches
                          </li>
                          <li className="list-disc">
                            Infused with crystals, magnesium, essential oils,
                            and moon energy
                          </li>
                          <li className="list-disc">
                            Created with care, ritual, and intention
                          </li>
                        </ul>
                        <p className="text-lg text-text-secondary leading-relaxed mt-3">
                          Customers aren't just buying a candle or spray —
                          they're taking home a tool for wellbeing.
                        </p>
                      </div>
                    </motion.div>

                    {/* Point 4 */}
                    <motion.div
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 border border-logo-gold/10 hover:border-logo-gold/20 hover:shadow-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-gradient-to-br from-logo-gold/10 to-bronze/10 rounded-xl">
                        <Users className="text-logo-gold" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                          🌿 4. Experienced, Heart-Led Practitioners
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed">
                          With decades of experience in teaching, healing, and
                          bodywork, the practitioners at Pure Gold don't just
                          "offer services" — they listen, see, and support.
                          Clients feel safe, held, and respected, whether
                          they're here for beauty, healing, or deep rest.
                        </p>
                      </div>
                    </motion.div>

                    {/* Point 5 */}
                    <motion.div
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 border border-logo-gold/10 hover:border-logo-gold/20 hover:shadow-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-gradient-to-br from-logo-gold/10 to-bronze/10 rounded-xl">
                        <Shield className="text-logo-gold" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                          🌿 5. A Space of Belonging
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed mb-3">
                          Pure Gold has a strong community heart. It's a place
                          where:
                        </p>
                        <ul className="space-y-2 text-lg text-text-secondary ml-6">
                          <li className="list-disc">Locals feel known</li>
                          <li className="list-disc">Visitors feel welcome</li>
                          <li className="list-disc">
                            Women feel safe to be themselves
                          </li>
                        </ul>
                        <p className="text-lg text-text-secondary leading-relaxed mt-3">
                          People come back because they feel seen, not sold to.
                        </p>
                      </div>
                    </motion.div>

                    {/* Point 6 */}
                    <motion.div
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 border border-logo-gold/10 hover:border-logo-gold/20 hover:shadow-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-gradient-to-br from-logo-gold/10 to-bronze/10 rounded-xl">
                        <MapPin className="text-logo-gold" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                          🌿 6. A Destination Experience in Maldon
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed mb-3">
                          Set in the historic heart of Maldon, Pure Gold has
                          become a destination stop, not just a shop. Visitors
                          often plan their day around:
                        </p>
                        <ul className="space-y-2 text-lg text-text-secondary ml-6">
                          <li className="list-disc">A treatment</li>
                          <li className="list-disc">
                            A browse through the apothecary-style retail
                          </li>
                          <li className="list-disc">
                            A moment to slow down and breathe
                          </li>
                        </ul>
                        <p className="text-lg text-text-secondary leading-relaxed mt-3">
                          It's a place you feel — and remember.
                        </p>
                      </div>
                    </motion.div>

                    {/* Point 7 */}
                    <motion.div
                      className="flex items-start gap-6 p-6 rounded-2xl bg-white/60 hover:bg-white/80 transition-all duration-300 border border-logo-gold/10 hover:border-logo-gold/20 hover:shadow-lg"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex-shrink-0 mt-1 p-3 bg-gradient-to-br from-logo-gold/10 to-bronze/10 rounded-xl">
                        <Star className="text-logo-gold" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">
                          🌿 7. It's Real, Grounded, and Authentic
                        </h3>
                        <p className="text-lg text-text-secondary leading-relaxed">
                          There's no pressure, no pretense, no spiritual
                          "performance." Everything offered is lived, tested,
                          and embodied. That authenticity is what makes people
                          trust the space.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* Values & Trust Section - Creative Design */}
              <AnimateOnScroll>
                <div className="relative overflow-hidden">
                  {/* Background with decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-warm-cream/40 via-white/60 to-logo-gold/5 rounded-3xl"></div>
                  <div className="absolute top-0 right-0 w-96 h-96 bg-logo-gold/5 rounded-full blur-3xl -translate-y-48 translate-x-48"></div>
                  <div className="absolute bottom-0 left-0 w-80 h-80 bg-bronze/5 rounded-full blur-3xl translate-y-40 -translate-x-40"></div>

                  <div className="relative z-10 p-8 md:p-16">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-3 mb-6"
                      >
                        <Heart
                          className="text-logo-gold animate-pulse"
                          size={32}
                        />
                        <h3 className="text-4xl md:text-6xl font-bold text-text-primary font-serif">
                          Our Core Values
                        </h3>
                        <Heart
                          className="text-logo-gold animate-pulse"
                          size={32}
                        />
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
                      >
                        The heart and soul of Pure Gold — what we stand for,
                        what we create, and why you can trust us
                      </motion.p>
                    </div>

                    {/* Creative Image Grid with Values */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                      {/* Large Featured Image - Our Devotion */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1 relative group"
                      >
                        <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-logo-gold/20 hover:border-logo-gold/40 transition-all duration-500">
                          {/* Image */}
                          <div className="absolute inset-0 bg-gradient-to-br from-warm-beige to-cream-50">
                            <img
                              src={uniqueImg3}
                              alt="Our devotion to healing and creating a safe space"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                          </div>

                          {/* Overlay with value content */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex flex-col justify-end p-8">
                            <div className="transform group-hover:translate-y-0 translate-y-4 transition-transform duration-500">
                              <div className="flex items-center gap-3 mb-4">
                                <Shield className="text-logo-gold" size={32} />
                                <h4 className="text-3xl md:text-4xl font-bold text-white font-serif">
                                  Our Devotion to Healing
                                </h4>
                              </div>
                              <p className="text-lg text-white/90 leading-relaxed mb-4">
                                Creating a safe space where every soul feels
                                seen, heard, and held. This is our sacred
                                commitment.
                              </p>
                              <div className="flex items-center gap-2 text-logo-gold">
                                <Heart className="w-5 h-5" />
                                <span className="text-sm font-semibold">
                                  Safe Space • Healing • Trust
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Floating decorative element */}
                          <div className="absolute top-6 right-6 w-16 h-16 bg-logo-gold/20 rounded-full backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <Sparkles className="text-logo-gold" size={24} />
                          </div>
                        </div>
                      </motion.div>

                      {/* Two smaller images stacked */}
                      <div className="space-y-8">
                        {/* Our Friendship */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="relative group h-[240px] rounded-3xl overflow-hidden shadow-xl border-4 border-logo-gold/20 hover:border-logo-gold/40 transition-all duration-500"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-warm-beige to-cream-50">
                            <img
                              src={uniqueImg2}
                              alt="Our friendship and loyalty"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex flex-col justify-end p-6">
                            <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                              <div className="flex items-center gap-2 mb-2">
                                <Users className="text-logo-gold" size={24} />
                                <h4 className="text-2xl font-bold text-white font-serif">
                                  Our Friendship & Loyalty
                                </h4>
                              </div>
                              <p className="text-white/90 text-sm leading-relaxed">
                                The bond that started it all — built on trust,
                                respect, and unwavering support
                              </p>
                            </div>
                          </div>
                        </motion.div>

                        {/* What Makes Us Unique */}
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="relative group h-[240px] rounded-3xl overflow-hidden shadow-xl border-4 border-logo-gold/20 hover:border-logo-gold/40 transition-all duration-500"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-warm-beige to-cream-50">
                            <img
                              src={uniqueImg1}
                              alt="What makes us unique"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                          </div>

                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent flex flex-col justify-end p-6">
                            <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform duration-500">
                              <div className="flex items-center gap-2 mb-2">
                                <Star className="text-logo-gold" size={24} />
                                <h4 className="text-2xl font-bold text-white font-serif">
                                  What Makes Us Unique
                                </h4>
                              </div>
                              <p className="text-white/90 text-sm leading-relaxed">
                                Authentic, heart-led, and genuinely committed to
                                your wellbeing
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Our Unique Products - Full Width Feature */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="relative group rounded-3xl overflow-hidden shadow-2xl border-4 border-logo-gold/20 hover:border-logo-gold/40 transition-all duration-500"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image Side */}
                        <div className="relative h-[400px] lg:h-auto bg-gradient-to-br from-warm-beige to-cream-50 overflow-hidden">
                          <img
                            src={uniqueImg4}
                            alt="Our unique products"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-logo-gold/10 to-transparent"></div>
                        </div>

                        {/* Content Side */}
                        <div className="bg-gradient-to-br from-white to-warm-cream/30 p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-3 mb-4">
                            <Gift className="text-logo-gold" size={36} />
                            <h4 className="text-3xl md:text-4xl font-bold text-text-primary font-serif">
                              Our Unique Products
                            </h4>
                          </div>
                          <p className="text-lg text-text-secondary leading-relaxed mb-6">
                            Every product is handcrafted with intention, infused
                            with healing energy, and created in small batches.
                            We use only pure essential oils, natural
                            ingredients, and add crystals, magnesium, and moon
                            energy to enhance their healing properties.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-logo-gold/10 text-logo-gold rounded-full text-sm font-semibold">
                              Handcrafted
                            </span>
                            <span className="px-4 py-2 bg-logo-gold/10 text-logo-gold rounded-full text-sm font-semibold">
                              Pure Ingredients
                            </span>
                            <span className="px-4 py-2 bg-logo-gold/10 text-logo-gold rounded-full text-sm font-semibold">
                              Infused with Intention
                            </span>
                            <span className="px-4 py-2 bg-logo-gold/10 text-logo-gold rounded-full text-sm font-semibold">
                              Small Batches
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                    >
                      {[
                        {
                          icon: Shield,
                          text: "Safe Space",
                          color: "text-logo-gold",
                        },
                        {
                          icon: Heart,
                          text: "Heart-Led",
                          color: "text-bronze",
                        },
                        {
                          icon: Star,
                          text: "Authentic",
                          color: "text-logo-gold",
                        },
                        {
                          icon: Users,
                          text: "Community",
                          color: "text-bronze",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-logo-gold/10 hover:border-logo-gold/30 hover:bg-white/80 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <item.icon
                            className={`${item.color} mx-auto mb-3`}
                            size={32}
                          />
                          <p className="font-semibold text-text-primary">
                            {item.text}
                          </p>
                        </motion.div>
                      ))}
                    </motion.div>
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
              <button
                onClick={() => navigate("/services")}
                className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-healing"
              >
                Book Your Session
              </button>
              <button
                onClick={() => navigate("/shop")}
                className="bg-bronze hover:bg-bronze-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-warm"
              >
                Shop Our Products
              </button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
