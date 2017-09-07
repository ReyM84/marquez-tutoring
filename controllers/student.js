const Student = require('../models/user');



function postStudents(req, res) {
    var student = new Student();

    student.name = req.body.name;
    student.grade = req.body.grade;
    student.parent = req.body.parent;
    student.contact = req.body.contact;
    student.userId = req.user._id;

    student.save(function(err) {
        if (err)
           return res.send(err);

        res.json({message: 'New student has been added', data: student });
    });
};



function getStudents(req, res) {
    Student.find({ userId: req.user_id }, function(err, students) {
        if (err) {
            return res.send(err);
        }

        res.render('students/index', {student: students});

    });
};

function newStudent(req, res) {
    res.render('students/new', {user: req.user});
};

function getStudent(req, res) {
    Student.findById({ userId: req.user._id, _id: req.params.beer_id }, function(err, student) {
        if (err)
         return res.send(err);

        res.json(student);
    });
};

function putStudent(req, res) {
    Student.update({ 
        userId: req.user._id, _id: req.params.beer_id }, 
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