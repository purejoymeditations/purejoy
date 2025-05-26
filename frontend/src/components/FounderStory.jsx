import React from "react";

const FounderStory = () => {
  // Placeholder data - replace with actual data later
  const founders = [
    {
      name: "Founder One",
      title: "Wisdom Keeper & Healer",
      image: "https://placehold.co/300x300/a2d9c3/4A5568?text=Founder+One", // Updated Placeholder image
      quote:
        "Navigating the path of healing is a journey of courage and self-discovery. I am here to guide you.",
      story:
        "With decades of experience in ancient healing traditions and a deep connection to nature's wisdom, Founder One has dedicated her life to guiding others towards wholeness. Her journey has been one of profound learning and sharing, empowering countless individuals to find their inner strength and peace.",
    },
    {
      name: "Founder Two",
      title: "Spiritual Guide & Mentor",
      image: "https://placehold.co/300x300/a2d9c3/4A5568?text=Founder+Two", // Updated Placeholder image
      quote:
        "Spirituality is the an_ch_or that grounds us, allowing us to weather any storm with grace and resilience.",
      story:
        "Founder Two brings a wealth of knowledge in spiritual practices and mentorship. Her path has been illuminated by a commitment to compassionate guidance, helping people connect with their spiritual core and live a more meaningful, authentic life. Together, they weave a rich tapestry of experience and wisdom.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-12 md:mb-16">
          Meet Our Wisdom Keepers
        </h2>
        <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-x-12">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:w-1/3 mb-6 md:mb-0 md:mr-6 flex-shrink-0">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="rounded-full w-48 h-48 md:w-full md:h-auto object-cover mx-auto shadow-md"
                />
              </div>
              <div className="md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-emerald-600 mb-2">
                  {founder.name}
                </h3>
                <p className="text-md text-slate-600 italic mb-3">
                  {founder.title}
                </p>
                <blockquote className="text-slate-700 border-l-4 border-emerald-500 pl-4 py-2 mb-4">
                  <p className="italic leading-relaxed">{founder.quote}</p>
                </blockquote>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {founder.story}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
