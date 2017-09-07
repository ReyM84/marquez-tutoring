const User = require('../models/user');
var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

function postUser(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });
    var header = {'User-Agent': 'admin123'};

    user.save(function(err) {
        if (err)
            return res.send(err);
    })
            res.render('index')
};

function getUsers(req, res) {
    res.send('User all')
}; 

function newUser(req, res){
    res.render('users/new')
}


module.exports = {
    postUser,
    getUsers,
    newUser
}