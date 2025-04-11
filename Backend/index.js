const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Connection/Database");

// Middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

const port = 4000;

const Contactschema = require("./Schema/Contactschema");
require("./Connection/Database");

// Connect to database
connectDB();

// API route with /api prefix
app.post("/api/contact", async (req, res) => {
  const data = req.body;
  try {
    const existingContact = await Contactschema.findOne({ email: data.email });
    if (existingContact) {
      return res.status(400).json({ message: "Email already exists, please change your email ID" });
    }

    const regdata = new Contactschema(data);
    await regdata.save();
    res.json({ message: "Done" });

  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((err) => err.message);
      res.status(400).json({ message: messages.join(", ") });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
});

// Base test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running @ http://localhost:${port}`);
});
