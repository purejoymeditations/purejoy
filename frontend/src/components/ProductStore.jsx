import React from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
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
    <section className="py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-white via-warm-cream to-honey-glow">
      {/* Subtle natural pattern overlay */}
      {/* <div
        className="absolute inset-0 bg-repeat bg-center opacity-2"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/light-sketch.png')",
        }}
      /> */}

      {/* Floating natural elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#008080] rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl opacity-3" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blush-rose rounded-full blur-2xl opacity-3" />
      </div>

      {/* Gentle background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-[#008080] opacity-20 animate-twinkle">
          <Sparkles className="w-3 h-3" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-[#008080] opacity-20 animate-twinkle-delayed">
          <Sparkles className="w-2 h-2" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-[#008080] opacity-20 animate-twinkle-slow">
          <Sparkles className="w-2 h-2" />
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-[#008080] opacity-20 animate-twinkle">
          <Sparkles className="w-3 h-3" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-3 lg:mb-4 font-serif">
            Nature's Treasures
          </h2>
          <p className="text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto">
            Handcrafted with love and intention, bringing earth's healing energy
            into your daily rituals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {previewProducts.map((product) => (
            <AnimateOnScroll key={product._id}>
              <div className="group bg-white rounded-2xl shadow-md shadow-[#e5d3ba] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border border-[#f0ebe3] h-full flex flex-col">
                <div className="h-64 overflow-hidden bg-[#f9f5f1]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-col space-y-3 mb-4">
                    <span className="inline-block text-[#b18b4f] text-xs font-medium uppercase tracking-wider">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-semibold text-[#3c2e20] font-serif leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm text-[#5f5241] leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-auto pt-4 border-t border-[#f0ebe3]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#7A5C3E] font-medium">
                        {product.weight || product.volume}
                      </span>
                      <button className="border-2 border-[#D4B26B] text-[#D4B26B] hover:bg-[#D4B26B] hover:text-white font-medium px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md">
                        Add to Cart
                      </button>
                    </div>
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
              className="inline-flex items-center gap-2 bg-[#008080] hover:bg-[#006666] text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
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
