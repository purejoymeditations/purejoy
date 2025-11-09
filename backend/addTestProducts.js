const mongoose = require('mongoose');
const Product = require('./models/Product');

// Database connection
mongoose.connect('mongodb://localhost:27017/purejoy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const testProducts = [
    {
        name: "Yummy Mummy Cup",
        description: "A special cup designed for nurturing mothers and maternal energy. Perfect for herbal teas, moon water, or ritual beverages.",
        price: 25.00,
        category: "Bath & Body",
        volume: "350ml",
        image: "vanilacandle.jpg",
        inStock: false // OUT OF STOCK to demonstrate
    },
    {
        name: "High Vibes Body Spritz",
        description: "An uplifting aromatherapy spray designed to elevate your mood and energy. This refreshing blend features...",
        price: 35.00,
        category: "Aromatherapy",
        volume: "100ml",
        image: "rollon.jpg",
        inStock: true
    },
    {
        name: "Terracotta Diffuser",
        description: "Handcrafted terracotta essential oil diffuser that naturally disperses aromatherapy through porous...",
        price: 18.00,
        category: "Bath & Body",
        image: "stone.jpeg",
        inStock: true
    },
    {
        name: "Just Me Body Spritz",
        description: "A personal empowerment spray that encourages authenticity and self-love. This gentle mist combines...",
        price: 35.00,
        category: "Aromatherapy",
        volume: "100ml",
        image: "aroma.jpeg",
        inStock: true
    }
];

async function addTestProducts() {
    try {
        // Clear existing products first
        await Product.deleteMany({});
        console.log('Cleared existing products');

        // Add test products
        const products = await Product.insertMany(testProducts);
        console.log(`✅ Successfully added ${products.length} test products:`);

        products.forEach((product, index) => {
            console.log(`${index + 1}. "${product.name}" - A$${product.price} - ${product.inStock ? '✅ In Stock' : '❌ Out of Stock'}`);
        });

        console.log('\n🔄 Refresh your browser to see the products with out-of-stock demo!');
        console.log('💡 The "Yummy Mummy Cup" will show as OUT OF STOCK');

        mongoose.connection.close();
        console.log('\nDatabase connection closed');
    } catch (error) {
        console.error('Error adding test products:', error);
        mongoose.connection.close();
    }
}

addTestProducts(); 