import React, { useState } from "react";
import { motion } from "framer-motion";
import { Hand, Sparkles, BookOpen } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import ServiceCard from "./ServiceCard";
import remedialImg from "../assets/images/services/remedial.jpeg";
import relaxedImg from "../assets/images/services/relaxation.jpeg";
import triggerpointImg from "../assets/images/services/triggerpoint.jpeg";
import ancestralhealingImg from "../assets/images/services/ancestralhealing.jpeg";
import reikiImg from "../assets/images/services/reiki.jpeg";
import quantumImg from "../assets/images/services/quantum.jpeg";
import tarotImg from "../assets/images/tarrot.jpeg";
import meditationImg from "../assets/images/services/meditation.jpeg";

const servicesData = {
  Massage: [
    {
      _id: "massage1",
      name: "Remedial Full Body Massage",
      description:
        "Designed to address muscle tension and pain with targeted techniques tailored to your unique needs...",
      fullDescription:
        "Our Whole Body Remedial Massage is designed to address muscle tension, pain, and discomfort with targeted techniques tailored to your unique needs. Using a combination of deep tissue work, trigger point therapy, and stretching, this treatment helps release stubborn knots, improve mobility, and support your body's natural healing process. Whether you're recovering from an injury, dealing with chronic pain, or simply want to correct muscle imbalances, this massage offers both relief and long-lasting results.",
      price: "A$70.00",
      originalPrice: "A$99.00",
      duration: "1 hr",
      isIntroductory: true,
      image: remedialImg,
    },
    {
      _id: "massage2",
      name: "Relaxation Full Body Massage",
      description:
        "Experience the bliss of total relaxation with a massage designed to melt away tension and calm your mind...",
      fullDescription:
        "✨ Unwind, Relax, and Rejuvenate ✨ Experience the bliss of total relaxation with our Full Body Relaxation Massage. This gentle yet soothing treatment is designed to melt away tension, calm your mind, and leave you feeling completely restored. Using flowing strokes and light to medium pressure, this massage improves circulation, eases muscle tightness, and promotes deep relaxation. Whether you're seeking stress relief or simply a peaceful escape, this is your perfect self-care moment.",
      price: "A$70.00",
      originalPrice: "A$99.00",
      duration: "1 hr",
      isIntroductory: true,
      image: relaxedImg,
    },
    {
      _id: "massage3",
      name: "Trigger Point Massage",
      description:
        "Trigger point massages are best suited for people who have injuries, chronic pain, or a specific issue or condition...",
      fullDescription:
        "Trigger point massages are best suited for people who have injuries, chronic pain, or a specific issue or condition. Sometimes areas of tightness in the muscle tissues, known as trigger points, can cause pain in other parts of the body. By focusing on relieving trigger points, this type of massage can reduce pain.",
      price: "A$70.00",
      originalPrice: "A$99.00",
      duration: "1 hr",
      isIntroductory: true,
      image: triggerpointImg,
    },
  ],
  Healing: [
    {
      _id: "healing1",
      name: "Quantum Healing",
      description:
        "Access the energetic, ethereal, and subconscious realms for profound transformation. Clear blockages and align your energy systems for deep healing...",
      fullDescription:
        "During a Quantum Healing session, Leanne works beyond the physical body, accessing the energetic, ethereal, and subconscious realms to initiate profound transformation and deep healing. Grounded in the principles of quantum physics and energy medicine, this practice harmonizes and aligns your energy systems while clearing blockages that disrupt your emotional, mental, and physical well-being. Each session targets a specific trauma, illness, or energetic imbalance, addressing its root cause embedded within your body, mind, or emotional layers. These disruptions often stem from unresolved inner child wounds or past-life imprints. Through her intuitive guidance, Leanne clears these traumas, patterns, dissolving the energetic stagnation that manifests as stress, fatigue, anxiety, or physical symptoms. As blockages are released, your energy flows freely, fostering renewal and a higher vibrational state. This process shifts limiting beliefs and negative self-perceptions, helping you reconnect with your true essence, clarity, and balance. You'll leave feeling lighter, aligned, and ready to explore the limitless possibilities of your life.",
      price: "A$160.00",
      duration: "1 hr 30 min",
      image: quantumImg,
    },
    {
      _id: "healing2",
      name: "Massage & Reiki",
      description:
        "A deeply nurturing fusion of body and energy healing. This 90-minute session combines the grounding power of full-body massage with the gentle, restorative energy of Reiki...",
      fullDescription:
        "A deeply nurturing fusion of body and energy healing. This 90-minute session combines the grounding power of full-body massage with the gentle, restorative energy of Reiki. As your muscles release tension and your body softens under soothing touch, Reiki flows to clear blockages, realign your energy, and restore harmony within. You'll leave feeling lighter, rebalanced, and deeply renewed — physically, emotionally, and spiritually. Ideal for: Stress relief, energy clearing, emotional release, and full-body rejuvenation.",
      price: "A$160.00",
      duration: "1 hr 30 min",
      image: reikiImg,
    },
    {
      _id: "healing3",
      name: "Ancestral Healing",
      description:
        "Heal the roots to free the soul. This deeply transformative session connects you to the energetic threads of your lineage...",
      fullDescription:
        "Heal the roots to free the soul. This deeply transformative 60-minute session connects you to the energetic threads of your lineage, gently clearing inherited patterns, emotional wounds, and ancestral imprints that may be affecting your present life. Through guided energy work, intuitive insight, and spiritual connection, we release burdens carried across generations — restoring balance, reclaiming power, and inviting peace for both you and your bloodline. Ideal for: Repeating life patterns, family trauma, unexplained emotions, feeling blocked or disconnected.",
      price: "A$130.00",
      duration: "1 hr",
      image: ancestralhealingImg,
    },
  ],
  Readings: [
    {
      _id: "tarot1",
      name: "Tarot Readings",
      description:
        "Gain clarity and insight into your life's path with an intuitive Tarot reading. Quick 15-minute sessions available for focused guidance...",
      fullDescription:
        "A 15-minute Tarot reading is a focused and empowering session designed to provide quick yet profound insights into your current situation, questions, or challenges. Whether you're seeking guidance on love, career, life purpose, or simply need clarity, this reading helps illuminate the energies surrounding you and offers actionable advice. What You Can Expect: A clear and concise reading focused on your chosen question or area of life, Intuitive interpretations of key cards and messages from your higher self, Gentle, supportive guidance to help you make empowered decisions. In just 15 minutes, you'll gain valuable perspectives and a sense of direction to support your journey forward. Perfect for when you need a quick, soulful check-in.",
      price: "A$30.00",
      duration: "15 min",
      isHighlighted: true,
      image: tarotImg,
    },
  ],
  Meditation: [
    {
      _id: "meditation1",
      name: "Meditation Sessions",
      description:
        "Find inner peace through guided meditation. Single sessions or 5-session packages available for deep relaxation and mindfulness...",
      fullDescription:
        "This 60-minute guided meditation is a transformative journey into deep relaxation, supported by soothing music and vibrational frequencies that assist the body in releasing tension and restoring balance. In this sacred space, the collective energy of the group amplifies the experience, making it easier to relax and go deeper into meditation.",
      price: "A$20.00",
      duration: "1 hr",
      isHighlighted: true,
      image: meditationImg,
    },
  ],
};

const ServicesOffered = () => {
  const [activeCategory, setActiveCategory] = useState("Massage");

  const categories = [
    { name: "Massage", icon: Hand },
    { name: "Healing", icon: Sparkles },
    { name: "Readings", icon: BookOpen },
    { name: "Meditation", icon: Sparkles },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-warm-cream to-honey-glow py-20">
      {/* Subtle natural pattern overlay - matching hero section */}
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-2"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/light-sketch.png')",
        }}
      ></div>

      {/* Floating natural elements - matching hero section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-logo-gold rounded-full blur-3xl opacity-3"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl opacity-3"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blush-rose rounded-full blur-2xl opacity-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-3 mb-6"
          >
            <Sparkles className="w-5 h-5 text-[#D8B86F] animate-twinkle" />
            <span className="text-sm font-medium tracking-widest uppercase text-[#D8B86F]">
              Sacred Services
            </span>
            <Sparkles className="w-5 h-5 text-[#D8B86F] animate-twinkle-delayed" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#6B4F3B] mb-6 font-serif">
            Our Services
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#7A5C3E]/80 max-w-4xl mx-auto leading-relaxed">
            Discover our range of holistic healing services, each designed to
            nurture your mind, body, and spirit with gentle, transformative
            care.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 ${
                activeCategory === category.name
                  ? "bg-[#D8B86F] text-white shadow-lg shadow-[#D8B86F]/30 border-0"
                  : "bg-white/90 text-[#6B4F3B] hover:bg-[#D8B86F]/10 hover:text-[#D8B86F] border border-[#D8B86F]/20"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <category.icon className="w-5 h-5" />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {servicesData[activeCategory].map((service, index) => (
            <motion.div
              key={service._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <ServiceCard
                title={service.name}
                imageUrl={service.image}
                description={service.description}
                price={service.price}
                originalPrice={service.originalPrice}
                duration={service.duration}
                tag={null}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Explore All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-[#008080] text-white px-8 py-4 rounded-full shadow-lg hover:bg-[#006666] transition-all duration-300 font-medium text-lg group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <span>Explore All Services</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOffered;
