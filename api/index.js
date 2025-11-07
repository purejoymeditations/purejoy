const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Route files
const authRoutes = require('./routes/auth');
const availabilityRoutes = require('./routes/availabilityRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const productRoutes = require('./routes/productRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Mount routers
app.use('/api/auth', authRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/products', productRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/admin', adminRoutes);


app.get('/', (req, res) => {
    res.send('Hello from the Purejoy Backend!');
});

//react
// 🧩 Serve Frontend (after build)
const frontendPath = path.join(__dirname, "./frontend-dist");
app.use(express.static(frontendPath));

// 🧠 Catch-all route: send React index.html for non-API routes
app.get("/*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});
// Test DB connection route (can be removed later or kept for diagnostics)
app.get('/api/db-test', async (req, res) => {
    const mongoose = require('mongoose');
    try {
        if (mongoose.connection.readyState === 1) { // 1 means connected
            const adminDb = mongoose.connection.db.admin();
            const dbList = await adminDb.listDatabases();
            res.json({
                message: 'Database connection successful!',
                databases: dbList.databases.map(db => db.name)
            });
        } else {
            res.status(500).json({ message: 'Mongoose not connected' });
        }
    } catch (err) {
        console.error('Error fetching database list:', err);
        res.status(500).json({ message: 'Error connecting to database', error: err.message });
    }
});



const server = app.listen(PORT, () => {
    console.log(`Backend server listening at http://localhost:${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
}); 