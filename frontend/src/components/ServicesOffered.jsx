import React from "react";

const ServicesOffered = () => {
  // Placeholder data - replace with actual service details later
  const services = [
    {
      id: 1,
      name: "Meditation Guidance",
      description:
        "Find inner calm and clarity through guided meditation sessions tailored to your needs.",
      icon: "🧘", // Placeholder icon
    },
    {
      id: 2,
      name: "Womb Healing",
      description:
        "Reconnect with your sacred center and heal ancestral patterns through gentle womb healing practices.",
      icon: "🌸", // Placeholder icon
    },
    {
      id: 3,
      name: "Tarot Readings",
      description:
        "Gain insight and guidance on your life path with intuitive tarot readings.",
      icon: "🔮", // Placeholder icon
    },
    {
      id: 4,
      name: "Therapeutic Massage",
      description:
        "Release tension and restore balance with a healing massage that nurtures body and soul.",
      icon: "💆‍♀️", // Placeholder icon
    },
    // Add more services as needed
  ];

  return (
    <section className="bg-emerald-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-12 md:mb-16">
          Our Healing Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="text-5xl mb-6 text-emerald-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-3">
                {service.name}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                {service.description}
              </p>
              <a
                href="#" // Replace with actual link to service page later
                className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOffered;
