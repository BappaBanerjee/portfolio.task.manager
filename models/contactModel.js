const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name"]
    },
    email: {
        type: String,
        required: [true, "please provide your email"]
    },
    subject: {
        type: String
    },
    message: {
        type: String,
        required: [true, "please leave a short message"]
    }
})

module.exports = mongoose.model("Contact")