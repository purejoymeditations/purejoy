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
    <div className="bg-red-500 min-h-screen flex flex-col items-center justify-center">
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
        {message && <p>Message from backend: {message}</p>}

        <div className="product-list">
          <h2>Our Products</h2>
          {products.length > 0 ? (
            <ul>
              {products.map((product) => (
                <li key={product._id}>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price.toFixed(2)}</p>
                  {product.category && (
                    <p>
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

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
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
