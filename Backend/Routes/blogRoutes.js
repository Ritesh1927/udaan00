const express = require("express");
const router = express.Router();
const Blog = require("../Schema/Blogschema");

// Add Blog
router.post("/add", async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.json({ message: "Blog added successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Blogs
router.get("/list", async (req, res) => {
    const blogs = await Blog.find();
    res.json(blogs);
});


// update Blog
router.put("/update/:id", async (req, res) => {
    await Blog.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Blog updated successfully!" });
});

// Delete Blog
router.delete("/delete/:id", async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully!" });
});

module.exports = router;