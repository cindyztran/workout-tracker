//Dependencies
const router = require('express').Router();

const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

//Define routes/controllers

//Mount controller on /workout

//Index
router.get('/', (req, res) => {
    Workout.find({}, (err, foundWorkouts) => {
        res.render('workouts/index',
        { workouts: foundWorkouts });    
    });

});

//New
router.get('/new', (req, res) => {
    res.render('workouts/new');
});

//Delete
router.delete('/:id', (req, res) => {
    Workout.findByIdAndDelete(req.params.id, (err, removedWorkout) => {
        res.redirect('/workouts');
    });
});


//Update
router.put('/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true}, (err, updatedWorkout) => {
            res.redirect(`/workouts/${req.params.id}`);
    });
});


//Create
router.post('/', (req, res) => {
    Workout.create(req.body, (err, createdWorkout) => {
        res.redirect('/workouts');
    });
})

//Edit
router.get('/:id/edit', (req, res) => {
    Workout.findById(req.params.id, (err, workout) => {
        res.render('workouts/edit', {
            workout
        });
    });
});



//Show
router.get('/:id', (req, res) => {
    Workout.findById(req.params.id, (err, workout) => {
        Exercise.find({ createdFor: workout._id }, (err, exercises) => {
            res.render('workouts/show', 
            {   workout, exercises });
        });
    });
});

//Exports
module.exports = router; 