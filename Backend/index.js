const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Connection/Database");
const mongoose = require("mongoose");
 

// const mongoSanitize = require("express-mongo-sanitize");

// Middleware
app.use(bodyParser.json());
app.use(express.json());

// app.use(mongoSanitize());

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

// --------------------------- consoling data body from frontend -----------------------
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  if (req.method !== 'GET') {
    console.log('Request body:', req.body);
  }
  next();
});
 

// Authentication Routes ----------------
const authRoutes = require("./Routes/authRoutes");
app.use("/api/auth", authRoutes);

// Admin Routes --------------------
const adminRoutes = require('./Routes/adminRoutes');
app.use("/api/admin", adminRoutes);


// Colleges Routes ----------------
const collegeRoutes = require("./Routes/collegeRoutes");
app.use("/api/college", collegeRoutes);

// Blogs Routes ----------------
const blogRoutes = require("./Routes/blogRoutes");
app.use("/api/blog", blogRoutes); 


// Career Routes ----------------
const careerRoutes = require("./Routes/careerRoutes");
app.use("/api/career", careerRoutes);



// -----------------------------------------------------------------------------------------

const Contactschema = require("./Schema/Contactschema");
// const Franchiseschema = require("./Schema/Franchiseschema");
const franchisemodel = require("./Schema/Franchiseschema");
require("./Connection/Database");

// Connect to database
connectDB();

// ------------------------------- log for database connection status ----------------------------
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB:', mongoose.connection.db.databaseName);
  mongoose.connection.db.listCollections().toArray((err, names) => {
    if (err) {
      console.error('Error listing collections:', err);
      return;
    }
    console.log('Available collections:', names.map(n => n.name));
  });
});
// --------------------------------------------------------------------------------------------------



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


///////////------ contact list display ----------------

app.get("/api/contact", async (req, res) => {
  try {
    const contacts = await Contactschema.find(); // assuming you've imported your Contact model
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

////////////---------------


app.post("/api/franchise", async (req, res) => {


  console.log("---------- FRANCHISE REQUEST START ----------");
  console.log("Headers:", req.headers);
  console.log("Body:", req.body); 
  console.log("Request IP:", req.ip);
  console.log("Request Host:", req.get('host'));

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

//////////// ----------- franchise data display ----------------

app.get("/api/franchise", async (req, res) => {
  try {
    const  franchisedata = await  franchisemodel.find(); 
    res.json(franchisedata);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});



// Health check--------------------------------------------------------------------------
// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });
app.get('/api/healthcheck', (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    franchiseModel: !!mongoose.models.franchise || !!mongoose.models.Franchise,
    env: process.env.NODE_ENV
  });
});
// -------------------------------------------------------------------------------------------

// Error handling
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
