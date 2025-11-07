const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            itemType: {
                type: String,
                required: true,
                enum: ['Product', 'Service']
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: function () { return this.itemType === 'Product'; }
            },
            service: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Service',
                required: function () { return this.itemType === 'Service'; }
            },
            booking: { // Link to the specific booking for a service
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Booking'
            },
            name: { type: String, required: true },
            quantity: { type: Number, required: true, default: 1 },
            price: { type: Number, required: true }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date
    },
    orderStatus: {
        type: String,
        required: true,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    // Add shipping info, payment result, etc. later
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order; 