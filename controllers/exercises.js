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


//Update



//Create
router.post('/', (req, res) => {
    Exercise.create(req.body, (err, exercise) => {
        res.redirect('/exercises');
    });
});

//Edit



//Show
router.get('/:id', (req, res) => {
    Exercise.findById(req.params.id, (err, exercise) => {
        res.render('exercises/show', { exercise });
    });
});

//Exports
module.exports = router; 