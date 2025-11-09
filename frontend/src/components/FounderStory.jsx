import React from "react";
import leanneImg from "../assets/images/homepage/leannebio.jpeg";
import lesleyImg from "../assets/images/homepage/leselybio.jpeg";
import AnimateOnScroll from "./AnimateOnScroll";

const FounderStory = () => {
  // Updated practitioner data with new bios
  const founders = [
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
  ];

  return (
    <section className="bg-sage-whisper py-12 lg:py-16 xl:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/canvas.png')",
        }}
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <AnimateOnScroll>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-3 lg:mb-4 font-serif">
              Meet Our Nature Guides
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-3xl mx-auto">
              Connected to earth's wisdom, here to guide you on your healing
              journey.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="space-y-16 lg:space-y-20">
          {founders.map((founder, index) => (
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
  );
};

export default FounderStory;
