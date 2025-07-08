const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { getAvailability, getAllAvailabilityForAdmin } = require('../controllers/availabilityController');
const Availability = require('../models/Availability');
const BlockedTime = require('../models/BlockedTime');

// @route   GET /api/availability/all
// @desc    Get all availability data for the admin calendar
// @access  Protected
router.get('/all', protect, getAllAvailabilityForAdmin);

// @route   GET /api/availability/slots/:serviceId
// @desc    Get available slots for a service
// @access  Public
router.get('/slots/:serviceId', getAvailability);

// --- Admin Routes ---

// @route   POST /api/availability/rules
// @desc    Create a new availability rule
// @access  Protected
router.post('/rules', protect, async (req, res) => {
    try {
        const newRule = new Availability(req.body);
        await newRule.save();
        res.status(201).json(newRule);
    } catch (error) {
        res.status(400).json({ message: 'Error creating rule', error: error.message });
    }
});

// @route   GET /api/availability/rules
// @desc    Get all availability rules
// @access  Protected
router.get('/rules', protect, async (req, res) => {
    try {
        const rules = await Availability.find({}).populate('services');
        res.json(rules);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rules', error: error.message });
    }
});

// @route   DELETE /api/availability/rules/:id
// @desc    Delete an availability rule
// @access  Protected
router.delete('/rules/:id', protect, async (req, res) => {
    try {
        await Availability.findByIdAndDelete(req.params.id);
        res.json({ message: 'Rule deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting rule', error: error.message });
    }
});

// @route   POST /api/availability/blocked
// @desc    Create a new blocked time
// @access  Protected
router.post('/blocked', protect, async (req, res) => {
    try {
        const newBlockedTime = new BlockedTime(req.body);
        await newBlockedTime.save();
        res.status(201).json(newBlockedTime);
    } catch (error) {
        res.status(400).json({ message: 'Error creating blocked time', error: error.message });
    }
});

// @route   GET /api/availability/blocked
// @desc    Get all blocked times
// @access  Protected
router.get('/blocked', protect, async (req, res) => {
    try {
        const blockedTimes = await BlockedTime.find({});
        res.json(blockedTimes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching blocked times', error: error.message });
    }
});

// @route   DELETE /api/availability/blocked/:id
// @desc    Delete a blocked time
// @access  Protected
router.delete('/blocked/:id', protect, async (req, res) => {
    try {
        await BlockedTime.findByIdAndDelete(req.params.id);
        res.json({ message: 'Blocked time deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting blocked time', error: error.message });
    }
});


module.exports = router; 