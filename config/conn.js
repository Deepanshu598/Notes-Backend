const mongoose = require('mongoose');

require('dotenv').config();


const mongoDbUrl = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(mongoDbUrl)
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB;