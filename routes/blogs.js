var express = require('express');
const { createBlog, getBlogs, deleteBlog } = require('../controllers/blogController');
var router = express.Router();
const validateToken = require('../middleware/accessTokenHandler');

/* GET home page. */
router.use(validateToken);
router.route('/').post(createBlog).get(getBlogs);
router.route('/:id').delete(deleteBlog);

module.exports = router;
