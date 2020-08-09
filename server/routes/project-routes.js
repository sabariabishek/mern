const express = require('express');
const ProjectController = require('../controller/project-controller');
const router = express.Router();

router.get('/projects', ProjectController.getProject)

module.exports = router