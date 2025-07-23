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
        "A soothing vanilla candle to bring warmth and tranquility to your space. Hand-poured with natural soy wax and essential oils.",
      image: vanillaCandleImg,
      weight: "200g",
      category: "Candles",
    },
    {
      _id: 2,
      name: "Himalayan Salt",
      description:
        "Pure Himalayan salt for purification and creating a sacred bathing ritual. Rich in minerals for natural healing.",
      image: saltImg,
      weight: "500g",
      category: "Bath & Body",
    },
    {
      _id: 3,
      name: "Aromatherapy Roll On",
      description:
        "A convenient roll-on to apply calming essential oils on the go. Perfect for stress relief and mindfulness.",
      image: rollonImg,
      volume: "10ml",
      category: "Aromatherapy",
    },
    {
      _id: 4,
      name: "Handmade Soap Bar",
      description:
        "A natural, handcrafted soap bar to nourish your skin and soul. Made with organic ingredients and essential oils.",
      image: soapbarImg,
      weight: "100g",
      category: "Bath & Body",
    },
  ];

  return (
    <section className="py-16 bg-sage-whisper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4 font-serif">
            Nature's Treasures
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Handcrafted with love and intention, bringing earth's healing energy
            into your daily rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {previewProducts.map((product) => (
            <AnimateOnScroll key={product._id}>
              <div className="group bg-container-bg rounded-xl shadow-warm overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-golden border border-border-light">
                <div className="h-64 overflow-hidden bg-honey-glow">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-primary-light text-primary text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary mb-2 font-serif">
                    {product.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-earth-brown">
                      {product.weight || product.volume}
                    </span>
                    <button className="bg-bronze hover:bg-bronze-dark text-white px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="text-center">
          <AnimateOnScroll>
            <a
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <ShoppingBag size={20} />
              Explore Full Collection
            </a>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ProductStore;
