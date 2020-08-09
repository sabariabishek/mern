const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Project = new Schema(
    {
        id: { type: String, required: true },
        projectName: { type: String, required: true },
        type: { type: String, required: true },
        year: { type: String, required: true },
        tags: { type: [String], required: true },
        image: { type: String, required: true },
        description: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('projects', Project)