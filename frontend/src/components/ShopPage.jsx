import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Filter,
  Package,
  Weight,
  Sparkles,
  X,
  Eye,
} from "lucide-react";
import axios from "axios";
import AnimateOnScroll from "./AnimateOnScroll";

// Import product images
import vanillaCandleImg from "../assets/images/vanilacandle.jpg";
import rosePetalsImg from "../assets/images/products/bathsalts/rose-petals.webp";
import mintyzestImg from "../assets/images/products/candles/mintyzest.webp";
import teaCupSubBurstImg from "../assets/images/products/candles/teacupsunburst.webp";
import sunburstImg from "../assets/images/products/candles/sunburst.webp";
import citrussorbetImg from "../assets/images/products/candles/citrussorbet.webp";
import teacupfrangipanibloomImg from "../assets/images/products/candles/teacupfrangipani.webp";
import teacupexoticbreezeImg from "../assets/images/products/candles/teacupexoticbreeze.webp";
import coconutkissImg from "../assets/images/products/candles/coconutkiss.webp";
import exoticbreezeImg from "../assets/images/products/candles/exoticbreeze.webp";
import lemonmyrtleImg from "../assets/images/products/candles/lemonmyrtle.webp";
import cedarskyImg from "../assets/images/products/candles/cedarsky.webp";
import frangipanibloomImg from "../assets/images/products/candles/frangipanibloom.webp";
import lemongrasslimeImg from "../assets/images/products/candles/lemongrasslime.webp";
import teacupwhitegardenImg from "../assets/images/products/candles/teacupwhitegarden.webp";
import lemonmyrtlemarbleImg from "../assets/images/products/candles/lemonmyrtlemarble.webp";
import whitegardenImg from "../assets/images/products/candles/whitegarden.webp";
import teacupcedarImg from "../assets/images/products/candles/teacupcedar.webp";

//candles
import angelsprayImg from "../assets/images/products/sprays/angelspray.webp";
import evileyesprayImg from "../assets/images/products/sprays/evileyespray.webp";
import whitesagesprayImg from "../assets/images/products/sprays/whitesagespray.webp";
import painawaybodyspritzImg from "../assets/images/products/sprays/painawaybodyspritz.webp";
import coolitbodyspritzImg from "../assets/images/products/sprays/coolitbodyspritz.webp";
import justmebodyspritzImg from "../assets/images/products/sprays/justmebodyspritz.webp";
import calmmeroomsprayImg from "../assets/images/products/sprays/calmmeroomspray.webp";
import sleepytimeroomsprayImg from "../assets/images/products/sprays/sleepytimeroomspray.webp";
import refreshmeroomsprayImg from "../assets/images/products/sprays/refreshmeroomspray.webp";
import herbalmagicroomsprayImg from "../assets/images/products/sprays/herbalmagicroomspray.webp";
import magnesiumlavendersprayImg from "../assets/images/products/sprays/magnesiumlavenderspray.webp";
import magnesiumlemongrasssprayImg from "../assets/images/products/sprays/magnesiumlemongrassspray.webp";
import magnesiumsportmusclerecoverysprayImg from "../assets/images/products/sprays/magnesiumsportmusclerecoveryspray.webp";

// Roll-Ons
import coolitRollonImg from "../assets/images/products/rollon/coolit.webp";
import clarityRollonImg from "../assets/images/products/rollon/clarity.webp";
import immunityRollonImg from "../assets/images/products/rollon/immunity.webp";
import sweetdreamsRollonImg from "../assets/images/products/rollon/sweetdreams.webp";
import justmeRollonImg from "../assets/images/products/rollon/justme.webp";
import painawayRollonImg from "../assets/images/products/rollon/painaway.webp";
import stresslessRollonImg from "../assets/images/products/rollon/stressless.webp";

// Diffusers
import lumoDiffuserImg from "../assets/images/products/diffusers/lumo.webp";
import petalDiffuserImg from "../assets/images/products/diffusers/petal.webp";
import concretelavaDiffuserImg from "../assets/images/products/diffusers/concretelava.webp";

const ShopPage = () => {
  // State management
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [isFilterAnimating, setIsFilterAnimating] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Image mappings
  const imageMap = {
    // Candles
    "products/candles/mintyzest.webp": mintyzestImg,
    "products/bathsalts/rose-petals.webp": rosePetalsImg,
    "products/candles/teacupsunburst.webp": teaCupSubBurstImg,
    "products/candles/sunburst.webp": sunburstImg,
    "products/candles/citrussorbet.webp": citrussorbetImg,
    "products/candles/teacupfrangipanibloom.webp": teacupfrangipanibloomImg,
    "products/candles/teacupexoticbreeze.webp": teacupexoticbreezeImg,
    "products/candles/coconutkiss.webp": coconutkissImg,
    "products/candles/exoticbreeze.webp": exoticbreezeImg,
    "products/candles/lemonmyrtle.webp": lemonmyrtleImg,
    "products/candles/cedarsky.webp": cedarskyImg,
    "products/candles/frangipanibloom.webp": frangipanibloomImg,
    "products/candles/lemongrasslime.webp": lemongrasslimeImg,
    "products/candles/teacupwhitegarden.webp": teacupwhitegardenImg,
    "products/candles/lemonmyrtlemarble.webp": lemonmyrtlemarbleImg,
    "products/candles/whitegarden.webp": whitegardenImg,
    "products/candles/teacupcedar.webp": teacupcedarImg,

    // Sprays
    "products/sprays/angelspray.webp": angelsprayImg,
    "products/sprays/evileyespray.webp": evileyesprayImg,
    "products/sprays/whitesagespray.webp": whitesagesprayImg,
    "products/sprays/painawaybodyspritz.webp": painawaybodyspritzImg,
    "products/sprays/coolitbodyspritz.webp": coolitbodyspritzImg,
    "products/sprays/justmebodyspritz.webp": justmebodyspritzImg,
    "products/sprays/calmmeroomspray.webp": calmmeroomsprayImg,
    "products/sprays/sleepytimeroomspray.webp": sleepytimeroomsprayImg,
    "products/sprays/refreshmeroomspray.webp": refreshmeroomsprayImg,
    "products/sprays/herbalmagicroomspray.webp": herbalmagicroomsprayImg,
    "products/sprays/magnesiumlavenderspray.webp": magnesiumlavendersprayImg,
    "products/sprays/magnesiumlemongrassspray.webp":
      magnesiumlemongrasssprayImg,
    "products/sprays/magnesiumsportmusclerecoveryspray.webp":
      magnesiumsportmusclerecoverysprayImg,
  };

  const productImages = [
    // Candles
    mintyzestImg,
    teaCupSubBurstImg,
    teacupcedarImg,
    whitegardenImg,
    teacupwhitegardenImg,
    lemongrasslimeImg,
    frangipanibloomImg,
    cedarskyImg,
    lemonmyrtleImg,
    exoticbreezeImg,
    coconutkissImg,
    teacupexoticbreezeImg,
    citrussorbetImg,
    sunburstImg,
    teaCupSubBurstImg,
    lemonmyrtlemarbleImg,
    vanillaCandleImg,

    // Sprays
    angelsprayImg,
    evileyesprayImg,
    whitesagesprayImg,
    painawaybodyspritzImg,
    coolitbodyspritzImg,
    justmebodyspritzImg,
    calmmeroomsprayImg,
    sleepytimeroomsprayImg,
    refreshmeroomsprayImg,
    herbalmagicroomsprayImg,
    magnesiumlavendersprayImg,
    magnesiumlemongrasssprayImg,
    magnesiumsportmusclerecoverysprayImg,

    // Roll-Ons
    coolitRollonImg,
    clarityRollonImg,
    immunityRollonImg,
    sweetdreamsRollonImg,
    justmeRollonImg,
    painawayRollonImg,
    stresslessRollonImg,

    // Diffusers
    lumoDiffuserImg,
    petalDiffuserImg,
    concretelavaDiffuserImg,
  ];

  const categoryImages = {
    Candles: [
      vanillaCandleImg,
      mintyzestImg,
      teaCupSubBurstImg,
      teacupcedarImg,
      whitegardenImg,
      teacupwhitegardenImg,
      lemongrasslimeImg,
      frangipanibloomImg,
      cedarskyImg,
      lemonmyrtleImg,
      exoticbreezeImg,
      coconutkissImg,
      teacupexoticbreezeImg,
      citrussorbetImg,
      sunburstImg,
      teaCupSubBurstImg,
      lemonmyrtlemarbleImg,
    ],
    Sprays: [
      angelsprayImg,
      evileyesprayImg,
      whitesagesprayImg,
      painawaybodyspritzImg,
      coolitbodyspritzImg,
      justmebodyspritzImg,
      calmmeroomsprayImg,
      sleepytimeroomsprayImg,
      refreshmeroomsprayImg,
      herbalmagicroomsprayImg,
      magnesiumlavendersprayImg,
      magnesiumlemongrasssprayImg,
      magnesiumsportmusclerecoverysprayImg,
    ],
    "Roll-On": [
      coolitRollonImg,
      clarityRollonImg,
      immunityRollonImg,
      sweetdreamsRollonImg,
      justmeRollonImg,
      painawayRollonImg,
      stresslessRollonImg,
    ],
    Diffusers: [
      lumoDiffuserImg,
      petalDiffuserImg,
      concretelavaDiffuserImg,
    ],
    "Bath & Body": [],
    "Bath Salts": [],
    Aromatherapy: [],
    "Oracle Cards": [],
    Tarot: [],
    Crystals: [],
    "Essential Oils": [],
    Massage: [],
  };

  // Helper functions
  const getProductImage = (product, index) => {
    if (product.image) {
      if (imageMap[product.image]) {
        return imageMap[product.image];
      }
      if (product.image.startsWith("http") || product.image.startsWith("/")) {
        return product.image;
      }
    }

    if (product.category && categoryImages[product.category]) {
      const categoryImgs = categoryImages[product.category];
      return categoryImgs[index % categoryImgs.length];
    }

    return productImages[index % productImages.length];
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeProductModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleCategoryChange = (category) => {
    setIsFilterAnimating(true);
    setSelectedCategory(category);
    setTimeout(() => setIsFilterAnimating(false), 300);
  };

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/products`
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Failed to load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Filter products
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  // Get unique categories
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 mx-auto mb-4"></div>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-primary absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            <Sparkles
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary animate-pulse"
              size={24}
            />
          </div>
          <div className="animate-pulse">
            <p className="text-text-secondary mb-2">
              Loading our beautiful products...
            </p>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-primary rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center text-red-600 animate-fade-in">
          <div className="animate-bounce mb-4">
            <Package size={64} className="mx-auto text-red-400" />
          </div>
          <p className="text-xl mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-secondary py-8 lg:py-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={angelsprayImg}
            alt="Pure Joy Shop - Beautiful Magnolia Collection"
            className="w-full h-full object-cover opacity-50 transform scale-105 hover:scale-110 transition-transform duration-[3000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 via-transparent to-primary/20 animate-gradient-x"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-70"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary rounded-full animate-float-delayed opacity-50"></div>
            <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-float-slow opacity-60"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <AnimateOnScroll>
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-3 lg:mb-4 font-serif animate-fade-in-up">
                Our Curated Collection
              </h1>
              <p className="text-base lg:text-lg text-text-secondary max-w-2xl mx-auto mb-3 lg:mb-4 animate-fade-in-up animation-delay-200">
                Handcrafted wellness products and spiritual treasures for your
                journey.
              </p>
              <div className="flex items-center justify-center text-text-secondary animate-fade-in-up animation-delay-400">
                <ShoppingCart className="mr-2 animate-pulse" size={18} />
                <span className="font-medium text-sm lg:text-base">
                  {products.length} Products Available
                </span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white/80 backdrop-blur-sm py-6 sticky top-24 z-40 shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md group">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary transition-colors group-focus-within:text-primary"
                size={20}
              />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300 bg-white/90 backdrop-blur-sm hover:shadow-md focus:shadow-lg"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-3">
              <Filter size={18} className="text-text-secondary" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                      selectedCategory === category
                        ? "bg-primary text-white shadow-lg ring-2 ring-primary/30 ring-opacity-60 animate-pulse-subtle"
                        : "bg-white/90 text-text-primary border border-gray-300 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-300 hover:shadow-md backdrop-blur-sm"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 animate-fade-in">
              <div className="text-8xl mb-6 animate-bounce">🔍</div>
              <h3 className="text-3xl font-semibold text-text-primary mb-4">
                No products found
              </h3>
              <p className="text-text-secondary mb-8 text-lg">
                Try adjusting your search or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary-hover transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-500 ${
                isFilterAnimating
                  ? "opacity-50 scale-95"
                  : "opacity-100 scale-100"
              }`}
            >
              {filteredProducts.map((product, index) => (
                <AnimateOnScroll key={product._id} delay={index * 100}>
                  <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 ease-out hover:-translate-y-3 hover:shadow-2xl flex flex-col h-full border border-gray-100 hover:border-yellow-300/50">
                    {/* Product Image */}
                    <div className="relative h-72 bg-gradient-to-br from-primary/10 to-secondary/20 flex items-center justify-center overflow-hidden">
                      <img
                        src={getProductImage(product, index)}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "block";
                        }}
                      />
                      <div
                        className="text-center text-text-secondary"
                        style={{ display: "none" }}
                      >
                        <Package
                          size={48}
                          className="mx-auto mb-2 opacity-50"
                        />
                        <p className="text-sm font-medium">
                          {product.category}
                        </p>
                      </div>

                      {/* Weight/Volume Badge */}
                      {(product.weight || product.volume) && (
                        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                          <div className="flex items-center gap-2">
                            <Weight
                              size={14}
                              className="text-yellow-600 animate-pulse"
                            />
                            <span className="text-xs font-bold text-text-primary">
                              {product.weight && product.volume
                                ? `${product.weight} | ${product.volume}`
                                : product.weight || product.volume}
                            </span>
                          </div>
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Product Details */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-text-primary mb-3 font-serif line-clamp-2 group-hover:text-primary transition-colors duration-300">
                          {product.name}
                        </h3>
                        <div className="mb-6">
                          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 group-hover:text-gray-600 transition-colors duration-300">
                            {product.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto space-y-4">
                        {/* Price Section */}
                        <div className="text-center transform transition-transform duration-300 group-hover:scale-105">
                          <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x">
                            {/* <div className="text-3xl font-bold text-logo-gold mb-4"> */}
                            A${product.price.toFixed(2)}
                          </div>
                          <div className="flex items-center justify-center gap-3 text-xs text-gray-500">
                            <span className="transition-colors duration-300 group-hover:text-primary">
                              {product.category}
                            </span>
                            {product.inStock !== undefined && (
                              <>
                                <span>•</span>
                                <span
                                  className={`transition-colors duration-300 ${
                                    product.inStock
                                      ? "text-green-600 group-hover:text-green-500"
                                      : "text-red-500 group-hover:text-red-400"
                                  }`}
                                >
                                  {product.inStock
                                    ? "In Stock"
                                    : "Out of Stock"}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col gap-3">
                          <button
                            onClick={() => openProductModal(product)}
                            className="w-full group/btn font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                          >
                            <Eye
                              size={16}
                              className="transition-all duration-300 group-hover/btn:scale-110"
                            />
                            <span className="tracking-wide font-medium">
                              View Details
                            </span>
                          </button>

                          <button
                            className={`w-full group/btn font-medium py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 text-sm ${
                              product.inStock !== false
                                ? "bg-primary hover:bg-primary-hover text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                : "bg-gray-200 text-gray-500 cursor-not-allowed"
                            }`}
                            disabled={product.inStock === false}
                          >
                            <ShoppingCart
                              size={16}
                              className="transition-all duration-300 group-hover/btn:scale-110"
                            />
                            <span className="tracking-wide font-medium">
                              {product.inStock !== false
                                ? "Add to Cart"
                                : "Unavailable"}
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-text-primary font-serif">
                Product Details
              </h2>
              <button
                onClick={closeProductModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col lg:flex-row">
              {/* Product Image */}
              <div className="lg:w-1/2 p-6">
                <div className="relative h-96 bg-gradient-to-br from-primary/10 to-secondary/20 rounded-xl overflow-hidden">
                  <img
                    src={getProductImage(selectedProduct, 0)}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  {/* Product Header */}
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-text-primary mb-2 font-serif">
                      {selectedProduct.name}
                    </h3>
                    {/* <div className="text-3xl font-bold text-logo-gold mb-4"> */}
                    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-gradient-x">
                      A${selectedProduct.price.toFixed(2)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary">
                      <span className="bg-primary-light text-primary px-3 py-1 rounded-full">
                        {selectedProduct.category}
                      </span>
                      {selectedProduct.inStock !== undefined && (
                        <span
                          className={`px-3 py-1 rounded-full ${
                            selectedProduct.inStock
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {selectedProduct.inStock
                            ? "In Stock"
                            : "Out of Stock"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Product Description */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">
                      Description
                    </h4>
                    <div className="text-text-secondary leading-relaxed max-h-60 overflow-y-auto">
                      {selectedProduct.description}
                    </div>
                  </div>

                  {/* Product Specifications */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-text-primary mb-3">
                      Specifications
                    </h4>
                    <div className="space-y-2 text-text-secondary">
                      {selectedProduct.weight && (
                        <div className="flex items-center gap-2">
                          <Weight size={16} className="text-primary" />
                          <span>Weight: {selectedProduct.weight}</span>
                        </div>
                      )}
                      {selectedProduct.volume && (
                        <div className="flex items-center gap-2">
                          <Package size={16} className="text-primary" />
                          <span>Volume: {selectedProduct.volume}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-6 border-t border-gray-200">
                  <button
                    className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                      selectedProduct.inStock !== false
                        ? "bg-primary hover:bg-primary-hover text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={selectedProduct.inStock === false}
                  >
                    <ShoppingCart size={20} className="inline mr-2" />
                    {selectedProduct.inStock !== false
                      ? "Add to Cart"
                      : "Unavailable"}
                  </button>
                  <button
                    onClick={closeProductModal}
                    className="px-6 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
