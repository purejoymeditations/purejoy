import React, { useState, useEffect } from "react";
import axios from "axios";

const ServiceManager = () => {
  const [services, setServices] = useState([]);
  const [practitioners, setPractitioners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Form state
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [category, setCategory] = useState("");
  const [slug, setSlug] = useState("");
  const [assignedPractitioners, setAssignedPractitioners] = useState([]);

  useEffect(() => {
    fetchServices();
    fetchPractitioners();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/services");
      setServices(data);
      setError("");
    } catch (err) {
      setError("Failed to fetch services.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPractitioners = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const { data } = await axios.get("/api/admin/practitioners", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPractitioners(data);
    } catch (err) {
      console.error("Failed to fetch practitioners", err);
    }
  };

  const handleCreateService = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("adminToken");
      const newService = {
        name,
        description,
        price,
        duration,
        category,
        slug,
        practitioners: assignedPractitioners,
      };
      await axios.post("/api/services", newService, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Reset form
      setName("");
      setDescription("");
      setPrice("");
      setDuration("");
      setCategory("");
      setSlug("");
      setAssignedPractitioners([]);
      // Refetch services
      fetchServices();
    } catch (err) {
      setError("Failed to create service. Make sure the slug is unique.");
      console.error(err);
    }
  };

  const handleDeleteService = async (serviceId) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        const token = localStorage.getItem("adminToken");
        await axios.delete(`/api/services/${serviceId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchServices();
      } catch (err) {
        setError("Failed to delete service.");
        console.error(err);
      }
    }
  };

  if (loading) return <p>Loading services...</p>;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Services</h2>

      {error && (
        <p className="text-red-500 bg-red-100 p-3 rounded mb-4">{error}</p>
      )}

      {/* Create Service Form */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Add New Service
        </h3>
        <form
          onSubmit={handleCreateService}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Slug (e.g., remedial-massage)"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Duration (minutes)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="p-2 border rounded"
          />
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-text-primary mb-1">
              Assign Practitioners
            </label>
            <select
              multiple
              value={assignedPractitioners}
              onChange={(e) =>
                setAssignedPractitioners(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
              className="w-full p-2 border rounded h-32"
              required
            >
              {practitioners.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.user.name}
                </option>
              ))}
            </select>
          </div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="p-2 border rounded md:col-span-2"
          />
          <button
            type="submit"
            className="bg-primary text-white rounded-md px-4 py-2 hover:bg-primary-hover md:col-span-2"
          >
            Create Service
          </button>
        </form>
      </div>

      {/* Existing Services List */}
      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Existing Services
        </h3>
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service._id}
              className="flex justify-between items-center bg-warm-beige p-4 rounded-lg"
            >
              <div>
                <p className="font-bold text-lg">
                  {service.name}{" "}
                  <span className="text-sm font-normal text-text-secondary">
                    ({service.category})
                  </span>
                </p>
                <p className="text-sm">{service.description}</p>
                <p className="text-sm font-semibold mt-2">
                  ${service.price} for {service.duration} mins
                </p>
                <p className="text-xs text-text-secondary mt-2">
                  Practitioners:{" "}
                  {service.practitioners.map((p) => p.user?.name).join(", ")}
                </p>
              </div>
              <button
                onClick={() => handleDeleteService(service._id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceManager;
