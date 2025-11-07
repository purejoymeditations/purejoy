const mongoose = require('mongoose');

const practitionerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    bio: {
        type: String,
        trim: true
    },
    // You can add other professional details here later,
    // like certifications, specialties, etc.
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Practitioner = mongoose.model('Practitioner', practitionerSchema);

module.exports = Practitioner; 