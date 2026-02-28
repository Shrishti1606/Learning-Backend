require("dotenv").config();
const mongoose = require('mongoose');

const connectDB = async () => {

    try{

        await mongoose.connect(process.env.MONGOOSE_URI);
        console.log("Database connected successfully");

    } catch (error) {

        console.error("Database connection error:", error);

    }

}

module.exports = connectDB;