const mongoose = require("mongoose");

const franchisedata = new mongoose.Schema({
    orgizationname: {
        type: String,
        required: [true, "Name is required"], // Field is mandatory
        minlength: [3, "Name should have at least 3 characters"],
    },
    mobile: {
        type: String,
        required: [true, "Mobile number is required"],
        match: [/^\d{10}$/, "Mobile number must be 10 digits"],
    },
    contactperson: {
        type: String,
        required: [true, "Name is required"], // Field is mandatory
        minlength: [3, "Name should have at least 3 characters"],
    },
    email: {
        type: String,
        require: [true, "Email is required"],
        unique: true,
        match: [
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Please enter a valid email address",
        ], // Regex for email validation
    },
   
        
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [3, "Description should have at least 3 characters"],
        maxlength: [150, "Description should not exceed 100 characters"],
    },  
    websiteurl: {
        type: String,
        require: true,
        unique: true,
        match: [
            /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
            "Please enter a valid website URL",
        ], // Regex for email validation
    },
});

const franchisemodel = new mongoose.model("Franchise", franchisedata);  

module.exports = franchisemodel;
    