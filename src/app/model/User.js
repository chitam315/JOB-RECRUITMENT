const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const User = new Schema({
    fullname: {type: String},
    email: {type: String},
    password: {type: String, minlength: 6}
})

module.exports = mongoose.model('User',User)