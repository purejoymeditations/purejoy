const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    role: {
        type: String,
        enum: ['Customer', 'Practitioner', 'Superadmin'],
        required: true,
        default: 'Customer'
    },
    // Link to a practitioner profile if the user has that role
    practitionerProfile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Practitioner'
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Hash password on findOneAndUpdate
userSchema.pre('findOneAndUpdate', async function (next) {
    if (this._update.password) {
        const salt = await bcrypt.genSalt(10);
        this._update.password = await bcrypt.hash(this._update.password, salt);
    }
    next();
});

// Method to compare password for login
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
