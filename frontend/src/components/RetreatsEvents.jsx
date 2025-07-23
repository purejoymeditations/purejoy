import React from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import eventImg from "../assets/images/event.jpeg";
import storeFrontImg from "../assets/images/storeFront.jpeg";

const RetreatsEvents = () => {
  const events = [
    {
      id: 1,
      name: "Full Moon Healing Retreat",
      date: "October 28-30, 2024",
      description:
        "A transformative weekend under the full moon, focusing on deep healing and spiritual renewal.",
      image: eventImg,
    },
    {
      id: 2,
      name: "Introduction to Tarot Workshop",
      date: "Every Wednesday, 7 PM",
      description:
        "Unlock the secrets of the cards and learn to trust your intuition in this beginner-friendly workshop.",
      image: storeFrontImg,
    },
  ];

  return (
    <section className="py-16 bg-sage-whisper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-serif">
            Sacred Gatherings in Nature
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Connect with earth's rhythms and like-minded souls in our nurturing
            sanctuary, both online and in our natural healing space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {events.map((event) => (
            <AnimateOnScroll key={event.id}>
              <div
                key={event.id}
                className="bg-container-bg rounded-xl shadow-warm overflow-hidden group transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-golden border border-border-light"
              >
                <div className="h-64 overflow-hidden bg-honey-glow">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <p className="text-sm text-logo-gold font-semibold mb-2 uppercase tracking-wide">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-bold text-text-primary mb-4 font-serif">
                    {event.name}
                  </h3>
                  <p className="text-text-secondary mb-6">
                    {event.description}
                  </p>
                  <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-healing">
                    Learn More
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#" // This will later point to the main /events page
            className="bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore All Events
          </a>
        </div>
      </div>
    </section>
  );
};

export default RetreatsEvents;
