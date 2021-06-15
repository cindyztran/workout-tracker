//Dependencies
const router = require('express').Router();
const Exercise = require('../models/exercise');

//Define routes/controllers


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
    res.render('exercises/new');
});

//Delete
router.delete('/:id', (req, res) => {
    Exercise.findByIdAndDelete(req.params.id, (err, exercise) => {
        res.redirect('/exercises');
    });
});

//Update



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
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/show', { exercise });
    });
});

//Exports
module.exports = router; 