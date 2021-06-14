//Dependencies
const router = require('express').Router();

//Define routes/controllers

//Mount controller on /exercisesplit

//Index
router.get('/', (req, res) => {
    res.render('exercisesplit/index');
});

//New
router.get('/new', (req, res) => {
    res.render('exercisesplit/new');
});

//Exports
module.exports = router; 