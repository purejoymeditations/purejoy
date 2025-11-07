const Booking = require('../models/Booking');
const Availability = require('../models/Availability');
const Service = require('../models/Service');
const { sendBookingRequestEmail, sendBookingConfirmationEmail, sendBookingCancellationEmail } = require('../utils/email');

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Public
const createBooking = async (req, res) => {
    try {
        const { serviceId, user, startTime, endTime } = req.body;

        if (!user.name || !user.email || !user.phone) {
            return res.status(400).json({ message: 'User name, email, and phone are required.' });
        }

        const service = await Service.findById(serviceId).populate('practitioners');
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        // --- New Logic: Find an available practitioner ---
        const potentialPractitioners = service.practitioners.map(p => p._id);

        // This is a simplified logic. A more robust solution would check practitioner-specific
        // availability rules and existing bookings for that practitioner.
        // For now, we'll assume the first practitioner is available if the slot is open.
        if (potentialPractitioners.length === 0) {
            return res.status(400).json({ message: 'No practitioners available for this service.' });
        }
        const assignedPractitionerId = potentialPractitioners[0];
        // --- End New Logic ---

        const newBooking = new Booking({
            practitioner: assignedPractitionerId, // Assign practitioner
            service: serviceId,
            user,
            startTime,
            endTime,
            status: 'pending'
        });
        await newBooking.save();

        const populatedBooking = await newBooking.populate('service practitioner');
        sendBookingRequestEmail(populatedBooking);

        res.status(201).json(newBooking);
    } catch (err) {
        console.error('Error creating booking:', err);
        res.status(500).json({ message: 'Error creating booking', error: err.message });
    }
};

// @desc    Get all bookings
// @route   GET /api/admin/bookings
// @access  Private/Admin
const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({})
            .populate('service')
            .populate('customer', 'name email')
            .populate({
                path: 'practitioner',
                populate: {
                    path: 'user',
                    model: 'User',
                    select: 'name'
                }
            });
        res.setHeader('Cache-Control', 'no-store');
        res.json(bookings);
    } catch (err) {
        console.error('Error fetching bookings:', err);
        res.status(500).json({ message: 'Error fetching bookings', error: err.message });
    }
};

// @desc    Update a booking
// @route   PUT /api/admin/bookings/:id
// @access  Private/Admin
const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, additionalDetails, rescheduleDetails, adminNotes } = req.body;

        const booking = await Booking.findById(id);
        if (!booking) {
            return res.status(404).json({ message: 'Booking not found.' });
        }

        const previousStatus = booking.status;

        if (status) booking.status = status;
        if (additionalDetails) booking.additionalDetails = { ...booking.additionalDetails, ...additionalDetails };
        if (rescheduleDetails) booking.rescheduleDetails = { ...booking.rescheduleDetails, ...rescheduleDetails };
        if (adminNotes !== undefined) booking.adminNotes = adminNotes;

        const updatedBooking = await booking.save();

        if (status === 'confirmed' && previousStatus !== 'confirmed') {
            sendBookingConfirmationEmail(updatedBooking.populate('service'));
        }

        if (status === 'cancelled' && previousStatus !== 'cancelled') {
            await Availability.findOneAndUpdate(
                { startTime: updatedBooking.startTime, endTime: updatedBooking.endTime },
                { $set: { isBooked: false } }
            );
            sendBookingCancellationEmail(updatedBooking.populate('service'));
        }

        res.json(updatedBooking);
    } catch (err) {
        console.error('Error updating booking:', err);
        res.status(500).json({ message: 'Error updating booking', error: err.message });
    }
};

module.exports = { createBooking, getAllBookings, updateBooking }; 