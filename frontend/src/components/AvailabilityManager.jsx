import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Trash2 } from "lucide-react";

const localizer = momentLocalizer(moment);

const AvailabilityManager = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rules, setRules] = useState([]);
  const [blockedTimes, setBlockedTimes] = useState([]);
  const [services, setServices] = useState([]);
  const [practitioners, setPractitioners] = useState([]);
  const [practitionerId, setPractitionerId] = useState("");

  // State for new rule form
  const [dayOfWeek, setDayOfWeek] = useState("1"); // Monday
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("17:00");
  const [linkedServices, setLinkedServices] = useState([]);

  // State for blocked time form
  const [blockTitle, setBlockTitle] = useState("");
  const [blockStartDate, setBlockStartDate] = useState("");
  const [blockEndDate, setBlockEndDate] = useState("");

  const fetchAvailability = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get("/api/availability/all", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const formattedEvents = response.data.map((event) => ({
        id: event._id,
        title: event.title,
        start: new Date(event.start),
        end: new Date(event.end),
        isBooked: event.isBooked,
        type: event.type,
      }));
      setEvents(formattedEvents);
    } catch (error) {
      console.error("Failed to fetch availability", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAvailability();
    fetchRules();
    fetchBlockedTimes();
    fetchServices();
    fetchPractitioners();
  }, []);

  const fetchRules = async () => {
    const token = localStorage.getItem("adminToken");
    const { data } = await axios.get("/api/availability/rules", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setRules(data);
  };

  const fetchBlockedTimes = async () => {
    const token = localStorage.getItem("adminToken");
    const { data } = await axios.get("/api/availability/blocked", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setBlockedTimes(data);
  };

  const fetchServices = async () => {
    const { data } = await axios.get("/api/services");
    setServices(data);
  };

  const fetchPractitioners = async () => {
    const token = localStorage.getItem("adminToken");
    const { data } = await axios.get("/api/admin/practitioners", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setPractitioners(data);
  };

  const handleSelectSlot = async ({ start, end }) => {
    const title = window.prompt("New Availability Title (optional)");
    if (title !== null) {
      // Allows creating even with an empty title
      try {
        const token = localStorage.getItem("adminToken");
        const newSlot = { slots: [{ startTime: start, endTime: end }] };
        await axios.post("http://localhost:3001/api/availability", newSlot, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchAvailability(); // Re-fetch to show the new slot
      } catch (error) {
        console.error("Failed to add availability", error);
      }
    }
  };

  const handleSelectEvent = async (event) => {
    if (event.isBooked) {
      alert("This slot is already booked and cannot be deleted here.");
      return;
    }
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this available slot?"
    );
    if (confirmDelete) {
      try {
        const token = localStorage.getItem("adminToken");
        await axios.delete(
          `http://localhost:3001/api/availability/${event.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        fetchAvailability(); // Re-fetch to remove the slot
      } catch (error) {
        console.error("Failed to delete availability", error);
      }
    }
  };

  const eventStyleGetter = (event) => {
    let backgroundColor = "#4caf50"; // Default green for available
    if (event.type === "blocked") {
      backgroundColor = "#f44336"; // Red for blocked
    } else if (event.type === "booking") {
      backgroundColor = "#ff9800"; // Orange for booked
    }

    const style = {
      backgroundColor,
      borderRadius: "5px",
      opacity: 0.8,
      color: "white",
      border: "0px",
      display: "block",
    };
    return { style };
  };

  const handleAddRule = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    await axios.post(
      "/api/availability/rules",
      { practitioner: practitionerId, dayOfWeek, startTime, endTime },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchRules();
  };

  const handleDeleteRule = async (id) => {
    const token = localStorage.getItem("adminToken");
    await axios.delete(`/api/availability/rules/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchRules();
  };

  const handleAddBlockedTime = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const newBlockedTime = {
      title: blockTitle,
      startTime: new Date(blockStartDate),
      endTime: new Date(blockEndDate),
    };
    await axios.post("/api/availability/blocked", newBlockedTime, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBlockedTimes();
  };

  const handleDeleteBlockedTime = async (id) => {
    const token = localStorage.getItem("adminToken");
    await axios.delete(`/api/availability/blocked/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchBlockedTimes();
  };

  if (loading) return <p>Loading availability calendar...</p>;

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Manage Availability</h2>

      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Weekly Recurring Schedule
        </h3>
        <form
          onSubmit={handleAddRule}
          className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end bg-gray-50 p-4 rounded-lg"
        >
          <div>
            <label className="block text-sm font-medium">Practitioner</label>
            <select
              value={practitionerId}
              onChange={(e) => setPractitionerId(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="" disabled>
                Select...
              </option>
              {practitioners.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.user.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Day</label>
            <select
              value={dayOfWeek}
              onChange={(e) => setDayOfWeek(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            >
              <option value="1">Monday</option>
              <option value="2">Tuesday</option>
              <option value="3">Wednesday</option>
              <option value="4">Thursday</option>
              <option value="5">Friday</option>
              <option value="6">Saturday</option>
              <option value="0">Sunday</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Start Time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End Time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="md:col-span-1">
            <button
              type="submit"
              className="bg-primary text-white rounded-md px-4 py-2 hover:bg-primary-hover w-full h-10"
            >
              Add Rule
            </button>
          </div>
        </form>
        <div className="mt-6 space-y-2">
          {rules.map((rule) => (
            <div
              key={rule._id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded"
            >
              <p>
                <span className="font-semibold">{rule.practitioner?.name}</span>
                : Every{" "}
                {
                  [
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ][rule.dayOfWeek]
                }{" "}
                from {rule.startTime} to {rule.endTime}
                {rule.services.length > 0 &&
                  ` for: ${rule.services.map((s) => s.name).join(", ")}`}
              </p>
              <button
                onClick={() => handleDeleteRule(rule._id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 border-b pb-2">
          Block Out Specific Times
        </h3>
        <form
          onSubmit={handleAddBlockedTime}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end bg-gray-50 p-4 rounded-lg"
        >
          <div>
            <label className="block text-sm font-medium">
              Title (e.g., Holiday)
            </label>
            <input
              type="text"
              value={blockTitle}
              onChange={(e) => setBlockTitle(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Start Date & Time
            </label>
            <input
              type="datetime-local"
              value={blockStartDate}
              onChange={(e) => setBlockStartDate(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">End Date & Time</label>
            <input
              type="datetime-local"
              value={blockEndDate}
              onChange={(e) => setBlockEndDate(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 h-10"
          >
            Block Time
          </button>
        </form>
        <div className="mt-6 space-y-2">
          {blockedTimes.map((time) => (
            <div
              key={time._id}
              className="flex justify-between items-center bg-red-100 p-2 rounded"
            >
              <p>
                <strong>{time.title}:</strong> from{" "}
                {new Date(time.startTime).toLocaleString()} to{" "}
                {new Date(time.endTime).toLocaleString()}
              </p>
              <button
                onClick={() => handleDeleteBlockedTime(time._id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: "600px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={handleSelectEvent}
          eventPropGetter={eventStyleGetter}
          views={["month", "week", "day"]}
          defaultView="week"
        />
      </div>
    </div>
  );
};

export default AvailabilityManager;
