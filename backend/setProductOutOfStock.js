const mongoose = require('mongoose');
const Product = require('./models/Product');

// Database connection
mongoose.connect('mongodb://localhost:27017/purejoy');

async function setProductOutOfStock() {
    try {
        // Wait for connection
        await mongoose.connection;
        console.log('Connected to database');

        // First, let's see all products with more details
        const allProducts = await Product.find({});
        console.log(`Found ${allProducts.length} products in database:`);

        if (allProducts.length === 0) {
            console.log('No products found in database');
            mongoose.connection.close();
            return;
        }

        allProducts.forEach((product, index) => {
            console.log(`${index + 1}. "${product.name}" - ${product.inStock !== false ? 'In Stock' : 'Out of Stock'} - Category: ${product.category}`);
        });

        // Try to find High Vibes product with flexible matching
        let productToUpdate = allProducts.find(p =>
            p.name.toLowerCase().includes('high') && p.name.toLowerCase().includes('vibes')
        );

        if (!productToUpdate) {
            // If not found, take the first aromatherapy product
            productToUpdate = allProducts.find(p =>
                p.category && p.category.toLowerCase().includes('aromatherapy')
            );
        }

        if (!productToUpdate) {
            // If still not found, take any product
            productToUpdate = allProducts[0];
        }

        if (productToUpdate) {
            console.log(`\n🎯 Setting "${productToUpdate.name}" as OUT OF STOCK...`);

            const result = await Product.findOneAndUpdate(
                { _id: productToUpdate._id },
                { $set: { inStock: false } },
                { new: true }
            );

            console.log(`\n✅ Successfully set "${result.name}" as OUT OF STOCK`);
            console.log(`Product ID: ${result._id}`);
            console.log(`Category: ${result.category}`);
            console.log(`Price: A$${result.price}`);
            console.log(`Weight/Volume: ${result.weight || result.volume || 'N/A'}`);
            console.log(`Stock Status: ${result.inStock ? 'In Stock' : 'Out of Stock'}`);
            console.log(`\n🔄 Refresh your browser to see the out-of-stock appearance!`);
            console.log(`💡 Look for "${result.name}" - it will show:`);
            console.log(`   • Price in dark gray: A$${result.price}`);
            console.log(`   • "Out of Stock" in red text`);
            console.log(`   • Gray "Unavailable" button (disabled)`);
        }

        mongoose.connection.close();
        console.log('\nDatabase connection closed');
    } catch (error) {
        console.error('Error updating product:', error);
        mongoose.connection.close();
    }
}

setProductOutOfStock(); 