const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    status : String
})

const Studentdb = mongoose.model('studentdb', schema);

module.exports = Studentdb;