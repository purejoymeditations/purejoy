import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AnimateOnScroll from "./AnimateOnScroll";
import mongoliaImg1 from "../assets/images/mangolia.jpeg";
import mongoliaImg2 from "../assets/images/mangolia2.jpeg";
import mongoliaImg3 from "../assets/images/mangolia3.jpeg";

const NgoImpact = () => {
  const images = [mongoliaImg1, mongoliaImg2, mongoliaImg3];

  return (
    <section className="bg-text-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll>
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Healing Beyond Ourselves
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto md:mx-0 mb-8">
                Our commitment to healing extends beyond our walls. We're
                honored to partner with talented artisans in Mongolia, bringing
                their beautiful, handcrafted goods to our community. Each
                purchase directly supports their families and helps preserve
                their rich cultural heritage.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Learn About Our Impact
              </a>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={4000}
                transitionTime={600}
                className="rounded-lg"
              >
                {images.map((img, index) => (
                  <div key={index} className="h-96 bg-background">
                    <img
                      src={img}
                      alt={`Mongolia partnership ${index + 1}`}
                      className="w-full h-full object-contain"
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
