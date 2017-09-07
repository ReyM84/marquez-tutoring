var express = require('express');
var router = express.Router();
var studentController = require('../controllers/student');
var authController = require('../controllers/auth');
var Student = require('../models/student')


router.get('/', authController.isAuthenticated, studentController.getStudents);
router.get('/new', authController.isAuthenticated, studentController.newStudent);
router.post('/', authController.isAuthenticated, studentController.postStudents);
router.get('/students/:id/edit', authController.isAuthenticated, studentController.getStudent);
router.put('/:id', authController.isAuthenticated, studentController.putStudent);
router.delete('/:id', authController.isAuthenticated, studentController.deleteStudent);

    
module.exports = router;