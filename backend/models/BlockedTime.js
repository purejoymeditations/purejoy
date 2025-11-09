const mongoose = require('mongoose');

const blockedTimeSchema = new mongoose.Schema({
    // A descriptive name for the block, e.g., "Personal Appointment" or "Public Holiday"
    title: {
        type: String,
        required: true,
        trim: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    // If true, this block is for the entire day(s)
    isAllDay: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const BlockedTime = mongoose.model('BlockedTime', blockedTimeSchema);

module.exports = BlockedTime; 