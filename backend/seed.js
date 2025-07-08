const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const mongoose = require('mongoose');

// Import all models
const User = require('./models/User');
const Practitioner = require('./models/Practitioner');
const Service = require('./models/Service');
const Availability = require('./models/Availability');
const BlockedTime = require('./models/BlockedTime');
const Booking = require('./models/Booking');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Event = require('./models/Event');

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected for seeding...');

        // Clear only transactional data, preserve services
        await Promise.all([
            User.deleteMany({ email: { $ne: 'superadmin@purejoy.com' } }),
            Practitioner.deleteMany({}),
            Availability.deleteMany({}),
            BlockedTime.deleteMany({}),
            Booking.deleteMany({}),
            Order.deleteMany({}), // Clearing orders as they are transactional
            Event.deleteMany({})
        ]);
        console.log('Cleared transactional and user data.');

        // --- Create Users & Practitioners (if they don't exist) ---
        let leanneUser = await User.findOneAndUpdate({ email: 'leanne@purejoy.com' }, { name: 'Leanne', password: 'password123', role: 'Superadmin' }, { upsert: true, new: true });
        let lesleyUser = await User.findOneAndUpdate({ email: 'lesley@purejoy.com' }, { name: 'Lesley', password: 'password123', role: 'Practitioner' }, { upsert: true, new: true });
        let customerUser = await User.findOneAndUpdate({ email: 'customer@email.com' }, { name: 'Customer Jane', password: 'password123', role: 'Customer' }, { upsert: true, new: true });

        const leannePractitioner = await Practitioner.findOneAndUpdate({ user: leanneUser._id }, { bio: '...' }, { upsert: true, new: true });
        const lesleyPractitioner = await Practitioner.findOneAndUpdate({ user: lesleyUser._id }, { bio: '...' }, { upsert: true, new: true });
        console.log('Users and Practitioners upserted.');

        // --- Link Practitioners to EXISTING Services ---
        await Service.updateMany(
            { category: { $in: ['Energy & Ancestral Healing', 'Tarot & Card Readings', 'Meditation & Classes'] } },
            { $addToSet: { practitioners: leannePractitioner._id } }
        );
        await Service.updateMany(
            { category: 'Remedial & Relaxation Massage' },
            { $addToSet: { practitioners: lesleyPractitioner._id } }
        );
        console.log('Linked practitioners to existing services.');

        // --- Update specific service images ---
        await Service.updateOne(
            { slug: 'trigger-point-massage' },
            { $set: { image: 'stone.jpeg' } }
        );
        console.log('Updated Trigger Point service image.');

        // --- Create Sample Availability ---
        // ...

        // --- Create Sample Booking ---
        // ...

        console.log('Database successfully seeded/updated!');
        mongoose.connection.close();
    } catch (err) {
        console.error('Seeding failed:', err);
        mongoose.connection.close();
    }
};

seedDB(); 