import React, { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_CHARS = /^[0-9+\-\s()]+$/;

// Normalise raw availability from API into a consistent shape
const normaliseSlots = (rawSlots, serviceDurationMinutes) => {
  if (!Array.isArray(rawSlots)) return [];

  return rawSlots
    .map((slot, index) => {
      // Backend currently returns { start, end }; older code expected { _id, startTime, endTime }
      const start =
        slot.startTime || slot.start || slot.start_date || slot.startDate;
      const end = slot.endTime || slot.end || slot.end_date || slot.endDate;
      if (!start || !end) return null;

      const startIso = new Date(start).toISOString();
      const endIso = new Date(end).toISOString();

      return {
        id: slot._id || `${startIso}-${endIso}-${index}`,
        startTime: startIso,
        endTime: endIso,
        raw: slot,
        duration: serviceDurationMinutes,
      };
    })
    .filter(Boolean)
    .sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
};

const groupSlotsByDate = (slots) => {
  const groups = {};
  slots.forEach((slot) => {
    const d = new Date(slot.startTime);
    // Use Australia/Sydney locale for display grouping
    const key = d.toLocaleDateString("en-AU", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      timeZone: "Australia/Sydney",
    });
    if (!groups[key]) groups[key] = [];
    groups[key].push(slot);
  });
  return groups;
};

const BookingPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [availability, setAvailability] = useState([]);
  const [selectedSlotId, setSelectedSlotId] = useState(null);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");

  const [isLoadingService, setIsLoadingService] = useState(true);
  const [isLoadingSlots, setIsLoadingSlots] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [serviceError, setServiceError] = useState("");
  const [slotsError, setSlotsError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Fetch service details
  useEffect(() => {
    if (!serviceId) return;
    const fetchService = async () => {
      setIsLoadingService(true);
      setServiceError("");
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/services/${serviceId}`
        );
        setService(res.data);
      } catch (err) {
        console.error("Error fetching service:", err);
        if (err?.response?.status === 404) {
          setServiceError(
            "This service is not available to book right now. Please choose a different service."
          );
        } else {
          setServiceError(
            "We were unable to load this service. Please try again in a moment."
          );
        }
      } finally {
        setIsLoadingService(false);
      }
    };
    fetchService();
  }, [serviceId]);

  // Fetch availability for the next 14 days
  useEffect(() => {
    if (!serviceId) return;
    const fetchSlots = async () => {
      setIsLoadingSlots(true);
      setSlotsError("");
      try {
        const startDate = moment().format("YYYY-MM-DD");
        const endDate = moment().add(14, "days").format("YYYY-MM-DD");
        const res = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/availability/slots/${serviceId}?startDate=${startDate}&endDate=${endDate}`
        );

        const duration = service?.duration || 60;
        const normalised = normaliseSlots(res.data, duration);
        setAvailability(normalised);
      } catch (err) {
        console.error("Error fetching availability:", err);
        setSlotsError(
          "We couldn't load available times. Please refresh the page or try again shortly."
        );
      } finally {
        setIsLoadingSlots(false);
      }
    };

    fetchSlots();
  }, [serviceId, service?.duration]);

  const groupedSlots = useMemo(
    () => groupSlotsByDate(availability),
    [availability]
  );

  const selectedSlot = useMemo(
    () => availability.find((s) => s.id === selectedSlotId) || null,
    [availability, selectedSlotId]
  );

  const validateFields = () => {
    const errors = {};
    const nameTrimmed = userName.trim();
    const emailTrimmed = userEmail.trim();
    const phoneTrimmed = userPhone.trim();

    if (!nameTrimmed) {
      errors.userName = "Please enter your full name.";
    } else if (nameTrimmed.length < 2) {
      errors.userName = "Name should be at least 2 characters.";
    }

    if (!emailTrimmed) {
      errors.userEmail = "Please enter your email address.";
    } else if (!EMAIL_REGEX.test(emailTrimmed)) {
      errors.userEmail = "Please enter a valid email address.";
    }

    if (!phoneTrimmed) {
      errors.userPhone = "Please enter your mobile number.";
    } else {
      const digitsCount = (phoneTrimmed.match(/[0-9]/g) || []).length;
      if (!PHONE_ALLOWED_CHARS.test(phoneTrimmed) || digitsCount < 8) {
        errors.userPhone =
          "Please enter a valid phone number (numbers, spaces, +, - only).";
      }
    }

    if (!selectedSlot) {
      errors.selectedSlot =
        "Please choose a date and time for your appointment.";
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");

    if (!serviceId) {
      setSubmitError("Missing service information. Please go back and try again.");
      return;
    }

    if (!validateFields()) {
      return;
    }

    // Defensive: ensure the selected slot is still present
    const slot = availability.find((s) => s.id === selectedSlotId);
    if (!slot) {
      setFieldErrors((prev) => ({
        ...prev,
        selectedSlot:
          "The selected time is no longer available. Please choose another slot.",
      }));
      return;
    }

    const bookingData = {
      serviceId,
      user: {
        name: userName.trim(),
        email: userEmail.trim(),
        phone: userPhone.trim(),
      },
      startTime: slot.startTime,
      endTime: slot.endTime,
    };

    setIsSubmitting(true);
    try {
      await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/bookings`, bookingData);

      setIsSuccess(true);
      // Remove the booked slot locally so it can't be selected again
      setAvailability((prev) => prev.filter((s) => s.id !== slot.id));
      setSelectedSlotId(null);
    } catch (err) {
      console.error("Error creating booking:", err);
      const msg =
        err?.response?.data?.message ||
        "We were unable to submit your booking. Please try again.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingService) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-text-secondary">Loading service details...</p>
      </div>
    );
  }

  if (serviceError || !service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <p className="text-red-600 mb-4 text-lg">
          {serviceError || "We couldn't find this service."}
        </p>
        <button
          onClick={() => navigate("/services")}
          className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-all duration-200"
        >
          Back to Services
        </button>
      </div>
    );
  }

  if (isSuccess && selectedSlot) {
    // Fallback: selectedSlot may be null after we clear it, so we guard above
  }

  const selectedSummary = selectedSlot
    ? new Date(selectedSlot.startTime).toLocaleString("en-AU", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Australia/Sydney",
      })
    : null;

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg border border-border p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-text-primary mb-4">
            Your booking request has been sent
          </h1>
          <p className="text-text-secondary mb-6">
            Thank you, {userName.trim() || "beautiful soul"}. We’ve received your
            booking request for{" "}
            <span className="font-semibold text-text-primary">
              {service.name}
            </span>
            {selectedSummary && (
              <>
                {" "}
                on{" "}
                <span className="font-semibold text-text-primary">
                  {selectedSummary}
                </span>
              </>
            )}
            . You’ll receive a confirmation email once your appointment is
            confirmed.
          </p>
          <p className="text-sm text-text-secondary mb-8">
            All times are shown in Australia/Sydney time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/services")}
              className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-hover transition-all duration-200"
            >
              Back to Services
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary/5 transition-all duration-200"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 md:py-14">
      {/* Service summary */}
      <div className="mb-8 bg-white rounded-2xl shadow-md border border-border p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-text-primary mb-3">
          Book: {service.name}
        </h1>
        <p className="text-text-secondary mb-4">{service.description}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-light text-primary font-semibold">
            A${service.price.toFixed(2)} • {service.duration} min
          </span>
          <span className="text-text-secondary">
            Times displayed in Australia/Sydney (local time).
          </span>
        </div>
      </div>

      {/* Combined slot + form card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md border border-border p-6 md:p-8 space-y-8"
      >
        {submitError && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
            {submitError}
          </div>
        )}

        {/* Step 1: Choose date & time */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            1. Choose your date and time
          </h2>
          <p className="text-sm text-text-secondary mb-4">
            Select a time that suits you. Available times are based on the
            practitioner’s schedule and current bookings.
          </p>

          {isLoadingSlots ? (
            <p className="text-text-secondary">Loading available times…</p>
          ) : slotsError ? (
            <div>
              <p className="text-red-600 mb-2 text-sm">{slotsError}</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="text-primary text-sm underline"
              >
                Refresh page
              </button>
            </div>
          ) : availability.length === 0 ? (
            <p className="text-text-secondary">
              There are no available times in the next 14 days. Please check
              back soon or contact us directly to arrange an appointment.
            </p>
          ) : (
            <div className="space-y-4">
              {Object.entries(groupedSlots).map(([dateLabel, slots]) => (
                <div key={dateLabel} className="border border-border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <p className="font-semibold text-text-primary">{dateLabel}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {slots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlotId(slot.id)}
                        className={`px-3 py-2 rounded-full border text-sm transition-all ${
                          selectedSlotId === slot.id
                            ? "bg-primary text-white border-primary shadow-sm"
                            : "bg-white text-text-primary border-border hover:border-primary/60 hover:bg-primary/5"
                        }`}
                      >
                        {new Date(slot.startTime).toLocaleTimeString("en-AU", {
                          hour: "numeric",
                          minute: "2-digit",
                          timeZone: "Australia/Sydney",
                        })}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          {fieldErrors.selectedSlot && (
            <p className="mt-2 text-sm text-red-600">
              {fieldErrors.selectedSlot}
            </p>
          )}

          {selectedSummary && (
            <p className="mt-3 text-sm text-text-secondary">
              Selected time:{" "}
              <span className="font-medium text-text-primary">
                {selectedSummary}
              </span>
            </p>
          )}
        </section>

        {/* Step 2: Your details */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            2. Your details
          </h2>
          <p className="text-sm text-text-secondary mb-4">
            Please share your contact details so we can confirm your booking and
            send important information about your session.
          </p>

          <div className="grid gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                  fieldErrors.userName ? "border-red-400" : "border-border"
                }`}
                autoComplete="name"
              />
              {fieldErrors.userName && (
                <p className="mt-1 text-xs text-red-600">
                  {fieldErrors.userName}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                  fieldErrors.userEmail ? "border-red-400" : "border-border"
                }`}
                autoComplete="email"
              />
              {fieldErrors.userEmail && (
                <p className="mt-1 text-xs text-red-600">
                  {fieldErrors.userEmail}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-text-primary mb-1"
              >
                Mobile number
              </label>
              <input
                id="phone"
                type="tel"
                value={userPhone}
                onChange={(e) => setUserPhone(e.target.value)}
                className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                  fieldErrors.userPhone ? "border-red-400" : "border-border"
                }`}
                autoComplete="tel"
              />
              {fieldErrors.userPhone && (
                <p className="mt-1 text-xs text-red-600">
                  {fieldErrors.userPhone}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1">
                Service
              </label>
              <input
                type="text"
                value={service.name}
                disabled
                className="w-full rounded-lg border border-border bg-gray-50 px-3 py-2 text-sm text-text-secondary cursor-not-allowed"
              />
            </div>
          </div>
        </section>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <p className="text-xs text-text-secondary">
            By requesting a booking, you agree to be contacted via email or
            phone to confirm your appointment time.
          </p>
          {/* <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all ${
              isSubmitting
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-primary text-white hover:bg-primary-hover shadow-md hover:shadow-lg"
            }`}
          >
            {isSubmitting ? "Sending request..." : "Request Booking"}
          </button> */}
           <button
              className="w-full py-3 rounded-full bg-logo-gold text-white font-semibold uppercase tracking-widest shadow-lg hover:shadow-xl transition"
              disabled
            >
              Checkout Coming Soon
            </button>
        </div>
      </form>
    </div>
  );
};

export default BookingPage;
