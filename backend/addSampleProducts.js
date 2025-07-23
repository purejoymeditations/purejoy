const mongoose = require('mongoose');
const Product = require('./models/Product');

// Database connection
mongoose.connect('mongodb://localhost:27017/purejoy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const sampleProducts = [
    {
        name: "Vanilla Aromatherapy Candle",
        description: "A soothing vanilla candle to bring warmth and tranquility to your space. Hand-poured with natural soy wax and essential oils for a clean, long-lasting burn.",
        price: 28.50,
        category: "Candles",
        weight: "200g",
        image: "/src/assets/images/vanilacandle.jpg",
        inStock: true
    },
    {
        name: "Himalayan Pink Salt",
        description: "Pure Himalayan salt for purification and creating a sacred bathing ritual. Rich in minerals for natural healing and relaxation.",
        price: 15.99,
        category: "Bath & Body",
        weight: "500g",
        image: "/src/assets/images/salt.jpg",
        inStock: true
    },
    {
        name: "Calming Aromatherapy Roll-On",
        description: "A convenient roll-on to apply calming essential oils on the go. Perfect for stress relief and mindfulness practices.",
        price: 19.95,
        category: "Aromatherapy",
        volume: "10ml",
        image: "/src/assets/images/rollon.jpg",
        inStock: true
    },
    {
        name: "Organic Handmade Soap Bar",
        description: "A natural, handcrafted soap bar to nourish your skin and soul. Made with organic ingredients and essential oils.",
        price: 12.50,
        category: "Bath & Body",
        weight: "100g",
        image: "/src/assets/images/soapbar.jpg",
        inStock: true
    },
    {
        name: "Crystal Healing Stone Set",
        description: "Beautiful healing crystals to enhance your meditation practice and create positive energy in your space.",
        price: 45.00,
        category: "Crystals",
        image: "/src/assets/images/stone.jpeg",
        inStock: true
    },
    {
        name: "Lavender Essential Oil Blend",
        description: "Premium essential oil blend for aromatherapy and relaxation. Carefully crafted for balance and harmony.",
        price: 32.99,
        category: "Aromatherapy",
        volume: "15ml",
        image: "/src/assets/images/aroma.jpeg",
        inStock: true
    },
    {
        name: "Spiritual Tarot Card Deck",
        description: "Sacred tarot cards for spiritual guidance and personal insight. Beautiful artwork and high-quality cards.",
        price: 38.90,
        category: "Oracle Cards",
        image: "/src/assets/images/tarrot.jpeg",
        inStock: true
    },
    {
        name: "Organic Sunflower Massage Oil",
        description: "Pure sunflower oil for massage and skin care. Rich in vitamins and natural goodness for healthy skin.",
        price: 24.75,
        category: "Essential Oils",
        volume: "100ml",
        image: "/src/assets/images/sunflower.jpeg",
        inStock: true
    },
    {
        name: "Magnolia Flower Essence",
        description: "Delicate magnolia flower essence for emotional balance and spiritual healing. Handcrafted with care and intention.",
        price: 29.99,
        category: "Aromatherapy",
        volume: "30ml",
        image: "/src/assets/images/mangolia.jpeg",
        inStock: true
    },
    {
        name: "Magnolia Bath Salts",
        description: "Luxurious bath salts infused with magnolia essence for a deeply relaxing and rejuvenating bathing experience.",
        price: 26.50,
        category: "Bath & Body",
        weight: "300g",
        image: "/src/assets/images/mangolia2.jpeg",
        inStock: true
    },
    {
        name: "Magnolia Meditation Blend",
        description: "Special magnolia-infused blend perfect for meditation and spiritual practices. Creates a peaceful atmosphere.",
        price: 35.00,
        category: "Aromatherapy",
        volume: "20ml",
        image: "/src/assets/images/mangolia3.jpeg",
        inStock: true
    },
    {
        name: "Relaxation Therapy Set",
        description: "Complete relaxation therapy set with essential oils and tools for stress relief and deep relaxation.",
        price: 68.99,
        category: "Aromatherapy",
        image: "/src/assets/images/relaxed.jpeg",
        inStock: true
    },
    {
        name: "Deep Tissue Massage Oil",
        description: "Professional-grade massage oil for deep tissue work and muscle relaxation. Therapeutic and healing.",
        price: 42.50,
        category: "Massage",
        volume: "150ml",
        image: "/src/assets/images/deeptissue.jpeg",
        inStock: true
    },
    {
        name: "Premium Aromatherapy Starter Kit",
        description: "Complete aromatherapy starter kit with essential oils, diffuser, and accessories for beginners.",
        price: 89.95,
        category: "Aromatherapy",
        image: "/src/assets/images/aroma.jpeg",
        inStock: true
    },
    {
        name: "Meditation Stone Collection",
        description: "Carefully selected stones for meditation and energy work. Each stone has unique healing properties.",
        price: 55.00,
        category: "Crystals",
        image: "/src/assets/images/stone.jpeg",
        inStock: true
    }
];

async function addSampleProducts() {
    try {
        // Clear existing products
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Add sample products
        const products = await Product.insertMany(sampleProducts);
        console.log(`Successfully added ${products.length} sample products`);

        // Display added products
        products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} - A$${product.price} (${product.category})`);
        });

        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error adding sample products:', error);
        mongoose.connection.close();
    }
}

addSampleProducts(); 