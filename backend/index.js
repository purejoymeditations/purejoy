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


const app = express();
const port = 3001;


let isConnected = false;
// Connect to database
async function connectTOMongoDB(params) {
    connectDB();
}

app.use((req, res, next) => {
    if (!isConnected) {
        connectTOMongoDB();
    }
    next();
})


// app.use(cors());

// app.use(
//     cors({
//         origin: ["https://www.puregoldholisticwellbeing.com","https://purejoy-backend-qyla26f1t-leannes-projects-a9c5f7e8.vercel.app"], // ✅ frontend domain
//         credentials: true, // ✅ if using cookies or auth headers
//     })
// );

app.use(
    cors({
      origin: "*", // temporarily allow all
    })
  );

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



// const server = app.listen(port, () => {
//     console.log(`Backend server listening at http://localhost:${port}`);
// });

module.exports = app;

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
}); 