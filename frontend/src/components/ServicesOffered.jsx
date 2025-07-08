import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hand, Sparkles, BookOpen, ArrowRight } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import remedialImg from "../assets/images/services/remedial.jpeg";
import relaxedImg from "../assets/images/services/relaxation.jpeg";
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
import tarotImg from "../assets/images/tarrot.jpeg";
import stoneImg from "../assets/images/stone.jpeg";

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
    {
      _id: "massage4",
      name: "Aroma Touch Massage",
      description:
        "AromaTouch® is a deeply nurturing, hands-on therapy designed to bring balance to the body and mind using the power of pure essential oils...",
      fullDescription:
        "AromaTouch® is a deeply nurturing, hands-on therapy designed to bring balance to the body and mind using the power of pure essential oils. This unique treatment applies a sequence of eight therapeutic-grade essential oils and blends directly to the back and feet, enhancing physical well-being and emotional calm. Each oil sequence has a specific role in supporting the body's natural healing process—whether it's grounding, calming, immune-boosting, or promoting deep relaxation. The gentle application technique stimulates energy flow, supports stress reduction, and encourages a profound sense of harmony.",
      price: "A$120.00",
      duration: "1 hr",
      image: aromatouchImg,
    },
  ],
  Healing: [
    {
      _id: "healing1",
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
      _id: "healing2",
      name: "Ancestral Healing",
      description:
        "Heal the roots to free the soul. This deeply transformative session connects you to the energetic threads of your lineage...",
      fullDescription:
        "Heal the roots to free the soul. This deeply transformative 60-minute session connects you to the energetic threads of your lineage, gently clearing inherited patterns, emotional wounds, and ancestral imprints that may be affecting your present life. Through guided energy work, intuitive insight, and spiritual connection, we release burdens carried across generations — restoring balance, reclaiming power, and inviting peace for both you and your bloodline. Ideal for: Repeating life patterns, family trauma, unexplained emotions, feeling blocked or disconnected.",
      price: "A$130.00",
      duration: "1 hr",
      image: ancestralhealingImg,
    },
    {
      _id: "healing3",
      name: "Crystal Healing",
      description:
        "Elevate your healing journey with Crystal Healing enhanced by various frequencies and dimensional energies...",
      fullDescription:
        "Elevate your healing journey with Crystal Healing enhanced by various frequencies and dimensional energies. In this advanced session, crystals are carefully placed on and around your body, attuned to specific energetic frequencies that align with multiple dimensions of your being—physical, emotional, mental, and spiritual. These powerful frequencies, combined with the crystals' natural vibration, help clear deep blockages, release stagnant energy, and balance your chakras. This multidimensional approach addresses not only current imbalances but also ancestral trauma, past-life wounds, and other layers of energetic distortion. During the session, you may experience sensations of warmth, tingling, or shifts in consciousness as your energy fields are cleansed and elevated. Perfect for those seeking profound transformation and alignment across all levels of existence. Discover holistic harmony and unlock your full potential with Crystal Healing with Multidimensional Frequencies. 💎✨🌈",
      price: "A$150.00",
      duration: "1 hr",
      image: crystalImg,
    },
    {
      _id: "healing4",
      name: "Quantum Healing",
      description:
        "During a Quantum Healing session, Leanne works beyond the physical body, accessing the energetic, ethereal, and subconscious realms to initiate profound transformation...",
      fullDescription:
        "During a Quantum Healing session, Leanne works beyond the physical body, accessing the energetic, ethereal, and subconscious realms to initiate profound transformation and deep healing. Grounded in the principles of quantum physics and energy medicine, this practice harmonizes and aligns your energy systems while clearing blockages that disrupt your emotional, mental, and physical well-being. Each session targets a specific trauma, illness, or energetic imbalance, addressing its root cause embedded within your body, mind, or emotional layers. These disruptions often stem from unresolved inner child wounds or past-life imprints. Through her intuitive guidance, Leanne clears these traumas, patterns, dissolving the energetic stagnation that manifests as stress, fatigue, anxiety, or physical symptoms. As blockages are released, your energy flows freely, fostering renewal and a higher vibrational state. This process shifts limiting beliefs and negative self-perceptions, helping you reconnect with your true essence, clarity, and balance. You'll leave feeling lighter, aligned, and ready to explore the limitless possibilities of your life.",
      price: "A$160.00",
      duration: "1 hr 30 min",
      image: quantumImg,
    },
    {
      _id: "healing5",
      name: "Reiki Head Detox",
      description:
        "Reiki Detox is a specialized form of energy healing focused on releasing stagnant energy and restoring harmony in the areas of the head, brain, neck, and feet...",
      fullDescription:
        "Reiki Detox is a specialized form of energy healing focused on releasing stagnant energy and restoring harmony in the areas of the head, brain, neck, and feet. This session is designed to support mental clarity, alleviate tension, and enhance the body's natural detoxification process. The session begins with a calming flow of energy to soothe mental overactivity, brain fog, and emotional stress. Gentle Reiki is then directed to the neck and shoulders, releasing built-up tension and restoring a sense of ease. The feet, which are powerful grounding points, are also treated to help anchor your energy, fostering a deep sense of stability and balance. Benefits of a Reiki Detox Session: Relieves headaches, mental fatigue, and emotional overwhelm, Promotes relaxation in the neck and shoulder areas, Grounds excess mental energy to restore focus and calmness, Enhances circulation and energetic flow throughout the body. This deeply restorative treatment is ideal for those experiencing stress, tension, or feeling ungrounded. By focusing on the key areas of the head and feet, Reiki Detox supports a full-body reset, leaving you feeling lighter, clearer, and reconnected to your sense of calm and purpose. Available via zoom or In Person.",
      price: "A$60.00",
      duration: "30 min",
      image: reikiheadImg,
    },
    {
      _id: "healing6",
      name: "Womb Healing - 3 sessions",
      description:
        "The Womb Healing Program is a deeply transformative journey designed to restore balance, harmony, and vitality to your womb space...",
      fullDescription:
        "The Womb Healing Program is a deeply transformative journey designed to restore balance, harmony, and vitality to your womb space. Through tailored one-on-one sessions over six weeks, you'll heal trauma at its root, reconnect with your feminine energy, and cultivate profound self-love and empowerment. Womb healing is essential for women, as the womb serves as both an energetic and physical center. Imbalances or stored trauma in this space can manifest as emotional pain, irregular menstrual cycles, low energy, mood swings, or even physical illnesses. By healing the womb, you can enhance your overall well-being, supporting regular cycles, improved fertility, stable energy levels, and emotional harmony. The womb can hold onto emotional and energetic imprints from trauma, guilt, anger, fear, and self-criticism. Through the Womb Healing Program, we gently release these stored blockages and memories, clearing the womb space and restoring its natural flow of energy. This healing journey includes emotional and spiritual practices that promote self-discovery and healing, helping you reconnect with your inner child and access deep-seated thoughts and feelings. Benefits include: Emotional and spiritual release of trauma stored in the womb, Restored balance in your reproductive system, supporting regular menstrual cycles and fertility, Improved mood, energy levels, and self-confidence, Deeper connection to your body, feminine energy, and inner child, Empowerment to move beyond past trauma and embrace a life of self-love and growth.",
      price: "A$500.00",
      duration: "3 hr",
      image: wombImg,
    },
    {
      _id: "healing7",
      name: "Holographic Healing",
      description:
        "Immerse yourself in the transformative power of Holographic Healing, a deeply restorative session that works across the physical, spiritual, and soul layers...",
      fullDescription:
        "Immerse yourself in the transformative power of Holographic Healing, a deeply restorative session that works across the physical, spiritual, and soul layers. You'll be guided onto an energetic bed where soothing waves of colored light move gently through your body and energy fields. These healing lights cleanse and release blockages, stuck emotions, other people's energy, and deeply rooted pain from past lives and ancestral trauma. This unique process promotes the healing of physical ailments, emotional wounds, and energetic imbalances, leaving you feeling renewed and aligned. Perfect for those seeking profound transformation, this session harmonizes your entire being, offering peace, clarity, and an awakened sense of self. Step into your full potential with Holographic Healing. ✨💫🌈",
      price: "A$150.00",
      duration: "1 hr",
      image: holographicImg,
    },
    {
      _id: "healing8",
      name: "Reiki",
      description:
        "Reiki is a gentle, yet powerful energy healing practice that promotes relaxation, emotional balance, and holistic well-being...",
      fullDescription:
        "Reiki is a gentle, yet powerful energy healing practice that promotes relaxation, emotional balance, and holistic well-being. Reiki works by channeling universal life force energy through the practitioner's hands to the recipient, helping to clear energetic blockages and support the body's natural healing processes. During a Reiki session, you will lie comfortably as the practitioner places their hands gently on or above various points of your body. This non-invasive process allows the energy to flow where it's needed most—whether to ease physical discomfort, release emotional stress, or restore a sense of calm and clarity. Benefits of Reiki Healing: Reduces stress and anxiety, Supports emotional healing and resilience, Clears energetic imbalances and enhances vitality, Promotes mental clarity and spiritual connection. Reiki is a deeply restorative experience, perfect for anyone seeking relaxation, emotional release, or alignment of mind, body, and soul. Allow yourself to be held in a space of unconditional love and healing as you reconnect with your inner peace.",
      price: "A$120.00",
      duration: "1 hr",
      image: reikiserviceImg,
    },
  ],
  Readings: [
    // Tarot Readings removed - now handled by dynamic pricing system in AllServicesPage
  ],
};

const categoryIcons = {
  Massage: <Hand size={22} />,
  Healing: <Sparkles size={22} />,
  Readings: <BookOpen size={22} />,
};

const ServicesOffered = () => {
  const [activeCategory, setActiveCategory] = useState("Massage");

  const displayedServices = servicesData[activeCategory].slice(0, 3);

  return (
    <section id="services" className="bg-secondary py-16 md:py-24 relative">
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/az-subtle.png')",
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-text-secondary mt-4 max-w-3xl mx-auto">
              Holistic therapies to nurture your mind, body, and spirit.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="flex justify-center items-center gap-6 md:gap-10 mb-16">
          {Object.keys(servicesData)
            .filter((category) => servicesData[category].length > 0)
            .map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? "text-logo-gold"
                    : "text-text-secondary hover:text-logo-gold"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className={`flex items-center gap-3 ${
                    activeCategory === category
                      ? "text-logo-gold"
                      : "text-text-secondary hover:text-logo-gold"
                  }`}
                >
                  {categoryIcons[category]}
                  <span className="hidden sm:inline">{category}</span>
                </span>
              </motion.button>
            ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayedServices.map((service) => (
              <motion.div
                key={service._id}
                className="relative overflow-hidden rounded-xl shadow-lg group h-[450px]"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">
                    {service.name}
                  </h3>
                  <div className="text-white/90 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <p className="mb-4 text-gray-200">{service.description}</p>
                    <div className="flex justify-between items-center text-lg border-t border-white/20 pt-4">
                      <div className="flex flex-col">
                        {service.isIntroductory ? (
                          <>
                            <span className="font-bold text-logo-gold text-xl">
                              {service.price}
                            </span>
                            <span className="text-sm text-gray-400 line-through">
                              {service.originalPrice}
                            </span>
                            <span className="text-xs text-yellow-400 font-medium">
                              🌟 Introductory Price!
                            </span>
                          </>
                        ) : (
                          <span className="font-bold text-logo-gold">
                            {service.price}
                          </span>
                        )}
                      </div>
                      <span className="font-light">{service.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <AnimateOnScroll>
          <div className="mt-20 text-center">
            <motion.a
              href="#"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore All Services</span>
              <ArrowRight size={22} />
            </motion.a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ServicesOffered;
