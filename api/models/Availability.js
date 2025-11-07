const mongoose = require('mongoose');

const availabilityRuleSchema = new mongoose.Schema({
    practitioner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Practitioner',
        required: true
    },
    // e.g., 'weekly', 'specific-date'
    type: {
        type: String,
        required: true,
        enum: ['weekly', 'date'],
        default: 'weekly'
    },
    // For weekly: 0=Sunday, 1=Monday, etc.
    dayOfWeek: {
        type: Number,
        min: 0,
        max: 6,
        required: function () { return this.type === 'weekly'; }
    },
    // For specific-date
    date: {
        type: Date,
        required: function () { return this.type === 'date'; }
    },
    // Time format "HH:mm"
    startTime: {
        type: String,
        required: true,
    },
    endTime: {
        type: String,
        required: true,
    },
    // Link to specific services if this rule applies only to them
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Availability = mongoose.model('Availability', availabilityRuleSchema);

module.exports = Availability; 