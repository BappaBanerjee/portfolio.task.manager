const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");
const createBlog = asyncHandler(async (req, res) => {
    const { title, category, author } = req.body;
    if (!title || !category || !author) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const blog = await Blog.create({
        user_id: req.user.id,
        title,
        category,
        author
    })
    res.status(200).json({ blog });
})

const getBlogs = asyncHandler(async (req, res) => {
    const blog = await Blog.find({ user_id: req.user.id });
    if (!blog) {
        res.status(400);
        throw new Error("No blogs found");
    }
    res.status(200).json({ blog });
})

const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
        res.status(400);
        throw new Error("No blogs found");
    }

    if (blog.user_id != req.user.id) {
        res.status(401);
        throw new Error("User doen't have permission to delete the other user contact details");
    }

    const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ deleteBlog });

})

module.exports = {
    createBlog,
    getBlogs,
    deleteBlog
}