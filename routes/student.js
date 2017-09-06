var express = require('express');
var router = express.Router();
var studentController = require('../controllers/student')
var authController = require('../controllers/auth')

router.route('/students')
    .post(authController.isAuthenticated, studentController.postStudents)
    .get(authController.isAuthenticated, studentController.getStudents);

router.route('/students/student_id')
    .get(authController.isAuthenticated, studentController.getStudent)
    .put(authController.isAuthenticated, studentController.putStudent)
    .delete(authController.isAuthenticated, studentController.deleteBeer);