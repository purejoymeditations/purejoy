import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const BookingPage = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [practitioners, setPractitioners] = useState([]);
  const [selectedPractitioner, setSelectedPractitioner] = useState("");
  const [availability, setAvailability] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the specific service
    axios
      .get(`http://localhost:3001/api/services/${serviceId}`)
      .then((response) => {
        setService(response.data);
        setPractitioners(response.data.practitioners || []);
        if (response.data.practitioners.length === 1) {
          setSelectedPractitioner(response.data.practitioners[0]._id);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching service:", error);
        setLoading(false);
      });

    // Fetch availability for the next 14 days
    const startDate = moment().format("YYYY-MM-DD");
    const endDate = moment().add(14, "days").format("YYYY-MM-DD");
    axios
      .get(
        `http://localhost:3001/api/availability/slots/${serviceId}?startDate=${startDate}&endDate=${endDate}`
      )
      .then((response) => setAvailability(response.data))
      .catch((error) => console.error("Error fetching availability:", error));
  }, [serviceId]);

  useEffect(() => {
    if (selectedPractitioner) {
      const startDate = moment().format("YYYY-MM-DD");
      const endDate = moment().add(14, "days").format("YYYY-MM-DD");
      // This endpoint needs to be adjusted to filter by practitioner
      axios
        .get(
          `/api/availability/slots/${serviceId}?practitionerId=${selectedPractitioner}&startDate=${startDate}&endDate=${endDate}`
        )
        .then((response) => setAvailability(response.data))
        .catch((error) => console.error("Error fetching availability:", error));
    }
  }, [selectedPractitioner, serviceId]);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!serviceId || !selectedSlot || !userName || !userEmail || !userPhone) {
      alert("Please fill all fields and select a time slot.");
      return;
    }

    const slot = availability.find((a) => a._id === selectedSlot);

    const bookingData = {
      serviceId,
      user: { name: userName, email: userEmail, phone: userPhone },
      startTime: slot.startTime,
      endTime: slot.endTime,
    };

    axios
      .post("http://localhost:3001/api/bookings", bookingData)
      .then((response) => {
        alert(
          "Booking request submitted successfully! Please check your email."
        );
        setAvailability(availability.filter((a) => a._id !== selectedSlot));
        setSelectedSlot("");
      })
      .catch((error) => {
        console.error("Error creating booking:", error);
        alert("Failed to submit booking request.");
      });
  };

  if (loading) {
    return <div className="text-center p-10">Loading service details...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Book Service: {service ? service.name : ""}
      </h1>
      <form onSubmit={handleBookingSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Your Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {practitioners.length > 1 && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="practitioner"
            >
              Choose a Practitioner
            </label>
            <select
              id="practitioner"
              value={selectedPractitioner}
              onChange={(e) => setSelectedPractitioner(e.target.value)}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
            >
              <option value="">--Select--</option>
              {practitioners.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.name}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold">{service.name}</h2>
          <p className="text-gray-600">{service.description}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="font-bold text-primary">A${service.price}</span>
            <span>{service.duration} min</span>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="service"
          >
            Select an Available Time Slot
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {availability.length > 0 ? (
              availability.map((slot) => (
                <button
                  key={slot._id}
                  type="button"
                  onClick={() => setSelectedSlot(slot._id)}
                  className={`p-2 border rounded text-center ${
                    selectedSlot === slot._id
                      ? "bg-primary text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {new Date(slot.startTime).toLocaleString("en-AU", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </button>
              ))
            ) : (
              <p>No available slots at the moment. Please check back later.</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={!selectedSlot}
        >
          Request Booking
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
