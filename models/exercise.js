//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Set up Schema
const exerciseSchema = new Schema ({
    name: String,
    sets: Number,
    reps: Number,
    weight: Number,

}, { timestamps: true});

//Compile Schema into a model
const Exercise = mongoose.model('Exercise', exerciseSchema);

//Export model
module.exports = Exercise; 