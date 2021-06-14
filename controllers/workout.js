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
router.delete('/:id', (req, res) => {
    Workout.findByIdAndDelete(req.params.id, (err, removedWorkout) => {
        res.redirect('/workouts');
    });
});

//Update

//Create
router.post('/', (req, res) => {
    Workout.create(req.body, (err, createdWorkout) => {
        res.redirect('/workouts');
    });
})

//Edit

//Show
router.get('/:id', (req, res) => {
    Workout.findById(req.params.id, (err, workout) => {
        res.render('workout/show', 
        {    workout });
    });
});

//Exports
module.exports = router; 