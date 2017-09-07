var express = require('express');
var router = express.Router();
var userController = require('../controllers/user');
var User = require('../models/user');

router.get('/', userController.getUsers);
router.get('/new', userController.newUser);
router.post('/', userController.postUser);

module.exports = router;