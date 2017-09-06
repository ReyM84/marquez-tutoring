var express = require('express');
var router = express.Router();
var userController = require('../controllers/user')
var authController = require('../controllers/auth')

router.route('/users')
    .post(userController.postUsers)
    .get(authController.isAuthenticated, userController.getUsers);

module.exports = router;