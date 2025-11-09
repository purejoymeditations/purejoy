import React from "react";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import AnimateOnScroll from "./AnimateOnScroll";
import alanaImg from "../assets/images/alank.jpg";
import esterImg from "../assets/images/ester.jpg";
import kellyImg from "../assets/images/kelly.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "What an amazing experience! My four girlfriends and I booked in for a true pamper and healing session. We each received a beautiful massage, reiki healing, tarot reading, got to make our own essential oil rollers, and had foot soaks - absolute bliss. Couldn't recommend the beautiful Leslie, Leanne and Vicki more!",
      name: "Alana K",
      rating: 5,
      avatar: alanaImg,
    },
    {
      id: 2,
      quote:
        "Best massage I've had in a long time, both of my hips, lower back and right knee had been aching for a couple of months, I felt immediate relief and woke up the next morning feeling better than I had for a long time and able to walk with limping or feeling stiff. Ended the massage with a 15 minute tarot reading which was incredible accurate and relevant, I will definitely make the trip back to Maldon for a massage and tarot reading. 1 week later and my body is still feeling great.",
      name: "Kelly-Ann Wilson",
      rating: 5,
      avatar: kellyImg,
    },
    {
      id: 3,
      quote:
        "I love PURE GOLD the newest shop and Workshop space in Maldon Town, Victoria/Goldfields. This shop is a true delight to the senses to come to and sniff your way through all the candles & other scented gifts that you can purchase to treat yourself or for that special friend or family member for their next birthday!",
      name: "Esther",
      rating: 5,
      avatar: esterImg,
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-honey-glow">
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-repeat bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/subtle-prism.png')",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-serif">
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Real stories from our vibrant community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <AnimateOnScroll key={testimonial.id}>
              <div className="bg-container-bg/80 backdrop-blur-sm p-8 rounded-xl shadow-warm h-full flex flex-col transition-all duration-300 ease-in-out hover:shadow-golden hover:-translate-y-2 border border-border-light">
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <FaQuoteLeft className="text-logo-gold text-2xl mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-logo-gold" />
                      ))}
                    </div>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center pt-4 border-t border-border-light">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-logo-gold/20">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-earth-brown">Verified Client</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
