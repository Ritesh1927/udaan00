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
    // false : for production
    // true : for development
    origin: true
      ? ["http://localhost:3000"]
      : [
          "https://udaan360.in",
          "https://www.udaan360.in",
          "https://udaan360.com",
          "https://www.udaan360.com",
        ],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allows cookies or credentials
  })
);

const Contactschema = require("./Schema/Contactschema");
require("./Connection/Database");

// Connect to database
connectDB();

// API Endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, mobile, percentage, course } = req.body;

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
