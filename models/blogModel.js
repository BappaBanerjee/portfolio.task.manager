const mongoose = require("mongoose");

const blogSchecma = mongoose.Schema(
    {
        user_id: {
            type: String,
            required: [true, "user id is required"]
        },
        title: {
            type: String,
            required: [true, "blog title is required"]
        },
        category: {
            type: String,
            required: [true, "category is required"]
        },
        author: {
            type: String,
            required: [true, "author is required"]
        }
    },
    {
        timestamp: true,
    }
)

module.exports = mongoose.model("Blogs", blogSchecma);