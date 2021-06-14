//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Set up Schema
const splitSchema = new Schema({
    name: String
}, { timestamps: true});

//Compile Schema into a model
const Split = mongoose.model('Split', splitSchema);

//Export model
module.exports = Split;
