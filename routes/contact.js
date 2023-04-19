var express = require('express');
const { mailer } = require('../controllers/contactController');
var router = express.Router();

/* GET home page. */
router.route('/').post(mailer);

module.exports = router;
