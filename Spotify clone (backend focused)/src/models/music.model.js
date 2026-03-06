const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    uri: {
        type: String, 
        required: true,
    },
    title: {
        type: String,
        requried: true,                      
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
    }
})    