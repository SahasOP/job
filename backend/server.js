const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const jobRoutes = require('./routes/jobs');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Replace with your frontend URL
}));
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Job Portal API is running');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(5000, () => {
      console.log(`Server running on port 5000`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
