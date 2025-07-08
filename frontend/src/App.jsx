import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import BookingPage from "./components/BookingPage";
import ServiceDetailsPage from "./components/ServiceDetailsPage";
import AdminLoginPage from "./components/AdminLoginPage";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import AllServicesPage from "./components/AllServicesPage";

const HomePage = () => (
  <>
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
  </>
);

function App() {
  return (
    <Router>
      <div className="py-2">
        <div className="max-w-7xl mx-auto bg-container-bg rounded-lg shadow-golden">
          <Navbar />
          <main>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<AllServicesPage />} />
              <Route path="/services/:slug" element={<ServiceDetailsPage />} />
              <Route path="/book/:serviceId" element={<BookingPage />} />
              <Route path="/admin/login" element={<AdminLoginPage />} />

              {/* Protected Admin Routes */}
              <Route element={<ProtectedRoute />}>
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
