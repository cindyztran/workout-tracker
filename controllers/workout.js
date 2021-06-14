//Dependencies
const router = require('express').Router();

const Workout = require('../models/workout');
//Define routes/controllers

//Mount controller on /workout

//Index
router.get('/', (req, res) => {
    Workout.find({}, (err, foundWorkouts) => {
        res.render('workout/index',
        { workouts: foundWorkouts });    
    });

});

//New
router.get('/new', (req, res) => {
    res.render('workout/new');
});

//Delete

//Update

//Create
router.post('/', (req, res) => {
    Workout.create(req.body, (err, createdWorkout) => {
        res.redirect('/workouts');
    });
})

//Edit

//Show

//Exports
module.exports = router; 