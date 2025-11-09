const express = require('express');
const router = express.Router();
const { getServices, getServiceByIdentifier, createService, deleteService } = require('../controllers/serviceController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
    .get(getServices)
    .post(protect, createService);

router.route('/:identifier')
    .get(getServiceByIdentifier)
    .delete(protect, deleteService);

module.exports = router; 