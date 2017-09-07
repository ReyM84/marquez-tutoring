var mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    name: String,
    grade: Number,
    parent: String,
    contact: String,
    userId: String,
});

module.exports = mongoose.model('Student', studentSchema);

