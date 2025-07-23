const mongoose = require('mongoose');
const Product = require('./models/Product');

// Database connection
mongoose.connect('mongodb://localhost:27017/purejoy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Image mapping based on categories and product names
const imageMapping = {
    // Candles
    'Candles': 'vanilacandle.jpg',
    'candle': 'vanilacandle.jpg',
    'vanilla': 'vanilacandle.jpg',

    // Bath & Body
    'Bath & Body': 'salt.jpg',
    'salt': 'salt.jpg',
    'soap': 'soapbar.jpg',
    'himalayan': 'salt.jpg',
    'handmade': 'soapbar.jpg',
    'bath': 'salt.jpg',

    // Aromatherapy
    'Aromatherapy': 'rollon.jpg',
    'aromatherapy': 'aroma.jpeg',
    'roll-on': 'rollon.jpg',
    'rollon': 'rollon.jpg',
    'roll on': 'rollon.jpg',
    'essential': 'aroma.jpeg',
    'lavender': 'aroma.jpeg',
    'blend': 'aroma.jpeg',

    // Crystals
    'Crystals': 'stone.jpeg',
    'crystal': 'stone.jpeg',
    'stone': 'stone.jpeg',
    'healing': 'stone.jpeg',

    // Oracle Cards / Tarot
    'Oracle Cards': 'tarrot.jpeg',
    'Tarot': 'tarrot.jpeg',
    'tarot': 'tarrot.jpeg',
    'oracle': 'tarrot.jpeg',
    'card': 'tarrot.jpeg',

    // Essential Oils
    'Essential Oils': 'sunflower.jpeg',
    'sunflower': 'sunflower.jpeg',
    'oil': 'sunflower.jpeg',

    // Massage
    'Massage': 'deeptissue.jpeg',
    'massage': 'deeptissue.jpeg',
    'deep tissue': 'deeptissue.jpeg',
    'therapy': 'relaxed.jpeg',
    'relaxation': 'relaxed.jpeg',

    // Magnolia products
    'magnolia': 'mangolia.jpeg',
    'magnolia flower': 'mangolia.jpeg',
    'magnolia bath': 'mangolia2.jpeg',
    'magnolia meditation': 'mangolia3.jpeg',
};

function getImageForProduct(product) {
    const name = product.name.toLowerCase();
    const category = product.category ? product.category.toLowerCase() : '';
    const description = product.description ? product.description.toLowerCase() : '';

    // Check for specific keywords in name first
    for (const [keyword, imagePath] of Object.entries(imageMapping)) {
        if (name.includes(keyword.toLowerCase()) ||
            category.includes(keyword.toLowerCase()) ||
            description.includes(keyword.toLowerCase())) {
            return imagePath;
        }
    }

    // Default fallback images
    const defaultImages = [
        'aroma.jpeg',
        'stone.jpeg',
        'sunflower.jpeg',
        'mangolia.jpeg',
        'relaxed.jpeg'
    ];

    // Use a consistent default based on product name hash
    const hash = name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    return defaultImages[hash % defaultImages.length];
}

async function updateProductImages() {
    try {
        // Get all products
        const products = await Product.find({});
        console.log(`Found ${products.length} products to update`);

        let updatedCount = 0;

        for (const product of products) {
            // Only update if product doesn't have an image or has a placeholder
            if (!product.image || product.image === '' || product.image.includes('placeholder')) {
                const newImage = getImageForProduct(product);

                await Product.findByIdAndUpdate(product._id, {
                    $set: { image: newImage }
                });

                console.log(`Updated ${product.name} with image: ${newImage}`);
                updatedCount++;
            } else {
                console.log(`${product.name} already has image: ${product.image}`);
            }
        }

        console.log(`Successfully updated ${updatedCount} products with images`);

        // Display all products with their images
        const updatedProducts = await Product.find({});
        console.log('\nAll products with images:');
        updatedProducts.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} - ${product.image} (${product.category})`);
        });

        mongoose.connection.close();
        console.log('Database connection closed');
    } catch (error) {
        console.error('Error updating product images:', error);
        mongoose.connection.close();
    }
}

updateProductImages(); 