import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";

const BookingDetailModal = ({ booking, onClose, onUpdate }) => {
  const [status, setStatus] = useState(booking.status);
  const [adminNotes, setAdminNotes] = useState(booking.adminNotes || "");

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const updateData = {
        status,
        adminNotes,
      };
      const response = await axios.put(
        `http://localhost:3001/api/bookings/${booking._id}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      onUpdate(response.data); // Update the booking in the parent component's state
      onClose();
    } catch (error) {
      console.error("Failed to update booking", error);
    }
  };

  if (!booking) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Booking Details</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p>
              <strong>Service:</strong> {booking.service.name}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(booking.startTime).toLocaleString()}
            </p>
            <p>
              <strong>Practitioner:</strong>{" "}
              {booking.practitioner?.name || "N/A"}
            </p>
          </div>
          <div>
            <p>
              <strong>Client:</strong> {booking.user.name}
            </p>
            <p>
              <strong>Email:</strong> {booking.user.email}
            </p>
            <p>
              <strong>Phone:</strong> {booking.user.phone}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-1 block w-full p-2 border-gray-300 rounded-md"
          >
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
            <option value="rescheduled">Rescheduled</option>
          </select>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Admin Notes
          </label>
          <textarea
            value={adminNotes}
            onChange={(e) => setAdminNotes(e.target.value)}
            rows="4"
            className="mt-1 block w-full p-2 border-gray-300 rounded-md"
          ></textarea>
        </div>

        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDetailModal;
