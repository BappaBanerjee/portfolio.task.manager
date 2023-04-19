const asyncHandler = require("express-async-handler");
const Project = require("../models/projectsModel");

const createProjects = asyncHandler(async (req, res) => {
    const { category, title, livelink, githublink, videolink } = req.body;
    console.log(category)
    if (!category || !title || !livelink || !githublink) {
        res.status(400);
        throw new Error('all fields are mandatory!');
    }
    const project = await Project.create({
        user_id: req.user.id,
        category,
        title,
        livelink,
        githublink,
        videolink
    });
    res.status(200).json(project);
})

const getAllProjects = asyncHandler(async (req, res) => {
    const projects = await Project.find({ user_id: req.user.id });
    console.log(projects)
    if (!projects) {
        res.status(400);
        throw new Error("no projects found");
    }
    res.status(200).json({ projects });
})

module.exports = {
    createProjects,
    getAllProjects
}