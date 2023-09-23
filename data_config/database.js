// config/database.js

const mongoose = require('mongoose');

// Replace 'your_database_url' with your actual database URL
const dbURL = 'mongodb://localhost/organic_direct';

// Connect to MongoDB
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose.connection;

