const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`MongoDB Connected: ${mongoose.connection.host}`);

    } catch (err) {
        console.error("Database Connection Error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;