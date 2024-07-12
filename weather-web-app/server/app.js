const express = require('express');
const connectDB = require('./config/db');
const { errorHandler } = require('./utils/errorHandler');
require('dotenv').config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/locationRoutes'));

// Error handler middleware
app.use(errorHandler);

module.exports = app;
