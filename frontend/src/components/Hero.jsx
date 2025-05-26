import React from "react";

const Hero = () => {
  return (
    <section className="bg-emerald-100 text-emerald-800 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Discover Your Path to Inner Peace & Healing
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Journey with us towards spiritual wellness, guided by nature and
          ancient wisdom.
        </p>
        <a
          href="#services"
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Explore Our Services
        </a>
      </div>
    </section>
  );
};

export default Hero;
