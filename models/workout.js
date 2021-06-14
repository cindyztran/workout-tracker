//Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Set up Schema
const workoutSchema = new Schema({
    name: String
}, { timestamps: true});

//Compile Schema into a model
const Workout = mongoose.model('Workout', workoutSchema);

//Export model
module.exports = Workout;
