import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import FounderStory from "./components/FounderStory";
import ServicesOffered from "./components/ServicesOffered";
import RetreatsEvents from "./components/RetreatsEvents";
import ProductStore from "./components/ProductStore";
import Testimonials from "./components/Testimonials";
import NgoImpact from "./components/NgoImpact";
import AnimateOnScroll from "./components/AnimateOnScroll";
import OurApproach from "./components/OurApproach";
import SectionSeparator from "./components/SectionSeparator";

function App() {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Top-level effects can be added here if necessary
  }, []);

  return (
    <div className="py-2">
      <div className="max-w-7xl mx-auto bg-container-bg rounded-lg shadow-golden">
        <Navbar />
        <main>
          <Hero />
          <SectionSeparator />
          <AnimateOnScroll>
            <FounderStory />
          </AnimateOnScroll>
          <SectionSeparator />
          <AnimateOnScroll>
            <OurApproach />
          </AnimateOnScroll>
          <SectionSeparator />
          <AnimateOnScroll>
            <ServicesOffered />
          </AnimateOnScroll>
          <SectionSeparator />
          <AnimateOnScroll>
            <RetreatsEvents />
          </AnimateOnScroll>
          <SectionSeparator />
          <AnimateOnScroll>
            <ProductStore />
          </AnimateOnScroll>
          <SectionSeparator />
          <AnimateOnScroll>
            <Testimonials />
          </AnimateOnScroll>
          <SectionSeparator />
          <AnimateOnScroll>
            <NgoImpact />
          </AnimateOnScroll>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
