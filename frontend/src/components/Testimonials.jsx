import React from "react";

const Testimonials = () => {
  // Placeholder testimonial data - replace with actual testimonials later
  const testimonials = [
    {
      id: 1,
      quote:
        "Working with Leanne and Lesley at Purejoy has been a life-changing experience. I feel more centered, peaceful, and connected to myself than ever before.",
      name: "A. K.",
      location: "Sydney, NSW",
    },
    {
      id: 2,
      quote:
        "The guidance and healing I received were profound. I've unlocked a new level of understanding and self-acceptance. Highly recommend!",
      name: "S. B.",
      location: "Melbourne, VIC",
    },
    {
      id: 3,
      quote:
        "I was skeptical at first, but the [Service Name, e.g., Womb Healing session] was incredibly powerful. I feel a deep sense of release and renewal.",
      name: "L. M.",
      location: "Online Client",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-12 md:mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="text-emerald-600 text-6xl mb-4 leading-none font-serif self-start">
                “
              </div>
              <blockquote className="text-slate-600 italic leading-relaxed mb-6 flex-grow">
                {testimonial.quote}
              </blockquote>
              <div className="mt-auto pt-4 border-t border-slate-200">
                <p className="font-semibold text-emerald-700 text-right">
                  - {testimonial.name}
                </p>
                {testimonial.location && (
                  <p className="text-sm text-slate-500 text-right">
                    {testimonial.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
