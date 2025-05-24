const express = require("express");
const College = require("../Schema/Collegeschema");
const router = express.Router();

// Add College
router.post("/add", async (req, res) => {
    try {
        const college = new College(req.body);
        await college.save();
        res.json({ message: "College added successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Colleges
router.get("/list", async (req, res) => {
    const colleges = await College.find();
    res.json(colleges);
});

// Update College
router.put("/update/:id", async (req, res) => {
    await College.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "College updated successfully!" });
});

// Delete College
router.delete("/delete/:id", async (req, res) => {
    await College.findByIdAndDelete(req.params.id);
    res.json({ message: "College deleted successfully!" });
});

module.exports = router;