const mongoose = require("mongoose");

const contactdata = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"], // Field is mandatory
    minlength: [3, "Name should have at least 3 characters"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    match: [/^\d{10}$/, "Mobile number must be 10 digits"],
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
  query: {
    type: String,
    required: [true, "Query is required"],
    minlength: [5, "Query must be at least 5 characters long"],
    maxlength: [500, "Query cannot exceed 500 characters"],
  },

  // query: {
  //   type: String,
  //   required: [true, "12th percentage is required"],
  //   match: [
  //     /^(100(\.0{1,2})?|(\d{1,2})(\.\d{1,2})?)$/,
  //     "please eneter a valid percentage",
  //   ],
  // },
  // course: {
  //   type: String,
  //   require: true,
  // },
  // appearedInExam: {
  //   type: String,
  //   required: [true, "Please specify if you appeared in any competitive exam"],
  //   enum: {
  //     values: ['yes', 'no'],
  //     message: 'Appeared in exam must be either "yes" or "no"'
  //   }
  // },
  // examName: {
  //   type: String,
  //   required: function () {
  //     return this.appearedInExam === 'yes';
  //   },
  //   minlength: [2, "Exam name should have at least 2 characters"],
  // },
  // examPercentage: {
  //   type: String,
  //   required: function () {
  //     return this.appearedInExam === 'yes';
  //   },
  //   match: [
  //     /^(100(\.0{1,2})?|(\d{1,2})(\.\d{1,2})?)$/,
  //     "please enter a valid percentage",
  //   ],
  //   validate: {
  //     validator: function (value) {
  //       if (this.appearedInExam === 'yes') {
  //         return parseFloat(value) >= 0 && parseFloat(value) <= 100;
  //       }
  //       return true;
  //     },
  //     message: 'Percentage must be between 0 and 100'
  //   }
  // }
});

const contactmodel = new mongoose.model("contact", contactdata);

module.exports = contactmodel;