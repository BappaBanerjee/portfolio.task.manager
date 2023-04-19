const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
    {
        user_id: {
            type: String,
            required: [true, "user id is required"]
        },
        category: {
            type: String,
            required: [true, "category of the project is required"]
        },
        title: {
            type: String,
            required: [true, "please specify the title of the project"]
        },
        livelink: {
            type: String,
            required: [true, "please specify the livelink of the project"]
        },
        githublink: {
            type: String,
            required: [true, "please specify the livelink of the project"]
        },
        videolink: {
            type: String
        },
    },
    {
        timestamp: true
    }
)

module.exports = mongoose.model("Projects", projectSchema);