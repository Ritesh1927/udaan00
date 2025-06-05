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

module.exports = router;