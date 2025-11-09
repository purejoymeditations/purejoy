import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AnimateOnScroll from "./AnimateOnScroll";
import { Leaf, Sparkles } from "lucide-react";
import mongoliaImg1 from "../assets/images/mangolia.jpeg";
import mongoliaImg2 from "../assets/images/mangolia2.jpeg";
import mongoliaImg3 from "../assets/images/mangolia3.jpeg";

const NgoImpact = () => {
  const images = [mongoliaImg1, mongoliaImg2, mongoliaImg3];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-[#f9f5f1] to-[#e9e0d2]">
      {/* Parchment-style texture overlay */}
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-3"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/light-sketch.png')",
        }}
      />

      {/* Subtle floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 text-logo-gold opacity-10 animate-twinkle">
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute top-1/3 right-1/5 text-logo-gold opacity-10 animate-twinkle-delayed">
          <Leaf className="w-2 h-2" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 text-logo-gold opacity-10 animate-twinkle-slow">
          <Sparkles className="w-2 h-2" />
        </div>
        <div className="absolute bottom-1/4 right-1/6 text-logo-gold opacity-10 animate-twinkle">
          <Leaf className="w-3 h-3" />
        </div>
        <div className="absolute top-1/2 left-1/8 text-logo-gold opacity-10 animate-twinkle-delayed">
          <Sparkles className="w-2 h-2" />
        </div>
        <div className="absolute bottom-1/6 left-1/5 text-logo-gold opacity-10 animate-twinkle-slow">
          <Leaf className="w-2 h-2" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-[#4a3b29] mb-6 font-serif">
                Healing Connected to Earth
              </h2>
              <p className="text-xl text-[#6b5b45] max-w-2xl mx-auto md:mx-0 mb-8">
                Our commitment to healing extends beyond our sanctuary to
                support artisans who work in harmony with nature, bringing you
                authentic, earth-connected treasures.
              </p>

              {/* Decorative accent */}
              <div className="flex justify-center md:justify-start mb-6">
                <Leaf className="w-6 h-6 text-logo-gold opacity-60" />
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-3 bg-[#27a890] hover:bg-[#1c8f7a] text-white px-5 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn About Our Impact
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-[#fefaf5] rounded-3xl shadow-md p-4 transform rotate-[-1deg]">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={4000}
                transitionTime={600}
                className="rounded-2xl overflow-hidden"
              >
                {images.map((img, index) => (
                  <div key={index} className="h-96 bg-[#fefaf5]">
                    <img
                      src={img}
                      alt={`Mongolia partnership ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default NgoImpact;
