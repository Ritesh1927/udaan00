const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Connection/Database");

// Middleware
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());


const port = 4000;


const Contactschema = require("./Schema/Contactschema");
require("./Connection/Database");

//connect to database
connectDB();



app.post("/contact", async (req, res) => {
  const data = req.body;
  // console.log("Received Data in Backend:", req.body);
  try {
    const regdata = new Contactschema(data);
    await regdata.save();
    res.json({ message: "Done" });
   
  } catch (error) {
    // console.error("Error Details:", error);
    if (error.name === "ValidationError") {
      // Extract error messages from validation errors
      const messages = Object.values(error.errors).map((err) => err.message);
      // console.log("Validation Errors:", messages);
      res.status(400).json({ message: messages.join(", ") }); // Send specific error messages
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }

  
});

 
 
// API Routes
app.get('/', (req, res) => {
   res.send('Backend is running!');
});




// Start server
app.listen(port,() => {
    console.log(`server is running @ ${port}`);
});
