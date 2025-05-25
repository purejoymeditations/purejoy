require('dotenv').config(); // Load .env file
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb'); // Import MongoClient

const app = express();
const port = 3001;

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined. Make sure you have a .env file with the MONGODB_URI variable.');
    process.exit(1);
}

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Function to start the server AFTER connecting to DB
async function startServer() {
    try {
        console.log("Attempting to connect to MongoDB Atlas...");
        await client.connect();
        console.log("Successfully connected to client. Attempting to ping admin database...");
        await client.db("admin").command({ ping: 1 });
        console.log("Successfully pinged admin database. MongoDB Atlas connection established!");

        // Configure middleware and routes AFTER DB connection is successful
        app.use(cors());
        app.use(express.json());

        app.get('/', (req, res) => {
            res.send('Hello from the Purejoy Backend!');
        });

        app.get('/api/test', (req, res) => {
            res.json({ message: 'Connection successful! Data from backend.' });
        });

        app.get('/api/db-test', async (req, res) => {
            try {
                const dbList = await client.db().admin().listDatabases();
                res.json({
                    message: 'Database connection successful!',
                    databases: dbList.databases.map(db => db.name)
                });
            } catch (err) {
                console.error('Error fetching database list:', err);
                res.status(500).json({ message: 'Error listing databases', error: err.message });
            }
        });

        // Start listening for requests
        app.listen(port, () => {
            console.log(`Backend server listening at http://localhost:${port}`);
        });

    } catch (err) {
        console.error("Failed to connect to MongoDB Atlas or an error occurred during server setup. Server not started.", err);
        process.exit(1);
    }
}

// Call the function to connect to DB and then start the server
startServer();

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('SIGINT signal received: closing MongoDB connection');
    if (client) { // Check if client is defined
        await client.close();
        console.log('MongoDB connection closed.');
    }
    process.exit(0);
}); 