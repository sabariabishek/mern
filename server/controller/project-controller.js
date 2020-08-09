const Project = require('../model/project-models')


getProject = async (req, res) => {
    await Project.find({}, (err, projects) => {
        // if (err) {
        //     return res.status(400).json({ success: false, error: err })
        // }
        // if (!movies.length) {
        //     return res
        //         .status(404)
        //         .json({ success: false, error: `Movie not found` })
        // }
        return res.status(200).json({ success: true, data: projects })
    }).catch(err => console.log(err))
}

module.exports = {
    getProject,
}