const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = 'mongodb+srv://sanketwalhekar83:9665998329@cluster0.sevwc.mongodb.net/hostel';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
    };

module.exports = connectDB;
