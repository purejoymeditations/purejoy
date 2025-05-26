import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FounderStory from "./components/FounderStory";
import ServicesOffered from "./components/ServicesOffered";
import RetreatsEvents from "./components/RetreatsEvents";
import ProductStore from "./components/ProductStore";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
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
  }, []);

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FounderStory />
      <ServicesOffered />
      <RetreatsEvents />
      <ProductStore />
      <main className="flex-grow flex flex-col items-center pt-10 pb-10 w-full px-4">
        <div className="flex justify-center items-center mb-8">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
        {message && (
          <p className="mb-4 text-lg">Message from backend: {message}</p>
        )}
        {error && <p className="text-red-500 mb-4">Error: {error}</p>}

        <div className="card bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mt-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded mb-4 w-full"
          >
            count is {count}
          </button>
          <p className="text-center">
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs mt-8 text-sm text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
