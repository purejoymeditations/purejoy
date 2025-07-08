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
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-2 border-gray-200">
            <nav className="-mb-0.5 flex space-x-8">
              <button
                onClick={() => setActiveTab("bookings")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "bookings"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Bookings
              </button>
              <button
                onClick={() => setActiveTab("availability")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "availability"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Availability
              </button>
              <button
                onClick={() => setActiveTab("products")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "products"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setActiveTab("practitioners")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "practitioners"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Practitioners
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "services"
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Services
              </button>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
