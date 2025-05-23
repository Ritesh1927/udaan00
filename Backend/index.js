const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Connection/Database");
const mongoose = require("mongoose");

// Middleware
app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "development"
        ? process.env.FRONTEND_DEV_URL
        : process.env.FRONTEND_PROD_URLS.split(","),
    credentials: true,
  })
);

// Request logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  if (req.method !== 'GET') {
    console.log('Request body:', req.body);
  }
  next();
});


const authRoutes = require("./Routes/authRoutes");

app.use("/api/auth", authRoutes);

// -----------------------------------------------------------------------------------------

// Database connection
require("./Connection/Database");
connectDB();

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB:', mongoose.connection.db.databaseName);
  mongoose.connection.db.listCollections().toArray((err, names) => {
    if (err) console.error('Error listing collections:', err);
    else console.log('Available collections:', names.map(n => n.name));
  });
});

// error event listener
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Import routes and middleware
const Contactschema = require("./Schema/Contactschema");
const franchisemodel = require("./Schema/Franchiseschema");
const authRouter = require('./routes/auth');
const { protect } = require('./middlewares/auth');

// Mount authentication routes
app.use('/api/auth', authRouter);

// Existing API endpoints (unchanged)
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, mobile, percentage, course, appearedInExam, examName, examPercentage } = req.body;
    
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
      ...(appearedInExam === "yes" && { examName, examPercentage }),
    });
    await newContact.save();

    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    const messages = Object.values(error.errors).map((err) => err.message);
    console.log("Validation Errors:", messages);
    res.status(400).json({ message: messages.join(", ") });
  }
});

app.post("/api/franchise", async (req, res) => {
  try {
    const { orgizationname, mobile, contactperson, email, description, websiteurl } = req.body;
    
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
    await newfranchise.save();

    res.status(201).json({ message: "successful!" });
  } catch (error) {
    console.error("Server error:", error);
    const messages = Object.values(error.errors).map((err) => err.message);
    console.log("Validation Errors:", messages);
    res.status(400).json({ message: messages.join(", ") });
  }
});

// Protected route example
app.get('/api/me', protect, (req, res) => {
  res.status(200).json(req.user);
});

// Health check
app.get('/api/healthcheck', (req, res) => {
  res.json({
    status: 'ok',
    database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
    franchiseModel: !!mongoose.models.franchise || !!mongoose.models.Franchise,
    env: process.env.NODE_ENV
  });
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});