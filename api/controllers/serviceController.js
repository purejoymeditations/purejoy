const Service = require('../models/Service');
const mongoose = require('mongoose');

// @desc    Get all services, with optional filter for featured
// @route   GET /api/services
// @access  Public
const getServices = async (req, res) => {
    try {
        let query = {};
        if (req.query.featured === 'true') {
            query = { isFeatured: true };
        }
        const services = await Service.find(query).populate({
            path: 'practitioners',
            populate: {
                path: 'user',
                select: 'name'
            }
        });
        res.json(services);
    } catch (err) {
        console.error('Error fetching services:', err);
        res.status(500).json({ message: 'Error fetching services', error: err.message });
    }
};

// @desc    Get a single service by ID or slug
// @route   GET /api/services/:identifier
// @access  Public
const getServiceByIdentifier = async (req, res) => {
    try {
        const { identifier } = req.params;
        let service;

        if (mongoose.Types.ObjectId.isValid(identifier)) {
            service = await Service.findById(identifier);
        } else {
            service = await Service.findOne({ slug: identifier });
        }

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }
        res.json(service);
    } catch (err) {
        console.error('Error fetching service:', err);
        res.status(500).json({ message: 'Error fetching service', error: err.message });
    }
};

// @desc    Create a new service
// @route   POST /api/services
// @access  Private/Admin
const createService = async (req, res) => {
    const { name, description, price, duration, category, slug, practitioners } = req.body;
    try {
        const newService = new Service({
            name,
            description,
            price,
            duration,
            category,
            slug,
            practitioners,
        });
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (err) {
        console.error('Error creating service:', err);
        res.status(400).json({ message: 'Error creating service', error: err.message });
    }
};

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
const deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (service) {
            await service.remove();
            res.json({ message: 'Service removed' });
        } else {
            res.status(404).json({ message: 'Service not found' });
        }
    } catch (err) {
        console.error('Error deleting service:', err);
        res.status(500).json({ message: 'Error deleting service', error: err.message });
    }
};

module.exports = { getServices, getServiceByIdentifier, createService, deleteService };