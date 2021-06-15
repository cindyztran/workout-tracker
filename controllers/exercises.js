//Dependencies
const router = require('express').Router();
const Exercise = require('../models/exercise');
const Workout = require('../models/workout');

//Define routes/controllers

//Mount controller on /exercises

//Index
router.get('/', (req, res) => {
    Exercise.find({}, (err, exercises) => {
        res.render('exercises/index', {
            exercises
        });
    });
});

//New
router.get('/new', (req, res) => {
    Workout.find({}, (err, workouts) => {
        res.render('exercises/new', {
            workouts, currentUser: req.session.currentUser
        });
    });
});

//Delete
router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect('/exercises');
    });
});

//Update
router.put('/:id', (req, res) => {
    Exercise.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}, (err, updatedExercise) => {
            res.redirect(`/exercises/${req.params.id}`);
    });
});


//Create
router.post('/', (req, res) => {
    Exercise.create(req.body, (err, exercise) => {
        res.redirect('/exercises');
    });
});

//Edit
router.get('/:id/edit', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/edit', {
            exercise
        });
    });
});


//Show
router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id).populate('createdFor').exec((err, exercise) => {
        console.log(exercise)
        res.render('exercises/show', { exercise, currentUser: req.session.currentUser });
    });
});

//Exports
module.exports = router; 