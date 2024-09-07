const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/coldstudy")
    .then(() => {
        console.log("Connected to MongoDB...");
    })
    .catch((err) => {
        console.log("failed to connect to MongoDB");
    });

const newSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
});

const collection = mongoose.model('collection', newSchema);

module.exports = collection;