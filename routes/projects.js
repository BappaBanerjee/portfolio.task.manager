var express = require('express');
const { createProjects, getAllProjects } = require('../controllers/projectsController');
const validateToken = require('../middleware/accessTokenHandler');
var router = express.Router();

/* GET home page. */
router.use(validateToken);
router.route('/').post(createProjects);
router.route('/all').get(getAllProjects);

module.exports = router;
