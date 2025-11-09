import React, { useState, useEffect } from "react";
import axios from "axios";

const PractitionerManager = () => {
  const [practitioners, setPractitioners] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    fetchPractitioners();
  }, []);

  const fetchPractitioners = async () => {
    const token = localStorage.getItem("adminToken");
    const { data } = await axios.get("/api/admin/practitioners", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPractitioners(data);
  };

  const handleAddPractitioner = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    await axios.post(
      "/api/admin/practitioners",
      { name },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setName("");
    fetchPractitioners();
  };

  const handleDeletePractitioner = async (id) => {
    const token = localStorage.getItem("adminToken");
    await axios.delete(`/api/admin/practitioners/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchPractitioners();
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Practitioners</h2>

      <form onSubmit={handleAddPractitioner} className="mb-6 flex gap-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New practitioner name"
          className="flex-grow p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-primary text-white rounded-md px-6 py-2"
        >
          Add
        </button>
      </form>

      <div className="space-y-2">
        {practitioners.map((p) => (
          <div
            key={p._id}
            className="flex justify-between items-center bg-warm-beige p-2 rounded"
          >
            <p>{p.name}</p>
            <button
              onClick={() => handleDeletePractitioner(p._id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PractitionerManager;
