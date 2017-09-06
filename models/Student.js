var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    name: String,
    grade: Number,
    parent: String,
    contact: String,
    userId: String,
    comment: String
});

module.exports = mongoose.model('Student', StudentSchema);

