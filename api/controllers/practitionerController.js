const Practitioner = require('../models/Practitioner');

// @desc    Get all practitioners
// @route   GET /api/practitioners
// @access  Private/Admin
const getPractitioners = async (req, res) => {
    try {
        const practitioners = await Practitioner.find({}).populate('user', 'name');
        res.json(practitioners);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create a practitioner
// @route   POST /api/practitioners
// @access  Private/Admin
const createPractitioner = async (req, res) => {
    try {
        const practitioner = new Practitioner({
            name: req.body.name || 'Sample Practitioner',
        });
        const createdPractitioner = await practitioner.save();
        res.status(201).json(createdPractitioner);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Delete a practitioner
// @route   DELETE /api/practitioners/:id
// @access  Private/Admin
const deletePractitioner = async (req, res) => {
    try {
        const practitioner = await Practitioner.findById(req.params.id);
        if (practitioner) {
            await practitioner.remove();
            res.json({ message: 'Practitioner removed' });
        } else {
            res.status(404).json({ message: 'Practitioner not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getPractitioners, createPractitioner, deletePractitioner }; 