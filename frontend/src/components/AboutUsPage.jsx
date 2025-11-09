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
import eventImg2 from "../assets/images/Aboutus/0c7d56c2-a981-460a-b97b-9be94ea9edca.jpg";
import eventImg3 from "../assets/images/Aboutus/4732aaea-73e4-4930-ab12-7c533000bb4a.jpg";
import eventImg4 from "../assets/images/Aboutus/6a9e58f1-2a78-402c-9ad1-809d387521b8.jpg";
import eventImg5 from "../assets/images/Aboutus/b9ba35a1-c84b-48f3-a9f4-76b664cf623f.jpg";

// Import Our Story images - using dynamic imports for better performance
const storyImages = {
  story1: [
    "/src/assets/images/Aboutus/ourstory/ll.jpeg",
    "/src/assets/images/Aboutus/ourstory/ll2.jpeg",
    "/src/assets/images/Aboutus/ourstory/popup.jpeg",
  ],
  story2: [
    "/src/assets/images/Aboutus/makingproducts/aromaprep.jpeg",
    "/src/assets/images/Aboutus/makingproducts/candleprep.jpg",
    "/src/assets/images/Aboutus/makingproducts/candleprep2.jpg",
  ],
  story3: [
    "/src/assets/images/Aboutus/officialopening/candles.jpg",
    "/src/assets/images/Aboutus/officialopening/gothicproducts.jpg",
    "/src/assets/images/Aboutus/officialopening/llgothic.jpeg",
  ],
  story4: [
    "/src/assets/images/Aboutus/lotus/gabby.png",
    "/src/assets/images/Aboutus/lotus/lotusmongolia.jpeg",
    "/src/assets/images/Aboutus/lotus/lotusmongolia2.jpeg",
  ],
  story5: [
    "/src/assets/images/Aboutus/massage/a.png",
    "/src/assets/images/Aboutus/massage/davidtobin.png",
    "/src/assets/images/Aboutus/massage/dog.jpg",
  ],
  story6: [
    "/src/assets/images/Aboutus/community/deathcafemaldon.jpeg",
    "/src/assets/images/Aboutus/community/deathcafeevent.jpeg",
    "/src/assets/images/Aboutus/community/deathcafeevent2.jpeg",
  ],
  story7: [
    "/src/assets/images/Aboutus/expansion/event.jpeg",
    "/src/assets/images/Aboutus/expansion/tarrot.jpeg",
  ],
};

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState("story");

  const storySections = [
    {
      id: 1,
      title: "The Beginning",
      subtitle: "Where Pure Gold blossomed",
      content:
        "Pure Gold blossomed from a dream shared by two soul-connected friends, Leanne and Lesley—bound by courage, creativity, and a deep commitment to holistic healing.\n\nAfter leaving behind a difficult past, Leanne found profound healing and purpose in Chiang Mai, where she immersed herself in the world of Quantum Healing. Upon returning, she reconnected with Lesley—a devoted wellness advocate and certified AromaTouch specialist—whose passion for self-care and spiritual wellbeing matched her own.\n\nTheir journey together began playfully, offering tarot readings in a local crystal shop—just for fun. But their shared love for spirituality, natural healing, and empowering others soon sparked something bigger: a vision for their own holistic and wellbeing shop, filled with aromatherapy products, healing tools, and heart-led experiences.\n\nThat vision started to take shape when Jamie, the owner of Maldon Getaways, invited them to host a pop-up shop during the Gothic Weekend. It was a beautiful opportunity—one that gave Pure Gold its first space to connect, share, and shine.\n\nAnd so, Pure Gold was born—from friendship, healing, and the belief that true wellness comes from within.",
      images: storyImages.story1,
      icon: <Heart className="text-logo-gold" size={24} />,
      color: "from-rose-50 to-pink-50",
      accentColor: "bg-rose-100",
    },
    {
      id: 2,
      title: "The Heart of Our Craft",
      subtitle: "Where magic meets creation",
      content:
        "Many magical days and late nights were spent at Lesley's house, where laughter, tears, and wild creativity flowed as freely as the essential oils. Surrounded by love and intuition, we hand-blended roll-ons and sprays—each one a reflection of our shared vision and heartfelt energy.\n\nA dear friend from Adelaide flew in to teach us the art of candle-making. What followed were four unforgettable days filled with joy, curiosity, and soulful experimentation. We mixed, measured, laughed (sometimes cried), and occasionally got our essential oil conversions hilariously wrong. But every moment was part of the magic.\n\nWe poured ourselves into every step—mastering fragrance blends, choosing the perfect wicks, and learning the delicate balance of heat, wax, and scent. With Leanne leading the alchemy and Lesley adding her signature creative touch to the finishing details, each candle became more than just a product. It became a story, a feeling, a healing moment.\n\nOur hand-poured candles are crafted as vessels of wellness—designed to calm the body, soothe emotions, and lift the spirit. Every flicker carries our intention: to guide others toward peace, self-care, and inner light.\n\nThis is Pure Gold. Created with heart. Shared with love.",
      images: storyImages.story2,
      icon: <Sparkles className="text-logo-gold" size={24} />,
      color: "from-purple-50 to-indigo-50",
      accentColor: "bg-purple-100",
    },
    {
      id: 3,
      title: "Our Official Opening",
      subtitle: "Where magic came to life",
      content:
        'As the Goldfields Gothic Festival of Dark Ideas approached, we knew we wanted to create something extra fun and a little bit wild. Lesley\'s mother playfully suggested bats and spiders—and that was all the inspiration we needed! Soon we were brewing up gothic-inspired creations: red-blooded spider sprays laced with frankincense, candles dripping with wax "blood," skull motifs, and eerie-yet-charming spider jewellery. It was quirky, unexpected, and pure magic.\n\nOn August 1st, 2024, we officially opened our 3-day pop-up shop in Maldon. Dressed in flowing black gowns and ethereal fairy wings, we fully embraced the Gothic spirit—ready to enchant and uplift with every scent, shimmer, and spark of joy.\n\nThe response was overwhelming. Our stall—filled with handcrafted aromatherapy products, healing sprays, and soulful candles—nearly sold out! Jamie from Maldon Getaways was so impressed he joked, "I want you here until 2030!"\n\nBut Pure Gold is more than a shop. For those who stepped into our space, it became a fragrant wonderland—a sanctuary woven with essential oils, intuitive healing, and heart. Built on friendship, purpose, and resilience, Pure Gold is a place where women uplift each other, reconnect with their inner strength, and celebrate who they truly are.\n\nWe believe holistic wellbeing is more than a trend—it\'s a lifestyle. One where the senses are soothed, the spirit is nourished, and every visitor feels seen, supported, and inspired.',
      images: storyImages.story3,
      icon: <Users className="text-logo-gold" size={24} />,
      color: "from-blue-50 to-cyan-50",
      accentColor: "bg-blue-100",
    },
    {
      id: 4,
      title: "Giving Back: From Streets to Safety",
      subtitle: "Supporting the Lotus Children's Centre, Mongolia",
      content:
        "Lesley and Gabby have been friends since childhood. Today, Gabby stands as the inspiring founder of the Lotus Children's Centre in Ulaanbaatar, Mongolia—a sanctuary that has been transforming lives for over 30 years.\n\nWhat began as a heartfelt mission has grown into a lifeline for children abandoned on the streets. Through tireless dedication, Gabby has provided safety, education, and life skills to more than 200 children. Today, she continues to nurture 45 young lives, giving them not just shelter, but a future filled with possibility. The Centre runs entirely on donations and sponsorships, making every act of support deeply meaningful.\n\nWhen Leanne and Lesley met Gabby, the connection was instant—heartfelt and soul-deep. Moved by her story and unwavering devotion, they knew they wanted to help.\n\nAt Pure Gold Holistic & Wellbeing, we proudly support the Lotus Children's Centre by selling handmade items from Mongolia. Every piece carries a story of resilience, hope, and love—and 100% of proceeds go directly to the children. It's a small act with a powerful ripple effect—turning compassion into real, lasting change.",
      images: storyImages.story4,
      icon: <Star className="text-logo-gold" size={24} />,
      color: "from-yellow-50 to-amber-50",
      accentColor: "bg-yellow-100",
    },
    {
      id: 5,
      title: "Expanding Our Healing Touch: Massage Therapy",
      subtitle: "Where hands meet heart",
      content:
        "As Pure Gold continued to grow, massage therapy felt like the natural next step—a way to bring deeper grounding, physical restoration, and embodied healing into our space.\n\nAt first, Leanne had doubts. Was massage really her calling? Were her hands made for this work? But everything changed under the wise, funny, and heart-led guidance of David John Tobin. His training was filled with laughter, soulful connection, and the kind of encouragement that melts fear away. By the end, both Leanne and Lesley left not just certified, but confident—ready to offer Relaxation and Remedial Massage with the same love and intention they brought to everything they do.\n\nJust a month later, they returned to complete their Trigger Point Massage certification, diving deeper into the art of healing the body through precision, intuition, and care.\n\nSince then, every massage—whether relaxation, remedial, or trigger point—has been infused with the Pure Gold essence: deep presence, energetic sensitivity, and just the right dash of cheeky charm.\n\nOne unforgettable moment captured it perfectly: during a massage with Lesley, a lively puppy leapt up onto the table and curled at his owner's feet—fully at peace. Even the animals could feel the calm in the room.\n\nAnd as for Leanne's trigger point sessions? Let's just say she quickly gained a reputation. \"Brace yourself—in the best way!\" became a running joke among clients who left feeling lighter, looser, and completely renewed.\n\nWhat began with uncertainty has become a beautiful, full-bodied offering—crafted with intuition, grounded in care, and delivered with heart. This is the Pure Gold touch: sacred, sensory, and soul-aligned.",
      images: storyImages.story5,
      icon: <Leaf className="text-logo-gold" size={24} />,
      color: "from-green-50 to-emerald-50",
      accentColor: "bg-green-100",
    },
    {
      id: 6,
      title: "Supporting the Wider Community",
      subtitle: "Where hearts connect and souls heal",
      content:
        "At Pure Gold, community connection lies at the heart of everything we do.\n\nOne of our most cherished offerings is the monthly Spiritual Circle—a sacred gathering where intuition is honoured, laughter is shared, and sisterhood is deeply felt. It's more than a group; it's a safe, empowering space where women come together to trust their inner voice, share their wisdom, and celebrate the unfolding magic of their lives. Here, confidence blooms, healing takes root, and every soul is lifted by the energy of love and belonging.\n\nThis year, our hearts called us to birth something even more profound—Death Café Maldon.\n\nPart of a global movement, our local Death Café is a not-for-profit, gently held space where people can speak openly about death, dying, grief, legacy, and what it means to truly live. For Lesley, the idea emerged during quiet moments of reflection while caring for her elderly mother. For Leanne, it came from a personal journey through grief, mental health challenges, and the raw, real process of loss.\n\nTogether, we felt deeply moved to create a space where these tender conversations could unfold with compassion, honesty, and courage.\n\nAt Death Café Maldon, nothing is taboo. There's no agenda, no pressure—just presence. Through shared dialogue, we hope to soften fear, foster peace, and remind each other that the journey of life and death is one we need not walk alone.\n\nWhether celebrating life's vibrant highs or honouring its quiet final chapters, Pure Gold is devoted to holding space for the full spectrum of the human experience—with heart, grace, and unwavering love.",
      images: storyImages.story6,
      icon: <Globe className="text-logo-gold" size={24} />,
      color: "from-teal-50 to-cyan-50",
      accentColor: "bg-teal-100",
    },
    {
      id: 7,
      title: "Wellness Expansion: Blissful Pampering Packages",
      subtitle: "Where indulgence meets soul-deep nourishment",
      content:
        "Recently, we had the absolute joy of hosting a radiant group of five women for a deeply nourishing experience—a soulful blend of relaxation massage, Reiki, tarot readings, foot spas, mandala art, and custom roll-on blending.\n\nThe space came alive with laughter, connection, and creativity. It was more than a gathering—it was a sacred circle where each woman was invited to reconnect with herself and others in a way that was both healing and magical.\n\nFrom that beautiful day, our Pure Bliss Pampering Spa Packages were born—intentionally curated experiences that combine indulgence with soul-deep nourishment. Whether hosted in our space or designed for special occasions, each package is crafted with care, intuition, and heart.\n\nAnd now, we're expanding that magic even further…\n\nWe're taking our offerings on the road—bringing the Pure Gold experience into the home. One of our first traveling pamper journeys? A 50th birthday celebration for a group of eight women, wrapped in warmth, ritual, and joyful feminine energy.\n\nThis is wellness reimagined: tender, sensory, and deeply personal. Whether you're gathering for a celebration or simply craving reconnection, our pampering packages are designed to meet you where you are—with love, intention, and a little sparkle of Pure Gold.",
      images: storyImages.story7,
      icon: <Award className="text-logo-gold" size={24} />,
      color: "from-orange-50 to-red-50",
      accentColor: "bg-orange-100",
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
      image: eventImg2,
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
      <section className="py-12 md:py-16 lg:py-20 xl:py-24 relative overflow-hidden bg-gradient-to-br from-warm-cream to-golden-sand">
        <div
          className="absolute inset-0 bg-repeat bg-center opacity-5"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/canvas.png')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <AnimateOnScroll>
            <div className="text-center mb-12 lg:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 lg:mb-6 font-serif">
                Meet Our Nature Guides
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed">
                Connected to earth's wisdom, here to guide you on your healing
                journey
              </p>
            </div>
          </AnimateOnScroll>

          {/* Nature Guides Section */}
          <div className="space-y-16 lg:space-y-20">
            {[
              {
                name: "Leanne",
                title: "Quantum Lightworker & Multidimensional Healer",
                image: leanneImg,
                story:
                  "Leanne offers quantum healing sessions infused with multidimensional frequencies from the Galactic Universe, interwoven with her own embodied advanced healing techniques anchored in higher light intelligence. Leanne works within advanced dimensional frequencies to clear illness at its energetic root, activating deep healing across timelines, heal past & present soul layers, ancestral lines and fragmented chakras. Within her sacred healing temple, she holds a nurturing, high-frequency space where your spirit guides, galactic allies, and higher self are invited to step forward, offering divine insight, guidance, and transmissions tailored for your unique soul path.",
              },
              {
                name: "Lesley",
                title: "Aromatic Alchemist / Energy Healer",
                image: lesleyImg,
                story:
                  "Lesley's passion for wellbeing and intuitive guidance has transformed the lives of those she supports. With expertise in Reiki, Tarot, and Rune readings, she brings a profound sense of clarity to those seeking spiritual and emotional alignment. As a skilled AromaTouch and Massage Therapist, she uses the art of touch to restore harmony within the body, offering comfort and rejuvenation through her gentle, restorative techniques. A dedicated advocate for doTERRA, Lesley's vast knowledge of Pure Essential Oils helps bring a sense of calmness to everyday life. Her creative spirit has shaped a fragrant sanctuary with an array of beautiful handcrafted aromatherapy products—a haven of tranquility designed to awaken the senses and soothe the soul. Lesley's approach to healing is imbued with kindness, intuition, and a heartfelt commitment to guiding others on their wellness journey.",
              },
            ].map((founder, index) => (
              <AnimateOnScroll key={founder.name}>
                <div
                  className={`flex flex-col md:flex-row items-center gap-8 lg:gap-12 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="relative">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full max-w-md mx-auto rounded-2xl shadow-golden object-cover border-4 border-logo-gold/20"
                      />
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-logo-gold/10 to-transparent"></div>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-serif">
                      {founder.name}
                    </h3>
                    <p className="text-lg text-logo-gold mb-6 font-medium">
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
                  <div className="space-y-12">
                    {storySections.map((section, index) => (
                      <motion.div
                        key={section.id}
                        className="relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      >
                        {/* Background Pattern */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-30`}
                        ></div>

                        {/* Main Content Container */}
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                          {/* Header Section */}
                          <div className="relative p-8 md:p-12 bg-gradient-to-r from-white/90 to-white/70">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                              {/* Icon and Title */}
                              <div className="flex items-center gap-6">
                                <div
                                  className={`p-6 rounded-2xl ${section.accentColor} shadow-xl relative overflow-hidden`}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                                  <div className="relative z-10">
                                    {section.icon}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary font-serif leading-tight">
                                      {section.title}
                                    </h2>
                                    <span className="text-sm text-logo-gold font-bold bg-gradient-to-r from-logo-gold/20 to-bronze/20 px-6 py-3 rounded-full shadow-lg border border-logo-gold/30">
                                      {section.year}
                                    </span>
                                  </div>
                                  <p className="text-2xl text-text-secondary font-medium">
                                    {section.subtitle}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Content and Images Grid */}
                          <div className="p-8 md:p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                              {/* Text Content */}
                              <div className="space-y-6">
                                <div className="prose prose-lg max-w-none">
                                  {section.content
                                    .split("\n\n")
                                    .map((paragraph, index) => (
                                      <p
                                        key={index}
                                        className="text-text-secondary leading-relaxed text-lg mb-6 first:text-2xl first:font-semibold first:text-text-primary"
                                      >
                                        {paragraph}
                                      </p>
                                    ))}
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
                          </div>

                          {/* Decorative Elements */}
                          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-logo-gold/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-bronze/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                        </div>
                      </motion.div>
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
