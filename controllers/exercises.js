//Dependencies
const router = require('express').Router();


//Define routes/controllers


//Index
router.get('/', (req, res) => {
    res.render('exercises/index')
});

//New
router.get('/new', (req, res) => {
    res.render('exercises/new')
});

//Delete


//Update



//Create


//Edit



//Show


//Exports
module.exports = router; 