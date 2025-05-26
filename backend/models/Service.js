const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    duration: { // Duration in minutes, for example
        type: Number,
        required: true,
        min: 0
    },
    category: { // e.g., Massage, Healing, Card Reading
        type: String,
        required: true,
        trim: true
    },
    // Add other relevant fields like 'therapist', 'availability_schedule_template', etc. later
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service; 