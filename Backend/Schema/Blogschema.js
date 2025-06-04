const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    coursename: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("blog", blogSchema);