import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "./animations.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import ServicesOffered from "./components/ServicesOffered";
import RetreatsEvents from "./components/RetreatsEvents";
import ProductStore from "./components/ProductStore";
import Testimonials from "./components/Testimonials";
import NgoImpact from "./components/NgoImpact";
import AnimateOnScroll from "./components/AnimateOnScroll";
import OurApproach from "./components/OurApproach";
import SectionSeparator from "./components/SectionSeparator";
import BookingPage from "./components/BookingPage";
import ServiceDetailsPage from "./components/ServiceDetailsPage";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AllServicesPage from "./components/AllServicesPage";
import ShopPage from "./components/ShopPage";
import AboutUsPage from "./components/AboutUsPageNew";
import OurStory from "./components/OurStory";
import CommunityPage from "./components/CommunityPage";
import CommunityPreview from "./components/CommunityPreview";
import SocialMediaBar from "./components/SocialMediaBar";
import CartPage from "./components/CartPage";

const HomePage = () => (
  <>
    <Hero />
    <SectionSeparator />
    <OurApproach />
    <SectionSeparator />
    <AnimateOnScroll>
      <ServicesOffered />
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
      <CommunityPreview />
    </AnimateOnScroll>
  </>
);

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
};

const AppContent = () => {
  return (
    <div className="w-full">
      <Navbar />

      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/services" element={<AllServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailsPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/book/:serviceId" element={<BookingPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Protected Admin Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </main>
      <Footer />
      <SocialMediaBar />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
