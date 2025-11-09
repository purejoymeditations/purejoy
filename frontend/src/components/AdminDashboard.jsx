import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingManager from "./BookingManager";
import AvailabilityManager from "./AvailabilityManager";
import ProductManager from "./ProductManager";
import PractitionerManager from "./PractitionerManager";
import ServiceManager from "./ServiceManager";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("bookings");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const renderContent = () => {
    switch (activeTab) {
      case "bookings":
        return <BookingManager />;
      case "availability":
        return <AvailabilityManager />;
      case "products":
        return <ProductManager />;
      case "practitioners":
        return <PractitionerManager />;
      case "services":
        return <ServiceManager />;
      default:
        return <BookingManager />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-container-bg shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-text-primary">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <div className="border-b-2 border-border">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("services")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "services"
                    ? "border-primary text-primary"
                    : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"
                }`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "products"
                    ? "border-primary text-primary"
                    : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab("practitioners")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "practitioners"
                    ? "border-primary text-primary"
                    : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"
                }`}
              >
                Practitioners
              </button>
              <button
                onClick={() => setActiveTab("availability")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "availability"
                    ? "border-primary text-primary"
                    : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"
                }`}
              >
                Availability
              </button>
              <button
                onClick={() => setActiveTab("bookings")}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "bookings"
                    ? "border-primary text-primary"
                    : "border-transparent text-text-secondary hover:text-text-primary hover:border-border"
                }`}
              >
                Bookings
              </button>
            </nav>
          </div>
        </div>
      </div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
