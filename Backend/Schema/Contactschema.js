const mongoose = require('mongoose');


const contactdata = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Name is required"], // Field is mandatory
        minlength: [3, "Name should have at least 3 characters"],
    
    },
    mobile:{
        type:String,
        required: [true, "Mobile number is required"],
        match: [/^\d{10}$/, "Mobile number must be 10 digits"],
    },
    email:{
        type:String,
        require:[true, "Email is required"],
        unique: true,
        match: [
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address",
         ], // Regex for email validation

    },
    percentage:{
        type:String,
        required: [true, "12th percentage is required"],
        min: [0, "Percentage must be at least 0"],
        max: [100, "Percentage cannot exceed 100"],

    },
    course:{
        type:String,
        require:true,
    },
    
});

const contactmodel = new mongoose.model('contact',contactdata);

module.exports = contactmodel;
