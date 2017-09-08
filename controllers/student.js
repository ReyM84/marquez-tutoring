const Student = require('../models/user');
const User = require('../models/user');



function postStudents(req, res) {
    User.findById(req.user._id, function(err, doc) {
        doc.students.push(req.body)
        doc.save(function(err, data) {
            if (err) return res.send(err);
            res.redirect('/students')        })
    })
        
};



function getStudents(req, res) {
    User.find({},function(err, student) {
        req.student = req.body.student
        if (err) {
            return res.send(err);
        }

        res.render('students/index', {student: student, user: req.user});

    });
};

function newStudent(req, res) {
    res.render('students/new', {user: req.user});
};

function getStudent(req, res) {
    Student.findById( function(err, student) {
        if (err)
         return res.send(err);

        res.json(student);
    });
};

function putStudent(req, res) {
    Student.update({ 
        userId: req.user._id, _id: req.params.student_id }, 
        { grade: req.body.grade, name: req.body.name, 
            parent: req.body.parent, 
            contact: req.body.contact }, 
            function(err, student) {
                if (err)
                 return res.send(err)

        res.json({ message: 'Student updated!'})
    });
};

function deleteStudent(req, res) {
    Student.remove({ userId: req.user._id, _id: req.params.beer_id }, function(err) {
        if (err)
            return res.send(err);

        res.json({ message: 'Student has been removed!'});
    });
};

module.exports = {
    getStudents,
    newStudent,
    postStudents,
    getStudent,
    putStudent,
    deleteStudent
}