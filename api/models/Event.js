const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    capacity: {
        type: Number,
        required: true,
        min: 1
    },
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    price: {
        type: Number,
        required: true,
        default: 0
    }
}, {
    timestamps: true
});

// Virtual for remaining spots
eventSchema.virtual('spotsRemaining').get(function () {
    return this.capacity - this.attendees.length;
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event; 