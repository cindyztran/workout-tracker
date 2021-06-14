//Dependencies
const router = require('express').Router();

const Workout = require('../models/workout');
//Define routes/controllers

//Mount controller on /workout

//Index
router.get('/', (req, res) => {

    res.render('workout/index');
});

//New
router.get('/new', (req, res) => {
    res.render('workout/new');
});

//Delete

//Update

//Create

//Edit

//Show

//Exports
module.exports = router; 