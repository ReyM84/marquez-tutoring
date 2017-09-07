var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: String,
    grade: Number,
    parent: String,
    contact: String,
    userId: String,
});

var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatar: String,
  students: [studentSchema],
  googleId: String,
  created: { type: Date, defaut: Date.now }
});

module.exports = mongoose.model('User', userSchema);