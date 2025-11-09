const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('./models/Service');
const Practitioner = require('./models/Practitioner');

const addMeditationBundle = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/purejoy');
        console.log('Connected to MongoDB');

        // Check if Meditation Sessions already exists
        const existingService = await Service.findOne({ name: 'Meditation Sessions' });

        if (existingService) {
            console.log('Meditation Sessions service already exists');
            return;
        }

        // Find practitioners to assign to the service (optional)
        const practitioners = await Practitioner.find();
        console.log(`Found ${practitioners.length} practitioners`);

        // Create the bundled Meditation Sessions service
        const meditationBundle = new Service({
            name: 'Meditation Sessions',
            slug: 'meditation-sessions',
            description: 'Guided meditation sessions to help you find inner peace and develop mindfulness. Choose from individual sessions or a comprehensive 5-session package.',
            fullDescription: 'Our guided meditation sessions provide a supportive space to quiet the mind, reduce stress, and develop a deeper connection with your true self. Whether you\'re a beginner seeking immediate stress relief or looking to develop a sustainable meditation practice, our sessions are designed to meet you where you are on your wellness journey. Choose from a single session for immediate relief or our comprehensive 5-session package for lasting transformation.',
            price: 80, // Base price for 1 session
            duration: 60, // Base duration for 1 session
            category: 'Meditation & Classes',
            practitioners: practitioners.length > 0 ? practitioners.map(p => p._id) : [], // Empty array if no practitioners
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        await meditationBundle.save();
        console.log('✅ Meditation Sessions service added successfully!');
        console.log('Service ID:', meditationBundle._id);
        console.log('Practitioners assigned:', practitioners.length);

    } catch (error) {
        console.error('❌ Error adding Meditation Sessions service:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
};

addMeditationBundle(); 