import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Define service options
const serviceOptions = {
  "Meditation Sessions": {
    options: [
      {
        id: "1-session",
        label: "1 Session",
        price: 20,
        duration: 60,
        description:
          "This 60-minute guided meditation is a transformative journey into deep relaxation, supported by soothing music and vibrational frequencies that assist the body in releasing tension and restoring balance. In this sacred space, the collective energy of the group amplifies the experience, making it easier to relax and go deeper into meditation. Leanne gently holds the space for each participant, ensuring an atmosphere of safety, peace, and connection. The space is cleansed with sage to clear any stagnant energy, and an intention is set for the highest good of everyone attending. Participants are welcome to find their most comfortable position—whether seated on the lounge, reclining on the floor, or sitting cross-legged—whichever helps you feel at ease and supported. Benefits of the Session: Enhances mental and physical relaxation through sound vibration, Supports emotional release and energy balancing, Deepens mindfulness and sense of connection, Leaves you feeling grounded, centered, and renewed. Allow yourself to be held in this peaceful space and experience the power of collective calm, sound, and intention.",
      },
      {
        id: "5-sessions",
        label: "5 Sessions Package",
        price: 75,
        duration: 300, // 5 hours total
        description:
          "Special Offer: 5-Class Pass for Guided Meditation. Experience the full benefit of regular meditation practice with our 5-class pass for $75. This package offers a $25 discount, making each 60-minute guided meditation class just $15. Whether you're seeking relaxation, focus, or a deeper connection to yourself, this pass allows you to attend multiple sessions at a reduced rate while fostering a consistent self-care practice. Leanne gently holds the space for each participant, ensuring an atmosphere of safety, peace, and connection. The space is cleansed with sage to clear any stagnant energy, and an intention is set for the highest good of everyone attending. Participants are welcome to find their most comfortable position—whether seated on the lounge, reclining on the floor, or sitting cross-legged—whichever helps you feel at ease and supported. Benefits of the Session: Enhances mental and physical relaxation through sound vibration, Supports emotional release and energy balancing, Deepens mindfulness and sense of connection, Leaves you feeling grounded, centered, and renewed. Allow yourself to be held in this peaceful space and experience the power of collective calm, sound, and intention.",
      },
    ],
  },
  "Tarot Readings": {
    options: [
      {
        id: "15-min",
        label: "15 Minutes",
        price: 30,
        duration: 15,
        description:
          "A 15-minute Tarot reading is a focused and empowering session designed to provide quick yet profound insights into your current situation, questions, or challenges. Whether you're seeking guidance on love, career, life purpose, or simply need clarity, this reading helps illuminate the energies surrounding you and offers actionable advice. What You Can Expect: A clear and concise reading focused on your chosen question or area of life, Intuitive interpretations of key cards and messages from your higher self, Gentle, supportive guidance to help you make empowered decisions. In just 15 minutes, you'll gain valuable perspectives and a sense of direction to support your journey forward. Perfect for when you need a quick, soulful check-in.",
      },
      {
        id: "30-min",
        label: "30 Minutes",
        price: 60,
        duration: 30,
        description:
          "A 30-minute Tarot reading offers a deeper exploration of your life's path, providing clarity and guidance on important questions or challenges. This session allows time to dive into multiple areas, uncover patterns, and receive intuitive messages that empower you to move forward with confidence and purpose. What You Can Expect: In-depth exploration of your current energy and influences, Guidance on relationships, career, life purpose, or personal growth, Intuitive card spreads tailored to your specific concerns or general life overview, Supportive insights to help you make aligned decisions. This 30-minute session is perfect for those seeking clarity in multiple areas of life or wishing to delve into a complex situation. Let the Tarot illuminate your next steps and help you connect with your highest wisdom.",
      },
      {
        id: "45-min",
        label: "45 Minutes",
        price: 80,
        duration: 45,
        description:
          "A 45-minute Tarot reading is a comprehensive and intuitive session designed to provide deep insights into your life's unfolding journey. This extended time allows for a thorough exploration of your questions, uncovering hidden influences, addressing multiple areas, and providing guidance to help you realign with your highest path. What You Can Expect: A full spread examining key aspects of your life: love, career, purpose, or personal growth, Clarification of patterns, blocks, and opportunities for transformation, Time to ask follow-up questions for deeper understanding, Intuitive messages that inspire clarity, healing, and empowerment. This session is ideal for those navigating significant life changes or seeking a holistic view of their current circumstances. A 45-minute Tarot reading offers you the space to reflect, receive, and realign with clarity and confidence.",
      },
      {
        id: "60-min",
        label: "60 Minutes",
        price: 120,
        duration: 60,
        description:
          "A 60 minute Tarot reading is a comprehensive and intuitive session designed to provide deep insights into your life's unfolding journey. This extended time allows for a thorough exploration of your questions, uncovering hidden influences, addressing multiple areas, and providing guidance to help you realign with your highest path. What You Can Expect: A full spread examining key aspects of your life: love, career, purpose, or personal growth, Clarification of patterns, blocks, and opportunities for transformation, Time to ask follow-up questions for deeper understanding, Intuitive messages that inspire clarity, healing, and empowerment. This session is ideal for those navigating significant life changes or seeking a holistic view of their current circumstances. A 60 minute Tarot reading offers you the space to reflect, receive, and realign with clarity and confidence.",
      },
    ],
  },
};

const DynamicServiceCard = ({ service, index, imageMap }) => {
  const serviceName = service.name;
  const options = serviceOptions[serviceName]?.options || [];
  const [selectedOption, setSelectedOption] = useState(options[0] || null);

  // If no options defined, return null (this service doesn't use dynamic pricing)
  if (!options.length) {
    return null;
  }

  return (
    <motion.div
      className="max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
    >
      <div className="bg-white rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Header section */}
        <div className="px-8 py-8 text-center border-b border-border bg-warm-beige/50">
          <h3 className="text-2xl md:text-3xl font-sans font-semibold text-text-primary tracking-wide">
            {service.name}
          </h3>
        </div>

        <div
          className={`grid md:grid-cols-2 ${
            index % 2 !== 0 ? "md:grid-flow-col-dense" : ""
          }`}
        >
          {/* Image */}
          <div
            className={`${
              index % 2 !== 0 ? "md:col-start-2" : ""
            } flex items-center justify-center`}
          >
            <img
              src={
                imageMap[service.image] || `/src/assets/images/${service.image}`
              }
              alt={service.name}
              className="w-full h-64 md:h-96 object-contain object-center"
            />
          </div>

          {/* Content */}
          <div
            className={`p-8 md:p-12 flex flex-col justify-center ${
              index % 2 !== 0 ? "md:col-start-1" : ""
            }`}
          >
            <div className="space-y-6">
              {/* Service Options */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary">
                  Choose Your Option:
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOption(option)}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 text-sm font-medium ${
                        selectedOption?.id === option.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-text-secondary hover:border-primary/50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Description */}
              {selectedOption && (
                <div className="text-text-secondary leading-relaxed">
                  <p className="text-base leading-relaxed">
                    {selectedOption.description}
                  </p>
                </div>
              )}

              {/* Price and Book Section */}
              {selectedOption && (
                <div className="pt-6 mt-8 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl font-bold text-text-primary">
                        ${selectedOption.price}
                      </span>
                      <span className="text-sm text-text-secondary">
                        {selectedOption.duration}{" "}
                        {serviceName === "Meditation Sessions"
                          ? "minutes total"
                          : "minutes"}
                      </span>
                    </div>

                    <Link
                      to={`/book/${service._id}?option=${selectedOption.id}`}
                    >
                      <button className="px-8 py-3 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DynamicServiceCard;
