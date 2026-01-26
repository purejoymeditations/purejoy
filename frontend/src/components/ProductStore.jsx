import React, { useState, useEffect } from "react";
import { ShoppingBag, Sparkles } from "lucide-react";
import axios from "axios";
import AnimateOnScroll from "./AnimateOnScroll";
import { getProductImage } from "../utils/productImages";

const ProductStore = () => {
  const [highlightedProducts, setHighlightedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch highlighted products
  useEffect(() => {
    const fetchHighlightedProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`
        );
        // Filter products where highlight is true
        const highlighted = response.data.filter(
          (product) => product.highlight === true
        );
        // Limit to 4 products for homepage
        setHighlightedProducts(highlighted.slice(0, 4));
      } catch (err) {
        console.error("Failed to fetch highlighted products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHighlightedProducts();
  }, []);

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

        {loading ? (
          <div className="text-center py-12">
            <p className="text-text-secondary">Loading featured products...</p>
          </div>
        ) : highlightedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlightedProducts.map((product, index) => (
              <AnimateOnScroll key={product._id}>
                <div className="group bg-white rounded-2xl shadow-md shadow-[#e5d3ba] overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg border border-[#f0ebe3] h-full flex flex-col">
                  <div className="h-64 overflow-hidden bg-[#f9f5f1]">
                    <img
                      src={getProductImage(product, index)}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-col space-y-3 mb-4">
                      {product.category && (
                        <span className="inline-block text-[#b18b4f] text-xs font-medium uppercase tracking-wider">
                          {product.category}
                        </span>
                      )}
                      <h3 className="text-lg font-semibold text-[#3c2e20] font-serif leading-tight">
                        {product.name}
                      </h3>
                      {product.description && (
                        <p className="text-sm text-[#5f5241] leading-relaxed line-clamp-3">
                          {product.description}
                        </p>
                      )}
                    </div>
                    <div className="mt-auto pt-4 border-t border-[#f0ebe3]">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          {(product.weight || product.volume) && (
                            <span className="text-sm text-[#7A5C3E] font-medium">
                              {product.weight || product.volume}
                            </span>
                          )}
                          {product.price && (
                            <span className="text-xl font-bold text-[#D8B86F]">
                              ${product.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-secondary">
              No featured products available at the moment.
            </p>
          </div>
        )}

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
