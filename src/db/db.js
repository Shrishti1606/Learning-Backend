const mongoose = require("mongoose");

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://userP-01:hI1yrG1FiATYqINa@backened-project-01.dha2ixz.mongodb.net/halley")

    console.log("connected to db")

}

module.exports = connectDB;