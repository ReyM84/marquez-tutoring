var express = require('express');
var router = express.Router();
var studentController = require('../controllers/student');
var passport = require('passport');


router.get('/', studentController.getStudents);
router.get('/new', studentController.newStudent);
router.post('/', studentController.postStudents);
router.get('/students/:id/edit', studentController.getStudent);
router.put('/:id', studentController.putStudent);
router.delete('/:id', studentController.deleteStudent);

    
module.exports = router;