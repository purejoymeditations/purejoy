import React from "react";
import { ShoppingBag } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
import vanillaCandleImg from "../assets/images/vanilacandle.jpg";
import saltImg from "../assets/images/salt.jpg";
import rollonImg from "../assets/images/rollon.jpg";
import soapbarImg from "../assets/images/soapbar.jpg";

const ProductStore = () => {
  const previewProducts = [
    {
      _id: 1,
      name: "Vanilla Candle",
      description:
        "A soothing candle to bring warmth and tranquility to your space.",
      image: vanillaCandleImg,
    },
    {
      _id: 2,
      name: "Himalayan Salt",
      description:
        "Himalayan salt for purification and creating a sacred bathing ritual.",
      image: saltImg,
    },
    {
      _id: 3,
      name: "Aromatherapy Roll On",
      description:
        "A convenient roll-on to apply calming essential oils on the go.",
      image: rollonImg,
    },
    {
      _id: 4,
      name: "Handmade Soap Bar",
      description:
        "A natural, handcrafted soap bar to nourish your skin and soul.",
      image: soapbarImg,
    },
  ];

  return (
    <section className="bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 font-serif">
            Our Curated Collection
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover handcrafted goods and tools to support your spiritual
            practice and bring tranquility to your space.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {previewProducts.map((product) => (
            <AnimateOnScroll key={product._id}>
              <div className="bg-container-bg rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 ease-in-out hover:-translate-y-2 flex flex-col h-[500px]">
                <div className="h-80 overflow-hidden bg-background flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 font-serif">
                    {product.name}
                  </h3>
                  <p className="text-sm text-text-secondary mb-4 flex-grow">
                    {product.description}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll>
          <div className="mt-12 text-center">
            <a
              href="#" // This will later point to the main /shop page
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <ShoppingBag size={22} />
              <span>Visit Our Shop</span>
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default ProductStore;
