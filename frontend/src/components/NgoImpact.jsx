import React from "react";

const NgoImpact = () => {
  return (
    <section className="bg-emerald-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-700">
            Our Heartfelt Mission & Global Impact
          </h2>
          <p className="mt-4 text-lg text-emerald-600 max-w-3xl mx-auto">
            Extending our healing touch beyond our direct services, we proudly
            partner with an NGO in Mongolia, supporting their artisans and
            community through ethical practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
              Supporting Mongolian Artisans
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              We believe in the power of conscious commerce. A selection of
              beautiful, handmade products available in our store are sourced
              directly from talented artisans in Mongolia. Each purchase makes a
              difference.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              These unique items are crafted with traditional skills and infused
              with the spirit of Mongolian culture, offering you a piece of
              their heritage while providing vital support to their community.
            </p>
            <a
              href="#product-store"
              className="font-semibold text-emerald-500 hover:text-emerald-700 transition duration-300"
            >
              Shop Handmade Collection &rarr;
            </a>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-4">
              Ethical Profit Sharing & Community Upliftment
            </h3>
            <p className="text-slate-700 leading-relaxed mb-3">
              Our commitment runs deep. A significant portion of the profits
              from these handmade Mongolian products is shared directly with the
              NGO, ensuring fair compensation for the artisans and contributing
              to the well-being of their families and community.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This partnership is more than just trade; it's a bridge of
              solidarity and a testament to our belief that healing and
              spirituality can create positive ripples across the globe.
            </p>
            {/* Optionally, add a link to a page with more details about the NGO or impact reports */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NgoImpact;
