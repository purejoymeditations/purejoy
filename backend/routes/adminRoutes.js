const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');

// Import controllers
const { getAllBookings, updateBooking } = require('../controllers/bookingController');
const { getPractitioners, createPractitioner, deletePractitioner } = require('../controllers/practitionerController');
// ... import other admin controllers as needed

// Booking Admin Routes
router.route('/bookings').get(protect, getAllBookings);
router.route('/bookings/:id').put(protect, updateBooking);

// Practitioner Admin Routes
router.route('/practitioners').get(protect, getPractitioners).post(protect, createPractitioner);
router.route('/practitioners/:id').delete(protect, deletePractitioner);


module.exports = router; 