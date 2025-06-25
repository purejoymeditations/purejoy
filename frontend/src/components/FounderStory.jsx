import React from "react";
import leanneImg from "../assets/images/Sheargold.jpg";
import lesleyImg from "../assets/images/lesley.jpg";
import AnimateOnScroll from "./AnimateOnScroll";

const FounderStory = () => {
  // Placeholder data - replace with actual data later
  const founders = [
    {
      name: "Leanne",
      title: "Wisdom Keeper & Healer",
      image: leanneImg,
      story:
        "With decades of experience in ancient healing traditions and a deep connection to nature's wisdom, Leanne has dedicated her life to guiding others towards wholeness. Her journey has been one of profound learning and sharing, empowering countless individuals to find their inner strength and peace.",
    },
    {
      name: "Lesley",
      title: "Spiritual Guide & Mentor",
      image: lesleyImg,
      story:
        "Lesley brings a wealth of knowledge in spiritual practices and mentorship. Her path has been illuminated by a commitment to compassionate guidance, helping people connect with their spiritual core and live a more meaningful, authentic life.",
    },
  ];

  return (
    <section className="bg-secondary py-16 md:py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/gplay.png')",
        }}
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-serif">
              Meet Our Wisdom Keepers
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
              Our guides on the path to wellness, here to support and empower
              you.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="space-y-20">
          {founders.map((founder, index) => (
            <AnimateOnScroll key={founder.name}>
              <div
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/3">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="relative rounded-lg shadow-xl w-full"
                    />
                  </div>
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <h3 className="text-3xl font-serif font-bold text-text-primary mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-lg text-primary italic mb-4">
                    {founder.title}
                  </p>
                  <p className="text-lg text-text-secondary leading-relaxed">
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
