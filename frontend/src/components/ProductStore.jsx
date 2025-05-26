import React, { useState, useEffect } from "react";

const ProductStore = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 text-xl">Loading our treasures...</p>
          {/* You could add a spinner here */}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-600 text-xl">
            Error loading products: {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-emerald-700 text-center mb-12 md:mb-16">
          Our Curated Collection
        </h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-slate-50 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
              >
                {/* Placeholder for image - assuming you might add an imageURL to your product data later */}
                <div className="w-full h-48 bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400 text-sm">
                    Image Coming Soon
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-emerald-600 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3 flex-grow">
                    {product.description}
                  </p>
                  {product.category && (
                    <p className="text-xs text-slate-500 mb-2">
                      <em>Category: {product.category}</em>
                    </p>
                  )}
                  <p className="text-lg font-bold text-emerald-700 mb-4">
                    ${product.price.toFixed(2)}
                  </p>
                  <a
                    href="#" // Replace with actual link to product page or add to cart later
                    className="mt-auto bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-0.5 text-center text-sm"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-slate-600 text-xl">
              No products currently available. Please check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductStore;
