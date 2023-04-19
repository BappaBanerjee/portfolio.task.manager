var express = require('express');
const { userLogin, getUser } = require('../controllers/usersController');
var router = express.Router();
const validateToken = require('../middleware/accessTokenHandler');


/* GET home page. */
router.route('/login').post(userLogin);
router.get('/test', validateToken, getUser);

module.exports = router;
