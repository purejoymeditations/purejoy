import React from "react";

const RetreatsEvents = () => {
  // Placeholder data - replace with actual data or fetch from backend later
  // Set to an empty array to demonstrate the 'no events' message
  const events = [];

  // Example event structure if data were present:
  // const events = [
  //   {
  //     id: 1,
  //     name: "Full Moon Healing Retreat",
  //     date: "October 28-30, 2024",
  //     location: "Serene Valley Sanctuary",
  //     description: "Join us for a transformative weekend retreat under the full moon, focusing on deep healing and spiritual renewal.",
  //     image: "https://via.placeholder.com/400x250.png?text=Healing+Retreat"
  //   },
  //   {
  //     id: 2,
  //     name: "Weekly Wisdom Circle",
  //     date: "Every Wednesday, 7 PM",
  //     location: "Online via Zoom",
  //     description: "Connect with a supportive community in our weekly online circle to share wisdom, meditate, and grow together.",
  //     image: "https://via.placeholder.com/400x250.png?text=Wisdom+Circle"
  //   }
  // ];

  return (
    <section className="bg-slate-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-12 md:mb-16">
          Upcoming Retreats & Events
        </h2>

        {events.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-emerald-600 mb-2">
                    {event.name}
                  </h3>
                  <p className="text-sm text-slate-500 mb-1">
                    <strong>Date:</strong> {event.date}
                  </p>
                  <p className="text-sm text-slate-500 mb-3">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    {event.description}
                  </p>
                  <a
                    href="#" // Replace with actual link later
                    className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5"
                  >
                    Learn More & Register
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
              Stay Tuned!
            </h3>
            <p className="text-slate-600 mb-6 max-w-md mx-auto">
              We are currently planning our next series of transformative
              retreats and inspiring events. Sign up for our newsletter to be
              the first to know, or check back soon!
            </p>
            {/* Placeholder for newsletter signup or link */}
            <a
              href="#newsletter" // Link to newsletter section later
              className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              Join Our Healing Notes
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default RetreatsEvents;
