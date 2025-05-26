require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Import Mongoose
const Product = require('./models/Product'); // Import Product model
const Service = require('./models/Service'); // Import Service model

const app = express();
const port = 3001;

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined. Make sure you have a .env file with the MONGODB_URI variable.');
    process.exit(1);
}

// Function to connect to DB and start the server
async function startServer() {
    try {
        console.log("Attempting to connect to MongoDB Atlas using Mongoose...");
        await mongoose.connect(MONGODB_URI); // Mongoose handles connection options from the URI
        console.log("Successfully connected to MongoDB Atlas via Mongoose!");

        app.use(cors());
        app.use(express.json()); // Middleware to parse JSON bodies

        app.get('/', (req, res) => {
            res.send('Hello from the Purejoy Backend!');
        });

        app.get('/api/test', (req, res) => {
            res.json({ message: 'Connection successful! Data from backend.' });
        });

        // GET /api/products - Retrieve all products
        app.get('/api/products', async (req, res) => {
            try {
                const products = await Product.find();
                res.json(products);
            } catch (err) {
                console.error('Error fetching products:', err);
                res.status(500).json({ message: 'Error fetching products', error: err.message });
            }
        });

        // POST /api/products - Add a new product
        app.post('/api/products', async (req, res) => {
            try {
                const { name, description, price, category } = req.body;
                if (!name || !description || price === undefined) {
                    return res.status(400).json({ message: 'Missing required fields: name, description, price for product' });
                }
                const newProduct = new Product({ name, description, price, category });
                await newProduct.save();
                res.status(201).json(newProduct);
            } catch (err) {
                console.error('Error adding product:', err);
                if (err.name === 'ValidationError') {
                    return res.status(400).json({ message: 'Validation Error', errors: err.errors });
                }
                res.status(500).json({ message: 'Error adding product', error: err.message });
            }
        });

        // GET /api/services - Retrieve all services
        app.get('/api/services', async (req, res) => {
            try {
                const services = await Service.find();
                res.json(services);
            } catch (err) {
                console.error('Error fetching services:', err);
                res.status(500).json({ message: 'Error fetching services', error: err.message });
            }
        });

        // POST /api/services - Add a new service
        app.post('/api/services', async (req, res) => {
            try {
                const { name, description, price, duration, category } = req.body;
                if (!name || !description || price === undefined || duration === undefined || !category) {
                    return res.status(400).json({ message: 'Missing required fields: name, description, price, duration, category for service' });
                }
                const newService = new Service({ name, description, price, duration, category });
                await newService.save();
                res.status(201).json(newService);
            } catch (err) {
                console.error('Error adding service:', err);
                if (err.name === 'ValidationError') {
                    return res.status(400).json({ message: 'Validation Error', errors: err.errors });
                }
                res.status(500).json({ message: 'Error adding service', error: err.message });
            }
        });

        // Test DB connection route (can be removed later or kept for diagnostics)
        app.get('/api/db-test', async (req, res) => {
            try {
                if (mongoose.connection.readyState === 1) { // 1 means connected
                    const adminDb = mongoose.connection.db.admin();
                    const dbList = await adminDb.listDatabases();
                    res.json({
                        message: 'Database connection successful (via Mongoose)!',
                        databases: dbList.databases.map(db => db.name)
                    });
                } else {
                    res.status(500).json({ message: 'Mongoose not connected' });
                }
            } catch (err) {
                console.error('Error fetching database list (Mongoose):', err);
                res.status(500).json({ message: 'Error connecting to database', error: err.message });
            }
        });

        app.listen(port, () => {
            console.log(`Backend server listening at http://localhost:${port}`);
        });

    } catch (err) {
        console.error("Failed to connect to MongoDB Atlas or an error occurred during server setup. Server not started.", err);
        process.exit(1);
    }
}

startServer();

// Graceful shutdown for Mongoose
process.on('SIGINT', async () => {
    console.log('SIGINT signal received: closing MongoDB connection via Mongoose');
    await mongoose.connection.close();
    console.log('Mongoose connection closed.');
    process.exit(0);
}); 