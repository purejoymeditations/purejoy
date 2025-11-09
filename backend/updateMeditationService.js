const mongoose = require('mongoose');
require('dotenv').config();

const Service = require('./models/Service');

const updateMeditationService = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/purejoy');
        console.log('Connected to MongoDB');

        // Find and update the Meditation Sessions service
        const updatedService = await Service.findOneAndUpdate(
            { name: 'Meditation Sessions' },
            {
                $set: {
                    image: 'services/meditation.jpeg',
                    price: 20, // Updated base price for 1 session
                    duration: 60, // Duration for 1 session
                    description: 'Guided meditation sessions to help you find inner peace and develop mindfulness. Choose from individual sessions or a comprehensive 5-session package.',
                    fullDescription: 'Our guided meditation sessions provide a supportive space to quiet the mind, reduce stress, and develop a deeper connection with your true self. Whether you\'re a beginner seeking immediate stress relief or looking to develop a sustainable meditation practice, our sessions are designed to meet you where you are on your wellness journey. Choose from a single session for immediate relief or our comprehensive 5-session package for lasting transformation.',
                    updatedAt: new Date()
                }
            },
            { new: true, upsert: false }
        );

        if (updatedService) {
            console.log('✅ Meditation Sessions service updated successfully!');
            console.log('Service ID:', updatedService._id);
            console.log('Image:', updatedService.image);
            console.log('Price:', updatedService.price);
        } else {
            console.log('❌ Meditation Sessions service not found');
        }

    } catch (error) {
        console.error('❌ Error updating Meditation Sessions service:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
};

updateMeditationService(); 