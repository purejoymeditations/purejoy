import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FounderStory from "./components/FounderStory";
import ServicesOffered from "./components/ServicesOffered";
import RetreatsEvents from "./components/RetreatsEvents";
import ProductStore from "./components/ProductStore";

function App() {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Top-level effects can be added here if necessary
  }, []);

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <FounderStory />
      <ServicesOffered />
      <RetreatsEvents />
      <ProductStore />
      <Footer />
    </div>
  );
}

export default App;
