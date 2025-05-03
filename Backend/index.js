const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Connection/Database");

// Middleware
app.use(bodyParser.json());
app.use(express.json());
// const cors = require("cors");

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? process.env.FRONTEND_DEV_URL
        : process.env.FRONTEND_PROD_URLS.split(","),
    credentials: true,
  })
);

const Contactschema = require("./Schema/Contactschema");
// const Franchiseschema = require("./Schema/Franchiseschema");
const franchisemodel = require("./Schema/Franchiseschema");
require("./Connection/Database");

// Connect to database
connectDB();

// API Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      percentage,
      course,
      appearedInExam,
      examName,
      examPercentage,
    } = req.body;

    // Validation
    if (!name || !email || !mobile || !percentage) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingContact = await Contactschema.findOne({ email });
    if (existingContact) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newContact = new Contactschema({
      name,
      email,
      mobile,
      percentage,
      course,
      appearedInExam,
      ...(appearedInExam === "yes" && { examName, examPercentage }), // Only include if appearedInExam is 'yes'
    });
    await newContact.save();

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    // console.error("Server error:", error);
    // res.status(500).json({ message: "Internal server error" });
    // res.send(error)
    const messages = Object.values(error.errors).map((err) => err.message);
    console.log("Validation Errors:", messages);
    res.status(400).json({ message: messages.join(", ") });
  }
});


app.post("/api/franchise", async (req, res) => {
  try {
    const { orgizationname, mobile,  contactperson, email, description, websiteurl } = req.body;
    //  console.log(req.body)
    if (!orgizationname || !mobile || !contactperson || !email || !description || !websiteurl) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingFranchise = await franchisemodel.findOne({ 
      $or: [{ websiteurl }, { email }] 
    });
    
    if (existingFranchise) {
      let duplicateField = existingFranchise.websiteurl === websiteurl ? "Website URL" : "Email";
      return res.status(400).json({ message: `${duplicateField} already exists. Please enter a different one.` });
    }


    const newfranchise = new franchisemodel({
      orgizationname,
      mobile,
      contactperson,
      email,
      description,
      websiteurl,
       
    });
    await  newfranchise.save();

    res.status(201).json({ message: "successful!" });
  } catch (error) {
    console.error("Server error:", error);
    const messages = Object.values(error.errors).map((err) => err.message);
    console.log("Validation Errors:", messages);
    res.status(400).json({ message: messages.join(", ") });
    // res.send(error)
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
