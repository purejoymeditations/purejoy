const express = require('express');
const router = express.Router();
const { createBooking } = require('../controllers/bookingController');

// @route   POST /api/bookings
// @desc    Create new booking
// @access  Public
router.route('/').post(createBooking);

module.exports = router; 