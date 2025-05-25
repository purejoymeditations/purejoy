const express = require('express');
const cors = require('cors'); // Import cors
const app = express();
const port = 3001; // We'll use port 3001 for the backend

// Enable CORS for all routes
app.use(cors()); // Use cors middleware

app.get('/', (req, res) => {
    res.send('Hello from the Purejoy Backend!');
});

// New API endpoint
app.get('/api/test', (req, res) => {
    res.json({ message: 'Connection successful! Data from backend.' });
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
}); 