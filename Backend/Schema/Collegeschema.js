const mongoose = require("mongoose");

const Collegeschema = new mongoose.Schema({
  nirf: {
    type: Number,
    required: true,
  },
  collegeName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  accreditation: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  fees: {
    type: String,
    required: true,
  },
  exams: {
    type: String,
    required: true,
  },
  avgPackage: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Medical", "Management", "Engineering"],
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("college", Collegeschema);
