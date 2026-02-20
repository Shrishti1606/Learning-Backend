const mongoose = require('mongoose');

const connectDB = async () => {

    await mongoose.connect("mongodb+srv://userP-01:hI1yrG1FiATYqINa@backened-project-01.dha2ixz.mongodb.net/project-1")

    console.log('connected to DB')

}

module.exports = connectDB;