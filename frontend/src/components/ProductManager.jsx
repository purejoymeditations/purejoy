import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductManager = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // Add states for form inputs: name, description, price, etc.
  // Add state for selected product for editing

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Assuming you have a public endpoint to get products
        const response = await axios.get("http://localhost:3001/api/products");
        setProducts(response.data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Handlers for form submission (create/update) and deletion will go here

  if (loading) return <p>Loading products...</p>;

  return (
    <div className="bg-white shadow rounded-lg p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

      {/* Add New Product Form */}
      <div className="mb-8 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Add New Product</h3>
        {/* Form fields will be added here */}
      </div>

      {/* Product List Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  A${product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-primary hover:underline mr-4">
                    Edit
                  </button>
                  <button className="text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManager;
