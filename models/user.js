//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Set up User Schema
const userSchema = Schema({
    email: { type: String, unique: true, require: true },
    password: { type: String, required: true }
});

//Compile User Schema into a model
const User = mongoose.model('User', userSchema);


//Export User model
module.exports = User;

