import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/test")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setMessage(data.message))
      .catch((error) => {
        console.error("Error fetching test message:", error);
        setError(`Error fetching test message: ${error.message}`);
      });

    fetch("http://localhost:3001/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError((prevError) =>
          prevError
            ? `${prevError}, Error fetching products: ${error.message}`
            : `Error fetching products: ${error.message}`
        );
      });
  }, []);

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col items-center pt-10">
      <div className="text-center">
        <div className="flex justify-center items-center mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        {message && <p className="mb-4">Message from backend: {message}</p>}
        {error && <p className="text-red-500 mb-4">Error: {error}</p>}

        <div className="product-list bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Our Products
          </h2>
          {products.length > 0 ? (
            <ul className="space-y-4">
              {products.map((product) => (
                <li
                  key={product._id}
                  className="border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <h3 className="text-xl font-medium text-emerald-700">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {product.description}
                  </p>
                  <p className="mt-1 font-semibold">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  {product.category && (
                    <p className="text-xs text-gray-500 mt-1">
                      <em>Category: {product.category}</em>
                    </p>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No products found, or still loading...</p>
          )}
        </div>

        <div className="card bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded mb-4 w-full"
          >
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
}

export default App;
